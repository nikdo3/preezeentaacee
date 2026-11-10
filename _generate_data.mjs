import fs from 'fs';
import path from 'path';

const extractedDir = '_pptx_extracted';
const EMU_PER_PX = 9525; // 9144000 / 960 = 9525, 5143500 / 540 = 9525

const SCHEME_COLORS = {
  dk1: '#2A4D14',
  lt1: '#FFFFFF',
  dk2: '#D7141A',
  lt2: '#85AC7E',
  accent1: '#11457E',
  accent2: '#5DA271',
  accent3: '#898989',
  accent4: '#2E1E0F',
  accent5: '#D7141A',
  accent6: '#11457E',
  hlink: '#2A4D14',
  folHlink: '#D8973C',
  tx1: '#2A4D14',
  tx2: '#D7141A',
  bg1: '#FFFFFF',
  bg2: '#85AC7E'
};

function parseRels(relsPath) {
  const map = {};
  if (!fs.existsSync(relsPath)) return map;
  const xml = fs.readFileSync(relsPath, 'utf8');
  const regex = /<Relationship\b([^>]+)>/g;
  let m;
  while ((m = regex.exec(xml)) !== null) {
    const attrs = m[1];
    const id = attrs.match(/Id="([^"]+)"/)?.[1];
    const target = attrs.match(/Target="([^"]+)"/)?.[1];
    if (id && target) map[id] = target;
  }
  return map;
}

function resolveColor(xmlFragment, defaultColor = null) {
  if (!xmlFragment) return defaultColor;
  const srgb = xmlFragment.match(/<a:srgbClr\b[^>]*val="([0-9A-Fa-f]{6})"[^>]*>([\s\S]*?)<\/a:srgbClr>/) ||
               xmlFragment.match(/<a:srgbClr\b[^>]*val="([0-9A-Fa-f]{6})"\s*\/>/);
  if (srgb) {
    return applyColorModifiers('#' + srgb[1].toUpperCase(), srgb[2] || '');
  }
  const scheme = xmlFragment.match(/<a:schemeClr\b[^>]*val="([^"]+)"[^>]*>([\s\S]*?)<\/a:schemeClr>/) ||
                 xmlFragment.match(/<a:schemeClr\b[^>]*val="([^"]+)"\s*\/>/);
  if (scheme) {
    const base = SCHEME_COLORS[scheme[1]] || defaultColor || '#2E1E0F';
    return applyColorModifiers(base, scheme[2] || '');
  }
  return defaultColor;
}

function applyColorModifiers(hex, modXml) {
  if (!modXml) return hex;
  const alphaMatch = modXml.match(/<a:alpha\b[^>]*val="(\d+)"/);
  const lumModMatch = modXml.match(/<a:lumMod\b[^>]*val="(\d+)"/);
  const lumOffMatch = modXml.match(/<a:lumOff\b[^>]*val="(\d+)"/);

  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  if (lumModMatch || lumOffMatch) {
    const mod = lumModMatch ? parseInt(lumModMatch[1], 10) / 100000 : 1;
    const off = lumOffMatch ? parseInt(lumOffMatch[1], 10) / 100000 : 0;
    r = Math.min(255, Math.max(0, Math.round(r * mod + 255 * off)));
    g = Math.min(255, Math.max(0, Math.round(g * mod + 255 * off)));
    b = Math.min(255, Math.max(0, Math.round(b * mod + 255 * off)));
  }

  if (alphaMatch) {
    const a = +(parseInt(alphaMatch[1], 10) / 100000).toFixed(3);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
}

function extractFill(xmlFragment) {
  if (!xmlFragment) return null;
  // Remove <a:ln> before checking shape fill so border solidFill doesn't masquerade as shape fill
  const cleaned = xmlFragment.replace(/<a:ln\b[\s\S]*?<\/a:ln>/g, '').replace(/<a:ln\b[^>]*\/>/g, '');
  if (cleaned.includes('<a:noFill/>')) return { type: 'none' };

  const gradMatch = cleaned.match(/<a:gradFill\b[^>]*>([\s\S]*?)<\/a:gradFill>/);
  if (gradMatch) {
    const gradXml = gradMatch[1];
    const stops = [];
    const gsRegex = /<a:gs\b[^>]*pos="(\d+)"[^>]*>([\s\S]*?)<\/a:gs>/g;
    let gm;
    while ((gm = gsRegex.exec(gradXml)) !== null) {
      const pos = Math.round(parseInt(gm[1], 10) / 1000);
      const col = resolveColor(gm[2], '#2A4D14');
      stops.push({ pos, color: col });
    }
    stops.sort((a, b) => a.pos - b.pos);
    const isCircle = gradXml.includes('path="circle"');
    const linMatch = gradXml.match(/<a:lin\b[^>]*ang="(\d+)"/);
    const pptxDeg = linMatch ? parseInt(linMatch[1], 10) / 60000 : 0;
    const cssAngle = Math.round((pptxDeg + 90) % 360);
    return {
      type: isCircle ? 'radial' : 'linear',
      angle: cssAngle,
      stops
    };
  }

  const solidMatch = cleaned.match(/<a:solidFill>([\s\S]*?)<\/a:solidFill>/);
  if (solidMatch) {
    const color = resolveColor(solidMatch[1]);
    if (color) return { type: 'solid', color };
  }
  return null;
}

/**
 * Extracts background fill or image fill from <p:bg>
 * Restores <a:blipFill> background images (e.g., slide9 -> image12.png, slide18 -> image26.png, slide29 -> image39.jpg)
 */
function extractBg(bgXml, relsMap) {
  if (!bgXml) return null;
  const blipMatch = bgXml.match(/<a:blip\b[^>]*r:embed="([^"]+)"/);
  if (blipMatch) {
    const rId = blipMatch[1];
    const target = relsMap?.[rId];
    if (target) {
      const mediaFile = path.basename(target);
      return {
        type: 'image',
        src: `./assets/slides/${mediaFile}`,
        color: '#85AC7E'
      };
    }
  }
  return extractFill(bgXml);
}

function extractStroke(spPrXml) {
  if (!spPrXml) return null;
  const lnMatch = spPrXml.match(/<a:ln\b([^>]*)>([\s\S]*?)<\/a:ln>/);
  if (!lnMatch) return null;
  const lnAttrs = lnMatch[1];
  const lnBody = lnMatch[2];
  if (lnBody.includes('<a:noFill/>')) return null;
  const color = resolveColor(lnBody);
  if (!color) return null;
  const wEmu = parseInt(lnAttrs.match(/\bw="(\d+)"/)?.[1] || '9525', 10);
  const widthPx = Math.max(1, +(wEmu / EMU_PER_PX).toFixed(2));
  return { color, width: widthPx };
}

