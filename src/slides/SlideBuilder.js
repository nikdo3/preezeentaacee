import presentationData from '../data/presentation-data.json';

/**
 * Builds the Reveal.js DOM hierarchy from extracted PPTX presentation data.
 * Places photos naturally on slides without any player introductions or medallions.
 */
export function buildSlides(slidesContainer) {
  if (!slidesContainer) return;
  slidesContainer.innerHTML = '';

  const slides = presentationData.slides || [];

  slides.forEach((slide, idx) => {
    const hIndex = idx;
    if (hIndex === 0) {
      const stack = document.createElement('section');
      stack.setAttribute('data-slide-h', String(hIndex));

      stack.appendChild(createHeroSlide(slide));
      stack.appendChild(createDetailVerticalSlide(slides[1] || slide, hIndex, 1));

      slidesContainer.appendChild(stack);
    } else if (hIndex === 1 || hIndex === 2 || hIndex === 5) {
      const stack = document.createElement('section');
      stack.setAttribute('data-slide-h', String(hIndex));

      stack.appendChild(createStandardSlide(slide, hIndex, 0));
      stack.appendChild(createDetailVerticalSlide(slide, hIndex, 1));

      slidesContainer.appendChild(stack);
    } else {
      slidesContainer.appendChild(createStandardSlide(slide, hIndex, 0));
    }
  });
}

function createHeroSlide(slide) {
  const section = document.createElement('section');
  section.setAttribute('data-auto-animate', '');
  section.setAttribute('data-slide-number', '1');
  section.className = 'slide-section hero-slide';

  const frame = document.createElement('div');
  frame.className = 'slide-card-3d hero-card';

  const badge = document.createElement('div');
  badge.className = 'slide-badge fragment';
  badge.setAttribute('data-fragment-index', '0');
  badge.textContent = 'JET-Česko';

  const title = document.createElement('h1');
  title.className = 'hero-title';
  title.setAttribute('data-id', 'main-title');
  title.textContent = 'JET-Česko';

  const subtitle = document.createElement('p');
  subtitle.className = 'hero-subtitle fragment';
  subtitle.setAttribute('data-fragment-index', '1');
  subtitle.textContent = 'Prezentace';

  const heroMedia = document.createElement('div');
  heroMedia.className = 'hero-media-wrap fragment';
  heroMedia.setAttribute('data-fragment-index', '2');

  const img = document.createElement('img');
  img.src = (slide.images && slide.images[0]) || './assets/slides/image3.png';
  img.alt = 'JET-Česko';
  img.loading = 'eager';
  heroMedia.appendChild(img);

  frame.appendChild(badge);
  frame.appendChild(title);
  frame.appendChild(subtitle);
  frame.appendChild(heroMedia);
  section.appendChild(frame);
  return section;
}