function parseXfrm(xmlFragment) {
  if (!xmlFragment) return null;
  const xfrmMatch = xmlFragment.match(/<a:xfrm\b([^>]*)>([\s\S]*?)<\/a:xfrm>/);
  if (!xfrmMatch) return null;
  const attrs = xfrmMatch[1];
  const body = xfrmMatch[2];
  const off = body.match(/<a:off\b[^>]*x="(-?\d+)"[^>]*y="(-?\d+)"/);
  const ext = body.match(/<a:ext\b[^>]*cx="(\d+)"[^>]*cy="(\d+)"/);
  if (!off || !ext) return null;

  const chOff = body.match(/<a:chOff\b[^>]*x="(-?\d+)"[^>]*y="(-?\d+)"/);
  const chExt = body.match(/<a:chExt\b[^>]*cx="(\d+)"[^>]*cy="(\d+)"/);

  const rotEmu = parseInt(attrs.match(/\brot="(-?\d+)"/)?.[1] || '0', 10);
  const rotDeg = +(rotEmu / 60000).toFixed(2);
  const flipH = attrs.includes('flipH="1"');
  const flipV = attrs.includes('flipV="1"');

  return {
    x: parseInt(off[1], 10),
    y: parseInt(off[2], 10),
    cx: parseInt(ext[1], 10),
    cy: parseInt(ext[2], 10),
    chX: chOff ? parseInt(chOff[1], 10) : 0,
    chY: chOff ? parseInt(chOff[2], 10) : 0,
    chCx: chExt ? parseInt(chExt[1], 10) : 0,
    chCy: chExt ? parseInt(chExt[2], 10) : 0,
    rot: rotDeg,
    flipH,
    flipV
  };
}

function parsePhKey(nvPrXml) {
  if (!nvPrXml) return null;
  const ph = nvPrXml.match(/<p:ph\b([^>]*)\/>/);
  if (!ph) return null;
  const attrs = ph[1];
  const type = attrs.match(/type="([^"]+)"/)?.[1] || 'body';
  const idx = attrs.match(/idx="([^"]+)"/)?.[1] || '0';
  if (type === 'title' || type === 'ctrTitle' || type === 'sldNum') return type;
  return `${type}:${idx}`;
}

function parseLstStyleLevels(lstStyleXml) {
  const levels = {};
  if (!lstStyleXml) return levels;
  for (let lvl = 1; lvl <= 9; lvl++) {
    const m = lstStyleXml.match(new RegExp(`<a:lvl${lvl}pPr\\b([^>]*)>([\\s\\S]*?)<\\/a:lvl${lvl}pPr>`));
    if (!m) continue;
    const pAttrs = m[1];
    const pBody = m[2];
    const defRPrMatch = pBody.match(/<a:defRPr\b([^>]*)>([\s\S]*?)<\/a:defRPr>/) ||
                        pBody.match(/<a:defRPr\b([^>]*)\/>/);
    const rAttrs = defRPrMatch ? defRPrMatch[1] : '';
    const rBody = defRPrMatch ? (defRPrMatch[2] || '') : '';

    const sz = parseInt(rAttrs.match(/\bsz="(\d+)"/)?.[1] || pBody.match(/<a:buSzPts\b[^>]*val="(\d+)"/)?.[1] || '0', 10);
    const b = rAttrs.includes('b="1"') ? true : (rAttrs.includes('b="0"') ? false : undefined);
    const i = rAttrs.includes('i="1"') ? true : (rAttrs.includes('i="0"') ? false : undefined);
    const color = resolveColor(rBody);
    const font = rBody.match(/<a:latin\b[^>]*typeface="([^"]+)"/)?.[1];
    const algn = pAttrs.match(/\balgn="([^"]+)"/)?.[1];
    const marL = parseInt(pAttrs.match(/\bmarL="(-?\d+)"/)?.[1] || '0', 10);
    const indent = parseInt(pAttrs.match(/\bindent="(-?\d+)"/)?.[1] || '0', 10);
    const buNone = pBody.includes('<a:buNone/>');
    const buChar = pBody.match(/<a:buChar\b[^>]*char="([^"]+)"/)?.[1];
    const buClr = resolveColor(pBody.match(/<a:buClr>([\s\S]*?)<\/a:buClr>/)?.[1] || '');

    levels[lvl - 1] = {
      sz: sz ? sz / 100 : undefined,
      b,
      i,
      color,
      font,
      algn,
      marL,
      indent,
      buNone,
      buChar,
      buClr
    };
  }
  return levels;
}

function extractPlaceholdersFromXml(xml) {
  const map = {};
  if (!xml) return map;
  const spRegex = /<p:sp\b[^>]*>([\s\S]*?)<\/p:sp>/g;
  let m;
  while ((m = spRegex.exec(xml)) !== null) {
    const spXml = m[1];
    const nvPr = spXml.match(/<p:nvPr>([\s\S]*?)<\/p:nvPr>/)?.[1];
    const phKey = parsePhKey(nvPr);
    if (!phKey) continue;

    const spPr = spXml.match(/<p:spPr>([\s\S]*?)<\/p:spPr>/)?.[1] || '';
    const txBody = spXml.match(/<p:txBody>([\s\S]*?)<\/p:txBody>/)?.[1] || '';
    const bodyPr = txBody.match(/<a:bodyPr\b([^>]*)/)?.[1] || '';
    const anchor = bodyPr.match(/\banchor="([^"]+)"/)?.[1];
    const lstStyle = txBody.match(/<a:lstStyle>([\s\S]*?)<\/a:lstStyle>/)?.[1] || '';

    map[phKey] = {
      xfrm: parseXfrm(spPr),
      anchor,
      levels: parseLstStyleLevels(lstStyle)
    };
  }
  return map;
}

function mergePlaceholderMaps(masterMap, layoutMap) {
  const merged = { ...masterMap };
  for (const [k, v] of Object.entries(layoutMap)) {
    const base = merged[k] || (k.startsWith('body:') ? merged['body:1'] : null) || {};
    const mergedLevels = { ...(base.levels || {}) };
    for (const [lvl, lStyle] of Object.entries(v.levels || {})) {
      const bLvl = mergedLevels[lvl] || {};
      mergedLevels[lvl] = {
        sz: lStyle.sz ?? bLvl.sz,
        b: lStyle.b ?? bLvl.b,
        i: lStyle.i ?? bLvl.i,
        color: lStyle.color ?? bLvl.color,
        font: lStyle.font ?? bLvl.font,
        algn: lStyle.algn ?? bLvl.algn,
        marL: lStyle.marL || bLvl.marL || 0,
        indent: lStyle.indent || bLvl.indent || 0,
        buNone: lStyle.buNone || bLvl.buNone || false,
        buChar: lStyle.buChar ?? bLvl.buChar,
        buClr: lStyle.buClr ?? bLvl.buClr
      };
    }
    merged[k] = {
      xfrm: v.xfrm || base.xfrm || null,
      anchor: v.anchor || base.anchor || 't',
      levels: mergedLevels
    };
  }
  return merged;
}

// Extract direct child elements (<p:sp>, <p:pic>, <p:grpSp>) inside a container XML (<p:spTree> or <p:grpSp>)
function extractDirectChildBlocks(containerXml) {
  const results = [];
  const tagRegex = /<\/?(p:sp|p:pic|p:grpSp)\b[^>]*>/g;
  let depth = 0;
  let currentTag = null;
  let startIdx = -1;
  let m;

  while ((m = tagRegex.exec(containerXml)) !== null) {
    const fullMatch = m[0];
    const tagName = m[1];
    const isClose = fullMatch.startsWith('</');
    const isSelfClose = fullMatch.endsWith('/>');

    if (isSelfClose) continue;

    if (!isClose) {
      if (depth === 0) {
        currentTag = tagName;
        startIdx = m.index;
      }
      if (tagName === currentTag) {
        depth++;
      }
    } else {
      if (tagName === currentTag) {
        depth--;
        if (depth === 0 && startIdx !== -1) {
          const blockXml = containerXml.slice(startIdx, m.index + fullMatch.length);
          results.push({ type: currentTag, xml: blockXml });
          currentTag = null;
          startIdx = -1;
        }
      }
    }
  }
  return results;
}

function parseCustGeomPaths(spPrXml) {
  const custMatch = spPrXml.match(/<a:custGeom>([\s\S]*?)<\/a:custGeom>/);
  if (!custMatch) return null;
  const paths = [];
  const pathRegex = /<a:path\b([^>]*)>([\s\S]*?)<\/a:path>/g;
  let pm;
  while ((pm = pathRegex.exec(custMatch[1])) !== null) {
    const pAttrs = pm[1];
    const pBody = pm[2];
    const w = parseInt(pAttrs.match(/\bw="(\d+)"/)?.[1] || '1000', 10);
    const h = parseInt(pAttrs.match(/\bh="(\d+)"/)?.[1] || '1000', 10);
    const fillMode = pAttrs.match(/\bfill="([^"]+)"/)?.[1] || 'norm';

    const cmdRegex = /<(a:moveTo|a:lnTo|a:cubicBezTo|a:close)\b[^>]*>([\s\S]*?)<\/\1>|<(a:close)\s*\/>/g;
    let cm;
    let d = '';
    while ((cm = cmdRegex.exec(pBody)) !== null) {
      const cmd = cm[1] || cm[3];
      const inner = cm[2] || '';
      if (cmd === 'a:close') {
        d += 'Z ';
      } else if (cmd === 'a:moveTo' || cmd === 'a:lnTo') {
        const pt = inner.match(/<a:pt\b[^>]*x="(-?\d+)"[^>]*y="(-?\d+)"/);
        if (pt) {
          d += `${cmd === 'a:moveTo' ? 'M' : 'L'}${pt[1]} ${pt[2]} `;
        }
      } else if (cmd === 'a:cubicBezTo') {
        const pts = [...inner.matchAll(/<a:pt\b[^>]*x="(-?\d+)"[^>]*y="(-?\d+)"/g)];
        if (pts.length === 3) {
          d += `C${pts[0][1]} ${pts[0][2]} ${pts[1][1]} ${pts[1][2]} ${pts[2][1]} ${pts[2][2]} `;
        }
      }
    }
    if (d.trim()) {
      paths.push({ w, h, d: d.trim(), noFill: fillMode === 'none' });
    }
  }
  return paths.length > 0 ? paths : null;
}

function mapChildXfrm(childXfrm, groupTransform) {
  if (!childXfrm || !groupTransform) return childXfrm;
  const { x: gx, y: gy, cx: gcx, cy: gcy, chX, chY, chCx, chCy } = groupTransform;
  if (!chCx || !chCy) return childXfrm;
  const scaleX = gcx / chCx;
  const scaleY = gcy / chCy;
  return {
    ...childXfrm,
    x: gx + (childXfrm.x - chX) * scaleX,
    y: gy + (childXfrm.y - chY) * scaleY,
    cx: childXfrm.cx * scaleX,
    cy: childXfrm.cy * scaleY
  };
}

function toStageBox(xfrm) {
  return {
    x: +(xfrm.x / EMU_PER_PX).toFixed(2),
    y: +(xfrm.y / EMU_PER_PX).toFixed(2),
    w: +(xfrm.cx / EMU_PER_PX).toFixed(2),
    h: +(xfrm.cy / EMU_PER_PX).toFixed(2),
    rot: xfrm.rot || 0,
    flipH: Boolean(xfrm.flipH),
    flipV: Boolean(xfrm.flipV)
  };
}

function parsePicElement(picXml, relsMap, groupTransform = null) {
  const spPr = picXml.match(/<p:spPr>([\s\S]*?)<\/p:spPr>/)?.[1] || '';
  let xfrm = parseXfrm(spPr);
  if (!xfrm) return null;
  if (groupTransform) xfrm = mapChildXfrm(xfrm, groupTransform);

  const blip = picXml.match(/<a:blip\b[^>]*r:embed="([^"]+)"/);
  if (!blip) return null;
  const rId = blip[1];
  const target = relsMap[rId];
  if (!target) return null;
  const mediaFile = path.basename(target);
  const src = `./assets/slides/${mediaFile}`;

  const srcRectMatch = picXml.match(/<a:srcRect\b([^>]*)\/>/);
  let crop = null;
  if (srcRectMatch) {
    const attrs = srcRectMatch[1];
    const l = parseInt(attrs.match(/\bl="(-?\d+)"/)?.[1] || '0', 10) / 100000;
    const t = parseInt(attrs.match(/\bt="(-?\d+)"/)?.[1] || '0', 10) / 100000;
    const r = parseInt(attrs.match(/\br="(-?\d+)"/)?.[1] || '0', 10) / 100000;
    const b = parseInt(attrs.match(/\bb="(-?\d+)"/)?.[1] || '0', 10) / 100000;
    if (l !== 0 || t !== 0 || r !== 0 || b !== 0) {
      crop = { l: +l.toFixed(4), t: +t.toFixed(4), r: +r.toFixed(4), b: +b.toFixed(4) };
    }
  }

  return {
    kind: 'pic',
    src,
    box: toStageBox(xfrm),
    crop
  };
}