function createStandardSlide(slide, hIndex) {
  const section = document.createElement('section');
  section.setAttribute('data-auto-animate', '');
  section.setAttribute('data-slide-number', String(slide.slideNumber));
  section.className = 'slide-section';

  const frame = document.createElement('div');
  frame.className = 'slide-card-3d';

  const header = document.createElement('div');
  header.className = 'slide-header';

  const badge = document.createElement('span');
  badge.className = 'slide-index-pill';
  badge.textContent = `#${slide.slideNumber}`;

  const titleEl = document.createElement('h2');
  titleEl.className = 'slide-title';
  titleEl.setAttribute('data-id', `slide-title-${slide.slideNumber}`);
  titleEl.textContent = slide.title;

  header.appendChild(badge);
  header.appendChild(titleEl);
  frame.appendChild(header);

  const body = document.createElement('div');
  const images = (slide.images || []).slice(0, 3);
  body.className = images.length > 0 ? 'slide-body has-media' : 'slide-body text-only';

  const textCol = document.createElement('div');
  textCol.className = 'slide-text-col';

  const bodyLines = (slide.texts || []).slice(1);
  if (bodyLines.length === 0) {
    const lead = document.createElement('p');
    lead.className = 'slide-lead-text fragment';
    lead.setAttribute('data-fragment-index', '0');
    lead.textContent = slide.title;

    const sub1 = document.createElement('div');
    sub1.className = 'slide-Tag-chip fragment';
    sub1.setAttribute('data-fragment-index', '1');
    sub1.textContent = `Snímek ${slide.slideNumber}`;

    const sub2 = document.createElement('div');
    sub2.className = 'slide-Tag-chip fragment';
    sub2.setAttribute('data-fragment-index', '2');
    sub2.textContent = 'JET-Česko';

    textCol.appendChild(lead);
    textCol.appendChild(sub1);
    textCol.appendChild(sub2);
  } else {
    const list = document.createElement('ul');
    list.className = 'slide-bullet-list';

    bodyLines.forEach((line, i) => {
      const li = document.createElement('li');
      const fragIdx = Math.min(i, 2);
      li.className = 'slide-bullet-item fragment';
      li.setAttribute('data-fragment-index', String(fragIdx));
      li.textContent = line;
      list.appendChild(li);
    });

    for (let extra = bodyLines.length; extra < 3; extra++) {
      const li = document.createElement('li');
      li.className = 'slide-bullet-item slide-meta-bullet fragment';
      li.setAttribute('data-fragment-index', String(extra));
      li.textContent = extra === 1 ? `Snímek #${slide.slideNumber}` : 'JET-Česko (varianta L)';
      list.appendChild(li);
    }

    textCol.appendChild(list);
  }

  body.appendChild(textCol);

  if (images.length > 0) {
    const mediaCol = document.createElement('div');
    mediaCol.className = `slide-media-col media-count-${images.length}`;

    images.forEach((imgSrc, imgIdx) => {
      const wrap = document.createElement('div');
      wrap.className = 'media-frame';
      wrap.setAttribute('data-id', `media-${slide.slideNumber}-${imgIdx}`);

      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = '';
      img.loading = hIndex < 6 ? 'eager' : 'lazy';

      wrap.appendChild(img);
      mediaCol.appendChild(wrap);
    });

    body.appendChild(mediaCol);
  }

  frame.appendChild(body);
  section.appendChild(frame);
  return section;
}

function createDetailVerticalSlide(slide, hIndex, vIndex) {
  const section = document.createElement('section');
  section.setAttribute('data-auto-animate', '');
  section.className = 'slide-section vertical-detail-slide';

  const frame = document.createElement('div');
  frame.className = 'slide-card-3d';

  const header = document.createElement('div');
  header.className = 'slide-header';

  const badge = document.createElement('span');
  badge.className = 'slide-index-pill';
  badge.textContent = `#${slide.slideNumber}.${vIndex}`;

  const h2 = document.createElement('h2');
  h2.className = 'slide-title';
  h2.setAttribute('data-id', `slide-title-${slide.slideNumber}`);
  h2.textContent = slide.title;

  header.appendChild(badge);
  header.appendChild(h2);
  frame.appendChild(header);

  const body = document.createElement('div');
  body.className = 'slide-body has-media';

  const textCol = document.createElement('div');
  textCol.className = 'slide-text-col';

  const list = document.createElement('ul');
  list.className = 'slide-bullet-list';

  const summaryItems = (slide.texts || [slide.title]).slice(0, 4);
  while (summaryItems.length < 3) {
    summaryItems.push('JET-Česko (varianta L)');
  }

  summaryItems.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'slide-bullet-item fragment';
    li.setAttribute('data-fragment-index', String(Math.min(idx, 2)));
    li.textContent = item;
    list.appendChild(li);
  });

  textCol.appendChild(list);
  body.appendChild(textCol);

  if (slide.images && slide.images.length > 0) {
    const mediaCol = document.createElement('div');
    mediaCol.className = 'slide-media-col media-count-1';
    const wrap = document.createElement('div');
    wrap.className = 'media-frame';
    const img = document.createElement('img');
    img.src = slide.images[0];
    img.alt = '';
    wrap.appendChild(img);
    mediaCol.appendChild(wrap);
    body.appendChild(mediaCol);
  }

  frame.appendChild(body);
  section.appendChild(frame);
  return section;
}