function parseSpElement(spXml, placeholders, slideNum, isLayoutLayer = false, groupTransform = null, relsMap = {}) {
  const nvPr = spXml.match(/<p:nvPr>([\s\S]*?)<\/p:nvPr>/)?.[1] || '';
  const phKey = parsePhKey(nvPr);

  // Skip layout placeholders on the background layout layer
  if (isLayoutLayer && phKey) return null;

  const phDef = phKey
    ? (placeholders[phKey] || (phKey.startsWith('body:') ? placeholders['body:1'] : null) || null)
    : null;

  const spPr = spXml.match(/<p:spPr>([\s\S]*?)<\/p:spPr>/)?.[1] || '';
  let xfrm = parseXfrm(spPr) || (phDef ? phDef.xfrm : null);
  if (!xfrm) return null;
  if (groupTransform) xfrm = mapChildXfrm(xfrm, groupTransform);

  const prst = spPr.match(/<a:prstGeom\b[^>]*prst="([^"]+)"/)?.[1] || 'rect';
  const fill = extractFill(spPr);
  const stroke = extractStroke(spPr);
  const custPaths = parseCustGeomPaths(spPr);

  const txBody = spXml.match(/<p:txBody>([\s\S]*?)<\/p:txBody>/)?.[1] || '';
  const bodyPr = txBody.match(/<a:bodyPr\b([^>]*)/)?.[1] || '';
  const anchor = bodyPr.match(/\banchor="([^"]+)"/)?.[1] || (phDef ? phDef.anchor : 't') || 't';

  const shapeLstStyle = parseLstStyleLevels(txBody.match(/<a:lstStyle>([\s\S]*?)<\/a:lstStyle>/)?.[1] || '');

  const paragraphs = [];
  const pRegex = /<a:p\b[^>]*>([\s\S]*?)<\/a:p>/g;
  let pm;
  while ((pm = pRegex.exec(txBody)) !== null) {
    const pXml = pm[1];
    const pPrMatch = pXml.match(/<a:pPr\b([^>]*)>([\s\S]*?)<\/a:pPr>/) || pXml.match(/<a:pPr\b([^>]*)\/>/);
    const pAttrs = pPrMatch ? pPrMatch[1] : '';
    const pBody = pPrMatch ? (pPrMatch[2] || '') : '';

    const lvl = parseInt(pAttrs.match(/\blvl="(\d+)"/)?.[1] || '0', 10);
    const inheritedLvl = {
      ...(phDef?.levels?.[lvl] || phDef?.levels?.[0] || {}),
      ...(shapeLstStyle[lvl] || {})
    };

    const algn = pAttrs.match(/\balgn="([^"]+)"/)?.[1] || inheritedLvl.algn || 'l';
    const spcPct = parseInt(pBody.match(/<a:spcPct\b[^>]*val="(\d+)"/)?.[1] || '112000', 10) / 100000;
    const spcBefPts = parseInt(pBody.match(/<a:spcBef>[\s\S]*?val="(\d+)"/)?.[1] || '0', 10) / 100;
    const spcAftPts = parseInt(pBody.match(/<a:spcAft>[\s\S]*?val="(\d+)"/)?.[1] || '0', 10) / 100;
    const pBuSzPts = parseInt(pBody.match(/<a:buSzPts\b[^>]*val="(\d+)"/)?.[1] || '0', 10) / 100;

    const hasBuNone = pBody.includes('<a:buNone/>') || (inheritedLvl.buNone && !pBody.includes('<a:buChar'));
    const buChar = hasBuNone ? null : (pBody.match(/<a:buChar\b[^>]*char="([^"]+)"/)?.[1] || inheritedLvl.buChar || null);
    const buColor = resolveColor(pBody.match(/<a:buClr>([\s\S]*?)<\/a:buClr>/)?.[1] || '', inheritedLvl.buClr || inheritedLvl.color || '#2A4D14');

    const runs = [];
    const tokenRegex = /<a:r>([\s\S]*?)<\/a:r>|<a:fld\b[^>]*>([\s\S]*?)<\/a:fld>|<a:br\s*\/>/g;
    let rm;
    while ((rm = tokenRegex.exec(pXml)) !== null) {
      if (rm[0].startsWith('<a:br')) {
        runs.push({ br: true });
        continue;
      }
      const rXml = rm[1] || rm[2] || '';
      const rPrMatch = rXml.match(/<a:rPr\b([^>]*)>([\s\S]*?)<\/a:rPr>/) || rXml.match(/<a:rPr\b([^>]*)\/>/);
      const rAttrs = rPrMatch ? rPrMatch[1] : '';
      const rBody = rPrMatch ? (rPrMatch[2] || '') : '';

      let text = rXml.match(/<a:t>([\s\S]*?)<\/a:t>/)?.[1] || '';
      if (!text) continue;
      text = text
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');

      if (text === '‹#›' || phKey === 'sldNum') {
        text = String(slideNum);
      }

      const rSz = parseInt(rAttrs.match(/\bsz="(\d+)"/)?.[1] || '0', 10) / 100;
      const fontSizePt = rSz || pBuSzPts || inheritedLvl.sz || (phKey === 'title' ? 32 : phKey === 'ctrTitle' ? 48 : 15);
      const bold = rAttrs.includes('b="1"') ? true : (rAttrs.includes('b="0"') ? false : Boolean(inheritedLvl.b));
      const italic = rAttrs.includes('i="1"') ? true : (rAttrs.includes('i="0"') ? false : Boolean(inheritedLvl.i));
      const underline = rAttrs.includes('u="sng"');
      const color = resolveColor(rBody, inheritedLvl.color || '#1B360E');
      const font = rBody.match(/<a:latin\b[^>]*typeface="([^"]+)"/)?.[1] || inheritedLvl.font || (phKey === 'title' || phKey === 'ctrTitle' ? 'Red Hat Display' : 'Red Hat Text');

      // Hyperlink support
      const hlinkMatch = rPrMatch ? (rAttrs + rBody).match(/<a:hlinkClick\b[^>]*r:id="([^"]+)"/) : null;
      const hlinkId = hlinkMatch ? hlinkMatch[1] : null;
      const hlinkUrl = hlinkId && relsMap ? relsMap[hlinkId] : null;

      runs.push({
        text,
        sz: fontSizePt,
        b: bold,
        i: italic,
        u: underline,
        color,
        font,
        ...(hlinkUrl ? { hlink: hlinkUrl } : {})
      });
    }

    if (runs.length > 0) {
      paragraphs.push({
        algn,
        lineHeight: +Math.max(1.0, Math.min(1.35, spcPct)).toFixed(2),
        spcBefPx: +(spcBefPts * (4 / 3)).toFixed(1),
        spcAftPx: +(spcAftPts * (4 / 3)).toFixed(1),
        bullet: buChar,
        bulletColor: buColor,
        runs
      });
    }
  }

  const hasVisualShape = (fill && fill.type !== 'none') || stroke || custPaths;
  if (!hasVisualShape && paragraphs.length === 0) return null;

  return {
    kind: 'sp',
    phKey: phKey || null,
    box: toStageBox(xfrm),
    prst,
    fill,
    stroke,
    custPaths,
    anchor,
    paragraphs
  };
}

function extractElementsFromTree(containerXml, relsMap, placeholders, slideNum, isLayoutLayer = false, parentGroupTransform = null) {
  const blocks = extractDirectChildBlocks(containerXml);
  const elements = [];

  for (const block of blocks) {
    if (block.type === 'p:pic') {
      const pic = parsePicElement(block.xml, relsMap, parentGroupTransform);
      if (pic) elements.push(pic);
    } else if (block.type === 'p:sp') {
      const sp = parseSpElement(block.xml, placeholders, slideNum, isLayoutLayer, parentGroupTransform, relsMap);
      if (sp) elements.push(sp);
    } else if (block.type === 'p:grpSp') {
      const grpPr = block.xml.match(/<p:grpSpPr>([\s\S]*?)<\/p:grpSpPr>/)?.[1] || '';
      let grpXfrm = parseXfrm(grpPr);
      if (grpXfrm && parentGroupTransform) {
        const mapped = mapChildXfrm(grpXfrm, parentGroupTransform);
        grpXfrm = { ...grpXfrm, x: mapped.x, y: mapped.y, cx: mapped.cx, cy: mapped.cy };
      }
      const innerStart = block.xml.indexOf('</p:grpSpPr>');
      const innerEnd = block.xml.lastIndexOf('</p:grpSp>');
      if (innerStart !== -1 && innerEnd !== -1 && grpXfrm) {
        const innerXml = block.xml.slice(innerStart + '</p:grpSpPr>'.length, innerEnd);
        const childEls = extractElementsFromTree(innerXml, relsMap, placeholders, slideNum, isLayoutLayer, grpXfrm);
        elements.push(...childEls);
      }
    }
  }

  return elements;
}

/**
 * Extracts speaker notes from a notesSlide XML document.
 */
function extractNotesText(notesXml) {
  if (!notesXml) return '';
  const spRegex = /<p:sp\b[^>]*>([\s\S]*?)<\/p:sp>/g;
  let m;
  const noteLines = [];
  while ((m = spRegex.exec(notesXml)) !== null) {
    const spXml = m[1];
    const nvPr = spXml.match(/<p:nvPr>([\s\S]*?)<\/p:nvPr>/)?.[1] || '';
    const ph = nvPr.match(/<p:ph\b([^>]*)\/>/);
    const phType = ph ? ph[1].match(/type="([^"]+)"/)?.[1] || 'body' : null;
    
    // Ignore slide number or slide thumbnail placeholders
    if (phType === 'sldNum' || phType === 'sldImg') continue;

    const pRegex = /<a:p\b[^>]*>([\s\S]*?)<\/a:p>/g;
    let pm;
    while ((pm = pRegex.exec(spXml)) !== null) {
      const pXml = pm[1];
      const tMatches = [...pXml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)].map(tm => tm[1]);
      const line = tMatches.join('').trim()
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
      if (line && !line.match(/^\d+$/)) {
        noteLines.push(line);
      }
    }
  }
  return noteLines.join('\n');
}

// Natural placement of cropped Lucie photos grounded at bottom of frame (y + h = 512, zero gap below)
// Keyed by originalSlideNumber (1..51). Extra photos on slides 4, 16, 18, 28, 38 are removed per user request.
const extraSlidePhotos = {
  9:  { src: './assets/team/lucie-2.png', box: { x: 665, y: 192, w: 255, h: 320, rot: 0, flipH: false, flipV: false }, grounded: true },
  23: { src: './assets/team/lucie-8.png', box: { x: 695, y: 222, w: 230, h: 290, rot: 0, flipH: false, flipV: false }, grounded: true },
  43: { src: './assets/team/lucie-4.png', box: { x: 705, y: 202, w: 230, h: 310, rot: 0, flipH: false, flipV: false }, grounded: true }
};

function compilePresentation() {
  const presXml = fs.readFileSync(path.join(extractedDir, 'ppt/presentation.xml'), 'utf8');
  const presRels = parseRels(path.join(extractedDir, 'ppt/_rels/presentation.xml.rels'));

  const slideRelIds = [...presXml.matchAll(/<p:sldId\b[^>]*r:id="([^"]+)"/g)].map(m => m[1]);
  
  // Filter out original slide 44 ("Ústí") -> exactly 50 slides total
  const allSlideEntries = slideRelIds.map((rId, idx) => ({
    originalSlideNumber: idx + 1,
    slideFile: path.basename(presRels[rId])
  })).filter(entry => entry.slideFile && entry.slideFile !== 'slide44.xml');

  const slidesData = [];

  allSlideEntries.forEach((entry, idx) => {
    const slideNum = idx + 1;
    const origNum = entry.originalSlideNumber;
    const slideFile = entry.slideFile;

    const slidePath = path.join(extractedDir, 'ppt/slides', slideFile);
    const slideRelsPath = path.join(extractedDir, 'ppt/slides/_rels', `${slideFile}.rels`);
    const slideXml = fs.readFileSync(slidePath, 'utf8');
    const slideRels = parseRels(slideRelsPath);

    const layoutTarget = Object.values(slideRels).find(t => t.includes('slideLayouts/'));
    const layoutFile = layoutTarget ? path.basename(layoutTarget) : 'slideLayout1.xml';
    const layoutPath = path.join(extractedDir, 'ppt/slideLayouts', layoutFile);
    const layoutRelsPath = path.join(extractedDir, 'ppt/slideLayouts/_rels', `${layoutFile}.rels`);
    const layoutXml = fs.existsSync(layoutPath) ? fs.readFileSync(layoutPath, 'utf8') : '';
    const layoutRels = parseRels(layoutRelsPath);

    const masterTarget = Object.values(layoutRels).find(t => t.includes('slideMasters/'));
    const masterFile = masterTarget ? path.basename(masterTarget) : 'slideMaster1.xml';
    const masterPath = path.join(extractedDir, 'ppt/slideMasters', masterFile);
    const masterXml = fs.existsSync(masterPath) ? fs.readFileSync(masterPath, 'utf8') : '';
    const masterRels = parseRels(path.join(extractedDir, 'ppt/slideMasters/_rels', `${masterFile}.rels`));

    // 1. Resolve slide background (slide -> layout -> master)
    // Supports <a:blipFill> for slides 9, 18, 29 (image12.png, image26.png, image39.jpg)
    const slideBgXml = slideXml.match(/<p:bg>([\s\S]*?)<\/p:bg>/)?.[1];
    const layoutBgXml = layoutXml.match(/<p:bg>([\s\S]*?)<\/p:bg>/)?.[1];
    const masterBgXml = masterXml.match(/<p:bg>([\s\S]*?)<\/p:bg>/)?.[1];
    let bg = extractBg(slideBgXml, slideRels) ||
             extractBg(layoutBgXml, layoutRels) ||
             extractBg(masterBgXml, masterRels) ||
             { type: 'solid', color: '#85AC7E' };

    // 2. Build placeholder inheritance map (master -> layout)
    const masterPh = extractPlaceholdersFromXml(masterXml);
    const layoutPh = extractPlaceholdersFromXml(layoutXml);
    const placeholders = mergePlaceholderMaps(masterPh, layoutPh);

    // 3. Extract non-placeholder background shapes/images from layout
    const layoutTreeXml = layoutXml.match(/<p:spTree>([\s\S]*?)<\/p:spTree>/)?.[1] || '';
    const layoutElements = extractElementsFromTree(layoutTreeXml, layoutRels, placeholders, slideNum, true);

    // 4. Extract foreground elements from slide
    const slideTreeXml = slideXml.match(/<p:spTree>([\s\S]*?)<\/p:spTree>/)?.[1] || '';
    let slideElements = extractElementsFromTree(slideTreeXml, slideRels, placeholders, slideNum, false);

    // 5. Extract Speaker Notes for this slide
    const noteTarget = Object.values(slideRels).find(t => t.includes('notesSlide'));
    let notes = '';
    if (noteTarget) {
      const noteFile = path.basename(noteTarget);
      const noteXmlPath = path.join(extractedDir, 'ppt/notesSlides', noteFile);
      if (fs.existsSync(noteXmlPath)) {
        notes = extractNotesText(fs.readFileSync(noteXmlPath, 'utf8'));
      }
    }

    // 6. Natural extra photo placement (Lucie cutouts 1..8)
    if (extraSlidePhotos[origNum]) {
      slideElements.push({
        kind: 'pic',
        src: extraSlidePhotos[origNum].src,
        box: extraSlidePhotos[origNum].box,
        crop: null,
        extraPhoto: true
      });
    }

    // Collect initial plain text summary
    const texts = [];
    for (const el of slideElements) {
      if (el.kind === 'sp' && el.paragraphs) {
        for (const p of el.paragraphs) {
          const line = p.runs.map(r => r.text || '').join('').trim();
          if (line && line !== String(origNum) && line !== String(slideNum)) texts.push(line);
        }
      }
    }

    let slideTitle = texts[0] || `Slide ${slideNum}`;
    let customLayout = null;

    // =========================================================================
    // SLIDE-SPECIFIC CUSTOMIZATIONS & REFINEMENTS (Keyed by origNum)
    // =========================================================================

    // Slide 1: Change "JET-Česko" to "JET-PID", remove 6 vector globe shapes, add Prague outline SVG at (100, 137), keep helmet guy
    if (origNum === 1) {
      slideTitle = 'JET-PID Prezentace';
      // Remove all 6 custom vector globe shapes completely (stroke: '#FFFFFF', strokeWidth: 8 at x: 100, y: 137)
      slideElements = slideElements.filter(e => !(e.kind === 'sp' && (e.custPaths || (e.stroke?.color === '#FFFFFF' && e.stroke?.width === 8))));
      // Title: change "JET-Česko" to "JET-PID"
      for (const el of slideElements) {
        if (el.kind === 'sp' && (el.phKey === 'ctrTitle' || el.phKey === 'title')) {
          for (const p of (el.paragraphs || [])) {
            for (const r of (p.runs || [])) {
              if (r.text) r.text = r.text.replace(/JET-Česko/g, 'JET-PID');
            }
          }
        }
      }
      // Add Prague outline SVG at (x: 100, y: 137) inside the blue arch
      slideElements.push({
        kind: 'prague-svg',
        box: { x: 100, y: 137, w: 265, h: 265, rot: 0, flipH: false, flipV: false }
      });
      // Helmet guy (image3.png) is untouched on the right
    }

    // Slide 2: Body text at x: 112, y: 144, w: 756, sz: 14, spcBefPx: 4, dark #1B360E
    if (origNum === 2) {
      bg = {
        type: 'radial',
        angle: 90,
        stops: [
          { pos: 0, color: '#FFFFFF' },
          { pos: 55, color: '#DCEDD9' },
          { pos: 100, color: '#97BA90' }
        ],
        breathe: true
      };
      slideTitle = 'Základní instrukce (hrajeme variantu M)';
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            if (r.text?.includes('Základní instrukce')) {
              r.sz = 18;
              r.color = '#1B360E';
            }
            if (r.text?.includes('variantu')) {
              r.text = r.text.replace(/variantu L/g, 'variantu M');
              r.sz = 13;
              r.color = '#1B360E';
            }
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 112, y: 144, w: 756, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.spcBefPx = 4;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
    }

    // Slide 5: Body text width w: 430, sz: 14, dark #1B360E, cleanly on left away from photo
    if (origNum === 5) {
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 430, h: 350, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
    }

    // Slide 8: Left and right text columns dark #1B360E directly on background, no overlapping on center photo
    if (origNum === 8) {
      const spLeft = slideElements.find(e => e.kind === 'sp' && e.phKey === 'body:1');
      if (spLeft) {
        spLeft.box = { x: 45, y: 135, w: 295, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (spLeft.paragraphs || [])) {
          p.spcBefPx = 6;
          p.lineHeight = 1.15;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
      const picPerson = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image14.png'));
      if (picPerson) {
        picPerson.box = { x: 350, y: 110, w: 260, h: 430, rot: 0, flipH: false, flipV: false };
        picPerson.grounded = true;
      }
      const spRight = slideElements.find(e => e.kind === 'sp' && e.phKey === 'body:2');
      if (spRight) {
        spRight.box = { x: 620, y: 135, w: 295, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (spRight.paragraphs || [])) {
          p.spcBefPx = 6;
          p.lineHeight = 1.15;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
    }

    // Slide 9: Solid dark green background #2A4D14 behind image12.png
    if (origNum === 9) {
      bg = {
        type: 'image',
        src: './assets/slides/image12.png',
        color: '#2A4D14'
      };
      const lucie = slideElements.find(e => e.kind === 'pic' && e.src?.includes('lucie-2'));
      if (lucie) {
        lucie.grounded = true;
      }
    }

    // Slide 10: Shift body text away from left photo: x: 245, w: 690, dark #1B360E
    if (origNum === 10) {
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 245, y: 120, w: 690, h: 376, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 15.5;
          }
        }
      }
    }

    // Slide 11: 6 Original question categories from slide11.xml with sequential .fragment animations
    if (origNum === 11) {
      const categoriesOrder = [
        { key: 'Matching', idx: 0 },
        { key: 'Mesuring', idx: 1 },
        { key: 'Teploměr', idx: 2 },
        { key: 'Radar', idx: 3 },
        { key: 'Chapadla', idx: 4 },
        { key: 'Fotky', idx: 5 }
      ];
      for (const cat of categoriesOrder) {
        const sp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'sldNum' && e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes(cat.key))));
        if (sp) {
          sp.fragment = true;
          sp.fragmentIndex = cat.idx;
          for (const p of (sp.paragraphs || [])) {
            for (const r of (p.runs || [])) {
              r.color = '#1B360E';
            }
          }
        }
      }
    }

    // Slide 12 (END-GAME): Title "END-GAME", dark charcoal text #201410, Lucie grounded at bottom frame, NO duplicate texts
    if (origNum === 12) {
      slideTitle = 'END-GAME';
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#201410';
            r.font = 'Red Hat Display';
            r.b = true;
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 110, y: 130, w: 570, h: 370, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.spcBefPx = 6;
          p.lineHeight = 1.15;
          for (const r of (p.runs || [])) {
            r.color = '#201410';
            r.sz = 13.5;
          }
        }
      }
      const luciePic = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image10.png'));
      if (luciePic) {
        luciePic.box = { x: 690, y: 180, w: 260, h: 360, rot: 0, flipH: false, flipV: false };
        luciePic.grounded = true;
      }
    }

    // Slide 16: Text at x: 355, w: 520, dark #1B360E, no white box. Extra photo removed.
    if (origNum === 16) {
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 355, y: 130, w: 520, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 15;
          }
        }
      }
    }

    // Slide 18: Solid dark green background #2A4D14, white title at x: 118, y: 220
    if (origNum === 18) {
      bg = { type: 'solid', color: '#2A4D14' };
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Jak si zapisovat')))));
      if (titleSp) {
        titleSp.phKey = 'title';
        titleSp.box = { x: 118, y: 220, w: 760, h: 95, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.sz = 28;
            r.b = true;
            r.font = 'Red Hat Display';
            r.color = '#FFFFFF';
          }
        }
      }
    }

    // Slides 19, 20, 21, 22: Mark person cutouts with class pptx-pic-grounded
    if ([19, 20, 21, 22].includes(origNum)) {
      for (const el of slideElements) {
        if (el.kind === 'pic') {
          el.grounded = true;
        }
      }
    }

    // Slide 20: Mesuring otázky - fix random white text, structure categories with proper Czech commas
    if (origNum === 20) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Přepravní') || r.text?.includes('Hranice')))));
      if (bodySp) {
        bodySp.box = { x: 110, y: 130, w: 600, h: 380, rot: 0, flipH: false, flipV: false };
        bodySp.paragraphs = [
          {
            algn: 'l',
            lineHeight: 1.25,
            spcBefPx: 0,
            spcAftPx: 6,
            bullet: null,
            runs: [
              { text: 'Přepravní: ', sz: 14.5, b: true, i: false, u: false, color: '#1B360E', font: 'Red Hat Display' },
              { text: 'Komerční letiště, Trasy Via Czechia, Vlakové stanice', sz: 14, b: false, i: false, u: false, color: '#1B360E', font: 'Red Hat Text' }
            ]
          },
          {
            algn: 'l',
            lineHeight: 1.25,
            spcBefPx: 8,
            spcAftPx: 6,
            bullet: null,
            runs: [
              { text: 'Hranice: ', sz: 14.5, b: true, i: false, u: false, color: '#1B360E', font: 'Red Hat Display' },
              { text: 'Státní hranice, Hranice historického dělení, Kraje, Okresy', sz: 14, b: false, i: false, u: false, color: '#1B360E', font: 'Red Hat Text' }
            ]
          },
          {
            algn: 'l',
            lineHeight: 1.25,
            spcBefPx: 8,
            spcAftPx: 6,
            bullet: null,
            runs: [
              { text: 'Přírodní: ', sz: 14.5, b: true, i: false, u: false, color: '#1B360E', font: 'Red Hat Display' },
              { text: 'Nadmořská výška, Vodní plochy, Pobřeží, Hory, Parky', sz: 14, b: false, i: false, u: false, color: '#1B360E', font: 'Red Hat Text' }
            ]
          },
          {
            algn: 'l',
            lineHeight: 1.25,
            spcBefPx: 8,
            spcAftPx: 6,
            bullet: null,
            runs: [
              { text: 'Zájmová místa: ', sz: 14.5, b: true, i: false, u: false, color: '#1B360E', font: 'Red Hat Display' },
              { text: 'Zábavní parky, Zoo, Akvária, Golfová hřiště, Muzea, Kina', sz: 14, b: false, i: false, u: false, color: '#1B360E', font: 'Red Hat Text' }
            ]
          },
          {
            algn: 'l',
            lineHeight: 1.25,
            spcBefPx: 8,
            spcAftPx: 6,
            bullet: null,
            runs: [
              { text: 'Služby: ', sz: 14.5, b: true, i: false, u: false, color: '#1B360E', font: 'Red Hat Display' },
              { text: 'Nemocnice, Knihovny, Ambasády', sz: 14, b: false, i: false, u: false, color: '#1B360E', font: 'Red Hat Text' }
            ]
          }
        ];
      }
    }

    // Slide 30: Power-upy - fix title element matching, enlarge image33.jpg on fragment advance clean and large
    if (origNum === 30) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Karty můžete') || r.text?.includes('balíček')))));
      if (bodySp) {
        bodySp.box = { x: 110, y: 130, w: 540, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 15;
          }
        }
      }
      const pic33 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image33.jpg'));
      if (pic33) {
        pic33.fragmentPopup = true;
        pic33.fragmentIndex = 0;
      }
    }

    // Slide 31: Cursy / Kletby - fix title element matching, enlarge image35.jpg on fragment advance clean and large
    if (origNum === 31) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Je jich spousta') || r.text?.includes('casting cost')))));
      if (bodySp) {
        bodySp.box = { x: 110, y: 130, w: 540, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 15.5;
          }
        }
      }
      const pic35 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image35.jpg'));
      if (pic35) {
        pic35.fragmentPopup = true;
        pic35.fragmentIndex = 0;
      }
    }

    // Slide 32: Text at bottom-left positioned cleanly, dark #1B360E, no white box
    if (origNum === 32) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Nejedná se o fyzicky') || r.text?.includes('střecha')))));
      if (bodySp) {
        bodySp.box = { x: 160, y: 140, w: 390, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
    }

    // Slide 33: Centered text alongside photo. Detail photo image43.jpg appears on advance as popup/zoom fragment
    if (origNum === 33) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Největší z vaší')))));
      if (bodySp) {
        bodySp.box = { x: 60, y: 170, w: 320, h: 268, rot: 0, flipH: false, flipV: false };
        bodySp.anchor = 'ctr';
        for (const p of (bodySp.paragraphs || [])) {
          p.algn = 'l';
          p.spcBefPx = 8;
          p.lineHeight = 1.25;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 15;
          }
        }
      }
      const pic43 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image43.jpg'));
      if (pic43) {
        pic43.fragmentZoom = true;
        pic43.fragmentIndex = 1;
        pic43.zoomBadge = '3× PŘIBLÍŽENÍ';
      }
    }

    // Slide 34: Restore title at y: 78. Road outline matches actual road curve in image41.jpg
    if (origNum === 34) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Cesta/ulice')))));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 480, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14.5;
          }
        }
      }
      const pic41 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image41.jpg'));
      if (pic41) {
        pic41.fragmentRoadOutline = 'nearest';
        pic41.fragmentIndex = 1;
      }
    }

    // Slide 35: Restore title "Fotky – 2 budovy", fix body text overflow, both base uncropped photo AND 4-floor crop zoom side-by-side
    if (origNum === 35) {
      slideTitle = 'Fotky – 2 budovy';
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.text = 'Fotky – 2 budovy';
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Spodek a až') || r.text?.includes('patra')))));
      if (bodySp) {
        bodySp.box = { x: 120, y: 140, w: 280, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            if (r.text) {
              r.text = r.text.replace(/Spodek a až 4 patra/g, 'Spodek a 4 patra').replace(/všechny parta/g, 'všechna patra');
            }
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
      const basePic = slideElements.find(e => e.kind === 'pic' && !e.crop && e.src?.includes('image53.jpg'));
      if (basePic) {
        basePic.fragmentZoom = false;
        basePic.fragment = false;
        basePic.box = { x: 420, y: 140, w: 240, h: 320, rot: 0, flipH: false, flipV: false };
      }
      const croppedPic = slideElements.find(e => e.kind === 'pic' && e.crop && e.src?.includes('image53.jpg'));
      if (croppedPic) {
        croppedPic.fragmentZoom = true;
        croppedPic.fragmentIndex = 1;
        croppedPic.zoomBadge = '4 PATRA';
        croppedPic.box = { x: 680, y: 140, w: 240, h: 320, rot: 0, flipH: false, flipV: false };
      }
    }

    // Slide 39: Title at original position, base photo + 2m x 2m detail photo overlays on advance
    if (origNum === 39) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('kostel') || r.text?.includes('vyznání')))));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 395, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
      const pic59 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image59.jpg'));
      if (pic59) {
        pic59.fragmentZoom = true;
        pic59.fragmentIndex = 1;
        pic59.zoomBadge = 'DETAIL 2 × 2 m';
      }
    }

    // Slide 40: Restore title, text dark green #1B360E
    if (origNum === 40) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('nádraž') || r.text?.includes('sekci')))));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 420, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14.5;
          }
        }
      }
    }

    // Slide 41: Restore title, separate person on left from clear body text, road outline follows full circuit
    if (origNum === 41) {
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const pic60 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image60.png'));
      if (pic60) {
        pic60.box = { x: 25, y: 160, w: 195, h: 380, rot: 0, flipH: false, flipV: false };
        pic60.grounded = true;
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey?.startsWith('body') || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Cesta/ulice') || r.text?.includes('1 km')))));
      if (bodySp) {
        bodySp.box = { x: 235, y: 140, w: 265, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.lineHeight = 1.22;
          p.spcBefPx = 6;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14;
          }
        }
      }
      const pic57 = slideElements.find(e => e.kind === 'pic' && e.src?.includes('image57.jpg'));
      if (pic57) {
        pic57.box = { x: 515, y: 140, w: 395, h: 338, rot: 0, flipH: false, flipV: false };
        pic57.fragmentRoadOutline = '1km';
        pic57.fragmentIndex = 1;
      }
    }

    // Slide 42: Herní doba - clean dark #1B360E text
    if (origNum === 42) {
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 465, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 15;
          }
        }
      }
    }

    // Slide 43: Cestování - scale down font size and paragraph spacing so all text fits cleanly without overflowing
    if (origNum === 43) {
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 140, y: 140, w: 540, h: 360, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.spcBefPx = 4;
          p.lineHeight = 1.15;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14.5;
          }
        }
      }
    }

    // Slide 46 (orig 47): Restore full original text of filming rules; replace only "na signal!!!!" with "nějak ať neztratí tolik kvalitu!". NO emojis, NO white cards.
    if (origNum === 47) {
      slideTitle = 'Natáčení';
      for (const el of slideElements) {
        if (el.kind === 'sp') {
          for (const p of (el.paragraphs || [])) {
            for (const r of (p.runs || [])) {
              if (r.text) {
                r.text = r.text.replace(/na signal!!!!/g, 'nějak ať neztratí tolik kvalitu!');
              }
              r.color = '#1B360E';
              if (r.sz && r.sz > 14) r.sz = 14;
            }
          }
        }
      }
    }

    // Slide 47 (orig 48): Restore original content of "Nebezpečné situace"
    if (origNum === 48) {
      slideTitle = 'Nebezpečné situace';
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 750, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.spcBefPx = 4;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 16;
          }
        }
      }
    }

    // Slide 48 (orig 49): Stres a hádky - scale down font size and paragraph spacing so all text fits cleanly without overflowing
    if (origNum === 49) {
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 215, y: 130, w: 685, h: 370, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.spcBefPx = 4;
          p.lineHeight = 1.15;
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
            r.sz = 14.5;
          }
        }
      }
    }

    // Slide 49 (orig 50): Delší poznámka k mapám - restore original links
    if (origNum === 50) {
      slideTitle = 'Delší poznámka k mapám';
      const titleSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'title' || e.phKey === 'ctrTitle'));
      if (titleSp) {
        titleSp.box = { x: 109.66, y: 77.96, w: 756.69, h: 66.49, rot: 0, flipH: false, flipV: false };
        for (const p of (titleSp.paragraphs || [])) {
          for (const r of (p.runs || [])) {
            r.color = '#1B360E';
          }
        }
      }
      const bodySp = slideElements.find(e => e.kind === 'sp' && e.phKey !== 'title' && e.phKey !== 'ctrTitle' && (e.phKey === 'body:1' || e.phKey?.startsWith('body')));
      if (bodySp) {
        bodySp.box = { x: 110, y: 140, w: 650, h: 340, rot: 0, flipH: false, flipV: false };
        for (const p of (bodySp.paragraphs || [])) {
          p.spcBefPx = 6;
          for (const r of (p.runs || [])) {
            if (!r.hlink) r.color = '#1B360E';
            r.sz = 15;
          }
        }
      }
    }

    // Slide 50 (orig 51): Title "Všechno!", big centered final slide content ("Všechno!", "OTÁZKY??")
    if (origNum === 51) {
      slideTitle = 'Všechno!';
      const ctrSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'ctrTitle' || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('Všechno')))));
      if (ctrSp) {
        ctrSp.box = { x: 180, y: 140, w: 600, h: 140, rot: 0, flipH: false, flipV: false };
        for (const p of (ctrSp.paragraphs || [])) {
          p.algn = 'ctr';
          for (const r of (p.runs || [])) {
            r.text = 'Všechno!';
            r.sz = 52;
            r.b = true;
            r.color = '#D7141A';
          }
        }
      }
      const subSp = slideElements.find(e => e.kind === 'sp' && (e.phKey === 'subTitle' || e.paragraphs?.some(p => p.runs?.some(r => r.text?.includes('OTÁZKY')))));
      if (subSp) {
        subSp.box = { x: 180, y: 280, w: 600, h: 90, rot: 0, flipH: false, flipV: false };
        for (const p of (subSp.paragraphs || [])) {
          p.algn = 'ctr';
          for (const r of (p.runs || [])) {
            r.text = 'OTÁZKY??';
            r.sz = 26;
            r.b = true;
            r.color = '#11457E';
          }
        }
      }
    }

    // Ensure all sage green slides default to dark #1B360E text directly on background
    if (bg.color === '#85AC7E' || (!bg.color && bg.type === 'solid')) {
      for (const el of slideElements) {
        if (el.kind === 'sp' && el.phKey !== 'sldNum') {
          for (const p of (el.paragraphs || [])) {
            for (const r of (p.runs || [])) {
              if (r.color === '#2E1E0F' || r.color === '#000000' || !r.color) {
                r.color = '#1B360E';
              }
            }
          }
        }
      }
    }

    // Re-collect finalized texts from slideElements after all customizations have run
    const finalizedTexts = [];
    for (const el of slideElements) {
      if (el.kind === 'sp' && el.paragraphs && el.phKey !== 'sldNum') {
        for (const p of el.paragraphs) {
          const line = (p.runs || []).map(r => r.text || '').join('').trim();
          if (line && line !== String(origNum) && line !== String(slideNum)) {
            finalizedTexts.push(line);
          }
        }
      }
    }

    slidesData.push({
      slideNumber: slideNum,
      originalSlideNumber: origNum,
      fileName: slideFile,
      title: slideTitle,
      bg,
      layoutElements,
      elements: slideElements,
      texts: finalizedTexts,
      notes,
      ...(customLayout ? { customLayout } : {})
    });
  });

  const output = {
    metadata: {
      title: 'JET-PID – Prezentace',
      totalSlides: slidesData.length,
      stageWidth: 960,
      stageHeight: 540,
      extractedAt: new Date().toISOString()
    },
    themeColors: Object.values(SCHEME_COLORS),
    slides: slidesData
  };

  fs.mkdirSync('src/data', { recursive: true });
  fs.writeFileSync('src/data/presentation-data.json', JSON.stringify(output, null, 2));
  fs.writeFileSync('src/data/slides-data.json', JSON.stringify(output, null, 2));
  console.log(`Successfully compiled ${slidesData.length} slides into src/data/presentation-data.json and src/data/slides-data.json!`);

  // Generate src/data/editovatelne-texty.js
  generateEditableTextsFile(slidesData);
}

/**
 * Generates src/data/editovatelne-texty.js populated with all 50 slides,
 * speaker notes, titles, and paragraphs.
 */
function generateEditableTextsFile(slidesData) {
  const fileLines = [
    '/**',
    ' * ============================================================================',
    ' * EDITOVATELNÉ TEXTY PREZENTACE (JET-Česko / JET-PID)',
    ' * ============================================================================',
    ' * ',
    ' * Tento soubor slouží k jednoduché úpravě veškerých textů, nadpisů a poznámek',
    ' * přednášejícího v celé prezentaci bez nutnosti zasahovat do kódu aplikace.',
    ' * ',
    ' * NÁVOD K POUŽITÍ:',
    ' * 1. Každý snímek je reprezentován svým číslem (1 až 50).',
    ' * 2. Můžete upravit:',
    ' *    - `title`: Nadpis snímku (zobrazuje se v záhlaví a navigaci).',
    ' *    - `paragraphs`: Pole textových odstavců / bodů na snímku.',
    ' *    - `notes`: Poznámky přednášejícího (zobrazují se v okně přednášejícího).',
    ' *    - `mapImage`: Cesta k obrázku mapy (použito na snímku 25).',
    ' * 3. Pro vložení herní mapy na Snímek 25 stačí nastavit:',
    ' *    `mapImage: "./assets/slides/moje-mapa.png"` (nebo libovolnou URL / cestu).',
    ' * ============================================================================',
    ' */',
    '',
    'export const EDITABLE_SLIDES = {'
  ];

  for (const s of slidesData) {
    const isMapSlide = s.slideNumber === 25;
    fileLines.push(`  // Snímek ${s.slideNumber}: ${s.title}`);
    fileLines.push(`  ${s.slideNumber}: {`);
    fileLines.push(`    title: ${JSON.stringify(s.title)},`);
    if (isMapSlide) {
      fileLines.push(`    // Pro vložení vlastní mapy sem zadejte cestu, např: './assets/slides/mapa.png'`);
      fileLines.push(`    mapImage: null,`);
    }
    fileLines.push(`    notes: ${JSON.stringify(s.notes || '')},`);
    fileLines.push(`    paragraphs: ${JSON.stringify(s.texts || [], null, 6).replace(/\n/g, '\n    ')}`);
    fileLines.push(`  },`);
    fileLines.push('');
  }

  fileLines.push('};');
  fileLines.push('');
  fileLines.push('export default EDITABLE_SLIDES;');
  fileLines.push('');

  fs.writeFileSync('src/data/editovatelne-texty.js', fileLines.join('\n'));
  console.log(`Successfully generated src/data/editovatelne-texty.js with ${slidesData.length} slides!`);
}

compilePresentation();
