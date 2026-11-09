var ol=Object.defineProperty;var ll=(i,e,t)=>e in i?ol(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ca=(i,e,t)=>ll(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const ai=(i,e)=>{for(let t in e)i[t]=e[t];return i},Se=(i,e)=>Array.from(i.querySelectorAll(e)),Ps=(i,e,t)=>{t?i.classList.add(e):i.classList.remove(e)},ri=i=>{if(typeof i=="string"){if(i==="null")return null;if(i==="true")return!0;if(i==="false")return!1;if(i.match(/^-?[\d\.]+$/))return parseFloat(i)}return i},vn=(i,e)=>{i.style.transform=e},ys=(i,e)=>{let t=i.matches||i.matchesSelector||i.msMatchesSelector;return!(!t||!t.call(i,e))},pt=(i,e)=>{if(typeof i.closest=="function")return i.closest(e);for(;i;){if(ys(i,e))return i;i=i.parentNode}return null},So=i=>{let e=(i=i||document.documentElement).requestFullscreen||i.webkitRequestFullscreen||i.webkitRequestFullScreen||i.mozRequestFullScreen||i.msRequestFullscreen;e&&e.apply(i)},cr=i=>{let e=document.createElement("style");return e.type="text/css",i&&i.length>0&&(e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i))),document.head.appendChild(e),e},da=()=>{let i={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(e=>{i[e.split("=").shift()]=e.split("=").pop()}));for(let e in i){let t=i[e];i[e]=ri(unescape(t))}return i.dependencies!==void 0&&delete i.dependencies,i},cl={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},bo=navigator.userAgent,li=/(iphone|ipod|ipad|android)/gi.test(bo)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Eo=/android/gi.test(bo);var dl=(function(i){if(i){var e=function(v){return[].slice.call(v)},t=3,n=[],s=null,r="requestAnimationFrame"in i?function(){i.cancelAnimationFrame(s),s=i.requestAnimationFrame((function(){return o(n.filter((function(v){return v.dirty&&v.active})))}))}:function(){},a=function(v){return function(){n.forEach((function(P){return P.dirty=v})),r()}},o=function(v){v.filter((function(z){return!z.styleComputed})).forEach((function(z){z.styleComputed=u(z)})),v.filter(h).forEach(p);var P=v.filter(d);P.forEach(c),P.forEach((function(z){p(z),l(z)})),P.forEach(x)},l=function(v){return v.dirty=0},c=function(v){v.availableWidth=v.element.parentNode.clientWidth,v.currentWidth=v.element.scrollWidth,v.previousFontSize=v.currentFontSize,v.currentFontSize=Math.min(Math.max(v.minSize,v.availableWidth/v.currentWidth*v.previousFontSize),v.maxSize),v.whiteSpace=v.multiLine&&v.currentFontSize===v.minSize?"normal":"nowrap"},d=function(v){return v.dirty!==2||v.dirty===2&&v.element.parentNode.clientWidth!==v.availableWidth},u=function(v){var P=i.getComputedStyle(v.element,null);return v.currentFontSize=parseFloat(P.getPropertyValue("font-size")),v.display=P.getPropertyValue("display"),v.whiteSpace=P.getPropertyValue("white-space"),!0},h=function(v){var P=!1;return!v.preStyleTestCompleted&&(/inline-/.test(v.display)||(P=!0,v.display="inline-block"),v.whiteSpace!=="nowrap"&&(P=!0,v.whiteSpace="nowrap"),v.preStyleTestCompleted=!0,P)},p=function(v){v.element.style.whiteSpace=v.whiteSpace,v.element.style.display=v.display,v.element.style.fontSize=v.currentFontSize+"px"},x=function(v){v.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:v.previousFontSize,newValue:v.currentFontSize,scaleFactor:v.currentFontSize/v.previousFontSize}}))},m=function(v,P){return function(){v.dirty=P,v.active&&r()}},g=function(v){return function(){n=n.filter((function(P){return P.element!==v.element})),v.observeMutations&&v.observer.disconnect(),v.element.style.whiteSpace=v.originalStyle.whiteSpace,v.element.style.display=v.originalStyle.display,v.element.style.fontSize=v.originalStyle.fontSize}},f=function(v){return function(){v.active||(v.active=!0,r())}},C=function(v){return function(){return v.active=!1}},R=function(v){v.observeMutations&&(v.observer=new MutationObserver(m(v,1)),v.observer.observe(v.element,v.observeMutations))},M={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in i&&{subtree:!0,childList:!0,characterData:!0}},U=null,L=function(){i.clearTimeout(U),U=i.setTimeout(a(2),b.observeWindowDelay)},N=["resize","orientationchange"];return Object.defineProperty(b,"observeWindow",{set:function(v){var P="".concat(v?"add":"remove","EventListener");N.forEach((function(z){i[P](z,L)}))}}),b.observeWindow=!0,b.observeWindowDelay=100,b.fitAll=a(t),b}function F(v,P){var z=Object.assign({},M,P),O=v.map((function(W){var K=Object.assign({},z,{element:W,active:!0});return(function(G){G.originalStyle={whiteSpace:G.element.style.whiteSpace,display:G.element.style.display,fontSize:G.element.style.fontSize},R(G),G.newbie=!0,G.dirty=!0,n.push(G)})(K),{element:W,fit:m(K,t),unfreeze:f(K),freeze:C(K),unsubscribe:g(K)}}));return r(),O}function b(v){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof v=="string"?F(e(document.querySelectorAll(v)),P):F([v],P)[0]}})(typeof window>"u"?null:window);class ul{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){if(this.Reveal.isScrollView())return!0;let t=this.Reveal.getConfig().preloadIframes;return typeof t!="boolean"&&(t=e.hasAttribute("data-preload")),t}load(e,t={}){e.style.display=this.Reveal.getConfig().display,Se(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((s=>{(s.tagName!=="IFRAME"||this.shouldPreload(s))&&(s.setAttribute("src",s.getAttribute("data-src")),s.setAttribute("data-lazy-loaded",""),s.removeAttribute("data-src"))})),Se(e,"video, audio").forEach((s=>{let r=0;Se(s,"source[data-src]").forEach((a=>{a.setAttribute("src",a.getAttribute("data-src")),a.removeAttribute("data-src"),a.setAttribute("data-lazy-loaded",""),r+=1})),li&&s.tagName==="VIDEO"&&s.setAttribute("playsinline",""),r>0&&s.load()}));let n=e.slideBackgroundElement;if(n){n.style.display="block";let s=e.slideBackgroundContentElement,r=e.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let o=e.getAttribute("data-background-image"),l=e.getAttribute("data-background-video"),c=e.hasAttribute("data-background-video-loop"),d=e.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?s.style.backgroundImage=`url(${o.trim()})`:s.style.backgroundImage=o.split(",").map((u=>`url(${((h="")=>encodeURI(h).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(p=>`%${p.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(u.trim()))})`)).join(",");else if(l){let u=document.createElement("video");c&&u.setAttribute("loop",""),(d||this.Reveal.isSpeakerNotes())&&(u.muted=!0),li&&(u.muted=!0,u.setAttribute("playsinline","")),l.split(",").forEach((h=>{const p=document.createElement("source");p.setAttribute("src",h);let x=((m="")=>cl[m.split(".").pop()])(h);x&&p.setAttribute("type",x),u.appendChild(p)})),s.appendChild(u)}else if(r&&t.excludeIframes!==!0){let u=document.createElement("iframe");u.setAttribute("allowfullscreen",""),u.setAttribute("mozallowfullscreen",""),u.setAttribute("webkitallowfullscreen",""),u.setAttribute("allow","autoplay"),u.setAttribute("data-src",r),u.style.width="100%",u.style.height="100%",u.style.maxHeight="100%",u.style.maxWidth="100%",s.appendChild(u)}}let a=s.querySelector("iframe[data-src]");a&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(r)&&a.getAttribute("src")!==r&&a.setAttribute("src",r)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach((t=>{dl(t,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(e){e.style.display="none";let t=this.Reveal.getSlideBackground(e);t&&(t.style.display="none",Se(t,"iframe[src]").forEach((n=>{n.removeAttribute("src")}))),Se(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})),Se(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}))}formatEmbeddedContent(){let e=(t,n,s)=>{Se(this.Reveal.getSlidesElement(),"iframe["+t+'*="'+n+'"]').forEach((r=>{let a=r.getAttribute(t);a&&a.indexOf(s)===-1&&r.setAttribute(t,a+(/\?/.test(a)?"&":"?")+s)}))};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(e){if(e){const t=this.Reveal.isSpeakerNotes();Se(e,'img[src$=".gif"]').forEach((n=>{n.setAttribute("src",n.getAttribute("src"))})),Se(e,"video, audio").forEach((n=>{if(pt(n,".fragment")&&!pt(n,".fragment.visible"))return;let s=this.Reveal.getConfig().autoPlayMedia;if(typeof s!="boolean"&&(s=n.hasAttribute("data-autoplay")||!!pt(n,".slide-background")),s&&typeof n.play=="function"){if(t&&!n.muted)return;if(n.readyState>1)this.startEmbeddedMedia({target:n});else if(li){let r=n.play();r&&typeof r.catch=="function"&&n.controls===!1&&r.catch((()=>{n.controls=!0,n.addEventListener("play",(()=>{n.controls=!1}))}))}else n.removeEventListener("loadeddata",this.startEmbeddedMedia),n.addEventListener("loadeddata",this.startEmbeddedMedia)}})),t||(Se(e,"iframe[src]").forEach((n=>{pt(n,".fragment")&&!pt(n,".fragment.visible")||this.startEmbeddedIframe({target:n})})),Se(e,"iframe[data-src]").forEach((n=>{pt(n,".fragment")&&!pt(n,".fragment.visible")||n.getAttribute("src")!==n.getAttribute("data-src")&&(n.removeEventListener("load",this.startEmbeddedIframe),n.addEventListener("load",this.startEmbeddedIframe),n.setAttribute("src",n.getAttribute("data-src")))})))}}startEmbeddedMedia(e){let t=!!pt(e.target,"html"),n=!!pt(e.target,".present");t&&n&&(e.target.paused||e.target.ended)&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let n=!!pt(e.target,"html"),s=!!pt(e.target,".present");if(n&&s){let r=this.Reveal.getConfig().autoPlayMedia;typeof r!="boolean"&&(r=t.hasAttribute("data-autoplay")||!!pt(t,".slide-background")),/youtube\.com\/embed\//.test(t.getAttribute("src"))&&r?t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(t.getAttribute("src"))&&r?t.contentWindow.postMessage('{"method":"play"}',"*"):t.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(e,t={}){t=ai({unloadIframes:!0},t),e&&e.parentNode&&(Se(e,"video, audio").forEach((n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())})),Se(e,"iframe").forEach((n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)})),Se(e,'iframe[src*="youtube.com/embed/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),Se(e,'iframe[src*="player.vimeo.com/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")})),t.unloadIframes===!0&&Se(e,"iframe[data-src]").forEach((n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")})))}}const Fn=".slides section",mn=".slides>section",ua=".slides>section.present>section",hl=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;class fl{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let n="none";e.slideNumber&&!this.Reveal.isPrintView()&&(e.showSlideNumber==="all"||e.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,n=this.Reveal.getConfig(),s="h.v";if(typeof n.slideNumber=="function")t=n.slideNumber(e);else{typeof n.slideNumber=="string"&&(s=n.slideNumber),/c/.test(s)||this.Reveal.getHorizontalSlides().length!==1||(s="c");let a=e&&e.dataset.visibility==="uncounted"?0:1;switch(t=[],s){case"c":t.push(this.Reveal.getSlidePastCount(e)+a);break;case"c/t":t.push(this.Reveal.getSlidePastCount(e)+a,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(e);t.push(o.h+a);let l=s==="h/v"?"/":".";this.Reveal.isVerticalSlide(e)&&t.push(l,o.v+1)}}let r="#"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],r)}formatNumber(e,t,n,s="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${s}">
					<span class="slide-number-a">${e}</span>
					</a>`:`<a href="${s}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}}class pl{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let e,t=this.jumpInput.value.trim("");if(/^\d+$/.test(t)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const s=this.Reveal.getSlides()[parseInt(t,10)-1];s&&(e=this.Reveal.getIndices(s))}}return e||(/^\d+\.\d+$/.test(t)&&(t=t.replace(".","/")),e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0})),!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),e)}search(e){const t=new RegExp("\\b"+e.trim()+"\\b","i"),n=this.Reveal.getSlides().find((s=>t.test(s.innerText)));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(e){e.keyCode===13?this.confirm():e.keyCode===27&&(this.cancel(),e.stopImmediatePropagation())}onInput(e){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}}const Ls=i=>{let e=i.match(/^#([0-9a-f]{3})$/i);if(e&&e[1])return e=e[1],{r:17*parseInt(e.charAt(0),16),g:17*parseInt(e.charAt(1),16),b:17*parseInt(e.charAt(2),16)};let t=i.match(/^#([0-9a-f]{6})$/i);if(t&&t[1])return t=t[1],{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)};let n=i.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let s=i.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return s?{r:parseInt(s[1],10),g:parseInt(s[2],10),b:parseInt(s[3],10),a:parseFloat(s[4])}:null};class ml{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((e=>{let t=this.createBackground(e,this.element);Se(e,"section").forEach((n=>{this.createBackground(n,t),t.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(e,t){let n=document.createElement("div");n.className="slide-background "+e.className.replace(/present|past|future/,"");let s=document.createElement("div");return s.className="slide-background-content",n.appendChild(s),t.appendChild(n),e.slideBackgroundElement=n,e.slideBackgroundContentElement=s,this.sync(e),n}sync(e){const t=e.slideBackgroundElement,n=e.slideBackgroundContentElement,s={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},r=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),t.removeAttribute("data-loaded"),t.removeAttribute("data-background-hash"),t.removeAttribute("data-background-size"),t.removeAttribute("data-background-transition"),t.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",s.background&&(/^(http|file|\/\/)/gi.test(s.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s.background)?e.setAttribute("data-background-image",s.background):t.style.background=s.background),(s.background||s.backgroundColor||s.backgroundGradient||s.backgroundImage||s.backgroundVideo||s.backgroundIframe)&&t.setAttribute("data-background-hash",s.background+s.backgroundSize+s.backgroundImage+s.backgroundVideo+s.backgroundIframe+s.backgroundColor+s.backgroundGradient+s.backgroundRepeat+s.backgroundPosition+s.backgroundTransition+s.backgroundOpacity),s.backgroundSize&&t.setAttribute("data-background-size",s.backgroundSize),s.backgroundColor&&(t.style.backgroundColor=s.backgroundColor),s.backgroundGradient&&(t.style.backgroundImage=s.backgroundGradient),s.backgroundTransition&&t.setAttribute("data-background-transition",s.backgroundTransition),r&&t.setAttribute("data-preload",""),s.backgroundSize&&(n.style.backgroundSize=s.backgroundSize),s.backgroundRepeat&&(n.style.backgroundRepeat=s.backgroundRepeat),s.backgroundPosition&&(n.style.backgroundPosition=s.backgroundPosition),s.backgroundOpacity&&(n.style.opacity=s.backgroundOpacity);const a=this.getContrastClass(e);typeof a=="string"&&e.classList.add(a)}getContrastClass(e){const t=e.slideBackgroundElement;let n=e.getAttribute("data-background-color");if(!n||!Ls(n)){let r=window.getComputedStyle(t);r&&r.backgroundColor&&(n=r.backgroundColor)}if(n){const r=Ls(n);if(r&&r.a!==0)return typeof(s=n)=="string"&&(s=Ls(s)),(s?(299*s.r+587*s.g+114*s.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var s;return null}bubbleSlideContrastClassToElement(e,t){["has-light-background","has-dark-background"].forEach((n=>{e.classList.contains(n)?t.classList.add(n):t.classList.remove(n)}),this)}update(e=!1){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),s=this.Reveal.getIndices(),r=null,a=t.rtl?"future":"past",o=t.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((c,d)=>{c.classList.remove("past","present","future"),d<s.h?c.classList.add(a):d>s.h?c.classList.add(o):(c.classList.add("present"),r=c),(e||d===s.h)&&Se(c,".slide-background").forEach(((u,h)=>{u.classList.remove("past","present","future");const p=typeof s.v=="number"?s.v:0;h<p?u.classList.add("past"):h>p?u.classList.add("future"):(u.classList.add("present"),d===s.h&&(r=u))}))})),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),r&&this.previousBackground){let c=this.previousBackground.getAttribute("data-background-hash"),d=r.getAttribute("data-background-hash");if(d&&d===c&&r!==this.previousBackground){this.element.classList.add("no-transition");const u=r.querySelector("video"),h=this.previousBackground.querySelector("video");if(u&&h){const p=u.parentNode;h.parentNode.appendChild(u),p.appendChild(h)}}}const l=r!==this.previousBackground;if(l&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),l&&r){this.Reveal.slideContent.startEmbeddedContent(r);let c=r.querySelector(".slide-background-content");if(c){let d=c.style.backgroundImage||"";/\.gif/i.test(d)&&(c.style.backgroundImage="",window.getComputedStyle(c).opacity,c.style.backgroundImage=d)}this.previousBackground=r}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove("no-transition")}),10)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,n,s=this.Reveal.getHorizontalSlides(),r=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(" ");a.length===1?t=n=parseInt(a[0],10):(t=parseInt(a[0],10),n=parseInt(a[1],10));let o,l,c=this.element.offsetWidth,d=s.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:d>1?(t-c)/(d-1):0,l=o*e.h*-1;let u,h,p=this.element.offsetHeight,x=r.length;u=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-p)/(x-1),h=x>0?u*e.v:0,this.element.style.backgroundPosition=l+"px "+-h+"px"}}destroy(){this.element.remove()}}let ha=0;class gl{constructor(e){this.Reveal=e}run(e,t){this.reset();let n=this.Reveal.getSlides(),s=n.indexOf(t),r=n.indexOf(e);if(e&&t&&e.hasAttribute("data-auto-animate")&&t.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===t.getAttribute("data-auto-animate-id")&&!(s>r?t:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||cr();let a=this.getAutoAnimateOptions(t);e.dataset.autoAnimate="pending",t.dataset.autoAnimate="pending",a.slideDirection=s>r?"forward":"backward";let o=e.style.display==="none";o&&(e.style.display=this.Reveal.getConfig().display);let l=this.getAutoAnimatableElements(e,t).map((c=>this.autoAnimateElements(c.from,c.to,c.options||{},a,ha++)));if(o&&(e.style.display="none"),t.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let c=.8*a.duration,d=.2*a.duration;this.getUnmatchedAutoAnimateElements(t).forEach((u=>{let h=this.getAutoAnimateOptions(u,a),p="unmatched";h.duration===a.duration&&h.delay===a.delay||(p="unmatched-"+ha++,l.push(`[data-auto-animate="running"] [data-auto-animate-target="${p}"] { transition: opacity ${h.duration}s ease ${h.delay}s; }`)),u.dataset.autoAnimateTarget=p}),this),l.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${c}s ease ${d}s; }`)}this.autoAnimateStyleSheet.innerHTML=l.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){Se(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((e=>{e.dataset.autoAnimate=""})),Se(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((e=>{delete e.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,n,s,r){e.dataset.autoAnimateTarget="",t.dataset.autoAnimateTarget=r;let a=this.getAutoAnimateOptions(t,s);n.delay!==void 0&&(a.delay=n.delay),n.duration!==void 0&&(a.duration=n.duration),n.easing!==void 0&&(a.easing=n.easing);let o=this.getAutoAnimatableProperties("from",e,n),l=this.getAutoAnimatableProperties("to",t,n);if(t.classList.contains("fragment")&&delete l.styles.opacity,n.translate!==!1||n.scale!==!1){let u=this.Reveal.getScale(),h={x:(o.x-l.x)/u,y:(o.y-l.y)/u,scaleX:o.width/l.width,scaleY:o.height/l.height};h.x=Math.round(1e3*h.x)/1e3,h.y=Math.round(1e3*h.y)/1e3,h.scaleX=Math.round(1e3*h.scaleX)/1e3,h.scaleX=Math.round(1e3*h.scaleX)/1e3;let p=n.translate!==!1&&(h.x!==0||h.y!==0),x=n.scale!==!1&&(h.scaleX!==0||h.scaleY!==0);if(p||x){let m=[];p&&m.push(`translate(${h.x}px, ${h.y}px)`),x&&m.push(`scale(${h.scaleX}, ${h.scaleY})`),o.styles.transform=m.join(" "),o.styles["transform-origin"]="top left",l.styles.transform="none"}}for(let u in l.styles){const h=l.styles[u],p=o.styles[u];h===p?delete l.styles[u]:(h.explicitValue===!0&&(l.styles[u]=h.value),p.explicitValue===!0&&(o.styles[u]=p.value))}let c="",d=Object.keys(l.styles);return d.length>0&&(o.styles.transition="none",l.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,l.styles["transition-property"]=d.join(", "),l.styles["will-change"]=d.join(", "),c='[data-auto-animate-target="'+r+'"] {'+Object.keys(o.styles).map((u=>u+": "+o.styles[u]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+r+'"] {'+Object.keys(l.styles).map((u=>u+": "+l.styles[u]+" !important;")).join("")+"}"),c}getAutoAnimateOptions(e,t){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=ai(n,t),e.parentNode){let s=pt(e.parentNode,"[data-auto-animate-target]");s&&(n=this.getAutoAnimateOptions(s,n))}return e.dataset.autoAnimateEasing&&(n.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(n.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(n.delay=parseFloat(e.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(e,t,n){let s=this.Reveal.getConfig(),r={styles:[]};if(n.translate!==!1||n.scale!==!1){let o;if(typeof n.measure=="function")o=n.measure(t);else if(s.center)o=t.getBoundingClientRect();else{let l=this.Reveal.getScale();o={x:t.offsetLeft*l,y:t.offsetTop*l,width:t.offsetWidth*l,height:t.offsetHeight*l}}r.x=o.x,r.y=o.y,r.width=o.width,r.height=o.height}const a=getComputedStyle(t);return(n.styles||s.autoAnimateStyles).forEach((o=>{let l;typeof o=="string"&&(o={property:o}),o.from!==void 0&&e==="from"?l={value:o.from,explicitValue:!0}:o.to!==void 0&&e==="to"?l={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(l=parseFloat(a["line-height"])/parseFloat(a["font-size"])),isNaN(l)&&(l=a[o.property])),l!==""&&(r.styles[o.property]=l)})),r}getAutoAnimatableElements(e,t){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),s=[];return n.filter(((r,a)=>{if(s.indexOf(r.to)===-1)return s.push(r.to),!0}))}getAutoAnimatePairs(e,t){let n=[];const s="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,e,t,"[data-id]",(r=>r.nodeName+":::"+r.getAttribute("data-id"))),this.findAutoAnimateMatches(n,e,t,s,(r=>r.nodeName+":::"+r.textContent.trim())),this.findAutoAnimateMatches(n,e,t,"img, video, iframe",(r=>r.nodeName+":::"+(r.getAttribute("src")||r.getAttribute("data-src")))),this.findAutoAnimateMatches(n,e,t,"pre",(r=>r.nodeName+":::"+r.textContent.trim())),n.forEach((r=>{ys(r.from,s)?r.options={scale:!1}:ys(r.from,"pre")&&(r.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,r.from,r.to,".hljs .hljs-ln-code",(a=>a.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,r.from,r.to,".hljs .hljs-ln-numbers[data-line-number]",(a=>a.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),n}getLocalBoundingBox(e){const t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,n,s,r,a){let o={},l={};[].slice.call(t.querySelectorAll(s)).forEach(((c,d)=>{const u=r(c);typeof u=="string"&&u.length&&(o[u]=o[u]||[],o[u].push(c))})),[].slice.call(n.querySelectorAll(s)).forEach(((c,d)=>{const u=r(c);let h;if(l[u]=l[u]||[],l[u].push(c),o[u]){const p=l[u].length-1,x=o[u].length-1;o[u][p]?(h=o[u][p],o[u][p]=null):o[u][x]&&(h=o[u][x],o[u][x]=null)}h&&e.push({from:h,to:c,options:a})}))}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce(((t,n)=>{const s=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||s||t.push(n),n.querySelector("[data-auto-animate-target]")&&(t=t.concat(this.getUnmatchedAutoAnimateElements(n))),t}),[])}}class vl{constructor(e){this.Reveal=e,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const e=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const t=Se(this.Reveal.getRevealElement(),mn),n=Se(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let s;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const r=window.getComputedStyle(this.viewportElement);r&&r.background&&(s=r.background);const a=[],o=t[0].parentNode;let l;const c=(d,u,h,p)=>{let x;if(l&&this.Reveal.shouldAutoAnimateBetween(l,d))x=document.createElement("div"),x.className="scroll-page-content scroll-auto-animate-page",x.style.display="none",l.closest(".scroll-page-content").parentNode.appendChild(x);else{const m=document.createElement("div");if(m.className="scroll-page",a.push(m),p&&n.length>u){const f=n[u],C=window.getComputedStyle(f);C&&C.background?m.style.background=C.background:s&&(m.style.background=s)}else s&&(m.style.background=s);const g=document.createElement("div");g.className="scroll-page-sticky",m.appendChild(g),x=document.createElement("div"),x.className="scroll-page-content",g.appendChild(x)}x.appendChild(d),d.classList.remove("past","future"),d.setAttribute("data-index-h",u),d.setAttribute("data-index-v",h),d.slideBackgroundElement&&(d.slideBackgroundElement.remove("past","future"),x.insertBefore(d.slideBackgroundElement,d)),l=d};t.forEach(((d,u)=>{this.Reveal.isVerticalStack(d)?d.querySelectorAll("section").forEach(((h,p)=>{c(h,u,p,!0)})):c(d,u,0)}),this),this.createProgressBar(),Se(this.Reveal.getRevealElement(),".stack").forEach((d=>d.remove())),a.forEach((d=>o.appendChild(d))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(e),this.activatedCallbacks.forEach((d=>d())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const e=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(e),this.slideHTMLBeforeActivation=null}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const e=n=>{let s=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;s=Math.max(Math.min(s,1),0),this.viewportElement.scrollTop=s*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},t=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)};this.progressBarInner.addEventListener("mousedown",(n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),e(n)}))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const e=this.Reveal.getConfig(),t=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),s=e.scrollLayout==="compact",r=this.viewportElement.offsetHeight,a=t.height*n,o=s?a:r;this.scrollTriggerHeight=s?a:r,this.viewportElement.style.setProperty("--page-height",o+"px"),this.viewportElement.style.scrollSnapType=typeof e.scrollSnap=="string"?`y ${e.scrollSnap}`:"",this.slideTriggers=[];const l=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=l.map((c=>{const d=this.createPage({pageElement:c,slideElement:c.querySelector("section"),stickyElement:c.querySelector(".scroll-page-sticky"),contentElement:c.querySelector(".scroll-page-content"),backgroundElement:c.querySelector(".slide-background"),autoAnimateElements:c.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});d.pageElement.style.setProperty("--slide-height",e.center===!0?"auto":t.height+"px"),this.slideTriggers.push({page:d,activate:()=>this.activatePage(d),deactivate:()=>this.deactivatePage(d)}),this.createFragmentTriggersForPage(d),d.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(d);let u=Math.max(d.scrollTriggers.length-1,0);u+=d.autoAnimatePages.reduce(((h,p)=>h+Math.max(p.scrollTriggers.length-1,0)),d.autoAnimatePages.length),d.pageElement.querySelectorAll(".scroll-snap-point").forEach((h=>h.remove()));for(let h=0;h<u+1;h++){const p=document.createElement("div");p.className="scroll-snap-point",p.style.height=this.scrollTriggerHeight+"px",p.style.scrollSnapAlign=s?"center":"start",d.pageElement.appendChild(p),h===0&&(p.style.marginTop=-this.scrollTriggerHeight+"px")}return s&&d.scrollTriggers.length>0?(d.pageHeight=r,d.pageElement.style.setProperty("--page-height",r+"px")):(d.pageHeight=o,d.pageElement.style.removeProperty("--page-height")),d.scrollPadding=this.scrollTriggerHeight*u,d.totalHeight=d.pageHeight+d.scrollPadding,d.pageElement.style.setProperty("--page-scroll-padding",d.scrollPadding+"px"),u>0?(d.stickyElement.style.position="sticky",d.stickyElement.style.top=Math.max((r-d.pageHeight)/2,0)+"px"):(d.stickyElement.style.position="relative",d.pageElement.style.scrollSnapAlign=d.pageHeight<r?"center":"start"),d})),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",e.scrollProgress),e.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((t,n)=>t+Math.max(n.page.scrollTriggers.length,1)),0);let e=0;this.slideTriggers.forEach(((t,n)=>{t.range=[e,e+Math.max(t.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const s=(t.range[1]-t.range[0])/t.page.scrollTriggers.length;t.page.scrollTriggers.forEach(((r,a)=>{r.range=[e+a*s,e+(a+1)*s]})),e=t.range[1]})),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(e,t){t=t||e.slideElement;const n=this.Reveal.fragments.sort(t.querySelectorAll(".fragment"),!0);return n.length&&(e.fragments=this.Reveal.fragments.sort(t.querySelectorAll(".fragment:not(.disabled)")),e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,e.fragments,t)}}),n.forEach(((s,r)=>{e.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(r,e.fragments,t)}})}))),e.scrollTriggers.length}createAutoAnimateTriggersForPage(e){e.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(e.autoAnimateElements).map(((t,n)=>{let s=this.createPage({slideElement:t.querySelector("section"),contentElement:t,backgroundElement:t.querySelector(".slide-background")});return this.createFragmentTriggersForPage(s,s.slideElement),e.autoAnimatePages.push(s),{page:s,activate:()=>this.activatePage(s),deactivate:()=>this.deactivatePage(s)}})))}createPage(e){return e.scrollTriggers=[],e.indexh=parseInt(e.slideElement.getAttribute("data-index-h"),10),e.indexv=parseInt(e.slideElement.getAttribute("data-index-v"),10),e}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((a=>a.remove()));const e=this.viewportElement.scrollHeight,t=this.viewportElement.offsetHeight,n=t/e;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const s=t/e*this.progressBarHeight,r=Math.min(s/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-r+"px",s>6?this.slideTriggers.forEach((a=>{const{page:o}=a;o.progressBarSlide=document.createElement("div"),o.progressBarSlide.className="scrollbar-slide",o.progressBarSlide.style.top=a.range[0]*this.progressBarHeight+"px",o.progressBarSlide.style.height=(a.range[1]-a.range[0])*this.progressBarHeight-r+"px",o.progressBarSlide.classList.toggle("has-triggers",o.scrollTriggers.length>0),this.progressBarInner.appendChild(o.progressBarSlide),o.scrollTriggerElements=o.scrollTriggers.map(((l,c)=>{const d=document.createElement("div");return d.className="scrollbar-trigger",d.style.top=(l.range[0]-a.range[0])*this.progressBarHeight+"px",d.style.height=(l.range[1]-l.range[0])*this.progressBarHeight-r+"px",o.progressBarSlide.appendChild(d),c===0&&(d.style.display="none"),d}))})):this.pages.forEach((a=>a.progressBarSlide=null))}syncScrollPosition(){const e=this.viewportElement.offsetHeight,t=e/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,s=this.viewportElement.scrollHeight-e,r=Math.max(Math.min(n/s,1),0),a=Math.max(Math.min((n+e/2)/this.viewportElement.scrollHeight,1),0);let o;this.slideTriggers.forEach((l=>{const{page:c}=l;r>=l.range[0]-2*t&&r<=l.range[1]+2*t&&!c.loaded?(c.loaded=!0,this.Reveal.slideContent.load(c.slideElement)):c.loaded&&(c.loaded=!1,this.Reveal.slideContent.unload(c.slideElement)),r>=l.range[0]&&r<=l.range[1]?(this.activateTrigger(l),o=l.page):l.active&&this.deactivateTrigger(l)})),o&&o.scrollTriggers.forEach((l=>{a>=l.range[0]&&a<=l.range[1]?this.activateTrigger(l):l.active&&this.deactivateTrigger(l)})),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-e))}setProgressBarValue(e){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${e*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((t=>t.progressBarSlide)).forEach((t=>{t.progressBarSlide.classList.toggle("active",t.active===!0),t.scrollTriggers.forEach(((n,s)=>{t.scrollTriggerElements[s].classList.toggle("active",t.active===!0&&n.active===!0)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove("visible")}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(e){if(this.active){const t=this.getScrollTriggerBySlide(e);t&&(this.viewportElement.scrollTop=t.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(e)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){const e=sessionStorage.getItem("reveal-scroll-top"),t=sessionStorage.getItem("reveal-scroll-origin");e&&t===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(e,10))}activatePage(e){if(!e.active){e.active=!0;const{slideElement:t,backgroundElement:n,contentElement:s,indexh:r,indexv:a}=e;s.style.display="block",t.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(t,r,a),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t,this.viewportElement),Array.from(s.parentNode.querySelectorAll(".scroll-page-content")).forEach((o=>{o!==s&&(o.style.display="none")}))}}deactivatePage(e){e.active&&(e.active=!1,e.slideElement&&e.slideElement.classList.remove("present"),e.backgroundElement&&e.backgroundElement.classList.remove("present"))}activateTrigger(e){e.active||(e.active=!0,e.activate())}deactivateTrigger(e){e.active&&(e.active=!1,e.deactivate&&e.deactivate())}getSlideByIndices(e,t){const n=this.getAllPages().find((s=>s.indexh===e&&s.indexv===t));return n?n.slideElement:null}getScrollTriggerBySlide(e){return this.slideTriggers.find((t=>t.page.slideElement===e))}getAllPages(){return this.pages.flatMap((e=>[e,...e.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}}class _l{constructor(e){this.Reveal=e}async activate(){const e=this.Reveal.getConfig(),t=Se(this.Reveal.getRevealElement(),Fn),n=e.slideNumber&&/all|print/i.test(e.showSlideNumber),s=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),r=Math.floor(s.width*(1+e.margin)),a=Math.floor(s.height*(1+e.margin)),o=s.width,l=s.height;await new Promise(requestAnimationFrame),cr("@page{size:"+r+"px "+a+"px; margin: 0px;}"),cr(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+l+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=r+"px",document.body.style.height=a+"px";const c=this.Reveal.getViewportElement();let d;if(c){const m=window.getComputedStyle(c);m&&m.background&&(d=m.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,l),await new Promise(requestAnimationFrame);const u=t.map((m=>m.scrollHeight)),h=[],p=t[0].parentNode;let x=1;t.forEach((function(m,g){if(m.classList.contains("stack")===!1){let f=(r-o)/2,C=(a-l)/2;const R=u[g];let M=Math.max(Math.ceil(R/a),1);M=Math.min(M,e.pdfMaxPagesPerSlide),(M===1&&e.center||m.classList.contains("center"))&&(C=Math.max((a-R)/2,0));const U=document.createElement("div");if(h.push(U),U.className="pdf-page",U.style.height=(a+e.pdfPageHeightOffset)*M+"px",d&&(U.style.background=d),U.appendChild(m),m.style.left=f+"px",m.style.top=C+"px",m.style.width=o+"px",this.Reveal.slideContent.layout(m),m.slideBackgroundElement&&U.insertBefore(m.slideBackgroundElement,m),e.showNotes){const L=this.Reveal.getSlideNotes(m);if(L){const F=typeof e.showNotes=="string"?e.showNotes:"inline",b=document.createElement("div");b.classList.add("speaker-notes"),b.classList.add("speaker-notes-pdf"),b.setAttribute("data-layout",F),b.innerHTML=L,F==="separate-page"?h.push(b):(b.style.left="8px",b.style.bottom="8px",b.style.width=r-16+"px",U.appendChild(b))}}if(n){const L=document.createElement("div");L.classList.add("slide-number"),L.classList.add("slide-number-pdf"),L.innerHTML=x++,U.appendChild(L)}if(e.pdfSeparateFragments){const L=this.Reveal.fragments.sort(U.querySelectorAll(".fragment"),!0);let N;L.forEach((function(F,b){N&&N.forEach((function(P){P.classList.remove("current-fragment")})),F.forEach((function(P){P.classList.add("visible","current-fragment")}),this);const v=U.cloneNode(!0);if(n){const P=b+1;v.querySelector(".slide-number-pdf").innerHTML+="."+P}h.push(v),N=F}),this),L.forEach((function(F){F.forEach((function(b){b.classList.remove("visible","current-fragment")}))}))}else Se(U,".fragment:not(.fade-out)").forEach((function(L){L.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),h.forEach((m=>p.appendChild(m))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),c.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}}class xl{constructor(e){this.Reveal=e}configure(e,t){e.fragments===!1?this.disable():t.fragments===!1&&this.enable()}disable(){Se(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.add("visible"),e.classList.remove("current-fragment")}))}enable(){Se(this.Reveal.getSlidesElement(),".fragment").forEach((e=>{e.classList.remove("visible"),e.classList.remove("current-fragment")}))}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(".fragment:not(.disabled)"),n=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:t.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let n=[],s=[],r=[];e.forEach((o=>{if(o.hasAttribute("data-fragment-index")){let l=parseInt(o.getAttribute("data-fragment-index"),10);n[l]||(n[l]=[]),n[l].push(o)}else s.push([o])})),n=n.concat(s);let a=0;return n.forEach((o=>{o.forEach((l=>{r.push(l),l.setAttribute("data-fragment-index",a)})),a++})),t===!0?n:r}sortAll(){this.Reveal.getHorizontalSlides().forEach((e=>{let t=Se(e,"section");t.forEach(((n,s)=>{this.sort(n.querySelectorAll(".fragment"))}),this),t.length===0&&this.sort(e.querySelectorAll(".fragment"))}))}update(e,t,n=this.Reveal.getCurrentSlide()){let s={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(t=t||this.sort(n.querySelectorAll(".fragment"))).length){let r=0;if(typeof e!="number"){let a=this.sort(n.querySelectorAll(".fragment.visible")).pop();a&&(e=parseInt(a.getAttribute("data-fragment-index")||0,10))}Array.from(t).forEach(((a,o)=>{if(a.hasAttribute("data-fragment-index")&&(o=parseInt(a.getAttribute("data-fragment-index"),10)),r=Math.max(r,o),o<=e){let l=a.classList.contains("visible");a.classList.add("visible"),a.classList.remove("current-fragment"),o===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(a)),a.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(a)),l||(s.shown.push(a),this.Reveal.dispatchEvent({target:a,type:"visible",bubbles:!1}))}else{let l=a.classList.contains("visible");a.classList.remove("visible"),a.classList.remove("current-fragment"),l&&(this.Reveal.slideContent.stopEmbeddedContent(a),s.hidden.push(a),this.Reveal.dispatchEvent({target:a,type:"hidden",bubbles:!1}))}})),e=typeof e=="number"?e:-1,e=Math.max(Math.min(e,r),-1),n.setAttribute("data-fragment",e)}return s.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:s.hidden[0],fragments:s.hidden}}),s.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:s.shown[0],fragments:s.shown}}),s}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,t=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let s=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(s.length){if(typeof e!="number"){let a=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=a?parseInt(a.getAttribute("data-fragment-index")||0,10):-1}e+=t;let r=this.update(e,s);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!r.shown.length&&!r.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class yl{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),Se(this.Reveal.getRevealElement(),Fn).forEach((s=>{s.classList.contains("stack")||s.addEventListener("click",this.onSlideClicked,!0)}));const e=70,t=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=t.width+e,this.overviewSlideHeight=t.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((e,t)=>{e.setAttribute("data-index-h",t),vn(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&Se(e,"section").forEach(((n,s)=>{n.setAttribute("data-index-h",t),n.setAttribute("data-index-v",s),vn(n,"translate3d(0, "+s*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((e,t)=>{vn(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),Se(e,".slide-background").forEach(((n,s)=>{vn(n,"translate3d(0, "+s*this.overviewSlideHeight+"px, 0)")}))}))}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+t+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),Se(this.Reveal.getRevealElement(),Fn).forEach((t=>{vn(t,""),t.removeEventListener("click",this.onSlideClicked,!0)})),Se(this.Reveal.getBackgroundsElement(),".slide-background").forEach((t=>{vn(t,"")})),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(this.deactivate(),t.nodeName.match(/section/gi))){let n=parseInt(t.getAttribute("data-index-h"),10),s=parseInt(t.getAttribute("data-index-v"),10);this.Reveal.slide(n,s)}}}}class Sl{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(e,t){e.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(e,t){typeof e=="object"&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(typeof t.keyboardCondition=="function"&&t.keyboardCondition(e)===!1||t.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=e.keyCode,s=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let r=document.activeElement&&document.activeElement.isContentEditable===!0,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),l=!([32,37,38,39,40,63,78,80,191].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(r||a||o||l)return;let c,d=[66,86,190,191,112];if(typeof t.keyboard=="object")for(c in t.keyboard)t.keyboard[c]==="togglePause"&&d.push(parseInt(c,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(e.key)||this.Reveal.isPaused()&&d.indexOf(n)===-1)return!1;let u=t.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),h=!1;if(typeof t.keyboard=="object"){for(c in t.keyboard)if(parseInt(c,10)===n){let p=t.keyboard[c];typeof p=="function"?p.apply(null,[e]):typeof p=="string"&&typeof this.Reveal[p]=="function"&&this.Reveal[p].call(),h=!0}}if(h===!1){for(c in this.bindings)if(parseInt(c,10)===n){let p=this.bindings[c].callback;typeof p=="function"?p.apply(null,[e]):typeof p=="string"&&typeof this.Reveal[p]=="function"&&this.Reveal[p].call(),h=!0}}h===!1&&(h=!0,n===80||n===33?this.Reveal.prev({skipFragments:e.altKey}):n===78||n===34?this.Reveal.next({skipFragments:e.altKey}):n===72||n===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&u?t.rtl?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):n===76||n===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&u?t.rtl?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):n===75||n===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&u?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):n===74||n===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&u?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):[58,59,66,86,190].includes(n)||n===191&&!e.shiftKey?this.Reveal.togglePause():n===70?So(t.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(s):n===71?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():n!==63&&n!==191||!e.shiftKey?n===112?this.Reveal.toggleHelp():h=!1:this.Reveal.toggleHelp()),h?e.preventDefault&&e.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}}class bl{constructor(e){ca(this,"MAX_REPLACE_STATE_FREQUENCY",1e3);this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash,t={}){let n=e.replace(/^#\/?/,""),s=n.split("/");if(/^[0-9]*$/.test(s[0])||!n.length){const r=this.Reveal.getConfig();let a,o=r.hashOneBasedIndex||t.oneBasedIndex?1:0,l=parseInt(s[0],10)-o||0,c=parseInt(s[1],10)-o||0;return r.fragmentInURL&&(a=parseInt(s[2],10),isNaN(a)&&(a=void 0)),{h:l,v:c,f:a}}{let r,a;/\/[-\d]+$/g.test(n)&&(a=parseInt(n.split("/").pop(),10),a=isNaN(a)?void 0:a,n=n.split("/").shift());try{r=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(r)return{...this.Reveal.getIndices(r),f:a}}return null}readURL(){const e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&t.f===void 0||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e=="number")this.writeURLTimeout=setTimeout(this.writeURL,e);else if(n){let s=this.getHash();t.history?window.location.hash=s:t.hash&&(s==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+s))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout((()=>this.replaceState(e)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t="/",n=e||this.Reveal.getCurrentSlide(),s=n?n.getAttribute("id"):null;s&&(s=encodeURIComponent(s));let r=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(r.f=void 0),typeof s=="string"&&s.length)t="/"+s,r.f>=0&&(t+="/"+r.f);else{let a=this.Reveal.getConfig().hashOneBasedIndex?1:0;(r.h>0||r.v>0||r.f>=0)&&(t+=r.h+a),(r.v>0||r.f>=0)&&(t+="/"+(r.v+a)),r.f>=0&&(t+="/"+r.f)}return t}onWindowHashChange(e){this.readURL()}}class El{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=Se(t,".navigate-left"),this.controlsRight=Se(t,".navigate-right"),this.controlsUp=Se(t,".navigate-up"),this.controlsDown=Se(t,".navigate-down"),this.controlsPrev=Se(t,".navigate-prev"),this.controlsNext=Se(t,".navigate-next"),this.controlsFullscreen=Se(t,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(e,t){this.element.style.display=e.controls&&(e.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows)}bind(){let e=["touchstart","click"];Eo&&(e=["touchstart"]),e.forEach((t=>{this.controlsLeft.forEach((n=>n.addEventListener(t,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((n=>n.addEventListener(t,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((n=>n.addEventListener(t,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((n=>n.addEventListener(t,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((n=>n.addEventListener(t,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((n=>n.addEventListener(t,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((n=>n.addEventListener(t,this.onEnterFullscreen,!1)))}))}unbind(){["touchstart","click"].forEach((e=>{this.controlsLeft.forEach((t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((t=>t.removeEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((t=>t.removeEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((t=>t.removeEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((t=>t.removeEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((t=>t.removeEventListener(e,this.onEnterFullscreen,!1)))}))}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")})),e.left&&this.controlsLeft.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),e.right&&this.controlsRight.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),e.up&&this.controlsUp.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),e.down&&this.controlsDown.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(e.left||e.up)&&this.controlsPrev.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(e.right||e.down)&&this.controlsNext.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}));let t=this.Reveal.getCurrentSlide();if(t){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsNext.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}));const s=this.Reveal.isVerticalSlide(t),r=s&&t.parentElement&&t.parentElement.querySelectorAll(":scope > section").length>1;s&&r?(n.prev&&this.controlsUp.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsDown.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")}))):(n.prev&&this.controlsLeft.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})),n.next&&this.controlsRight.forEach((a=>{a.classList.add("fragmented","enabled"),a.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(e){const t=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();So(t.embedded?n:n.parentElement)}}class Ml{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),n=t.length,s=Math.floor(e.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(s=n-s);let r=this.Reveal.getIndices(t[s]);this.Reveal.slide(r.h,r.v)}destroy(){this.element.remove()}}class Al{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}}const fa=(i,e)=>{const t=document.createElement("script");t.type="text/javascript",t.async=!1,t.defer=!1,t.src=i,typeof e=="function"&&(t.onload=t.onreadystatechange=s=>{(s.type==="load"||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=t.onerror=null,e())},t.onerror=s=>{t.onload=t.onreadystatechange=t.onerror=null,e(new Error("Failed loading script: "+t.src+`
`+s))});const n=document.querySelector("head");n.insertBefore(t,n.lastChild)};class wl{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise((n=>{let s=[],r=0;if(t.forEach((a=>{a.condition&&!a.condition()||(a.async?this.asyncDependencies.push(a):s.push(a))})),s.length){r=s.length;const a=o=>{o&&typeof o.callback=="function"&&o.callback(),--r==0&&this.initPlugins().then(n)};s.forEach((o=>{typeof o.id=="string"?(this.registerPlugin(o),a(o)):typeof o.src=="string"?fa(o.src,(()=>a(o))):(console.warn("Unrecognized plugin format",o),a())}))}else this.initPlugins().then(n)}))}initPlugins(){return new Promise((e=>{let t=Object.values(this.registeredPlugins),n=t.length;if(n===0)this.loadAsync().then(e);else{let s,r=()=>{--n==0?this.loadAsync().then(e):s()},a=0;s=()=>{let o=t[a++];if(typeof o.init=="function"){let l=o.init(this.Reveal);l&&typeof l.then=="function"?l.then(r):r()}else r()},s()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((e=>{fa(e.src,e.callback)})),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]=="string"?(e=arguments[1]).id=arguments[0]:typeof e=="function"&&(e=e());let t=e.id;typeof t!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",e):this.registeredPlugins[t]===void 0?(this.registeredPlugins[t]=e,this.state==="loaded"&&typeof e.init=="function"&&e.init(this.Reveal)):console.warn('reveal.js: "'+t+'" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((e=>{typeof e.destroy=="function"&&e.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class Tl{constructor(e){this.Reveal=e,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const e=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,t=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;e||t?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(e){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(e),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(e){this.close(),this.state={previewIframe:e},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${e}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${e}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",(t=>{this.dom.dataset.state="loaded"}),!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",(t=>{this.close(),t.preventDefault()}),!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",(t=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:e}})}previewMedia(e,t,n){if(t!=="image"&&t!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),n=n||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=n,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const s=this.dom.querySelector(".r-overlay-content");if(t==="image"){this.state={previewImage:e,previewFit:n};const r=document.createElement("img",{});r.src=e,s.appendChild(r),r.addEventListener("load",(()=>{this.dom.dataset.state="loaded"}),!1),r.addEventListener("error",(()=>{this.dom.dataset.state="error",s.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'}),!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",(a=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:e}})}else{if(t!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:e,previewFit:n};const r=document.createElement("video");r.autoplay=this.dom.dataset.previewAutoplay!=="false",r.controls=this.dom.dataset.previewControls!=="false",r.loop=this.dom.dataset.previewLoop==="true",r.muted=this.dom.dataset.previewMuted==="true",r.playsInline=!0,r.src=e,s.appendChild(r),r.addEventListener("loadeddata",(()=>{this.dom.dataset.state="loaded"}),!1),r.addEventListener("error",(()=>{this.dom.dataset.state="error",s.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'}),!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:e}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",(r=>{this.close(),r.preventDefault()}),!1)}previewImage(e,t){this.previewMedia(e,"image",t)}previewVideo(e,t){this.previewMedia(e,"video",t)}toggleHelp(e){typeof e=="boolean"?e?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let e='<p class="title">Keyboard Shortcuts</p>',t=this.Reveal.keyboard.getShortcuts(),n=this.Reveal.keyboard.getBindings();e+="<table><th>KEY</th><th>ACTION</th>";for(let s in t)e+=`<tr><td>${s}</td><td>${t[s]}</td></tr>`;for(let s in n)n[s].key&&n[s].description&&(e+=`<tr><td>${n[s].key}</td><td>${n[s].description}</td></tr>`);e+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${e}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",(s=>{this.close(),s.preventDefault()}),!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(e){this.stateProps.every((t=>this.state[t]===e[t]))||(e.previewIframe?this.previewIframe(e.previewIframe):e.previewImage?this.previewImage(e.previewImage,e.previewFit):e.previewVideo?this.previewVideo(e.previewVideo,e.previewFit):this.close())}onSlidesClicked(e){const t=e.target,n=t.closest(this.iframeTriggerSelector),s=t.closest(this.mediaTriggerSelector);if(n){if(e.metaKey||e.shiftKey||e.altKey)return;let r=n.getAttribute("href")||n.getAttribute("data-preview-link");r&&(this.previewIframe(r),e.preventDefault())}else if(s){if(s.hasAttribute("data-preview-image")){let r=s.dataset.previewImage||s.getAttribute("src");r&&(this.previewImage(r,s.dataset.previewFit),e.preventDefault())}else if(s.hasAttribute("data-preview-video")){let r=s.dataset.previewVideo||s.getAttribute("src");if(!r){let a=s.querySelector("source");a&&(r=a.getAttribute("src"))}r&&(this.previewVideo(r,s.dataset.previewFit),e.preventDefault())}}}destroy(){this.close()}}class Rl{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(e){if(ys(e,"video[controls], audio[controls]"))return!0;for(;e&&typeof e.hasAttribute=="function";){if(e.hasAttribute("data-prevent-swipe"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.touchCaptured=!1,this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)Eo&&e.preventDefault();else{this.Reveal.onUserInput(e);let n=e.touches[0].clientX,s=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let r=this.Reveal.availableRoutes({includeFragments:!0}),a=n-this.touchStartX,o=s-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&r.up?(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&r.down&&(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}}const Ns="focus",pa="blur";class Cl{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==Ns&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Ns}blur(){this.state!==pa&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=pa}isFocused(){return this.state===Ns}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=pt(e.target,".reveal");t&&t===this.Reveal.getRevealElement()||this.blur()}}class Pl{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute("data-layout",typeof e.showNotes=="string"?e.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let t=e.querySelectorAll("aside.notes");return t?Array.from(t).map((n=>n.innerHTML)).join(`
`):null}destroy(){this.element.remove()}}class Ll{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,n=this.diameter2,s=this.diameter2,r=28;this.progressOffset+=.1*(1-this.progressOffset);const a=-Math.PI/2+e*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,s,t+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,s,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,s,t,o,a,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,s-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,r),this.context.fillRect(18,0,10,r)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,r),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Nl={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const Mo="5.2.1";function Ao(i,e){arguments.length<2&&(e=arguments[0],i=document.querySelector(".reveal"));const t={};let n,s,r,a,o,l={},c=!1,d=!1,u={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},h=[],p=1,x={layout:"",overview:""},m={},g="idle",f=0,C=0,R=-1,M=!1,U=new ul(t),L=new fl(t),N=new pl(t),F=new gl(t),b=new ml(t),v=new vl(t),P=new _l(t),z=new xl(t),O=new yl(t),W=new Sl(t),K=new bl(t),G=new El(t),Q=new Ml(t),X=new Al(t),re=new wl(t),ie=new Tl(t),ve=new Cl(t),Ne=new Rl(t),Oe=new Pl(t);function q(){c!==!1&&(d=!0,l.showHiddenSlides||Se(m.wrapper,'section[data-visibility="hidden"]').forEach((_=>{const E=_.parentNode;E.childElementCount===1&&/section/i.test(E.nodeName)?E.remove():_.remove()})),(function(){m.slides.classList.add("no-transition"),li?m.wrapper.classList.add("no-hover"):m.wrapper.classList.remove("no-hover"),b.render(),L.render(),N.render(),G.render(),Q.render(),Oe.render(),m.pauseOverlay=((_,E,T,w="")=>{let k=_.querySelectorAll("."+T);for(let te=0;te<k.length;te++){let se=k[te];if(se.parentNode===_)return se}let Z=document.createElement(E);return Z.className=T,Z.innerHTML=w,_.appendChild(Z),Z})(m.wrapper,"div","pause-overlay",l.controls?'<button class="resume-button">Resume presentation</button>':null),m.statusElement=(function(){let _=m.wrapper.querySelector(".aria-status");return _||(_=document.createElement("div"),_.style.position="absolute",_.style.height="1px",_.style.width="1px",_.style.overflow="hidden",_.style.clip="rect( 1px, 1px, 1px, 1px )",_.classList.add("aria-status"),_.setAttribute("aria-live","polite"),_.setAttribute("aria-atomic","true"),m.wrapper.appendChild(_)),_})(),m.wrapper.setAttribute("role","application")})(),l.postMessage&&window.addEventListener("message",bi,!1),setInterval((()=>{(!v.isActive()&&m.wrapper.scrollTop!==0||m.wrapper.scrollLeft!==0)&&(m.wrapper.scrollTop=0,m.wrapper.scrollLeft=0)}),1e3),document.addEventListener("fullscreenchange",Gn),document.addEventListener("webkitfullscreenchange",Gn),V().forEach((_=>{Se(_,"section").forEach(((E,T)=>{T>0&&(E.classList.remove("present"),E.classList.remove("past"),E.classList.add("future"),E.setAttribute("aria-hidden","true"))}))})),de(),b.update(!0),(function(){const _=l.view==="print",E=l.view==="scroll"||l.view==="reader";(_||E)&&(_?Pe():Ne.unbind(),m.viewport.classList.add("loading-scroll-mode"),_?document.readyState==="complete"?P.activate():window.addEventListener("load",(()=>P.activate())):v.activate())})(),K.readURL(),setTimeout((()=>{m.slides.classList.remove("no-transition"),m.wrapper.classList.add("ready"),We({type:"ready",data:{indexh:n,indexv:s,currentSlide:a}})}),1))}function ne(_){m.statusElement.textContent=_}function ge(_){let E="";if(_.nodeType===3)E+=_.textContent;else if(_.nodeType===1){let T=_.getAttribute("aria-hidden"),w=window.getComputedStyle(_).display==="none";T==="true"||w||Array.from(_.childNodes).forEach((k=>{E+=ge(k)}))}return E=E.trim(),E===""?"":E+" "}function de(_){const E={...l};if(typeof _=="object"&&ai(l,_),t.isReady()===!1)return;const T=m.wrapper.querySelectorAll(Fn).length;m.wrapper.classList.remove(E.transition),m.wrapper.classList.add(l.transition),m.wrapper.setAttribute("data-transition-speed",l.transitionSpeed),m.wrapper.setAttribute("data-background-transition",l.backgroundTransition),m.viewport.style.setProperty("--slide-width",typeof l.width=="string"?l.width:l.width+"px"),m.viewport.style.setProperty("--slide-height",typeof l.height=="string"?l.height:l.height+"px"),l.shuffle&&pe(),Ps(m.wrapper,"embedded",l.embedded),Ps(m.wrapper,"rtl",l.rtl),Ps(m.wrapper,"center",l.center),l.pause===!1&&j(),F.reset(),o&&(o.destroy(),o=null),T>1&&l.autoSlide&&l.autoSlideStoppable&&(o=new Ll(m.wrapper,(()=>Math.min(Math.max((Date.now()-R)/f,0),1))),o.on("click",Cs),M=!1),l.navigationMode!=="default"?m.wrapper.setAttribute("data-navigation-mode",l.navigationMode):m.wrapper.removeAttribute("data-navigation-mode"),Oe.configure(l,E),ve.configure(l,E),X.configure(l,E),G.configure(l,E),Q.configure(l,E),W.configure(l,E),z.configure(l,E),L.configure(l,E),ee()}function we(){window.addEventListener("resize",Mi,!1),l.touch&&Ne.bind(),l.keyboard&&W.bind(),l.progress&&Q.bind(),l.respondToHashChanges&&K.bind(),G.bind(),ve.bind(),m.slides.addEventListener("click",Ei,!1),m.slides.addEventListener("transitionend",wn,!1),m.pauseOverlay.addEventListener("click",j,!1),l.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Hi,!1)}function Pe(){Ne.unbind(),ve.unbind(),W.unbind(),G.unbind(),Q.unbind(),K.unbind(),window.removeEventListener("resize",Mi,!1),m.slides.removeEventListener("click",Ei,!1),m.slides.removeEventListener("transitionend",wn,!1),m.pauseOverlay.removeEventListener("click",j,!1)}function Ue(_,E,T){i.addEventListener(_,E,T)}function et(_,E,T){i.removeEventListener(_,E,T)}function ze(_){typeof _.layout=="string"&&(x.layout=_.layout),typeof _.overview=="string"&&(x.overview=_.overview),x.layout?vn(m.slides,x.layout+" "+x.overview):vn(m.slides,x.overview)}function We({target:_=m.wrapper,type:E,data:T,bubbles:w=!0}){let k=document.createEvent("HTMLEvents",1,2);return k.initEvent(E,w,!0),ai(k,T),_.dispatchEvent(k),_===m.wrapper&&mt(E),k}function D(_){We({type:"slidechanged",data:{indexh:n,indexv:s,previousSlide:r,currentSlide:a,origin:_}})}function mt(_,E){if(l.postMessageEvents&&window.parent!==window.self){let T={namespace:"reveal",eventName:_,state:at()};ai(T,E),window.parent.postMessage(JSON.stringify(T),"*")}}function Ie(){if(m.wrapper&&!P.isActive()){const _=m.viewport.offsetWidth,E=m.viewport.offsetHeight;if(!l.disableLayout){li&&!l.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const T=v.isActive()?be(_,E):be(),w=p;He(l.width,l.height),m.slides.style.width=T.width+"px",m.slides.style.height=T.height+"px",p=Math.min(T.presentationWidth/T.width,T.presentationHeight/T.height),p=Math.max(p,l.minScale),p=Math.min(p,l.maxScale),p===1||v.isActive()?(m.slides.style.zoom="",m.slides.style.left="",m.slides.style.top="",m.slides.style.bottom="",m.slides.style.right="",ze({layout:""})):(m.slides.style.zoom="",m.slides.style.left="50%",m.slides.style.top="50%",m.slides.style.bottom="auto",m.slides.style.right="auto",ze({layout:"translate(-50%, -50%) scale("+p+")"}));const k=Array.from(m.wrapper.querySelectorAll(Fn));for(let Z=0,te=k.length;Z<te;Z++){const se=k[Z];se.style.display!=="none"&&(l.center||se.classList.contains("center")?se.classList.contains("stack")?se.style.top=0:se.style.top=Math.max((T.height-se.scrollHeight)/2,0)+"px":se.style.top="")}w!==p&&We({type:"resize",data:{oldScale:w,scale:p,size:T}})}(function(){if(m.wrapper&&!l.disableLayout&&!P.isActive()&&typeof l.scrollActivationWidth=="number"&&l.view!=="scroll"){const T=be();T.presentationWidth>0&&T.presentationWidth<=l.scrollActivationWidth?v.isActive()||(b.create(),v.activate()):v.isActive()&&v.deactivate()}})(),m.viewport.style.setProperty("--slide-scale",p),m.viewport.style.setProperty("--viewport-width",_+"px"),m.viewport.style.setProperty("--viewport-height",E+"px"),v.layout(),Q.update(),b.updateParallax(),O.isActive()&&O.update()}}function He(_,E){Se(m.slides,"section > .stretch, section > .r-stretch").forEach((T=>{let w=((k,Z=0)=>{if(k){let te,se=k.style.height;return k.style.height="0px",k.parentNode.style.height="auto",te=Z-k.parentNode.offsetHeight,k.style.height=se+"px",k.parentNode.style.removeProperty("height"),te}return Z})(T,E);if(/(img|video)/gi.test(T.nodeName)){const k=T.naturalWidth||T.videoWidth,Z=T.naturalHeight||T.videoHeight,te=Math.min(_/k,w/Z);T.style.width=k*te+"px",T.style.height=Z*te+"px"}else T.style.width=_+"px",T.style.height=w+"px"}))}function be(_,E){let T=l.width,w=l.height;l.disableLayout&&(T=m.slides.offsetWidth,w=m.slides.offsetHeight);const k={width:T,height:w,presentationWidth:_||m.wrapper.offsetWidth,presentationHeight:E||m.wrapper.offsetHeight};return k.presentationWidth-=k.presentationWidth*l.margin,k.presentationHeight-=k.presentationHeight*l.margin,typeof k.width=="string"&&/%$/.test(k.width)&&(k.width=parseInt(k.width,10)/100*k.presentationWidth),typeof k.height=="string"&&/%$/.test(k.height)&&(k.height=parseInt(k.height,10)/100*k.presentationHeight),k}function $e(_,E){typeof _=="object"&&typeof _.setAttribute=="function"&&_.setAttribute("data-previous-indexv",E||0)}function Me(_){if(typeof _=="object"&&typeof _.setAttribute=="function"&&_.classList.contains("stack")){const E=_.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(_.getAttribute(E)||0,10)}return 0}function A(_=a){return _&&_.parentNode&&!!_.parentNode.nodeName.match(/section/i)}function y(){return!(!a||!A(a))&&!a.nextElementSibling}function B(){return n===0&&s===0}function Y(){return!!a&&!a.nextElementSibling&&(!A(a)||!a.parentNode.nextElementSibling)}function J(){if(l.pause){const _=m.wrapper.classList.contains("paused");ut(),m.wrapper.classList.add("paused"),_===!1&&We({type:"paused"})}}function j(){const _=m.wrapper.classList.contains("paused");m.wrapper.classList.remove("paused"),Ge(),_&&We({type:"resumed"})}function _e(_){typeof _=="boolean"?_?J():j():ae()?j():J()}function ae(){return m.wrapper.classList.contains("paused")}function le(_,E,T,w){if(We({type:"beforeslidechange",data:{indexh:_===void 0?n:_,indexv:E===void 0?s:E,origin:w}}).defaultPrevented)return;r=a;const k=m.wrapper.querySelectorAll(mn);if(v.isActive()){const ke=v.getSlideByIndices(_,E);return void(ke&&v.scrollToSlide(ke))}if(k.length===0)return;E!==void 0||O.isActive()||(E=Me(k[_])),r&&r.parentNode&&r.parentNode.classList.contains("stack")&&$e(r.parentNode,s);const Z=h.concat();h.length=0;let te=n||0,se=s||0;n=Ae(mn,_===void 0?n:_),s=Ae(ua,E===void 0?s:E);let Ee=n!==te||s!==se;Ee||(r=null);let Re=k[n],ue=Re.querySelectorAll("section");i.classList.toggle("is-vertical-slide",ue.length>1),a=ue[s]||Re;let ye=!1;Ee&&r&&a&&!O.isActive()&&(g="running",ye=Ve(r,a,te,se),ye&&m.slides.classList.add("disable-slide-transitions")),Be(),Ie(),O.isActive()&&O.update(),T!==void 0&&z.goto(T),r&&r!==a&&(r.classList.remove("present"),r.setAttribute("aria-hidden","true"),B()&&setTimeout((()=>{Se(m.wrapper,mn+".stack").forEach((ke=>{$e(ke,0)}))}),0));e:for(let ke=0,Qe=h.length;ke<Qe;ke++){for(let ot=0;ot<Z.length;ot++)if(Z[ot]===h[ke]){Z.splice(ot,1);continue e}m.viewport.classList.add(h[ke]),We({type:h[ke]})}for(;Z.length;)m.viewport.classList.remove(Z.pop());Ee&&D(w),!Ee&&r||(U.stopEmbeddedContent(r),U.startEmbeddedContent(a)),requestAnimationFrame((()=>{ne(ge(a))})),Q.update(),G.update(),Oe.update(),b.update(),b.updateParallax(),L.update(),z.update(),K.writeURL(),Ge(),ye&&(setTimeout((()=>{m.slides.classList.remove("disable-slide-transitions")}),0),l.autoAnimate&&F.run(r,a))}function Ve(_,E,T,w){return _.hasAttribute("data-auto-animate")&&E.hasAttribute("data-auto-animate")&&_.getAttribute("data-auto-animate-id")===E.getAttribute("data-auto-animate-id")&&!(n>T||s>w?E:_).hasAttribute("data-auto-animate-restart")}function ee(){Pe(),we(),Ie(),f=l.autoSlide,Ge(),b.create(),K.writeURL(),l.sortFragmentsOnSync===!0&&z.sortAll(),G.update(),Q.update(),Be(),Oe.update(),Oe.updateVisibility(),ie.update(),b.update(!0),L.update(),U.formatEmbeddedContent(),l.autoPlayMedia===!1?U.stopEmbeddedContent(a,{unloadIframes:!1}):U.startEmbeddedContent(a),O.isActive()&&O.layout()}function pe(_=V()){_.forEach(((E,T)=>{let w=_[Math.floor(Math.random()*_.length)];w.parentNode===E.parentNode&&E.parentNode.insertBefore(E,w);let k=E.querySelectorAll("section");k.length&&pe(k)}))}function Ae(_,E){let T=Se(m.wrapper,_),w=T.length,k=v.isActive()||P.isActive(),Z=!1,te=!1;if(w){l.loop&&(E>=w&&(Z=!0),(E%=w)<0&&(E=w+E,te=!0)),E=Math.max(Math.min(E,w-1),0);for(let ue=0;ue<w;ue++){let ye=T[ue],ke=l.rtl&&!A(ye);ye.classList.remove("past"),ye.classList.remove("present"),ye.classList.remove("future"),ye.setAttribute("hidden",""),ye.setAttribute("aria-hidden","true"),ye.querySelector("section")&&ye.classList.add("stack"),k?ye.classList.add("present"):ue<E?(ye.classList.add(ke?"future":"past"),l.fragments&&Ce(ye)):ue>E?(ye.classList.add(ke?"past":"future"),l.fragments&&me(ye)):ue===E&&l.fragments&&(Z?me(ye):te&&Ce(ye))}let se=T[E],Ee=se.classList.contains("present");se.classList.add("present"),se.removeAttribute("hidden"),se.removeAttribute("aria-hidden"),Ee||We({target:se,type:"visible",bubbles:!1});let Re=se.getAttribute("data-state");Re&&(h=h.concat(Re.split(" ")))}else E=0;return E}function Ce(_){Se(_,".fragment").forEach((E=>{E.classList.add("visible"),E.classList.remove("current-fragment")}))}function me(_){Se(_,".fragment.visible").forEach((E=>{E.classList.remove("visible","current-fragment")}))}function Be(){let _,E,T=V(),w=T.length;if(w&&n!==void 0){let k=O.isActive()?10:l.viewDistance;li&&(k=O.isActive()?6:l.mobileViewDistance),P.isActive()&&(k=Number.MAX_VALUE);for(let Z=0;Z<w;Z++){let te=T[Z],se=Se(te,"section"),Ee=se.length;if(_=Math.abs((n||0)-Z)||0,l.loop&&(_=Math.abs(((n||0)-Z)%(w-k))||0),_<k?U.load(te):U.unload(te),Ee){let Re=Me(te);for(let ue=0;ue<Ee;ue++){let ye=se[ue];E=Math.abs(Z===(n||0)?(s||0)-ue:ue-Re),_+E<k?U.load(ye):U.unload(ye)}}}he()?m.wrapper.classList.add("has-vertical-slides"):m.wrapper.classList.remove("has-vertical-slides"),fe()?m.wrapper.classList.add("has-horizontal-slides"):m.wrapper.classList.remove("has-horizontal-slides")}}function Te({includeFragments:_=!1}={}){let E=m.wrapper.querySelectorAll(mn),T=m.wrapper.querySelectorAll(ua),w={left:n>0,right:n<E.length-1,up:s>0,down:s<T.length-1};if(l.loop&&(E.length>1&&(w.left=!0,w.right=!0),T.length>1&&(w.up=!0,w.down=!0)),E.length>1&&l.navigationMode==="linear"&&(w.right=w.right||w.down,w.left=w.left||w.up),_===!0){let k=z.availableRoutes();w.left=w.left||k.prev,w.up=w.up||k.prev,w.down=w.down||k.next,w.right=w.right||k.next}if(l.rtl){let k=w.left;w.left=w.right,w.right=k}return w}function Ke(_=a){let E=V(),T=0;e:for(let w=0;w<E.length;w++){let k=E[w],Z=k.querySelectorAll("section");for(let te=0;te<Z.length;te++){if(Z[te]===_)break e;Z[te].dataset.visibility!=="uncounted"&&T++}if(k===_)break;k.classList.contains("stack")===!1&&k.dataset.visibility!=="uncounted"&&T++}return T}function I(_){let E,T=n,w=s;if(_)if(v.isActive())T=parseInt(_.getAttribute("data-index-h"),10),_.getAttribute("data-index-v")&&(w=parseInt(_.getAttribute("data-index-v"),10));else{let k=A(_),Z=k?_.parentNode:_,te=V();T=Math.max(te.indexOf(Z),0),w=void 0,k&&(w=Math.max(Se(_.parentNode,"section").indexOf(_),0))}if(!_&&a&&a.querySelectorAll(".fragment").length>0){let k=a.querySelector(".current-fragment");E=k&&k.hasAttribute("data-fragment-index")?parseInt(k.getAttribute("data-fragment-index"),10):a.querySelectorAll(".fragment.visible").length-1}return{h:T,v:w,f:E}}function oe(){return Se(m.wrapper,Fn+':not(.stack):not([data-visibility="uncounted"])')}function V(){return Se(m.wrapper,mn)}function $(){return Se(m.wrapper,".slides>section>section")}function fe(){return V().length>1}function he(){return $().length>1}function Le(){return oe().length}function tt(_,E){let T=V()[_],w=T&&T.querySelectorAll("section");return w&&w.length&&typeof E=="number"?w?w[E]:void 0:T}function at(){let _=I();return{indexh:_.h,indexv:_.v,indexf:_.f,paused:ae(),overview:O.isActive(),...ie.getState()}}function Ge(){if(ut(),a&&l.autoSlide!==!1){let _=a.querySelector(".current-fragment[data-autoslide]"),E=_?_.getAttribute("data-autoslide"):null,T=a.parentNode?a.parentNode.getAttribute("data-autoslide"):null,w=a.getAttribute("data-autoslide");E?f=parseInt(E,10):w?f=parseInt(w,10):T?f=parseInt(T,10):(f=l.autoSlide,a.querySelectorAll(".fragment").length===0&&Se(a,"video, audio").forEach((k=>{k.hasAttribute("data-autoplay")&&f&&1e3*k.duration/k.playbackRate>f&&(f=1e3*k.duration/k.playbackRate+1e3)}))),!f||M||ae()||O.isActive()||Y()&&!z.availableRoutes().next&&l.loop!==!0||(C=setTimeout((()=>{typeof l.autoSlideMethod=="function"?l.autoSlideMethod():an(),Ge()}),f),R=Date.now()),o&&o.setPlaying(C!==-1)}}function ut(){clearTimeout(C),C=-1}function vt(){f&&!M&&(M=!0,We({type:"autoslidepaused"}),clearTimeout(C),o&&o.setPlaying(!1))}function En(){f&&M&&(M=!1,We({type:"autoslideresumed"}),Ge())}function Mn({skipFragments:_=!1}={}){if(u.hasNavigatedHorizontally=!0,v.isActive())return v.prev();l.rtl?(O.isActive()||_||z.next()===!1)&&Te().left&&le(n+1,l.navigationMode==="grid"?s:void 0):(O.isActive()||_||z.prev()===!1)&&Te().left&&le(n-1,l.navigationMode==="grid"?s:void 0)}function wt({skipFragments:_=!1}={}){if(u.hasNavigatedHorizontally=!0,v.isActive())return v.next();l.rtl?(O.isActive()||_||z.prev()===!1)&&Te().right&&le(n-1,l.navigationMode==="grid"?s:void 0):(O.isActive()||_||z.next()===!1)&&Te().right&&le(n+1,l.navigationMode==="grid"?s:void 0)}function An({skipFragments:_=!1}={}){if(v.isActive())return v.prev();(O.isActive()||_||z.prev()===!1)&&Te().up&&le(n,s-1)}function Vn({skipFragments:_=!1}={}){if(u.hasNavigatedVertically=!0,v.isActive())return v.next();(O.isActive()||_||z.next()===!1)&&Te().down&&le(n,s+1)}function Si({skipFragments:_=!1}={}){if(v.isActive())return v.prev();if(_||z.prev()===!1)if(Te().up)An({skipFragments:_});else{let E;if(E=l.rtl?Se(m.wrapper,mn+".future").pop():Se(m.wrapper,mn+".past").pop(),E&&E.classList.contains("stack")){let T=E.querySelectorAll("section").length-1||void 0;le(n-1,T)}else l.rtl?wt({skipFragments:_}):Mn({skipFragments:_})}}function an({skipFragments:_=!1}={}){if(u.hasNavigatedHorizontally=!0,u.hasNavigatedVertically=!0,v.isActive())return v.next();if(_||z.next()===!1){let E=Te();E.down&&E.right&&l.loop&&y()&&(E.down=!1),E.down?Vn({skipFragments:_}):l.rtl?Mn({skipFragments:_}):wt({skipFragments:_})}}function bi(_){let E=_.data;if(typeof E=="string"&&E.charAt(0)==="{"&&E.charAt(E.length-1)==="}"&&(E=JSON.parse(E),E.method&&typeof t[E.method]=="function"))if(hl.test(E.method)===!1){const T=t[E.method].apply(t,E.args);mt("callback",{method:E.method,result:T})}else console.warn('reveal.js: "'+E.method+'" is is blacklisted from the postMessage API')}function wn(_){g==="running"&&/section/gi.test(_.target.nodeName)&&(g="idle",We({type:"slidetransitionend",data:{indexh:n,indexv:s,previousSlide:r,currentSlide:a}}))}function Ei(_){const E=pt(_.target,'a[href^="#"]');if(E){const T=E.getAttribute("href"),w=K.getIndicesFromHash(T);w&&(t.slide(w.h,w.v,w.f),_.preventDefault())}}function Mi(_){Ie()}function Hi(_){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function Gn(_){(document.fullscreenElement||document.webkitFullscreenElement)===m.wrapper&&(_.stopImmediatePropagation(),setTimeout((()=>{t.layout(),t.focus.focus()}),1))}function Cs(_){Y()&&l.loop===!1?(le(0,0),En()):M?En():vt()}const S={VERSION:Mo,initialize:function(_){if(!i)throw'Unable to find presentation root (<div class="reveal">).';if(c)throw"Reveal.js has already been initialized.";if(c=!0,m.wrapper=i,m.slides=i.querySelector(".slides"),!m.slides)throw'Unable to find slides container (<div class="slides">).';return l={...Nl,...l,...e,..._,...da()},/print-pdf/gi.test(window.location.search)&&(l.view="print"),(function(){l.embedded===!0?m.viewport=pt(i,".reveal-viewport")||i:(m.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),m.viewport.classList.add("reveal-viewport")})(),window.addEventListener("load",Ie,!1),re.load(l.plugins,l.dependencies).then(q),new Promise((E=>t.on("ready",E)))},configure:de,destroy:function(){c=!1,d!==!1&&(Pe(),ut(),Oe.destroy(),ve.destroy(),ie.destroy(),re.destroy(),X.destroy(),G.destroy(),Q.destroy(),b.destroy(),L.destroy(),N.destroy(),document.removeEventListener("fullscreenchange",Gn),document.removeEventListener("webkitfullscreenchange",Gn),document.removeEventListener("visibilitychange",Hi,!1),window.removeEventListener("message",bi,!1),window.removeEventListener("load",Ie,!1),m.pauseOverlay&&m.pauseOverlay.remove(),m.statusElement&&m.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),m.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),m.wrapper.removeAttribute("data-transition-speed"),m.wrapper.removeAttribute("data-background-transition"),m.viewport.classList.remove("reveal-viewport"),m.viewport.style.removeProperty("--slide-width"),m.viewport.style.removeProperty("--slide-height"),m.slides.style.removeProperty("width"),m.slides.style.removeProperty("height"),m.slides.style.removeProperty("zoom"),m.slides.style.removeProperty("left"),m.slides.style.removeProperty("top"),m.slides.style.removeProperty("bottom"),m.slides.style.removeProperty("right"),m.slides.style.removeProperty("transform"),Array.from(m.wrapper.querySelectorAll(Fn)).forEach((_=>{_.style.removeProperty("display"),_.style.removeProperty("top"),_.removeAttribute("hidden"),_.removeAttribute("aria-hidden")})))},sync:ee,syncSlide:function(_=a){b.sync(_),z.sync(_),U.load(_),b.update(),Oe.update()},syncFragments:z.sync.bind(z),slide:le,left:Mn,right:wt,up:An,down:Vn,prev:Si,next:an,navigateLeft:Mn,navigateRight:wt,navigateUp:An,navigateDown:Vn,navigatePrev:Si,navigateNext:an,navigateFragment:z.goto.bind(z),prevFragment:z.prev.bind(z),nextFragment:z.next.bind(z),on:Ue,off:et,addEventListener:Ue,removeEventListener:et,layout:Ie,shuffle:pe,availableRoutes:Te,availableFragments:z.availableRoutes.bind(z),toggleHelp:ie.toggleHelp.bind(ie),toggleOverview:O.toggle.bind(O),toggleScrollView:v.toggle.bind(v),togglePause:_e,toggleAutoSlide:function(_){typeof _=="boolean"?_?En():vt():M?En():vt()},toggleJumpToSlide:function(_){typeof _=="boolean"?_?N.show():N.hide():N.isVisible()?N.hide():N.show()},isFirstSlide:B,isLastSlide:Y,isLastVerticalSlide:y,isVerticalSlide:A,isVerticalStack:function(_=a){return _.classList.contains(".stack")||_.querySelector("section")!==null},isPaused:ae,isAutoSliding:function(){return!(!f||M)},isSpeakerNotes:Oe.isSpeakerNotesWindow.bind(Oe),isOverview:O.isActive.bind(O),isFocused:ve.isFocused.bind(ve),isOverlayOpen:ie.isOpen.bind(ie),isScrollView:v.isActive.bind(v),isPrintView:P.isActive.bind(P),isReady:()=>d,loadSlide:U.load.bind(U),unloadSlide:U.unload.bind(U),startEmbeddedContent:()=>U.startEmbeddedContent(a),stopEmbeddedContent:()=>U.stopEmbeddedContent(a,{unloadIframes:!1}),previewIframe:ie.previewIframe.bind(ie),previewImage:ie.previewImage.bind(ie),previewVideo:ie.previewVideo.bind(ie),showPreview:ie.previewIframe.bind(ie),hidePreview:ie.close.bind(ie),addEventListeners:we,removeEventListeners:Pe,dispatchEvent:We,getState:at,setState:function(_){if(typeof _=="object"){le(ri(_.indexh),ri(_.indexv),ri(_.indexf));let E=ri(_.paused),T=ri(_.overview);typeof E=="boolean"&&E!==ae()&&_e(E),typeof T=="boolean"&&T!==O.isActive()&&O.toggle(T),ie.setState(_)}},getProgress:function(){let _=Le(),E=Ke();if(a){let T=a.querySelectorAll(".fragment");T.length>0&&(E+=a.querySelectorAll(".fragment.visible").length/T.length*.9)}return Math.min(E/(_-1),1)},getIndices:I,getSlidesAttributes:function(){return oe().map((_=>{let E={};for(let T=0;T<_.attributes.length;T++){let w=_.attributes[T];E[w.name]=w.value}return E}))},getSlidePastCount:Ke,getTotalSlides:Le,getSlide:tt,getPreviousSlide:()=>r,getCurrentSlide:()=>a,getSlideBackground:function(_,E){let T=typeof _=="number"?tt(_,E):_;if(T)return T.slideBackgroundElement},getSlideNotes:Oe.getSlideNotes.bind(Oe),getSlides:oe,getHorizontalSlides:V,getVerticalSlides:$,hasHorizontalSlides:fe,hasVerticalSlides:he,hasNavigatedHorizontally:()=>u.hasNavigatedHorizontally,hasNavigatedVertically:()=>u.hasNavigatedVertically,shouldAutoAnimateBetween:Ve,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:be,setCurrentScrollPage:function(_,E,T){let w=n||0;n=E,s=T;const k=a!==_;r=a,a=_,a&&r&&l.autoAnimate&&Ve(r,a,w,s)&&F.run(r,a),k&&(r&&(U.stopEmbeddedContent(r),U.stopEmbeddedContent(r.slideBackgroundElement)),U.startEmbeddedContent(a),U.startEmbeddedContent(a.slideBackgroundElement)),requestAnimationFrame((()=>{ne(ge(a))})),D()},getScale:()=>p,getConfig:()=>l,getQueryHash:da,getSlidePath:K.getHash.bind(K),getRevealElement:()=>i,getSlidesElement:()=>m.slides,getViewportElement:()=>m.viewport,getBackgroundsElement:()=>b.element,registerPlugin:re.registerPlugin.bind(re),hasPlugin:re.hasPlugin.bind(re),getPlugin:re.getPlugin.bind(re),getPlugins:re.getRegisteredPlugins.bind(re)};return ai(t,{...S,announceStatus:ne,getStatusText:ge,focus:ve,scroll:v,progress:Q,controls:G,location:K,overview:O,keyboard:W,fragments:z,backgrounds:b,slideContent:U,slideNumber:L,onUserInput:function(_){l.autoSlideStoppable&&vt()},closeOverlay:ie.close.bind(ie),updateSlidesVisibility:Be,layoutSlideContents:He,transformSlides:ze,cueAutoSlide:Ge,cancelAutoSlide:ut}),S}let gn=Ao,ma=[];gn.initialize=i=>(Object.assign(gn,new Ao(document.querySelector(".reveal"),i)),ma.map((e=>e(gn))),gn.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((i=>{gn[i]=(...e)=>{ma.push((t=>t[i].call(null,...e)))}})),gn.isReady=()=>!1,gn.VERSION=Mo;const Il=JSON.parse('[{"slideNumber":1,"fileName":"slide1.xml","title":"JET-Česko Prezentace","texts":["JET-Česko Prezentace"],"images":["./assets/slides/image3.png"]},{"slideNumber":2,"fileName":"slide2.xml","title":"Základní instrukce (hrajeme variantu L)","texts":["Základní instrukce (hrajeme variantu L)","Jak se hra hraje?","1. Jeden tým použije PID a dostane se na svůj hiding spot","2. Ostatní hráči spolupracují a snaží se je najít, za pomocí otázek ohledně jejich lokace, které jsou vybírány z šesti kategorií","3. Po každé zodpovězené otázce si hideři tahají karty ze svého balíčku karet (hider deck)","4. Poté, co je tým nalezen se schovává další tým","5. Na konci vyhrává tým s nejdelším časem, kdy byli schováni (časy se nesčítají, počítá se nejdelší run)","6. Týmy se mohou rozdělit pouze, pokud to danné skupině nepřinese taktickou výhodu (tzn pokud třeba plní úkol musí být skupina pohromadě)"],"images":["./assets/slides/image4.png"]},{"slideNumber":3,"fileName":"slide3.xml","title":"Začátek hry","texts":["Začátek hry","1"],"images":["./assets/slides/image20.png"]},{"slideNumber":4,"fileName":"slide4.xml","title":"Vždyť to nemusíme řešit schováš se a jedem, ne?","texts":["Vždyť to nemusíme řešit schováš se a jedem, ne?"],"images":["./assets/slides/image13.png"]},{"slideNumber":5,"fileName":"slide5.xml","title":"Začátek","texts":["Začátek","Tým vždy při začátku svého schovávacího kola musí:","Vypnout tracker (je-li u někoho zapnutý)","Převzít balíček karet, který před ostatními (alespoň 7x ho zamíchá )(chcete-li matematicky vysvětlit proč, míra rád vysvětlí 😏)","Předat Investigační knihu těm co budou hledat","(Pokud nemají) převzít knihu s pravidly"],"images":["./assets/slides/image8.png"]},{"slideNumber":6,"fileName":"slide6.xml","title":"Hideři","texts":["Hideři","čas nastartovat nepravděpodobnostní pohon"],"images":["./assets/slides/image5.png","./assets/team/lucie-2.png"]},{"slideNumber":7,"fileName":"slide7.xml","title":"Kde se teda schovat?","texts":["Kde se teda schovat?","Jakákoliv zastávka PID, která","- Je obsluhována po celý herní den v intervalech max 1x za 30 min","- Je na oblasti PID P, 0, B,","- Je pro něj dosažitelná do 1 hodiny pomocí kombinace ČD a chůze/běhu*","Po hodině se musíte zastavit na místě kde jste!!!"],"images":["./assets/slides/image6.jpg"]},{"slideNumber":8,"fileName":"slide8.xml","title":"Není spuštěn END-GAME","texts":["Není spuštěn END-GAME","Hiding zóna je určena půl kilometrovou kružnicí okolo stanice Hiderů. Mohou se v ní volně pohybovat a hledat místo pro end game. Nicméně během toho MUSÍ být schopni odpovídat na otázky seekrů","Co je Hiding zóna?","Nadešel END-GAME","END-GAME nastává ve chvíli, kdy seekři dorazí na stanici hidera. V tento moment musí zůstat na místě kde aktuálně jsou. Pokud je v tento moment položena otázka, na kterou fyzicky nejde odpovědět odesílají „nelze odpovědět“"],"images":["./assets/slides/image14.png"]},{"slideNumber":9,"fileName":"slide9.xml","title":"Typy otázek?","texts":["Typy otázek?"],"images":["./assets/slides/image12.png"]},{"slideNumber":10,"fileName":"slide10.xml","title":"Otázky","texts":["Otázky","Hideři mají na zodpovězení otázek 5 min s výjimkou foto otázek, na ty mají 10 min. Pokud nestihnou čas jejich pozastaven do doby než odpoví a netahají si za otázku karty.","Po zodpovězení otázky si tahají karty (konkrétní počty později).","Pokud se seekři na stejnou otázku ptají podruhé, je tahání karet znásobeno (2x, 3x, …). ALE taháno postupně (vytáhnu 3, vyberu si jednu, vytáhnu další 3 vyberu si druhou) NE JINAK!","Maximální počet karet v ruce je 6 (pokud není rozšířena)*"],"images":["./assets/slides/image7.png"]},{"slideNumber":11,"fileName":"slide11.xml","title":"Typy otázek a karty za ně","texts":["Typy otázek a karty za ně","Matching","Je vaše nejbližší X stejné jako, naše X. (cesta, zoo, železnice, kraj, ViaCzechia …)","Taháte 3 berete 1 kartu","Mesuring","Vzhledem k nám jste blíž nebo dál od X. (okraj kraje, Zoo, Park, …)","Taháte 3 berete 1 kartu","Teploměr","Právě jsme urazili X km. Jsme k vám blíž, nebo dál?","Taháte 2 berete 1 kartu.","Radar","Nacházíš se v X km vzdálenosti ode nás?","Taháte 2 berete 1 kartu","Chapadla(tentacles)","Ze všech *místo* ve vzdálenosti X Km od nás kterému jste nejblíž?","Taháte 4 berete 2 karty.","Fotky","Pošli nám fotku *něco*.","Berete si 1 kartu."],"images":["./assets/slides/image21.png"]},{"slideNumber":12,"fileName":"slide12.xml","title":"END-GAME","texts":["END-GAME","V pravidlech je často zmíněna hláška Publicly accessible hiding spot. Znamená to místo, které je veřejně přístupné po celou herní dobu pro všechny hráče. Tohle místo musí být do 3 m od cesty vyznačené v mapě. Místo může být i v oblastech, které nejsou „veřejné“, ale nechceme aby vás z něj někdo v průběhu vykopnul… (restaurace tedy spíš ne, můžete tam být až několik hodin)","Pokud se spustí END-GAME a nenacházíte se na validním místě, musíte se přesunout na nejbližší takové místo. (vyhodnoceno za pomoci mapy)","Přijde-li nějaká otázka která není možná odpovědět posíláte již zmíněné „nelze odpovědět“ ale i tak i za otázku berete příslušný počet karet!","Dobře zvolený spot může přinést hodinu i víc do vašeho času, vybírejte pořádně!"],"images":["./assets/slides/image10.png"]},{"slideNumber":13,"fileName":"slide13.xml","title":"Nalezení","texts":["Nalezení","Hideři se počítají jako nalezení pouze když je vidíte a zároveň jste maximálně 2 m od nich. (počítá se i horizontálně🗼)","Po nalezení a předání všech propriet startuje čas na schování pro následující tým, který startuje z místa, kde byl nalezen tým předchozí.","(tým má v tento moment maximálně 10 min na předání všech propriet nemůže udělat delší přestávku na research)"],"images":["./assets/slides/image9.jpg"]},{"slideNumber":14,"fileName":"slide14.xml","title":"Seekři","texts":["Seekři","Srandokupa ve čtyřech 7:P"],"images":["./assets/slides/image11.png","./assets/team/lucie-3.png"]},{"slideNumber":15,"fileName":"slide15.xml","title":"Je „zakreslování random věcí do mapy“ a „strategizování kam jet“ fakt tak easy?","texts":["Je „zakreslování random věcí do mapy“ a „strategizování kam jet“ fakt tak easy?"],"images":["./assets/slides/image18.png"]},{"slideNumber":16,"fileName":"slide16.xml","title":"Seekři – základní info","texts":["Seekři – základní info","Základními nástroji jsou Investigační kniha! a Fyzická mapa! (poznámka k online nástroji)","Je silně doporučeno zaznamenat si všechny dotázané otázky i odpovědi na ně do Investigační knihy.","VŽDY se můžete ptát jen na jednu otázku, dokud není zodpovězena není možné položit další.","Je přísně zakázáno používat street view (obrázky na google mapách v náhledu místa jsou dovoleny, nicméně nesmíte jimy scrollovat)","JE doporučeno dělat si zastávky k projednání strategie a dalšího postupu"],"images":["./assets/slides/image28.png"]},{"slideNumber":17,"fileName":"slide17.xml","title":"Krátká poznámka k mapám","texts":["Krátká poznámka k mapám","Musíme používat stejnou mapovou aplikaci. Hra je navržena kolem Google map. Nicméně pro pro nás v tomto ohledu budou mnohem lepší mapy.cz","hledající při použití otázky musí specifikovat jakou mapu použili a jaká mista na ní viděli, např, pošlou screen s těmito místy apod.","Pokud nastane jakákoli nejasnost je na hledajících aby požádali a podali dodatečné informace (screenshot jejich mapové aplikace a popis co mají za problém)"],"images":["./assets/slides/image15.png"]},{"slideNumber":18,"fileName":"slide18.xml","title":"Jak si zapisovat jednotlivé typy otázek a jak se na ně ptát?","texts":["Jak si zapisovat jednotlivé typy otázek a jak se na ně ptát?"],"images":["./assets/slides/image26.png","./assets/team/lucie-5.png"]},{"slideNumber":19,"fileName":"slide19.xml","title":"Matching otázky","texts":["Matching otázky","Věci, které jsou mimo ČR nepočítáme (např. zahraniční letiště)","PřepravníLetiště (komerční letiště, ze kterého létají letadla*), Vlaková linka (seekři musí být v hýbajícím se vlaku), délka názvu stanice (počítají se i mezery), ulice/cestaPřírodníHora, ŘekaZájmová místaZábavní parky, Zoo, Akvária, Golfová hřiště, Muzea, KinaSlužbyNemocnice, Knihovny, Ambasády"],"images":["./assets/slides/image19.png","./assets/slides/image22.jpg"]},{"slideNumber":20,"fileName":"slide20.xml","title":"Mesuring otázky","texts":["Mesuring otázky","PřepravníKomerční letiště, Trasy via czechia, Vlakové staniceHraniceStátní hranice, Hranice historického dělení, Kraje, OkresyPřírodníNadmořská výška, Vodní plochy, pobřeží, Hory, ParkyZájmová místaZábavní parky, Zoo, Akvária, Golfová hřiště, Muzea, KinaSlužbyNemocnice, Knihovny, Ambasády"],"images":["./assets/slides/image16.png","./assets/slides/image17.jpg"]},{"slideNumber":21,"fileName":"slide21.xml","title":"Radary","texts":["Radary","Velikosti radarů:","500 m","1 km","2 km","5 km","10 km","15 km","40 km","80 km","160 km","??? (vyber si libovolnou vzdálenost)"],"images":["./assets/slides/image34.png","./assets/slides/image25.jpg"]},{"slideNumber":22,"fileName":"slide22.xml","title":"Teploměry","texts":["Teploměry","Počítá se od středu uražené cesty, kolmicí","Vzdálenosti","1 km","5 km","15 km","75 km"],"images":["./assets/slides/image23.jpg","./assets/slides/image36.png"]},{"slideNumber":23,"fileName":"slide23.xml","title":"Fotečky","texts":["Fotečky","Fotky musí být vyfoceny v originálním poměru, jako má telefon. Zoomování je dovoleno, ale na fotce musí být zachycena všechna vypsaná kritéria. Pokud fotografii nelze vyfotit je odesláno „nelze odpovědět“","*K fotkám bude dále speciální sekce později*"],"images":["./assets/slides/image30.png","./assets/team/lucie-8.png"]},{"slideNumber":24,"fileName":"slide24.xml","title":"Chapadla (tentacles)","texts":["Chapadla (tentacles)","Seekři vyšlou svá „chapadla“, která vycítí.Otázka je opravdu drahá, ale velmi efektivní v zabydlených oblastech.","Použitelná místa:2 kmMuzea, Knihovny, Kina, Nemocnice25kmLinky metra, Zoo, Akvária, Zábavní parky","Doporučuji použít, minule jsme moc nepoužívalí"],"images":["./assets/slides/image27.png","./assets/slides/image29.jpg"]},{"slideNumber":25,"fileName":"slide25.xml","title":"Mapa","texts":["Mapa"],"images":["./assets/slides/image24.png"]},{"slideNumber":26,"fileName":"slide26.xml","title":"Dopřesnění","texts":["Dopřesnění","Spánek, jídlo, nebezpečí?","2"],"images":["./assets/slides/image47.png"]},{"slideNumber":27,"fileName":"slide27.xml","title":"Vůbec nevím co se děje a mám tak tisíc otázek…(ptej se)","texts":["Vůbec nevím co se děje a mám tak tisíc otázek…(ptej se)"],"images":["./assets/slides/image52.png"]},{"slideNumber":28,"fileName":"slide28.xml","title":"Hajdr dek (hider deck)","texts":["Hajdr dek (hider deck)","Obsahuje 3 typy karet – power up, časový bonus, prokletí","Je důležité karty hrát a hrát je ve správný moment, aby měli co největší efekt! (a nebojte se je používat)"],"images":["./assets/slides/image46.png","./assets/slides/image32.jpg"]},{"slideNumber":29,"fileName":"slide29.xml","title":"Časové bonusy","texts":["Časové bonusy","Na kartách bereme čas pro variantu L, je jich zhruba polovina balíčku a jsou v různých velikostech.","Tyto karty platí pouze pokud je máte v ruce, když jste chyceni (ne nutně fyzicky, ale chápeme se)"],"images":["./assets/slides/image39.jpg","./assets/slides/image38.jpg"]},{"slideNumber":30,"fileName":"slide30.xml","title":"Power-upy","texts":["Power-upy","Karty můžete zahrát kdykoliv, balíček jich obsahuje několik typů:","Veto; randomize; Discard 1, draw 2; Draw 1, expand max hand size by 1; Duplicate; Move"],"images":["./assets/slides/image33.jpg","./assets/slides/image40.png"]},{"slideNumber":31,"fileName":"slide31.xml","title":"Kurvy (cursy)","texts":["Kurvy (cursy)","Je jich spousta, každá má casting cost. Některé se dají zahrát jen v určité chvíle.","bla bla bla obrázek"],"images":["./assets/slides/image35.jpg","./assets/slides/image37.png"]},{"slideNumber":32,"fileName":"slide32.xml","title":"Fotky – nejvyšší budova viditelná ze zastávky","texts":["Fotky – nejvyšší budova viditelná ze zastávky","Nejedná se o fyzicky nejvyšší budovu, ale o nejvyšší z vašeho pohledu","Musíte stát přímo u východu ze stanice, pokud je východů víc hideři si vyberou.","Budova se musí nacházet v horní 1/3 fotky a fotka musí obsahovat střechu a obě strany budovy","Přepravní budova a její součásti se nepočítají."],"images":["./assets/slides/image50.png","./assets/slides/image31.jpg"]},{"slideNumber":33,"fileName":"slide33.xml","title":"Fotky – nejvyšší hora viditelná ze stanice","texts":["Fotky – nejvyšší hora viditelná ze stanice","Největší z vaší perspektivy. Max 3x zoom, musí být ve vrchní 1/3 fotky"],"images":["./assets/slides/image45.jpg","./assets/slides/image43.jpg"]},{"slideNumber":34,"fileName":"slide34.xml","title":"Fotky – Obrys nejbližší cesty","texts":["Fotky – Obrys nejbližší cesty","Cesta/ulice musí být viditelná na mapě. Mapa musí být severem nahoru.","Jak na to?","Tužka/fix + papírnebo screenshot cesty a začernění všeho okolo na telefonu"],"images":["./assets/slides/image48.png","./assets/slides/image41.jpg"]},{"slideNumber":35,"fileName":"slide35.xml","title":"Fotky – 2 budovy","texts":["Fotky – 2 budovy","Spodek a až 4 patra (pokud má budova méně, tak všechny parta, ale můžete zoomovat)","Začernění všech identifikovatelných textů a čísel je povoleno"],"images":["./assets/slides/image42.png","./assets/slides/image53.jpg"]},{"slideNumber":36,"fileName":"slide36.xml","title":"Fotky – interiér restaurece","texts":["Fotky – interiér restaurece","Není dovoleno zoomování, pouze začernění.","Musí být pořízeno zvenku skrz okno."],"images":["./assets/slides/image55.png","./assets/slides/image44.jpg"]},{"slideNumber":37,"fileName":"slide37.xml","title":"Fotky – park","texts":["Fotky – park","Není dovoleno zoomování, telefon musí být vzpřímený vzhledem k zemi, fotící musí stát alespoň 2 m od překážky bránící ve výhledu, začernění čísel a názvů dovoleno."],"images":["./assets/slides/image49.png","./assets/slides/image51.jpg","./assets/team/lucie-6.png"]},{"slideNumber":38,"fileName":"slide38.xml","title":"Fotky – ulička v obchodě","texts":["Fotky – ulička v obchodě","Není dovoleno zoomování, fotící musí stát na jednom konci uličky, telefon musí být vzpřímený vzhledem k zemi, začernění identifikujících čísel a názvů dovoleno."],"images":["./assets/slides/image65.png","./assets/slides/image54.jpg","./assets/team/lucie-7.png"]},{"slideNumber":39,"fileName":"slide39.xml","title":"Fotky – místo vyznání víry","texts":["Fotky – místo vyznání víry","Musí obsahovat 2 m x 2 m sekci budovy s alespoň třemi identifikujícími znaky. (pokud by na to místo někdo došel musí si být jistý že našel správné místo)"],"images":["./assets/slides/image56.jpg","./assets/slides/image59.jpg","./assets/slides/image61.png"]},{"slideNumber":40,"fileName":"slide40.xml","title":"Fotky – nádražní budova","texts":["Fotky – nádražní budova","Musí obsahovat 2 m x 2 m sekci budovy s alespoň třemi identifikujícími znaky. (pokud by na to místo někdo došel musí si být jistý že našel správné místo)"],"images":["./assets/slides/image66.png","./assets/slides/image63.jpg","./assets/slides/image58.jpg"]},{"slideNumber":41,"fileName":"slide41.xml","title":"Fotky – Obrys +-1 km cesty","texts":["Fotky – Obrys +-1 km cesty","Cesta/ulice musí být viditelná na mapě. Mapa musí být severem nahoru. Během cesty musí hideři udělat alespoň 5 zatáček bez toho aby prošli stejnou cestou znovu.","Cestu nemusí hideři ujít.","Odesílá se opět jen obrys."],"images":["./assets/slides/image60.png","./assets/slides/image57.jpg"]},{"slideNumber":42,"fileName":"slide42.xml","title":"Herní doba","texts":["Herní doba","Hrajeme od XX:XX v pátek kdy budeme 2 týmy abychom si hru zkusili, konec v pátek bude 20:00","Sobota začneme v 08:00 s tím, že schovávající se vyrazí v 07:00","neděla začátek upravíme podle toho jak nám bude, nicméně začínáte na místě, kde jste včera zkončili"],"images":["./assets/slides/image62.png"]},{"slideNumber":43,"fileName":"slide43.xml","title":"Cestování","texts":["Cestování","Používáme třídenní jízdenku na PID, popř. pokud máte lítačku na pásma P, 0, B","Některé vlaky tut jízdenku podporují také a je povoleno jimi jet","Jezdíme výhradně přepravou PID, pokud se nejedná o nečekanou situaci (hra je pozastavena protože jedete do nemocnice/podobně)","Pokud se jedná o přepravu jiného dopravce, který bere jízdenky PID platí také"],"images":["./assets/slides/image70.png"]},{"slideNumber":44,"fileName":"slide44.xml","title":"Ústí","texts":["Ústí","V Ústeckém kraji hrdě pro svoje integrované spoje vybrali regiojet místo ČD. Musíme učinit společné rozhodnutí, jestli tyto spoje započítat také, nebo jestli si poradíme bez nich","Pro:","Všechny zastávky v ústeckém kraji jsou tímto dostupné","Nestane se že bychom byli v ústí zaseknuti","Proti:","Zvyšuje se útrata na osobu","Složitější hledání spojů","Mírně složitější správa jízdenek (jednotlivce)","Může vést k tomu, že se bude někdo omezovat aby finančně vyšel lépe"],"images":["./assets/slides/image71.png"]},{"slideNumber":45,"fileName":"slide45.xml","title":"Spaní","texts":["Spaní","počítáme se spaním u nás, popř. pokud se nevejdeme u Dana s Janičkou. (ale vešlo se nás sem i víc)"],"images":["./assets/slides/image67.png","./assets/team/lucie-4.png"]},{"slideNumber":46,"fileName":"slide46.xml","title":"Jídlo","texts":["Jídlo","Je požadováno, aby každý snědl minimálně 3 jídla za den. Počítejte s tím, že se může stát, že budete až několik hodin bez možnosti dokoupit si jídlo.","Proto sebou mějte v batůžku snacky a vodu, pokud se naskytne možnost doplňte si."],"images":["./assets/slides/image72.png"]},{"slideNumber":47,"fileName":"slide47.xml","title":"Natáčení","texts":["Natáčení","Točte vše co vám přijde jako důležitý moment (videa můžeme vždy smazat, když tam nebude nic important) optimální je si někde zapřít telefon a namířit ho na sebe (popř. kdyby nebylo slyšet můžete nahrát zvuk na jiný telefon, který budete držet) ideálně natáčejte na šířku","Videa a fotky mi po konci vašeho runu naposílejte na signal!!!!","Jedná se primárně o momenty kdy:","Strategizujete","Zadáváte/odpovídáte na otázku/cursu","Taháte si karty","Stěžujete si (na cokoliv)","Nastupujete/vystupujete ze spoje","Spoj má zpoždění/ujel/zjistíte že na něj musíte běžet","Máte nějaké fajn jídlo/pití","Plníte cursu","Cokoliv jiného zajímavého uznáte za vhodné"],"images":["./assets/slides/image64.png"]},{"slideNumber":48,"fileName":"slide48.xml","title":"Nebezpečné situace","texts":["Nebezpečné situace","Pokud se dostanete do situace kdy se někomu něco stane hra se pozastaví dokud nebude situace vyřešena. Nechoďte na místa, která zvážíte jako riziková (feťácká ulička, stanové městečko bezdomovců, ….).Bezpečí je důležitější než hra!"],"images":["./assets/slides/image68.png"]},{"slideNumber":49,"fileName":"slide49.xml","title":"Stres a hádky","texts":["Stres a hádky","Během hraní se určitě dostanete do situace kdy někdo způsobí problém někomu jinému (unavenost/nedoběhnete spoj/rozpor v tom co dělat dál). V tento moment je důležité se uklidnit, dýchat a v klidu si o situaci promluvit.","Pokud máte neprosto rozdílné názory a opravdu nikdo nechce ustoupit zvolte rozhodnutí náhodou.(např. hod mincí, hod kostkou(sudá/lichá), kámen nůžky, …)","Pamatujte že hádka vám nikdy nepomůže, ztratíte jí čas a většinou i náladu"],"images":["./assets/slides/image73.png","./assets/team/lucie-1.png"]},{"slideNumber":50,"fileName":"slide50.xml","title":"Delší poznámka k mapám","texts":["Delší poznámka k mapám","Využijte možnost stažení map (jak google mapy, tak mapy.cz je mají)","*ukázka měření vzdálenosti*","*ukázka online nástroje*","*další užitečné nástroje* kreslení do map"],"images":["./assets/slides/image69.png"]},{"slideNumber":51,"fileName":"slide51.xml","title":"Všechno!","texts":["Všechno!","OTÁZKY??"],"images":["./assets/slides/image74.png"]}]'),Dl={slides:Il};function Ul(i){if(!i)return;i.innerHTML="";const e=Dl.slides||[];e.forEach((t,n)=>{const s=n;if(s===0){const r=document.createElement("section");r.setAttribute("data-slide-h",String(s)),r.appendChild(kl(t)),r.appendChild(va(e[1]||t,s,1)),i.appendChild(r)}else if(s===1||s===2||s===5){const r=document.createElement("section");r.setAttribute("data-slide-h",String(s)),r.appendChild(ga(t,s)),r.appendChild(va(t,s,1)),i.appendChild(r)}else i.appendChild(ga(t,s))})}function kl(i){const e=document.createElement("section");e.setAttribute("data-auto-animate",""),e.setAttribute("data-slide-number","1"),e.className="slide-section hero-slide";const t=document.createElement("div");t.className="slide-card-3d hero-card";const n=document.createElement("div");n.className="slide-badge fragment",n.setAttribute("data-fragment-index","0"),n.textContent="JET-Česko";const s=document.createElement("h1");s.className="hero-title",s.setAttribute("data-id","main-title"),s.textContent="JET-Česko";const r=document.createElement("p");r.className="hero-subtitle fragment",r.setAttribute("data-fragment-index","1"),r.textContent="Prezentace";const a=document.createElement("div");a.className="hero-media-wrap fragment",a.setAttribute("data-fragment-index","2");const o=document.createElement("img");return o.src=i.images&&i.images[0]||"./assets/slides/image3.png",o.alt="JET-Česko",o.loading="eager",a.appendChild(o),t.appendChild(n),t.appendChild(s),t.appendChild(r),t.appendChild(a),e.appendChild(t),e}function ga(i,e){const t=document.createElement("section");t.setAttribute("data-auto-animate",""),t.setAttribute("data-slide-number",String(i.slideNumber)),t.className="slide-section";const n=document.createElement("div");n.className="slide-card-3d";const s=document.createElement("div");s.className="slide-header";const r=document.createElement("span");r.className="slide-index-pill",r.textContent=`#${i.slideNumber}`;const a=document.createElement("h2");a.className="slide-title",a.setAttribute("data-id",`slide-title-${i.slideNumber}`),a.textContent=i.title,s.appendChild(r),s.appendChild(a),n.appendChild(s);const o=document.createElement("div"),l=(i.images||[]).slice(0,3);o.className=l.length>0?"slide-body has-media":"slide-body text-only";const c=document.createElement("div");c.className="slide-text-col";const d=(i.texts||[]).slice(1);if(d.length===0){const u=document.createElement("p");u.className="slide-lead-text fragment",u.setAttribute("data-fragment-index","0"),u.textContent=i.title;const h=document.createElement("div");h.className="slide-Tag-chip fragment",h.setAttribute("data-fragment-index","1"),h.textContent=`Snímek ${i.slideNumber}`;const p=document.createElement("div");p.className="slide-Tag-chip fragment",p.setAttribute("data-fragment-index","2"),p.textContent="JET-Česko",c.appendChild(u),c.appendChild(h),c.appendChild(p)}else{const u=document.createElement("ul");u.className="slide-bullet-list",d.forEach((h,p)=>{const x=document.createElement("li"),m=Math.min(p,2);x.className="slide-bullet-item fragment",x.setAttribute("data-fragment-index",String(m)),x.textContent=h,u.appendChild(x)});for(let h=d.length;h<3;h++){const p=document.createElement("li");p.className="slide-bullet-item slide-meta-bullet fragment",p.setAttribute("data-fragment-index",String(h)),p.textContent=h===1?`Snímek #${i.slideNumber}`:"JET-Česko (varianta L)",u.appendChild(p)}c.appendChild(u)}if(o.appendChild(c),l.length>0){const u=document.createElement("div");u.className=`slide-media-col media-count-${l.length}`,l.forEach((h,p)=>{const x=document.createElement("div");x.className="media-frame",x.setAttribute("data-id",`media-${i.slideNumber}-${p}`);const m=document.createElement("img");m.src=h,m.alt="",m.loading=e<6?"eager":"lazy",x.appendChild(m),u.appendChild(x)}),o.appendChild(u)}return n.appendChild(o),t.appendChild(n),t}function va(i,e,t){const n=document.createElement("section");n.setAttribute("data-auto-animate",""),n.className="slide-section vertical-detail-slide";const s=document.createElement("div");s.className="slide-card-3d";const r=document.createElement("div");r.className="slide-header";const a=document.createElement("span");a.className="slide-index-pill",a.textContent=`#${i.slideNumber}.${t}`;const o=document.createElement("h2");o.className="slide-title",o.setAttribute("data-id",`slide-title-${i.slideNumber}`),o.textContent=i.title,r.appendChild(a),r.appendChild(o),s.appendChild(r);const l=document.createElement("div");l.className="slide-body has-media";const c=document.createElement("div");c.className="slide-text-col";const d=document.createElement("ul");d.className="slide-bullet-list";const u=(i.texts||[i.title]).slice(0,4);for(;u.length<3;)u.push("JET-Česko (varianta L)");if(u.forEach((h,p)=>{const x=document.createElement("li");x.className="slide-bullet-item fragment",x.setAttribute("data-fragment-index",String(Math.min(p,2))),x.textContent=h,d.appendChild(x)}),c.appendChild(d),l.appendChild(c),i.images&&i.images.length>0){const h=document.createElement("div");h.className="slide-media-col media-count-1";const p=document.createElement("div");p.className="media-frame";const x=document.createElement("img");x.src=i.images[0],x.alt="",p.appendChild(x),h.appendChild(p),l.appendChild(h)}return s.appendChild(l),n.appendChild(s),n}const Fl="modulepreload",Ol=function(i,e){return new URL(i,e).href},_a={},Bl=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(d=>{if(d=Ol(d,n),d in _a)return;_a[d]=!0;const u=d.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const g=o[m];if(g.href===d&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${h}`))return;const x=document.createElement("link");if(x.rel=u?"stylesheet":Fl,u||(x.as="script"),x.crossOrigin="",x.href=d,c&&x.setAttribute("nonce",c),document.head.appendChild(x),u)return new Promise((m,g)=>{x.addEventListener("load",m),x.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},wo="reveal_master_state",xa=new Set(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown","Space"," ","PageUp","PageDown","Home","End","n","p","N","P","Enter","k","j","h","l"]);function zl(i,e=0,t=-1){let n=0;typeof i=="object"&&i!==null?(n=i.indexh??0,e=i.indexv??0,t=i.indexf??-1):n=i??0;const s=Number.isFinite(Number(n))?Math.max(0,Math.floor(Number(n))):0,r=Number.isFinite(Number(e))?Math.max(0,Math.floor(Number(e))):0,a=t==null||Number(t)<0?-1:Math.floor(Number(t)),o=`${s}:${r}:${a}`;let l=2166136261;for(let d=0;d<o.length;d++)l^=o.charCodeAt(d),l=Math.imul(l,16777619);const c=(l>>>0).toString(16).padStart(8,"0");return`h${s}v${r}f${a}_${c}`}function kt(i){if(!i||typeof i!="object")return!1;const e=Number(i.indexh),t=Number(i.indexv),n=Number(i.timestamp),s=Number(i.seq);return!(!Number.isFinite(e)||e<0||!Number.isFinite(t)||t<0||!Number.isFinite(n)||n<=0||!Number.isFinite(s)||s<0||typeof i.stateHash!="string"||i.stateHash.length===0)}function fs({indexh:i=0,indexv:e=0,indexf:t=-1,timestamp:n=Date.now(),masterId:s=null,seq:r=0}={}){const a=Number.isFinite(Number(i))?Math.max(0,Math.floor(Number(i))):0,o=Number.isFinite(Number(e))?Math.max(0,Math.floor(Number(e))):0,l=t==null||Number(t)<0?-1:Math.floor(Number(t)),c=Number.isFinite(Number(r))?Math.max(0,Math.floor(Number(r))):0,d=Number.isFinite(Number(n))?Number(n):Date.now();return{indexh:a,indexv:o,indexf:l,timestamp:d,stateHash:zl(a,o,l),masterId:s?String(s):null,seq:c}}function Hl(i={}){return fs({indexh:0,indexv:0,indexf:-1,timestamp:Date.now(),masterId:i.masterId||null,seq:0})}function Ss(i,e){if(!i||!kt(i))return!1;if(!e||!kt(e))return!0;const t=i.seq??0,n=e.seq??0;return t>n?!0:t<n?!1:(i.timestamp??0)>(e.timestamp??0)}function Vl(i,e){return i===e?!0:!i||!e?!1:i.stateHash===e.stateHash||Number(i.indexh)===Number(e.indexh)&&Number(i.indexv)===Number(e.indexv)&&(i.indexf??-1)===(e.indexf??-1)}function Gl(i,e,t){return!e||!kt(e)?i:!i||!kt(i)?e:t?e.masterId===i.masterId&&Ss(e,i)?e:i:Ss(e,i)?e:i}function To(i=typeof window<"u"?window.location.href:""){try{const t=new URL(i,"http://localhost").searchParams.get("master");return t!==null&&t.trim()!==""}catch{return!1}}function Vi(i,e=typeof sessionStorage<"u"?sessionStorage:null){if(!(!e||!kt(i)))try{e.setItem(wo,JSON.stringify(i))}catch(t){console.warn("[SyncState] Failed to persist state to sessionStorage:",t)}}function Wl(i=typeof sessionStorage<"u"?sessionStorage:null){if(!i)return null;try{const e=i.getItem(wo);if(!e)return null;const t=JSON.parse(e);return kt(t)?t:null}catch{return null}}function Xl(i=typeof window<"u"?window.location.href:""){try{const e=new URL(i,"http://localhost"),t=e.searchParams.get("h"),n=e.searchParams.get("v"),s=e.searchParams.get("f");if(t!==null)return{indexh:Math.max(0,parseInt(t,10)||0),indexv:Math.max(0,parseInt(n,10)||0),indexf:s!==null?parseInt(s,10):-1};const r=e.hash.replace(/^#\/?/,"");if(!r)return null;const a=r.split("/");if(a.length>0&&/^\d+$/.test(a[0])){const o=parseInt(a[0],10),l=a.length>1&&/^\d+$/.test(a[1])?parseInt(a[1],10):0,c=a.length>2&&/^-?\d+$/.test(a[2])?parseInt(a[2],10):-1;return{indexh:o,indexv:l,indexf:c}}}catch{}return null}function jl(i){if(!i||!i.key)return!1;const e=i.target;return e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="m"||i.altKey&&i.key.toLowerCase()==="m"?!1:xa.has(i.key)||xa.has(i.code)||i.keyCode===37||i.keyCode===38||i.keyCode===39||i.keyCode===40||i.keyCode===32||i.keyCode===33||i.keyCode===34||i.keyCode===35||i.keyCode===36}function ql(i){return!i||!i.key?!1:!!(i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="m"||i.altKey&&i.key.toLowerCase()==="m")}class Yl{constructor(e={},t={}){let n=null,s={};e&&(typeof e.configure=="function"||typeof e.on=="function")?(n=e,s=t||{}):typeof e=="object"&&(s=e||{},n=s.reveal||null),this.reveal=n,this.roomId=s.roomId||s.room||"jet-cesko",this.onStatusChange=s.onStatusChange||null,this.isMaster=s.isMaster!==void 0?!!s.isMaster:To(),this.masterId=s.masterId||this._getOrCreateMasterId(),this.seq=0,this.viewersCount=0,this.connected=!1,this.isOnline=typeof navigator<"u"?navigator.onLine??!0:!0,this.isApplyingRemoteState=!1,this.destroyed=!1,this.authoritativeState=null,this.ws=null,this.bc=null,this.peer=null,this.peerConnections=new Set,this.badgeElement=null,this.badgeTextElement=null,this._reconnectTimer=null,this._heartbeatTimer=null,this._pollTimer=null,this._boundKeyDown=this._handleKeyDown.bind(this),this._boundTouchStart=this._handleTouchEvent.bind(this),this._boundTouchMove=this._handleTouchEvent.bind(this),this._boundTouchEnd=this._handleTouchEvent.bind(this),this._boundWheel=this._handleWheelEvent.bind(this),this._boundHashChange=this._handleHashChange.bind(this),this._boundOnline=this._handleOnline.bind(this),this._boundOffline=this._handleOffline.bind(this),this._boundSlideChanged=this._handleRevealChange.bind(this),this._boundFragmentChanged=this._handleRevealChange.bind(this)}_getOrCreateMasterId(){try{const e=sessionStorage.getItem("reveal_master_id");if(e)return e;const t="m_"+Math.random().toString(36).slice(2,10);return sessionStorage.setItem("reveal_master_id",t),t}catch{return"m_default"}}init(){this.isMaster?this._initMasterState():this._initClientLock(),this._setupRevealListeners(),this._setupNetworkListeners(),this._setupBroadcastChannel(),this._connectWebSocket(),this._startPollingFallback(),this._initPeerJSIfNeeded(),this._startHeartbeat(),this._emitStatus()}_initMasterState(){const e=Wl(),t=Xl();let n=0,s=0,r=-1,a=1;if(e&&kt(e))n=e.indexh,s=e.indexv,r=e.indexf??-1,a=e.seq||0,this.masterId=e.masterId||this.masterId;else if(t)n=t.indexh,s=t.indexv,r=t.indexf??-1;else if(this.reveal){const o=this.reveal.getIndices();n=(o==null?void 0:o.h)??0,s=(o==null?void 0:o.v)??0,r=(o==null?void 0:o.f)??-1}this.seq=a,this.authoritativeState=fs({indexh:n,indexv:s,indexf:r,timestamp:Date.now(),masterId:this.masterId,seq:this.seq}),this.reveal&&this.reveal.configure({keyboard:!0,touch:!0,controls:!0,progress:!0,overview:!0,hash:!1,respondToHashChanges:!1}),this._createMasterBadge(),Vi(this.authoritativeState),this._applyStateToReveal(this.authoritativeState,!0),this._updateUrlSilently(this.authoritativeState)}_initClientLock(){this.reveal&&this.reveal.configure({keyboard:!1,touch:!1,controls:!1,progress:!1,overview:!1,hash:!1,respondToHashChanges:!1}),typeof window<"u"&&(window.addEventListener("keydown",this._boundKeyDown,{capture:!0}),window.addEventListener("keyup",this._boundKeyDown,{capture:!0}),window.addEventListener("keypress",this._boundKeyDown,{capture:!0}),window.addEventListener("touchstart",this._boundTouchStart,{capture:!0,passive:!1}),window.addEventListener("touchmove",this._boundTouchMove,{capture:!0,passive:!1}),window.addEventListener("touchend",this._boundTouchEnd,{capture:!0,passive:!1}),window.addEventListener("wheel",this._boundWheel,{capture:!0,passive:!1}),window.addEventListener("hashchange",this._boundHashChange,{capture:!0}),window.addEventListener("popstate",this._boundHashChange,{capture:!0}))}_removeClientLockListeners(){typeof window<"u"&&(window.removeEventListener("keydown",this._boundKeyDown,{capture:!0}),window.removeEventListener("keyup",this._boundKeyDown,{capture:!0}),window.removeEventListener("keypress",this._boundKeyDown,{capture:!0}),window.removeEventListener("touchstart",this._boundTouchStart,{capture:!0}),window.removeEventListener("touchmove",this._boundTouchMove,{capture:!0}),window.removeEventListener("touchend",this._boundTouchEnd,{capture:!0}),window.removeEventListener("wheel",this._boundWheel,{capture:!0}),window.removeEventListener("hashchange",this._boundHashChange,{capture:!0}),window.removeEventListener("popstate",this._boundHashChange,{capture:!0}))}_handleKeyDown(e){if(ql(e)){e.preventDefault(),e.stopPropagation(),e.type==="keydown"&&this.enableMasterMode();return}!this.isMaster&&jl(e)&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.authoritativeState&&this._applyStateToReveal(this.authoritativeState,!0))}_handleTouchEvent(e){this.isMaster||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.authoritativeState&&this._applyStateToReveal(this.authoritativeState,!0))}_handleWheelEvent(e){this.isMaster||(e.preventDefault(),e.stopPropagation())}_handleHashChange(e){if(this.isMaster)return;e&&(e.preventDefault(),e.stopPropagation());const t=this.authoritativeState||Hl();this._applyStateToReveal(t,!0),this._updateUrlSilently(t)}enableMasterMode(){if(this.isMaster)return;this.isMaster=!0,this._removeClientLockListeners(),this.reveal&&this.reveal.configure({keyboard:!0,touch:!0,controls:!0,progress:!0,overview:!0,hash:!1,respondToHashChanges:!1});const e=new URL(window.location.href);e.searchParams.set("master","1"),window.history.replaceState(null,"",e.toString());const t=this.reveal?this.reveal.getIndices():{h:0,v:0,f:-1};this.seq+=1,this.authoritativeState=fs({indexh:t.h??0,indexv:t.v??0,indexf:t.f??-1,timestamp:Date.now(),masterId:this.masterId,seq:this.seq}),Vi(this.authoritativeState),this.broadcastState(this.authoritativeState),this._emitStatus()}_setupRevealListeners(){this.reveal&&(this.reveal.on("slidechanged",this._boundSlideChanged),this.reveal.on("fragmentshown",this._boundFragmentChanged),this.reveal.on("fragmenthidden",this._boundFragmentChanged))}_handleRevealChange(){if(this.isApplyingRemoteState)return;if(!this.isMaster){this.authoritativeState&&this._applyStateToReveal(this.authoritativeState,!0);return}const e=this.reveal.getIndices(),t=(e==null?void 0:e.h)??0,n=(e==null?void 0:e.v)??0,s=(e==null?void 0:e.f)===void 0||(e==null?void 0:e.f)===null?-1:e.f;this.seq+=1;const r=fs({indexh:t,indexv:n,indexf:s,timestamp:Date.now(),masterId:this.masterId,seq:this.seq});this.authoritativeState=r,Vi(r),this._updateUrlSilently(r),this.broadcastState(r),this._emitStatus()}_updateUrlSilently(e){if(!(!e||typeof window>"u"))try{const t=new URL(window.location.href),n=e.indexf>=0?`/${e.indexf}`:"",s=`#/${e.indexh}/${e.indexv}${n}`;t.hash!==s&&(t.hash=s,window.history.replaceState(null,"",t.toString()))}catch{}}_applyStateToReveal(e,t=!1){if(!this.reveal||!kt(e))return;const n=this.reveal.getIndices(),s=(n==null?void 0:n.h)??0,r=(n==null?void 0:n.v)??0,a=(n==null?void 0:n.f)===void 0||(n==null?void 0:n.f)===null?-1:n.f,o=e.indexh,l=e.indexv,c=e.indexf??-1;if(!(!t&&s===o&&r===l&&a===c)){this.isApplyingRemoteState=!0;try{this.reveal.slide(o,l,c)}finally{this.isApplyingRemoteState=!1}}}_handleIncomingState(e,t){if(typeof t=="number"&&(this.viewersCount=t),!kt(e)){this._emitStatus();return}if(this.isMaster){e.masterId===this.masterId&&Ss(e,this.authoritativeState)&&(this.authoritativeState=e,this.seq=Math.max(this.seq,e.seq||0),Vi(e),this._applyStateToReveal(e,!0)),this._emitStatus();return}const n=!this.authoritativeState||Ss(e,this.authoritativeState)||!Vl(e,this.authoritativeState);this.authoritativeState=e,n?(this._applyStateToReveal(e,!0),this._updateUrlSilently(e)):this._applyStateToReveal(e,!1),this._emitStatus()}broadcastState(e=this.authoritativeState){if(!this.isMaster||!kt(e))return;const t={type:"state",payload:e},n=JSON.stringify(t);if(this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(n)}catch{}if(this._postStateHttp(e),this.bc)try{this.bc.postMessage(t)}catch{}for(const s of this.peerConnections)try{s.open&&s.send(t)}catch{}}_setupBroadcastChannel(){if(!(typeof BroadcastChannel>"u"))try{this.bc=new BroadcastChannel(`reveal_sync_${this.roomId}`),this.bc.onmessage=e=>{if(typeof navigator<"u"&&navigator.onLine===!1)return;const t=e.data;t&&(t.type==="state"&&t.payload?this._handleIncomingState(t.payload):t.type==="sync_request"&&this.isMaster&&this.authoritativeState&&this.bc.postMessage({type:"state",payload:this.authoritativeState}))},this.isMaster||this.bc.postMessage({type:"sync_request"})}catch{}}_connectWebSocket(){if(!(this.destroyed||typeof WebSocket>"u"||typeof window>"u")&&!(typeof navigator<"u"&&navigator.onLine===!1))try{if(this.ws&&(this.ws.readyState===WebSocket.OPEN||this.ws.readyState===WebSocket.CONNECTING))return;const e=window.location.protocol==="https:"?"wss:":"ws:",t=this.isMaster?"master":"client",n=`${e}//${window.location.host}/__sync_ws?room=${encodeURIComponent(this.roomId)}&role=${t}`,s=new WebSocket(n);this.ws=s,s.onopen=()=>{this.connected=!0,this.isMaster&&this.authoritativeState?s.send(JSON.stringify({type:"state",payload:this.authoritativeState})):s.send(JSON.stringify({type:"sync_request"})),this._emitStatus()},s.onmessage=r=>{if(!(typeof navigator<"u"&&navigator.onLine===!1))try{const a=JSON.parse(r.data);a.type==="state"&&a.payload?this._handleIncomingState(a.payload,a.clientsCount):a.type==="viewers_count"?(this.viewersCount=a.count??0,this._emitStatus()):a.type==="heartbeat_ack"&&typeof a.clientsCount=="number"&&(this.viewersCount=a.clientsCount,this._emitStatus())}catch{}},s.onclose=()=>{this.ws===s&&(this.connected=!1,this._emitStatus(),this._scheduleReconnect())},s.onerror=()=>{try{s.close()}catch{}}}catch{this._scheduleReconnect()}}_scheduleReconnect(){this.destroyed||(clearTimeout(this._reconnectTimer),this._reconnectTimer=setTimeout(()=>{this._connectWebSocket()},120))}async _postStateHttp(e){if(!(typeof fetch>"u"||!e)&&!(typeof navigator<"u"&&navigator.onLine===!1))try{const t=await fetch(`/__sync_poll?room=${encodeURIComponent(this.roomId)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"state",payload:e})});if(t.ok){const n=await t.json();typeof n.clientsCount=="number"&&(this.viewersCount=n.clientsCount,this._emitStatus())}}catch{}}async _pollStateHttp(){if(!(this.destroyed||typeof fetch>"u")&&!(typeof navigator<"u"&&navigator.onLine===!1))try{const e=await fetch(`/__sync_poll?room=${encodeURIComponent(this.roomId)}`,{method:"GET",cache:"no-store"});if(!e.ok)return;const t=await e.json();t&&t.state?this._handleIncomingState(t.state,t.clientsCount):t&&typeof t.clientsCount=="number"&&(this.viewersCount=t.clientsCount,this._emitStatus())}catch{}}_startPollingFallback(){this._pollStateHttp(),this._pollTimer=setInterval(()=>{this.isMaster?!this.connected&&this.authoritativeState&&this._postStateHttp(this.authoritativeState):this._pollStateHttp()},120)}_setupNetworkListeners(){typeof window>"u"||(window.addEventListener("online",this._boundOnline),window.addEventListener("offline",this._boundOffline))}_handleOnline(){this.isOnline=!0,this._connectWebSocket(),this.isMaster&&this.authoritativeState?this.broadcastState(this.authoritativeState):this.requestSync()}_handleOffline(){if(this.isOnline=!1,this.connected=!1,this.ws){try{this.ws.close()}catch{}this.ws=null}this._emitStatus()}async _initPeerJSIfNeeded(){if(typeof window>"u")return;const e=new URL(window.location.href),t=window.location.hostname.endsWith("github.io"),n=e.searchParams.get("peer")==="1";if(!(!t&&!n))try{const{Peer:s}=await Bl(async()=>{const{Peer:a}=await import("./bundler-BzGNi5Dv.js");return{Peer:a}},[],import.meta.url),r=`preezeentaacee-${this.roomId}-master`;if(this.isMaster){const a=new s(r);this.peer=a,a.on("open",()=>{this.connected=!0,this._emitStatus()}),a.on("connection",o=>{this.peerConnections.add(o),o.on("open",()=>{this.viewersCount=this.peerConnections.size,this.authoritativeState&&o.send({type:"state",payload:this.authoritativeState}),this._emitStatus()}),o.on("data",l=>{l&&l.type==="sync_request"&&this.authoritativeState&&o.send({type:"state",payload:this.authoritativeState})}),o.on("close",()=>{this.peerConnections.delete(o),this.viewersCount=this.peerConnections.size,this._emitStatus()})})}else{const a=new s;this.peer=a,a.on("open",()=>{const o=a.connect(r,{reliable:!0});o.on("open",()=>{this.connected=!0,o.send({type:"sync_request"}),this._emitStatus()}),o.on("data",l=>{l&&l.type==="state"&&l.payload&&this._handleIncomingState(l.payload)})})}}catch{}}_startHeartbeat(){this._heartbeatTimer=setInterval(()=>{if(!this.destroyed&&this.isMaster&&this.authoritativeState&&this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"heartbeat"}))}catch{}},1e3)}getState(){return this.authoritativeState}applyMasterState(e,t=!1){if(!kt(e)||this.isMaster&&!t)return!1;const n=Gl(this.authoritativeState,e,this.isMaster);return!t&&n!==e?!1:(this._handleIncomingState(e),!0)}requestSync(){if(this._pollStateHttp(),this.bc)try{this.bc.postMessage({type:"sync_request"})}catch{}if(this.ws&&this.ws.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify({type:"sync_request"}))}catch{}}_createMasterBadge(){if(typeof document>"u"||!this.isMaster)return;let e=document.getElementById("master-status-badge");if(e){this.badgeElement=e,this.badgeTextElement=document.getElementById("master-status-badge-text");return}const t=document.createElement("div");t.id="master-status-badge",t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.style.cssText=["position: fixed","top: 14px","right: 18px","z-index: 9999","display: inline-flex","align-items: center","gap: 8px","padding: 6px 14px",'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',"font-size: 12px","font-weight: 500","letter-spacing: 0.02em","color: #e2e8f0","background: rgba(15, 23, 42, 0.85)","backdrop-filter: blur(8px)","-webkit-backdrop-filter: blur(8px)","border: 1px solid rgba(255, 255, 255, 0.12)","border-radius: 9999px","box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3)","pointer-events: none","user-select: none","transition: opacity 0.25s ease"].join("; ");const n=document.createElement("span");n.style.cssText=["display: inline-block","width: 8px","height: 8px","border-radius: 50%","background: #10b981","box-shadow: 0 0 8px #10b981"].join("; ");const s=document.createElement("span");s.id="master-status-badge-text",s.textContent="Master (0 viewers)",t.appendChild(n),t.appendChild(s),document.body&&typeof document.body.appendChild=="function"&&document.body.appendChild(t),this.badgeElement=t,this.badgeTextElement=s}_updateViewerBadge(e){if(this.badgeTextElement){const t=e===1?"1 viewer":`${e} viewers`;this.badgeTextElement.textContent=`Master (${t})`}}_emitStatus(){this._updateViewerBadge(this.viewersCount),typeof this.onStatusChange=="function"&&this.onStatusChange({isMaster:this.isMaster,connected:this.connected,viewersCount:this.viewersCount,state:this.authoritativeState})}destroy(){if(this.destroyed=!0,clearTimeout(this._reconnectTimer),clearInterval(this._heartbeatTimer),clearInterval(this._pollTimer),this._removeClientLockListeners(),typeof window<"u"&&(window.removeEventListener("online",this._boundOnline),window.removeEventListener("offline",this._boundOffline)),this.badgeElement&&this.badgeElement.parentNode&&this.badgeElement.parentNode.removeChild(this.badgeElement),this.ws)try{this.ws.close()}catch{}if(this.bc)try{this.bc.close()}catch{}if(this.peer)try{this.peer.destroy()}catch{}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="170",Kl=0,ya=1,$l=2,Ro=1,Zl=2,Jt=3,Sn=0,yt=1,Qt=2,xn=0,ci=1,Sa=2,ba=3,Ea=4,Jl=5,Un=100,Ql=101,ec=102,tc=103,nc=104,ic=200,sc=201,rc=202,ac=203,dr=204,ur=205,oc=206,lc=207,cc=208,dc=209,uc=210,hc=211,fc=212,pc=213,mc=214,hr=0,fr=1,pr=2,hi=3,mr=4,gr=5,vr=6,_r=7,Co=0,gc=1,vc=2,yn=0,_c=1,xc=2,yc=3,Sc=4,bc=5,Ec=6,Mc=7,Po=300,fi=301,pi=302,xr=303,yr=304,Ms=306,Sr=1e3,On=1001,br=1002,Bt=1003,Ac=1004,Gi=1005,Vt=1006,Is=1007,Bn=1008,sn=1009,Lo=1010,No=1011,Di=1012,Qr=1013,zn=1014,en=1015,Ui=1016,ea=1017,ta=1018,mi=1020,Io=35902,Do=1021,Uo=1022,Ot=1023,ko=1024,Fo=1025,di=1026,gi=1027,Oo=1028,na=1029,Bo=1030,ia=1031,sa=1033,ps=33776,ms=33777,gs=33778,vs=33779,Er=35840,Mr=35841,Ar=35842,wr=35843,Tr=36196,Rr=37492,Cr=37496,Pr=37808,Lr=37809,Nr=37810,Ir=37811,Dr=37812,Ur=37813,kr=37814,Fr=37815,Or=37816,Br=37817,zr=37818,Hr=37819,Vr=37820,Gr=37821,_s=36492,Wr=36494,Xr=36495,zo=36283,jr=36284,qr=36285,Yr=36286,wc=3200,Tc=3201,Rc=0,Cc=1,_n="",Ct="srgb",_i="srgb-linear",As="linear",Ze="srgb",Xn=7680,Ma=519,Pc=512,Lc=513,Nc=514,Ho=515,Ic=516,Dc=517,Uc=518,kc=519,Aa=35044,wa="300 es",tn=2e3,bs=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ds=Math.PI/180,Kr=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function Us(i,e,t){return(1-t)*i+t*e}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,s,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],x=n[8],m=s[0],g=s[3],f=s[6],C=s[1],R=s[4],M=s[7],U=s[2],L=s[5],N=s[8];return r[0]=a*m+o*C+l*U,r[3]=a*g+o*R+l*L,r[6]=a*f+o*M+l*N,r[1]=c*m+d*C+u*U,r[4]=c*g+d*R+u*L,r[7]=c*f+d*M+u*N,r[2]=h*m+p*C+x*U,r[5]=h*g+p*R+x*L,r[8]=h*f+p*M+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,p=c*r-a*l,x=t*u+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=u*m,e[1]=(s*c-d*n)*m,e[2]=(o*n-s*a)*m,e[3]=h*m,e[4]=(d*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new De;function Vo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){const i=Es("canvas");return i.style.display="block",i}const Ta={};function Ni(i){i in Ta||(Ta[i]=!0,console.warn(i))}function Bc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function zc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_n?As:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ra=[.64,.33,.3,.6,.15,.06],Ca=[.2126,.7152,.0722],Pa=[.3127,.329],La=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Na=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[_i]:{primaries:Ra,whitePoint:Pa,transfer:As,toXYZ:La,fromXYZ:Na,luminanceCoefficients:Ca,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Ra,whitePoint:Pa,transfer:Ze,toXYZ:La,fromXYZ:Na,luminanceCoefficients:Ca,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let jn;class Vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=Es("canvas")),jn.width=e.width,jn.height=e.height;const n=jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=nn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nn(t[n]/255)*255):t[n]=nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gc=0;class Go{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fs(s[a].image)):r.push(Fs(s[a]))}else r=Fs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wc=0;class St extends xi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=On,s=On,r=Vt,a=Bn,o=Ot,l=sn,c=St.DEFAULT_ANISOTROPY,d=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ki(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Po;St.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],x=l[9],m=l[2],g=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-m)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+m)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(p+1)/2,U=(f+1)/2,L=(d+h)/4,N=(u+m)/4,F=(x+g)/4;return R>M&&R>U?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=L/n,r=N/n):M>U?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=L/s,r=F/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=N/r,s=F/r),this.set(n,s,r,t),this}let C=Math.sqrt((g-x)*(g-x)+(u-m)*(u-m)+(h-d)*(h-d));return Math.abs(C)<.001&&(C=1),this.x=(g-x)/C,this.y=(u-m)/C,this.z=(h-d)/C,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xc extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wo extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jc extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const h=r[a+0],p=r[a+1],x=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=m;return}if(u!==m||l!==h||c!==p||d!==x){let g=1-o;const f=l*h+c*p+d*x+u*m,C=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const U=Math.sqrt(R),L=Math.atan2(U,f*C);g=Math.sin(g*L)/U,o=Math.sin(o*L)/U}const M=o*C;if(l=l*g+h*M,c=c*g+p*M,d=d*g+x*M,u=u*g+m*M,g===1-o){const U=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=U,c*=U,d*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+d*u+l*p-c*h,e[t+1]=l*x+d*h+c*u-o*p,e[t+2]=c*x+d*p+o*h-l*u,e[t+3]=d*x-o*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*p*x,this._y=c*p*u-h*d*x,this._z=c*d*x+h*p*u,this._w=c*d*u-h*p*x;break;case"YXZ":this._x=h*d*u+c*p*x,this._y=c*p*u-h*d*x,this._z=c*d*x-h*p*u,this._w=c*d*u+h*p*x;break;case"ZXY":this._x=h*d*u-c*p*x,this._y=c*p*u+h*d*x,this._z=c*d*x+h*p*u,this._w=c*d*u-h*p*x;break;case"ZYX":this._x=h*d*u-c*p*x,this._y=c*p*u+h*d*x,this._z=c*d*x-h*p*u,this._w=c*d*u+h*p*x;break;case"YZX":this._x=h*d*u+c*p*x,this._y=c*p*u+h*d*x,this._z=c*d*x-h*p*u,this._w=c*d*u-h*p*x;break;case"XZY":this._x=h*d*u-c*p*x,this._y=c*p*u-h*d*x,this._z=c*d*x+h*p*u,this._w=c*d*u+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new H,Ia=new Fi;class Oi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,It):It.fromBufferAttribute(r,a),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(e.matrixWorld),this.union(Wi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),Xi.subVectors(this.max,Ri),qn.subVectors(e.a,Ri),Yn.subVectors(e.b,Ri),Kn.subVectors(e.c,Ri),cn.subVectors(Yn,qn),dn.subVectors(Kn,Yn),Tn.subVectors(qn,Kn);let t=[0,-cn.z,cn.y,0,-dn.z,dn.y,0,-Tn.z,Tn.y,cn.z,0,-cn.x,dn.z,0,-dn.x,Tn.z,0,-Tn.x,-cn.y,cn.x,0,-dn.y,dn.x,0,-Tn.y,Tn.x,0];return!Bs(t,qn,Yn,Kn,Xi)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,qn,Yn,Kn,Xi))?!1:(ji.crossVectors(cn,dn),t=[ji.x,ji.y,ji.z],Bs(t,qn,Yn,Kn,Xi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new H,new H,new H,new H,new H,new H,new H,new H],It=new H,Wi=new Oi,qn=new H,Yn=new H,Kn=new H,cn=new H,dn=new H,Tn=new H,Ri=new H,Xi=new H,ji=new H,Rn=new H;function Bs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rn.fromArray(i,r);const o=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),d=n.dot(Rn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const qc=new Oi,Ci=new H,zs=new H;class ws{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(zs)),this.expandByPoint(Ci.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new H,Hs=new H,qi=new H,un=new H,Vs=new H,Yi=new H,Gs=new H;class Xo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hs.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Hs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qi),o=un.dot(this.direction),l=-un.dot(qi),c=un.lengthSq(),d=Math.abs(1-a*a);let u,h,p,x;if(d>0)if(u=a*l-o,h=a*o-l,x=r*d,u>=0)if(h>=-x)if(h<=x){const m=1/d;u*=m,h*=m,p=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;else h<=-x?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=x?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hs).addScaledVector(qi,h),p}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),s=Yt.dot(Yt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,s,r){Vs.subVectors(t,e),Yi.subVectors(n,e),Gs.crossVectors(Vs,Yi);let a=this.direction.dot(Gs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,e);const l=o*this.direction.dot(Yi.crossVectors(un,Yi));if(l<0)return null;const c=o*this.direction.dot(Vs.cross(un));if(c<0||l+c>a)return null;const d=-o*un.dot(Gs);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,l,c,d,u,h,p,x,m,g){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,p,x,m,g)}set(e,t,n,s,r,a,o,l,c,d,u,h,p,x,m,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=x,f[11]=m,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,p=a*u,x=o*d,m=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=h-m*c,t[9]=-o*l,t[2]=m-h*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*u,x=c*d,m=c*u;t[0]=h+m*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-x,t[6]=m+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*u,x=c*d,m=c*u;t[0]=h-m*o,t[4]=-a*u,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*d,t[9]=m-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*u,x=o*d,m=o*u;t[0]=l*d,t[4]=x*c-p,t[8]=h*c+m,t[1]=l*u,t[5]=m*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,x=o*l,m=o*c;t[0]=l*d,t[4]=m-h*u,t[8]=x*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+x,t[10]=h-m*u}else if(e.order==="XZY"){const h=a*l,p=a*c,x=o*l,m=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+m,t[5]=a*d,t[9]=p*u-x,t[2]=x*u-p,t[6]=o*d,t[10]=m*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yc,e,Kc)}lookAt(e,t,n){const s=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),hn.crossVectors(n,Mt),hn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),hn.crossVectors(n,Mt)),hn.normalize(),Ki.crossVectors(Mt,hn),s[0]=hn.x,s[4]=Ki.x,s[8]=Mt.x,s[1]=hn.y,s[5]=Ki.y,s[9]=Mt.y,s[2]=hn.z,s[6]=Ki.z,s[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],x=n[2],m=n[6],g=n[10],f=n[14],C=n[3],R=n[7],M=n[11],U=n[15],L=s[0],N=s[4],F=s[8],b=s[12],v=s[1],P=s[5],z=s[9],O=s[13],W=s[2],K=s[6],G=s[10],Q=s[14],X=s[3],re=s[7],ie=s[11],ve=s[15];return r[0]=a*L+o*v+l*W+c*X,r[4]=a*N+o*P+l*K+c*re,r[8]=a*F+o*z+l*G+c*ie,r[12]=a*b+o*O+l*Q+c*ve,r[1]=d*L+u*v+h*W+p*X,r[5]=d*N+u*P+h*K+p*re,r[9]=d*F+u*z+h*G+p*ie,r[13]=d*b+u*O+h*Q+p*ve,r[2]=x*L+m*v+g*W+f*X,r[6]=x*N+m*P+g*K+f*re,r[10]=x*F+m*z+g*G+f*ie,r[14]=x*b+m*O+g*Q+f*ve,r[3]=C*L+R*v+M*W+U*X,r[7]=C*N+R*P+M*K+U*re,r[11]=C*F+R*z+M*G+U*ie,r[15]=C*b+R*O+M*Q+U*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],x=e[3],m=e[7],g=e[11],f=e[15];return x*(+r*l*u-s*c*u-r*o*h+n*c*h+s*o*p-n*l*p)+m*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*d-r*l*d)+g*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*d-n*c*d)+f*(-s*o*d-t*l*u+t*o*h+s*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],x=e[12],m=e[13],g=e[14],f=e[15],C=u*g*c-m*h*c+m*l*p-o*g*p-u*l*f+o*h*f,R=x*h*c-d*g*c-x*l*p+a*g*p+d*l*f-a*h*f,M=d*m*c-x*u*c+x*o*p-a*m*p-d*o*f+a*u*f,U=x*u*l-d*m*l-x*o*h+a*m*h+d*o*g-a*u*g,L=t*C+n*R+s*M+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=C*N,e[1]=(m*h*r-u*g*r-m*s*p+n*g*p+u*s*f-n*h*f)*N,e[2]=(o*g*r-m*l*r+m*s*c-n*g*c-o*s*f+n*l*f)*N,e[3]=(u*l*r-o*h*r-u*s*c+n*h*c+o*s*p-n*l*p)*N,e[4]=R*N,e[5]=(d*g*r-x*h*r+x*s*p-t*g*p-d*s*f+t*h*f)*N,e[6]=(x*l*r-a*g*r-x*s*c+t*g*c+a*s*f-t*l*f)*N,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*p+t*l*p)*N,e[8]=M*N,e[9]=(x*u*r-d*m*r-x*n*p+t*m*p+d*n*f-t*u*f)*N,e[10]=(a*m*r-x*o*r+x*n*c-t*m*c-a*n*f+t*o*f)*N,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*p-t*o*p)*N,e[12]=U*N,e[13]=(d*m*s-x*u*s+x*n*h-t*m*h-d*n*g+t*u*g)*N,e[14]=(x*o*s-a*m*s-x*n*l+t*m*l+a*n*g-t*o*g)*N,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*h+t*o*h)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,p=r*d,x=r*u,m=a*d,g=a*u,f=o*u,C=l*c,R=l*d,M=l*u,U=n.x,L=n.y,N=n.z;return s[0]=(1-(m+f))*U,s[1]=(p+M)*U,s[2]=(x-R)*U,s[3]=0,s[4]=(p-M)*L,s[5]=(1-(h+f))*L,s[6]=(g+C)*L,s[7]=0,s[8]=(x+R)*N,s[9]=(g-C)*N,s[10]=(1-(h+m))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$n.set(s[0],s[1],s[2]).length();const a=$n.set(s[4],s[5],s[6]).length(),o=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dt.copy(this);const c=1/r,d=1/a,u=1/o;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=d,Dt.elements[5]*=d,Dt.elements[6]*=d,Dt.elements[8]*=u,Dt.elements[9]*=u,Dt.elements[10]*=u,t.setFromRotationMatrix(Dt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=tn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let p,x;if(o===tn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===bs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn){const l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(a-r),h=(t+e)*c,p=(n+s)*d;let x,m;if(o===tn)x=(a+r)*u,m=-2*u;else if(o===bs)x=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new H,Dt=new st,Yc=new H(0,0,0),Kc=new H(1,1,1),hn=new H,Ki=new H,Mt=new H,Da=new st,Ua=new Fi;class rn{constructor(e=0,t=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $c=0;const ka=new H,Zn=new Fi,Kt=new st,$i=new H,Pi=new H,Zc=new H,Jc=new Fi,Fa=new H(1,0,0),Oa=new H(0,1,0),Ba=new H(0,0,1),za={type:"added"},Qc={type:"removed"},Jn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class bt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new H,t=new rn,n=new Fi,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Ba,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Pi,$i,this.up):Kt.lookAt($i,Pi,this.up),this.quaternion.setFromRotationMatrix(Kt),s&&(Kt.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(za),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qc),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(za),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Jc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new H(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new H,$t=new H,Xs=new H,Zt=new H,Qn=new H,ei=new H,Ha=new H,js=new H,qs=new H,Ys=new H,Ks=new it,$s=new it,Zs=new it;class Ft{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ut.subVectors(e,t),s.cross(Ut);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ut.subVectors(s,t),$t.subVectors(n,t),Xs.subVectors(e,t);const a=Ut.dot(Ut),o=Ut.dot($t),l=Ut.dot(Xs),c=$t.dot($t),d=$t.dot(Xs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,p=(c*l-o*d)*h,x=(a*d-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zt)===null?!1:Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zt.x),l.addScaledVector(a,Zt.y),l.addScaledVector(o,Zt.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ks.setScalar(0),$s.setScalar(0),Zs.setScalar(0),Ks.fromBufferAttribute(e,t),$s.fromBufferAttribute(e,n),Zs.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ks,r.x),a.addScaledVector($s,r.y),a.addScaledVector(Zs,r.z),a}static isFrontFacing(e,t,n,s){return Ut.subVectors(n,t),$t.subVectors(e,t),Ut.cross($t).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Ut.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ft.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,n),ei.subVectors(r,n),js.subVectors(e,n);const l=Qn.dot(js),c=ei.dot(js);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,s);const d=Qn.dot(qs),u=ei.dot(qs);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Qn,a);Ys.subVectors(e,r);const p=Qn.dot(Ys),x=ei.dot(Ys);if(x>=0&&p<=x)return t.copy(r);const m=p*c-l*x;if(m<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(ei,o);const g=d*x-p*u;if(g<=0&&u-d>=0&&p-x>=0)return Ha.subVectors(r,s),o=(u-d)/(u-d+(p-x)),t.copy(s).addScaledVector(Ha,o);const f=1/(g+m+h);return a=m*f,o=h*f,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Fc(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Js(a,r,e+1/3),this.g=Js(a,r,e),this.b=Js(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=qo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Xe.fromWorkingColorSpace(ft.copy(this),e),Math.round(xt(ft.r*255,0,255))*65536+Math.round(xt(ft.g*255,0,255))*256+Math.round(xt(ft.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,s=ft.g,r=ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Ct){Xe.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,s=ft.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Zi);const n=Us(fn.h,Zi.h,t),s=Us(fn.s,Zi.s,t),r=Us(fn.l,Zi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Ye;Ye.NAMES=qo;let ed=0;class Bi extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=ki(),this.name="",this.blending=ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=ur,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ra extends Bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new H,Ji=new Je;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}}class Yo extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ko extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let td=0;const Rt=new st,Qs=new bt,ti=new H,At=new Oi,Li=new Oi,dt=new H;class Xt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vo(e)?Ko:Yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];At.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(At.min,Li.min),At.expandByPoint(dt),dt.addVectors(At.max,Li.max),At.expandByPoint(dt)):(At.expandByPoint(Li.min),At.expandByPoint(Li.max))}At.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)dt.fromBufferAttribute(o,c),l&&(ti.fromBufferAttribute(e,c),dt.add(ti)),s=Math.max(s,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new H,l[F]=new H;const c=new H,d=new H,u=new H,h=new Je,p=new Je,x=new Je,m=new H,g=new H;function f(F,b,v){c.fromBufferAttribute(n,F),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),h.fromBufferAttribute(r,F),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,v),d.sub(c),u.sub(c),p.sub(h),x.sub(h);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(P),o[F].add(m),o[b].add(m),o[v].add(m),l[F].add(g),l[b].add(g),l[v].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let F=0,b=C.length;F<b;++F){const v=C[F],P=v.start,z=v.count;for(let O=P,W=P+z;O<W;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const R=new H,M=new H,U=new H,L=new H;function N(F){U.fromBufferAttribute(s,F),L.copy(U);const b=o[F];R.copy(b),R.sub(U.multiplyScalar(U.dot(b))).normalize(),M.crossVectors(L,b);const P=M.dot(l[F])<0?-1:1;a.setXYZW(F,R.x,R.y,R.z,P)}for(let F=0,b=C.length;F<b;++F){const v=C[F],P=v.start,z=v.count;for(let O=P,W=P+z;O<W;O+=3)N(e.getX(O+0)),N(e.getX(O+1)),N(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,d=new H,u=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let p=0,x=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*d;for(let f=0;f<d;f++)h[x++]=c[p++]}return new Lt(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new st,Cn=new Xo,Qi=new ws,Ga=new H,es=new H,ts=new H,ns=new H,er=new H,is=new H,Wa=new H,ss=new H;class Gt extends bt{constructor(e=new Xt,t=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){is.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(er.fromBufferAttribute(u,e),a?is.addScaledVector(er,d):is.addScaledVector(er.sub(t),d))}t.add(is)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Cn.copy(e.ray).recast(e.near),!(Qi.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Qi,Ga)===null||Cn.origin.distanceToSquared(Ga)>(e.far-e.near)**2))&&(Va.copy(r).invert(),Cn.copy(e.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,m=h.length;x<m;x++){const g=h[x],f=a[g.materialIndex],C=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=C,U=R;M<U;M+=3){const L=o.getX(M),N=o.getX(M+1),F=o.getX(M+2);s=rs(this,f,e,n,c,d,u,L,N,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let g=x,f=m;g<f;g+=3){const C=o.getX(g),R=o.getX(g+1),M=o.getX(g+2);s=rs(this,a,e,n,c,d,u,C,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,m=h.length;x<m;x++){const g=h[x],f=a[g.materialIndex],C=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=C,U=R;M<U;M+=3){const L=M,N=M+1,F=M+2;s=rs(this,f,e,n,c,d,u,L,N,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=x,f=m;g<f;g+=3){const C=g,R=g+1,M=g+2;s=rs(this,a,e,n,c,d,u,C,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function nd(i,e,t,n,s,r,a,o){let l;if(e.side===yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Sn,o),l===null)return null;ss.copy(o),ss.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:i}}function rs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,es),i.getVertexPosition(l,ts),i.getVertexPosition(c,ns);const d=nd(i,e,t,n,es,ts,ns,Wa);if(d){const u=new H;Ft.getBarycoord(Wa,es,ts,ns,u),s&&(d.uv=Ft.getInterpolatedAttribute(s,o,l,c,u,new Je)),r&&(d.uv1=Ft.getInterpolatedAttribute(r,o,l,c,u,new Je)),a&&(d.normal=Ft.getInterpolatedAttribute(a,o,l,c,u,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};Ft.getNormal(es,ts,ns,h.normal),d.face=h,d.barycoord=u}return d}class zi extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(u,2));function x(m,g,f,C,R,M,U,L,N,F,b){const v=M/N,P=U/F,z=M/2,O=U/2,W=L/2,K=N+1,G=F+1;let Q=0,X=0;const re=new H;for(let ie=0;ie<G;ie++){const ve=ie*P-O;for(let Ne=0;Ne<K;Ne++){const Oe=Ne*v-z;re[m]=Oe*C,re[g]=ve*R,re[f]=W,c.push(re.x,re.y,re.z),re[m]=0,re[g]=0,re[f]=L>0?1:-1,d.push(re.x,re.y,re.z),u.push(Ne/N),u.push(1-ie/F),Q+=1}}for(let ie=0;ie<F;ie++)for(let ve=0;ve<N;ve++){const Ne=h+ve+K*ie,Oe=h+ve+K*(ie+1),q=h+(ve+1)+K*(ie+1),ne=h+(ve+1)+K*ie;l.push(Ne,Oe,ne),l.push(Oe,q,ne),X+=6}o.addGroup(p,X,b),p+=X,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gt(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}function id(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $o(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const sd={clone:vi,merge:gt};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zo extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new H,Xa=new Je,ja=new Je;class Pt extends Zo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,ja),t.subVectors(ja,Xa)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class od extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pt(ni,ii,e,t);s.layers=this.layers,this.add(s);const r=new Pt(ni,ii,e,t);r.layers=this.layers,this.add(r);const a=new Pt(ni,ii,e,t);a.layers=this.layers,this.add(a);const o=new Pt(ni,ii,e,t);o.layers=this.layers,this.add(o);const l=new Pt(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new Pt(ni,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Jo extends St{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ld extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:xn});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Vt),new od(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const tr=new H,cd=new H,dd=new De;class In{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=tr.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dd.getNormalMatrix(e),s=this.coplanarPoint(tr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new ws,as=new H;class Qo{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],p=s[8],x=s[9],m=s[10],g=s[11],f=s[12],C=s[13],R=s[14],M=s[15];if(n[0].setComponents(l-r,h-c,g-p,M-f).normalize(),n[1].setComponents(l+r,h+c,g+p,M+f).normalize(),n[2].setComponents(l+a,h+d,g+x,M+C).normalize(),n[3].setComponents(l-a,h-d,g-x,M-C).normalize(),n[4].setComponents(l-o,h-u,g-m,M-R).normalize(),t===tn)n[5].setComponents(l+o,h+u,g+m,M+R).normalize();else if(t===bs)n[5].setComponents(o,u,m,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(as.x=s.normal.x>0?e.max.x:e.min.x,as.y=s.normal.y>0?e.max.y:e.min.y,as.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ud(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<u.length;p++){const x=u[h],m=u[p];m.start<=x.start+x.count+1?x.count=Math.max(x.count,m.start+m.count-x.start):(++h,u[h]=m)}u.length=h+1;for(let p=0,x=u.length;p<x;p++){const m=u[p];i.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ts extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,p=[],x=[],m=[],g=[];for(let f=0;f<d;f++){const C=f*h-a;for(let R=0;R<c;R++){const M=R*u-r;x.push(M,-C,0),m.push(0,0,1),g.push(R/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<o;C++){const R=C+c*f,M=C+c*(f+1),U=C+1+c*(f+1),L=C+1+c*f;p.push(R,M,L),p.push(M,U,L)}this.setIndex(p),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(m,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,du=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Su=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,th=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ah=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ph=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_h=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ah=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ph=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ih=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:hd,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:vd,aomap_fragment:_d,aomap_pars_fragment:xd,batching_pars_vertex:yd,batching_vertex:Sd,begin_vertex:bd,beginnormal_vertex:Ed,bsdfs:Md,iridescence_fragment:Ad,bumpmap_pars_fragment:wd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Nd,color_pars_vertex:Id,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:zd,emissivemap_pars_fragment:Hd,colorspace_fragment:Vd,colorspace_pars_fragment:Gd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:jd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:su,envmap_vertex:Yd,fog_vertex:Kd,fog_pars_vertex:$d,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:eu,lights_lambert_fragment:tu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:du,lights_fragment_begin:uu,lights_fragment_maps:hu,lights_fragment_end:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:vu,map_fragment:_u,map_pars_fragment:xu,map_particle_fragment:yu,map_particle_pars_fragment:Su,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Eu,morphinstance_vertex:Mu,morphcolor_vertex:Au,morphnormal_vertex:wu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Ru,normal_fragment_begin:Cu,normal_fragment_maps:Pu,normal_pars_fragment:Lu,normal_pars_vertex:Nu,normal_vertex:Iu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Uu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:Ou,opaque_fragment:Bu,packing:zu,premultiplied_alpha_fragment:Hu,project_vertex:Vu,dithering_fragment:Gu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:Yu,shadowmap_vertex:Ku,shadowmask_pars_fragment:$u,skinbase_vertex:Zu,skinning_pars_vertex:Ju,skinning_vertex:Qu,skinnormal_vertex:eh,specularmap_fragment:th,specularmap_pars_fragment:nh,tonemapping_fragment:ih,tonemapping_pars_fragment:sh,transmission_fragment:rh,transmission_pars_fragment:ah,uv_pars_fragment:oh,uv_pars_vertex:lh,uv_vertex:ch,worldpos_vertex:dh,background_vert:uh,background_frag:hh,backgroundCube_vert:fh,backgroundCube_frag:ph,cube_vert:mh,cube_frag:gh,depth_vert:vh,depth_frag:_h,distanceRGBA_vert:xh,distanceRGBA_frag:yh,equirect_vert:Sh,equirect_frag:bh,linedashed_vert:Eh,linedashed_frag:Mh,meshbasic_vert:Ah,meshbasic_frag:wh,meshlambert_vert:Th,meshlambert_frag:Rh,meshmatcap_vert:Ch,meshmatcap_frag:Ph,meshnormal_vert:Lh,meshnormal_frag:Nh,meshphong_vert:Ih,meshphong_frag:Dh,meshphysical_vert:Uh,meshphysical_frag:kh,meshtoon_vert:Fh,meshtoon_frag:Oh,points_vert:Bh,points_frag:zh,shadow_vert:Hh,shadow_frag:Vh,sprite_vert:Gh,sprite_frag:Wh},ce={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Ht={basic:{uniforms:gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:gt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:gt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:gt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:gt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:gt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:gt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:gt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:gt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:gt([ce.common,ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:gt([ce.lights,ce.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Ht.physical={uniforms:gt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const os={r:0,b:0,g:0},Ln=new rn,Xh=new st;function jh(i,e,t,n,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,d,u=null,h=0,p=null;function x(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?t:e).get(R)),R}function m(C){let R=!1;const M=x(C);M===null?f(o,l):M&&M.isColor&&(f(M,1),R=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,R){const M=x(R);M&&(M.isCubeTexture||M.mapping===Ms)?(d===void 0&&(d=new Gt(new zi(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:vi(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ln.copy(R.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xh.makeRotationFromEuler(Ln)),d.material.toneMapped=Xe.getTransfer(M.colorSpace)!==Ze,(u!==M||h!==M.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=M,h=M.version,p=i.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gt(new Ts(2,2),new bn({name:"BackgroundMaterial",uniforms:vi(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==Ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function f(C,R){C.getRGB(os,$o(i)),n.buffers.color.setClear(os.r,os.g,os.b,R,a)}return{getClearColor:function(){return o},setClearColor:function(C,R=1){o.set(C),l=R,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,f(o,l)},render:m,addToRenderList:g}}function qh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(v,P,z,O,W){let K=!1;const G=u(O,z,P);r!==G&&(r=G,c(r.object)),K=p(v,O,z,W),K&&x(v,O,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(v,P,z,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function u(v,P,z){const O=z.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let K=W[P.id];K===void 0&&(K={},W[P.id]=K);let G=K[O];return G===void 0&&(G=h(l()),K[O]=G),G}function h(v){const P=[],z=[],O=[];for(let W=0;W<t;W++)P[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,P,z,O){const W=r.attributes,K=P.attributes;let G=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){const ie=W[X];let ve=K[X];if(ve===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),ie===void 0||ie.attribute!==ve||ve&&ie.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function x(v,P,z,O){const W={},K=P.attributes;let G=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){let ie=K[X];ie===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const ve={};ve.attribute=ie,ie&&ie.data&&(ve.data=ie.data),W[X]=ve,G++}r.attributes=W,r.attributesNum=G,r.index=O}function m(){const v=r.newAttributes;for(let P=0,z=v.length;P<z;P++)v[P]=0}function g(v){f(v,0)}function f(v,P){const z=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;z[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),W[v]!==P&&(i.vertexAttribDivisor(v,P),W[v]=P)}function C(){const v=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==v[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function R(v,P,z,O,W,K,G){G===!0?i.vertexAttribIPointer(v,P,z,W,K):i.vertexAttribPointer(v,P,z,O,W,K)}function M(v,P,z,O){m();const W=O.attributes,K=z.getAttributes(),G=P.defaultAttributeValues;for(const Q in K){const X=K[Q];if(X.location>=0){let re=W[Q];if(re===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const ie=re.normalized,ve=re.itemSize,Ne=e.get(re);if(Ne===void 0)continue;const Oe=Ne.buffer,q=Ne.type,ne=Ne.bytesPerElement,ge=q===i.INT||q===i.UNSIGNED_INT||re.gpuType===Qr;if(re.isInterleavedBufferAttribute){const de=re.data,we=de.stride,Pe=re.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<X.locationSize;Ue++)f(X.location+Ue,de.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)g(X.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Ue=0;Ue<X.locationSize;Ue++)R(X.location+Ue,ve/X.locationSize,q,ie,we*ne,(Pe+ve/X.locationSize*Ue)*ne,ge)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)f(X.location+de,re.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<X.locationSize;de++)g(X.location+de);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let de=0;de<X.locationSize;de++)R(X.location+de,ve/X.locationSize,q,ie,ve*ne,ve/X.locationSize*de*ne,ge)}}else if(G!==void 0){const ie=G[Q];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(X.location,ie);break;case 3:i.vertexAttrib3fv(X.location,ie);break;case 4:i.vertexAttrib4fv(X.location,ie);break;default:i.vertexAttrib1fv(X.location,ie)}}}}C()}function U(){F();for(const v in n){const P=n[v];for(const z in P){const O=P[z];for(const W in O)d(O[W].object),delete O[W];delete P[z]}delete n[v]}}function L(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const z in P){const O=P[z];for(const W in O)d(O[W].object),delete O[W];delete P[z]}delete n[v.id]}function N(v){for(const P in n){const z=n[P];if(z[v.id]===void 0)continue;const O=z[v.id];for(const W in O)d(O[W].object),delete O[W];delete z[v.id]}}function F(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:m,enableAttribute:g,disableUnusedAttributes:C}}function Yh(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=d[x];t.update(p,n,1)}function l(c,d,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],d[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m]*h[m];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kh(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Ot&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const F=N===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==sn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==en&&!F)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:M,vertexTextures:U,maxSamples:L}}function $h(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new In,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||s;return s=h,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){const x=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?d(null):c();else{const C=r?0:n,R=C*4;let M=f.clippingState||null;l.value=M,M=d(x,h,R,p);for(let U=0;U!==R;++U)M[U]=t[U];f.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,x){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=l.value,x!==!0||g===null){const f=p+m*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<f)&&(g=new Float32Array(f));for(let R=0,M=p;R!==m;++R,M+=4)a.copy(u[R]).applyMatrix4(C,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function Zh(i){let e=new WeakMap;function t(a,o){return o===xr?a.mapping=fi:o===yr&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xr||o===yr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ld(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Jh extends Zo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,qa=[.125,.215,.35,.446,.526,.582],kn=20,nr=new Jh,Ya=new Ye;let ir=null,sr=0,rr=0,ar=!1;const Dn=(1+Math.sqrt(5))/2,si=1/Dn,Ka=[new H(-Dn,si,0),new H(Dn,si,0),new H(-si,0,Dn),new H(si,0,Dn),new H(0,Dn,-si),new H(0,Dn,si),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class $a{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ir,sr,rr),this._renderer.xr.enabled=ar,e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ui,format:Ot,colorSpace:_i,depthBuffer:!1},s=Za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qh(r)),this._blurMaterial=ef(r,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,nr)}_sceneToCubeUV(e,t,n,s){const o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Ya),d.toneMapping=yn,d.autoClear=!1;const p=new ra({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),x=new Gt(new zi,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Ya),m=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):C===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const R=this._cubeSize;ls(s,C*R,f>2?R:0,R,R),d.setRenderTarget(s),m&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fi||e.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ja());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ka[(s-r-1)%Ka.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Gt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),m=r/x,g=isFinite(r)?1+Math.floor(d*m):kn;g>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kn}`);const f=[];let C=0;for(let N=0;N<kn;++N){const F=N/m,b=Math.exp(-F*F/2);f.push(b),N===0?C+=b:N<g&&(C+=2*b)}for(let N=0;N<f.length;N++)f[N]=f[N]/C;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=x,h.mipInt.value=R-n;const M=this._sizeLods[s],U=3*M*(s>R-oi?s-R+oi:0),L=4*(this._cubeSize-M);ls(t,U,L,3*M,2*M),l.setRenderTarget(t),l.render(u,nr)}}function Qh(i){const e=[],t=[],n=[];let s=i;const r=i-oi+1+qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-oi?l=qa[a-i+oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,x=6,m=3,g=2,f=1,C=new Float32Array(m*x*p),R=new Float32Array(g*x*p),M=new Float32Array(f*x*p);for(let L=0;L<p;L++){const N=L%3*2/3-1,F=L>2?0:-1,b=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];C.set(b,m*x*L),R.set(h,g*x*L);const v=[L,L,L,L,L,L];M.set(v,f*x*L)}const U=new Xt;U.setAttribute("position",new Lt(C,m)),U.setAttribute("uv",new Lt(R,g)),U.setAttribute("faceIndex",new Lt(M,f)),e.push(U),s>oi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Za(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ef(i,e,t){const n=new Float32Array(kn),s=new H(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ja(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Qa(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xr||l===yr,d=l===fi||l===pi;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new $a(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new $a(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function nf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ni("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sf(i,e,t,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const m=h.morphAttributes[x];for(let g=0,f=m.length;g<f;g++)e.remove(m[g])}h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const x in h)e.update(h[x],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const m=p[x];for(let g=0,f=m.length;g<f;g++)e.update(m[g],i.ARRAY_BUFFER)}}function c(u){const h=[],p=u.index,x=u.attributes.position;let m=0;if(p!==null){const C=p.array;m=p.version;for(let R=0,M=C.length;R<M;R+=3){const U=C[R+0],L=C[R+1],N=C[R+2];h.push(U,L,L,N,N,U)}}else if(x!==void 0){const C=x.array;m=x.version;for(let R=0,M=C.length/3-1;R<M;R+=3){const U=R+0,L=R+1,N=R+2;h.push(U,L,L,N,N,U)}}else return;const g=new(Vo(h)?Ko:Yo)(h,1);g.version=m;const f=r.get(u);f&&e.remove(f),r.set(u,g)}function d(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function rf(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*a),t.update(p,n,1)}function c(h,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,h*a,x),t.update(p,n,x))}function d(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,x);let g=0;for(let f=0;f<x;f++)g+=p[f];t.update(g,n,1)}function u(h,p,x,m){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],m[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,m,0,x);let f=0;for(let C=0;C<x;C++)f+=p[C]*m[C];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function af(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function of(i,e,t){const n=new WeakMap,s=new it;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let b=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let R=0;p===!0&&(R=1),x===!0&&(R=2),m===!0&&(R=3);let M=o.attributes.position.count*R,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const L=new Float32Array(M*U*4*u),N=new Wo(L,M,U,u);N.type=en,N.needsUpdate=!0;const F=R*4;for(let v=0;v<u;v++){const P=g[v],z=f[v],O=C[v],W=M*U*4*v;for(let K=0;K<P.count;K++){const G=K*F;p===!0&&(s.fromBufferAttribute(P,K),L[W+G+0]=s.x,L[W+G+1]=s.y,L[W+G+2]=s.z,L[W+G+3]=0),x===!0&&(s.fromBufferAttribute(z,K),L[W+G+4]=s.x,L[W+G+5]=s.y,L[W+G+6]=s.z,L[W+G+7]=0),m===!0&&(s.fromBufferAttribute(O,K),L[W+G+8]=s.x,L[W+G+9]=s.y,L[W+G+10]=s.z,L[W+G+11]=O.itemSize===4?s.w:1)}}h={count:u,texture:N,size:new Je(M,U)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function lf(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class tl extends St{constructor(e,t,n,s,r,a,o,l,c,d=di){if(d!==di&&d!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===di&&(n=zn),n===void 0&&d===gi&&(n=mi),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nl=new St,eo=new tl(1,1),il=new Wo,sl=new jc,rl=new Jo,to=[],no=[],io=new Float32Array(16),so=new Float32Array(9),ro=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=to[s];if(r===void 0&&(r=new Float32Array(s),to[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=no[e];t===void 0&&(t=new Int32Array(e),no[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function ff(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;ro.set(n),i.uniformMatrix2fv(this.addr,!1,ro),ct(t,n)}}function pf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;so.set(n),i.uniformMatrix3fv(this.addr,!1,so),ct(t,n)}}function mf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;io.set(n),i.uniformMatrix4fv(this.addr,!1,io),ct(t,n)}}function gf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function Mf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eo.compareFunction=Ho,r=eo):r=nl,t.setTexture2D(e||r,s)}function Af(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sl,s)}function wf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rl,s)}function Tf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||il,s)}function Rf(i){switch(i){case 5126:return cf;case 35664:return df;case 35665:return uf;case 35666:return hf;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return vf;case 35668:case 35672:return _f;case 35669:case 35673:return xf;case 5125:return yf;case 36294:return Sf;case 36295:return bf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Tf}}function Cf(i,e){i.uniform1fv(this.addr,e)}function Pf(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Lf(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Nf(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function If(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Df(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Uf(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kf(i,e){i.uniform1iv(this.addr,e)}function Ff(i,e){i.uniform2iv(this.addr,e)}function Of(i,e){i.uniform3iv(this.addr,e)}function Bf(i,e){i.uniform4iv(this.addr,e)}function zf(i,e){i.uniform1uiv(this.addr,e)}function Hf(i,e){i.uniform2uiv(this.addr,e)}function Vf(i,e){i.uniform3uiv(this.addr,e)}function Gf(i,e){i.uniform4uiv(this.addr,e)}function Wf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nl,r[a])}function Xf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sl,r[a])}function jf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rl,r[a])}function qf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||il,r[a])}function Yf(i){switch(i){case 5126:return Cf;case 35664:return Pf;case 35665:return Lf;case 35666:return Nf;case 35674:return If;case 35675:return Df;case 35676:return Uf;case 5124:case 35670:return kf;case 35667:case 35671:return Ff;case 35668:case 35672:return Of;case 35669:case 35673:return Bf;case 5125:return zf;case 36294:return Hf;case 36295:return Vf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return qf}}class Kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rf(t.type)}}class $f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yf(t.type)}}class Zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function ao(i,e){i.seq.push(e),i.map[e.id]=e}function Jf(i,e,t){const n=i.name,s=n.length;for(or.lastIndex=0;;){const r=or.exec(n),a=or.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ao(t,c===void 0?new Kf(o,i,e):new $f(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Zf(o),ao(t,u)),t=u}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Jf(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function oo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Qf=37297;let ep=0;function tp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lo=new De;function np(i){Xe._getMatrix(lo,Xe.workingColorSpace,i);const e=`mat3( ${lo.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case As:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function co(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tp(i.getShaderSource(e),a)}else return s}function ip(i,e){const t=np(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sp(i,e){let t;switch(e){case _c:t="Linear";break;case xc:t="Reinhard";break;case yc:t="Cineon";break;case Sc:t="ACESFilmic";break;case Ec:t="AgX";break;case Mc:t="Neutral";break;case bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cs=new H;function rp(){Xe.getLuminanceCoefficients(cs);const i=cs.x.toFixed(4),e=cs.y.toFixed(4),t=cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ap(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function op(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ii(i){return i!==""}function uo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ho(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(i){return i.replace(cp,up)}const dp=new Map;function up(i,e){let t=Fe[e];if(t===void 0){const n=dp.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $r(t)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(i){return i.replace(hp,fp)}function fp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function po(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ro?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jt&&(e="SHADOWMAP_TYPE_VSM"),e}function mp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function vp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Co:e="ENVMAP_BLENDING_MULTIPLY";break;case gc:e="ENVMAP_BLENDING_MIX";break;case vc:e="ENVMAP_BLENDING_ADD";break}return e}function _p(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pp(t),c=mp(t),d=gp(t),u=vp(t),h=_p(t),p=ap(t),x=op(r),m=s.createProgram();let g,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ii).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ii).join(`
`),f.length>0&&(f+=`
`)):(g=[po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),f=[po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==yn?sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,ip("linearToOutputTexel",t.outputColorSpace),rp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=$r(a),a=uo(a,t),a=ho(a,t),o=$r(o),o=uo(o,t),o=ho(o,t),a=fo(a),o=fo(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=C+g+a,M=C+f+o,U=oo(s,s.VERTEX_SHADER,R),L=oo(s,s.FRAGMENT_SHADER,M);s.attachShader(m,U),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(U).trim(),W=s.getShaderInfoLog(L).trim();let K=!0,G=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,U,L);else{const Q=co(s,U,"vertex"),X=co(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Q+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(G=!1);G&&(P.diagnostics={runnable:K,programLog:z,vertexShader:{log:O,prefix:g},fragmentShader:{log:W,prefix:f}})}s.deleteShader(U),s.deleteShader(L),F=new xs(s,m),b=lp(s,m)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(m,Qf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ep++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=U,this.fragmentShader=L,this}let yp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bp(e),t.set(e,n)),n}}class bp{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}}function Ep(i,e,t,n,s,r,a){const o=new jo,l=new Sp,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,v,P,z,O){const W=z.fog,K=O.geometry,G=b.isMeshStandardMaterial?z.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),X=Q&&Q.mapping===Ms?Q.image.height:null,re=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ie=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=ie!==void 0?ie.length:0;let Ne=0;K.morphAttributes.position!==void 0&&(Ne=1),K.morphAttributes.normal!==void 0&&(Ne=2),K.morphAttributes.color!==void 0&&(Ne=3);let Oe,q,ne,ge;if(re){const Ge=Ht[re];Oe=Ge.vertexShader,q=Ge.fragmentShader}else Oe=b.vertexShader,q=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),ge=l.getFragmentShaderID(b);const de=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,et=!!b.map,ze=!!b.matcap,We=!!Q,D=!!b.aoMap,mt=!!b.lightMap,Ie=!!b.bumpMap,He=!!b.normalMap,be=!!b.displacementMap,$e=!!b.emissiveMap,Me=!!b.metalnessMap,A=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,Y=b.dispersion>0,J=b.iridescence>0,j=b.sheen>0,_e=b.transmission>0,ae=y&&!!b.anisotropyMap,le=B&&!!b.clearcoatMap,Ve=B&&!!b.clearcoatNormalMap,ee=B&&!!b.clearcoatRoughnessMap,pe=J&&!!b.iridescenceMap,Ae=J&&!!b.iridescenceThicknessMap,Ce=j&&!!b.sheenColorMap,me=j&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Te=!!b.specularColorMap,Ke=!!b.specularIntensityMap,I=_e&&!!b.transmissionMap,oe=_e&&!!b.thicknessMap,V=!!b.gradientMap,$=!!b.alphaMap,fe=b.alphaTest>0,he=!!b.alphaHash,Le=!!b.extensions;let tt=yn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(tt=i.toneMapping);const at={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:q,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:_i,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:ze,envMap:We,envMapMode:We&&Q.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:mt,bumpMap:Ie,normalMap:He,displacementMap:h&&be,emissiveMap:$e,normalMapObjectSpace:He&&b.normalMapType===Cc,normalMapTangentSpace:He&&b.normalMapType===Rc,metalnessMap:Me,roughnessMap:A,anisotropy:y,anisotropyMap:ae,clearcoat:B,clearcoatMap:le,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:J,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:me,specularMap:Be,specularColorMap:Te,specularIntensityMap:Ke,transmission:_e,transmissionMap:I,thicknessMap:oe,gradientMap:V,opaque:b.transparent===!1&&b.blending===ci&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:fe,alphaHash:he,combine:b.combine,mapUv:et&&m(b.map.channel),aoMapUv:D&&m(b.aoMap.channel),lightMapUv:mt&&m(b.lightMap.channel),bumpMapUv:Ie&&m(b.bumpMap.channel),normalMapUv:He&&m(b.normalMap.channel),displacementMapUv:be&&m(b.displacementMap.channel),emissiveMapUv:$e&&m(b.emissiveMap.channel),metalnessMapUv:Me&&m(b.metalnessMap.channel),roughnessMapUv:A&&m(b.roughnessMap.channel),anisotropyMapUv:ae&&m(b.anisotropyMap.channel),clearcoatMapUv:le&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(b.sheenRoughnessMap.channel),specularMapUv:Be&&m(b.specularMap.channel),specularColorMapUv:Te&&m(b.specularColorMap.channel),specularIntensityMapUv:Ke&&m(b.specularIntensityMap.channel),transmissionMapUv:I&&m(b.transmissionMap.channel),thicknessMapUv:oe&&m(b.thicknessMap.channel),alphaMapUv:$&&m(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(He||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(et||$),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:we,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===Ze,decodeVideoTextureEmissive:$e&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===Ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qt,flipSided:b.side===yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Le&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&b.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function f(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)v.push(P),v.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(C(v,b),R(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function C(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function R(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){const v=x[b.type];let P;if(v){const z=Ht[v];P=sd.clone(z.uniforms)}else P=b.uniforms;return P}function U(b,v){let P;for(let z=0,O=d.length;z<O;z++){const W=d[z];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new xp(i,v,b,r),d.push(P)),P}function L(b){if(--b.usedTimes===0){const v=d.indexOf(b);d[v]=d[d.length-1],d.pop(),b.destroy()}}function N(b){l.remove(b)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:M,acquireProgram:U,releaseProgram:L,releaseShaderCache:N,programs:d,dispose:F}}function Mp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ap(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function go(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,h,p,x,m,g){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:p,groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=m,f.group=g),e++,f}function o(u,h,p,x,m,g){const f=a(u,h,p,x,m,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,h,p,x,m,g){const f=a(u,h,p,x,m,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||Ap),n.length>1&&n.sort(h||mo),s.length>1&&s.sort(h||mo)}function d(){for(let u=e,h=i.length;u<h;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function wp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new go,i.set(n,[a])):s>=r.length?(a=new go,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ye};break;case"SpotLight":t={position:new H,direction:new H,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cp=0;function Pp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lp(i){const e=new Tp,t=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new st,a=new st;function o(c){let d=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,m=0,g=0,f=0,C=0,R=0,M=0,U=0,L=0,N=0;c.sort(Pp);for(let b=0,v=c.length;b<v;b++){const P=c[b],z=P.color,O=P.intensity,W=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*O,u+=z.g*O,h+=z.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);N++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,X=t.get(P);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=P.shadow.matrix,C++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[m]=G;const Q=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,Q.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[m]=Q.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[m]=X,n.spotShadowMap[m]=K,M++}m++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(z).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=G,g++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Q=P.shadow,X=t.get(P);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=P.shadow.matrix,R++}n.point[x]=G,x++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==p||F.pointLength!==x||F.spotLength!==m||F.rectAreaLength!==g||F.hemiLength!==f||F.numDirectionalShadows!==C||F.numPointShadows!==R||F.numSpotShadows!==M||F.numSpotMaps!==U||F.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+U-L,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=N,F.directionalLength=p,F.pointLength=x,F.spotLength=m,F.rectAreaLength=g,F.hemiLength=f,F.numDirectionalShadows=C,F.numPointShadows=R,F.numSpotShadows=M,F.numSpotMaps=U,F.numLightProbes=N,n.version=Cp++)}function l(c,d){let u=0,h=0,p=0,x=0,m=0;const g=d.matrixWorldInverse;for(let f=0,C=c.length;f<C;f++){const R=c[f];if(R.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(R.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(R.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(g),h++}else if(R.isHemisphereLight){const M=n.hemi[m];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function vo(i){const e=new Lp(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Np(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vo(i),e.set(s,[o])):r>=a.length?(o=new vo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ip extends Bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dp extends Bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fp(i,e,t){let n=new Qo;const s=new Je,r=new Je,a=new it,o=new Ip({depthPacking:Tc}),l=new Dp,c={},d=t.maxTextureSize,u={[Sn]:yt,[yt]:Sn,[Qt]:Qt},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Up,fragmentShader:kp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Xt;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Gt(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let f=this.type;this.render=function(L,N,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==Jt&&this.type===Jt,W=f===Jt&&this.type!==Jt;for(let K=0,G=L.length;K<G;K++){const Q=L[K],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const re=X.getFrameExtents();if(s.multiply(re),r.copy(X.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/re.y),s.y=r.y*re.y,X.mapSize.y=r.y)),X.map===null||O===!0||W===!0){const ve=this.type!==Jt?{minFilter:Bt,magFilter:Bt}:{};X.map!==null&&X.map.dispose(),X.map=new Hn(s.x,s.y,ve),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ie=X.getViewportCount();for(let ve=0;ve<ie;ve++){const Ne=X.getViewport(ve);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),z.viewport(a),X.updateMatrices(Q,ve),n=X.getFrustum(),M(N,F,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Jt&&C(X,F),X.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(b,v,P)};function C(L,N){const F=e.update(m);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hn(s.x,s.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(N,null,F,h,m,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(N,null,F,p,m,null)}function R(L,N,F,b){let v=null;const P=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)v=P;else if(v=F.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const z=v.uuid,O=N.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let K=W[O];K===void 0&&(K=v.clone(),W[O]=K,N.addEventListener("dispose",U)),v=K}if(v.visible=N.visible,v.wireframe=N.wireframe,b===Jt?v.side=N.shadowSide!==null?N.shadowSide:N.side:v.side=N.shadowSide!==null?N.shadowSide:u[N.side],v.alphaMap=N.alphaMap,v.alphaTest=N.alphaTest,v.map=N.map,v.clipShadows=N.clipShadows,v.clippingPlanes=N.clippingPlanes,v.clipIntersection=N.clipIntersection,v.displacementMap=N.displacementMap,v.displacementScale=N.displacementScale,v.displacementBias=N.displacementBias,v.wireframeLinewidth=N.wireframeLinewidth,v.linewidth=N.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=i.properties.get(v);z.light=F}return v}function M(L,N,F,b,v){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===Jt)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const O=e.update(L),W=L.material;if(Array.isArray(W)){const K=O.groups;for(let G=0,Q=K.length;G<Q;G++){const X=K[G],re=W[X.materialIndex];if(re&&re.visible){const ie=R(L,re,b,v);L.onBeforeShadow(i,L,N,F,O,ie,X),i.renderBufferDirect(F,null,O,ie,L,X),L.onAfterShadow(i,L,N,F,O,ie,X)}}}else if(W.visible){const K=R(L,W,b,v);L.onBeforeShadow(i,L,N,F,O,K,null),i.renderBufferDirect(F,null,O,K,L,null),L.onAfterShadow(i,L,N,F,O,K,null)}}const z=L.children;for(let O=0,W=z.length;O<W;O++)M(z[O],N,F,b,v)}function U(L){L.target.removeEventListener("dispose",U);for(const F in c){const b=c[F],v=L.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const Op={[hr]:fr,[pr]:vr,[mr]:_r,[hi]:gr,[fr]:hr,[vr]:pr,[_r]:mr,[gr]:hi};function Bp(i,e){function t(){let I=!1;const oe=new it;let V=null;const $=new it(0,0,0,0);return{setMask:function(fe){V!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),V=fe)},setLocked:function(fe){I=fe},setClear:function(fe,he,Le,tt,at){at===!0&&(fe*=tt,he*=tt,Le*=tt),oe.set(fe,he,Le,tt),$.equals(oe)===!1&&(i.clearColor(fe,he,Le,tt),$.copy(oe))},reset:function(){I=!1,V=null,$.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,V=null,$=null,fe=null;return{setReversed:function(he){if(oe!==he){const Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const tt=fe;fe=null,this.setClear(tt)}oe=he},getReversed:function(){return oe},setTest:function(he){he?de(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(he){V!==he&&!I&&(i.depthMask(he),V=he)},setFunc:function(he){if(oe&&(he=Op[he]),$!==he){switch(he){case hr:i.depthFunc(i.NEVER);break;case fr:i.depthFunc(i.ALWAYS);break;case pr:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case mr:i.depthFunc(i.EQUAL);break;case gr:i.depthFunc(i.GEQUAL);break;case vr:i.depthFunc(i.GREATER);break;case _r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=he}},setLocked:function(he){I=he},setClear:function(he){fe!==he&&(oe&&(he=1-he),i.clearDepth(he),fe=he)},reset:function(){I=!1,V=null,$=null,fe=null,oe=!1}}}function s(){let I=!1,oe=null,V=null,$=null,fe=null,he=null,Le=null,tt=null,at=null;return{setTest:function(Ge){I||(Ge?de(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Ge){oe!==Ge&&!I&&(i.stencilMask(Ge),oe=Ge)},setFunc:function(Ge,ut,vt){(V!==Ge||$!==ut||fe!==vt)&&(i.stencilFunc(Ge,ut,vt),V=Ge,$=ut,fe=vt)},setOp:function(Ge,ut,vt){(he!==Ge||Le!==ut||tt!==vt)&&(i.stencilOp(Ge,ut,vt),he=Ge,Le=ut,tt=vt)},setLocked:function(Ge){I=Ge},setClear:function(Ge){at!==Ge&&(i.clearStencil(Ge),at=Ge)},reset:function(){I=!1,oe=null,V=null,$=null,fe=null,he=null,Le=null,tt=null,at=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,p=[],x=null,m=!1,g=null,f=null,C=null,R=null,M=null,U=null,L=null,N=new Ye(0,0,0),F=0,b=!1,v=null,P=null,z=null,O=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=Q>=2);let re=null,ie={};const ve=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Oe=new it().fromArray(ve),q=new it().fromArray(Ne);function ne(I,oe,V,$){const fe=new Uint8Array(4),he=i.createTexture();i.bindTexture(I,he),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<V;Le++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return he}const ge={};ge[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(hi),Ie(!1),He(ya),de(i.CULL_FACE),D(xn);function de(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function we(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Pe(I,oe){return u[I]!==oe?(i.bindFramebuffer(I,oe),u[I]=oe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ue(I,oe){let V=p,$=!1;if(I){V=h.get(oe),V===void 0&&(V=[],h.set(oe,V));const fe=I.textures;if(V.length!==fe.length||V[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Le=fe.length;he<Le;he++)V[he]=i.COLOR_ATTACHMENT0+he;V.length=fe.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function et(I){return x!==I?(i.useProgram(I),x=I,!0):!1}const ze={[Un]:i.FUNC_ADD,[Ql]:i.FUNC_SUBTRACT,[ec]:i.FUNC_REVERSE_SUBTRACT};ze[tc]=i.MIN,ze[nc]=i.MAX;const We={[ic]:i.ZERO,[sc]:i.ONE,[rc]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[uc]:i.SRC_ALPHA_SATURATE,[cc]:i.DST_COLOR,[oc]:i.DST_ALPHA,[ac]:i.ONE_MINUS_SRC_COLOR,[ur]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[lc]:i.ONE_MINUS_DST_ALPHA,[hc]:i.CONSTANT_COLOR,[fc]:i.ONE_MINUS_CONSTANT_COLOR,[pc]:i.CONSTANT_ALPHA,[mc]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,oe,V,$,fe,he,Le,tt,at,Ge){if(I===xn){m===!0&&(we(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),I!==Jl){if(I!==g||Ge!==b){if((f!==Un||M!==Un)&&(i.blendEquation(i.FUNC_ADD),f=Un,M=Un),Ge)switch(I){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}C=null,R=null,U=null,L=null,N.set(0,0,0),F=0,g=I,b=Ge}return}fe=fe||oe,he=he||V,Le=Le||$,(oe!==f||fe!==M)&&(i.blendEquationSeparate(ze[oe],ze[fe]),f=oe,M=fe),(V!==C||$!==R||he!==U||Le!==L)&&(i.blendFuncSeparate(We[V],We[$],We[he],We[Le]),C=V,R=$,U=he,L=Le),(tt.equals(N)===!1||at!==F)&&(i.blendColor(tt.r,tt.g,tt.b,at),N.copy(tt),F=at),g=I,b=!1}function mt(I,oe){I.side===Qt?we(i.CULL_FACE):de(i.CULL_FACE);let V=I.side===yt;oe&&(V=!V),Ie(V),I.blending===ci&&I.transparent===!1?D(xn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function He(I){I!==Kl?(de(i.CULL_FACE),I!==P&&(I===ya?i.cullFace(i.BACK):I===$l?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),P=I}function be(I){I!==z&&(G&&i.lineWidth(I),z=I)}function $e(I,oe,V){I?(de(i.POLYGON_OFFSET_FILL),(O!==oe||W!==V)&&(i.polygonOffset(oe,V),O=oe,W=V)):we(i.POLYGON_OFFSET_FILL)}function Me(I){I?de(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+K-1),re!==I&&(i.activeTexture(I),re=I)}function y(I,oe,V){V===void 0&&(re===null?V=i.TEXTURE0+K-1:V=re);let $=ie[V];$===void 0&&($={type:void 0,texture:void 0},ie[V]=$),($.type!==I||$.texture!==oe)&&(re!==V&&(i.activeTexture(V),re=V),i.bindTexture(I,oe||ge[I]),$.type=I,$.texture=oe)}function B(){const I=ie[re];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){Oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function me(I){q.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Be(I,oe){let V=c.get(oe);V===void 0&&(V=new WeakMap,c.set(oe,V));let $=V.get(I);$===void 0&&($=i.getUniformBlockIndex(oe,I.name),V.set(I,$))}function Te(I,oe){const $=c.get(oe).get(I);l.get(oe)!==$&&(i.uniformBlockBinding(oe,$,I.__bindingPointIndex),l.set(oe,$))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,ie={},u={},h=new WeakMap,p=[],x=null,m=!1,g=null,f=null,C=null,R=null,M=null,U=null,L=null,N=new Ye(0,0,0),F=0,b=!1,v=null,P=null,z=null,O=null,W=null,Oe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:we,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:et,setBlending:D,setMaterial:mt,setFlipSided:Ie,setCullFace:He,setLineWidth:be,setPolygonOffset:$e,setScissorTest:Me,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:pe,texImage3D:Ae,updateUBOMapping:Be,uniformBlockBinding:Te,texStorage2D:Ve,texStorage3D:ee,texSubImage2D:j,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:le,scissor:Ce,viewport:me,reset:Ke}}function _o(i,e,t,n){const s=zp(n);switch(t){case Do:return i*e;case ko:return i*e;case Fo:return i*e*2;case Oo:return i*e/s.components*s.byteLength;case na:return i*e/s.components*s.byteLength;case Bo:return i*e*2/s.components*s.byteLength;case ia:return i*e*2/s.components*s.byteLength;case Uo:return i*e*3/s.components*s.byteLength;case Ot:return i*e*4/s.components*s.byteLength;case sa:return i*e*4/s.components*s.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mr:case wr:return Math.max(i,16)*Math.max(e,8)/4;case Er:case Ar:return Math.max(i,8)*Math.max(e,8)/2;case Tr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ir:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _s:case Wr:case Xr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zo:case jr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qr:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zp(i){switch(i){case sn:case Lo:return{byteLength:1,components:1};case Di:case No:case Ui:return{byteLength:2,components:1};case ea:case ta:return{byteLength:2,components:4};case zn:case Qr:case en:return{byteLength:4,components:1};case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,d=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return p?new OffscreenCanvas(A,y):Es("canvas")}function m(A,y,B){let Y=1;const J=Me(A);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Y*J.width),_e=Math.floor(Y*J.height);u===void 0&&(u=x(j,_e));const ae=y?x(j,_e):u;return ae.width=j,ae.height=_e,ae.getContext("2d").drawImage(A,0,0,j,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+_e+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,y,B,Y,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),y===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),y===i.RGBA){const _e=J?As:Xe.getTransfer(Y);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=_e===Ze?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(A,y){let B;return A?y===null||y===zn||y===mi?B=i.DEPTH24_STENCIL8:y===en?B=i.DEPTH32F_STENCIL8:y===Di&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zn||y===mi?B=i.DEPTH_COMPONENT24:y===en?B=i.DEPTH_COMPONENT32F:y===Di&&(B=i.DEPTH_COMPONENT16),B}function U(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function L(A){const y=A.target;y.removeEventListener("dispose",L),F(y),y.isVideoTexture&&d.delete(y)}function N(A){const y=A.target;y.removeEventListener("dispose",N),v(y)}function F(A){const y=n.get(A);if(y.__webglInit===void 0)return;const B=A.source,Y=h.get(B);if(Y){const J=Y[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(Y).length===0&&h.delete(B)}n.remove(A)}function b(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const B=A.source,Y=h.get(B);delete Y[y.__cacheKey],a.memory.textures--}function v(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let J=0;J<y.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let Y=0,J=B.length;Y<J;Y++){const j=n.get(B[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(A)}let P=0;function z(){P=0}function O(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function K(A,y){const B=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,A,y);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function G(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Q(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function X(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ne(B,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const re={[Sr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[br]:i.MIRRORED_REPEAT},ie={[Bt]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},ve={[Pc]:i.NEVER,[kc]:i.ALWAYS,[Lc]:i.LESS,[Ho]:i.LEQUAL,[Nc]:i.EQUAL,[Uc]:i.GEQUAL,[Ic]:i.GREATER,[Dc]:i.NOTEQUAL};function Ne(A,y){if(y.type===en&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===Is||y.magFilter===Gi||y.magFilter===Bn||y.minFilter===Vt||y.minFilter===Is||y.minFilter===Gi||y.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,re[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bt||y.minFilter!==Gi&&y.minFilter!==Bn||y.type===en&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",L));const Y=y.source;let J=h.get(Y);J===void 0&&(J={},h.set(Y,J));const j=W(y);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[j].usedTimes++;const _e=J[A.__cacheKey];_e!==void 0&&(J[A.__cacheKey].usedTimes--,_e.usedTimes===0&&b(y)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return B}function q(A,y,B){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Oe(A,y),j=y.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+B);const _e=n.get(j);if(j.version!==_e.__version||J===!0){t.activeTexture(i.TEXTURE0+B);const ae=Xe.getPrimaries(Xe.workingColorSpace),le=y.colorSpace===_n?null:Xe.getPrimaries(y.colorSpace),Ve=y.colorSpace===_n||ae===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ee=m(y.image,!1,s.maxTextureSize);ee=$e(y,ee);const pe=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type);let Ce=R(y.internalFormat,pe,Ae,y.colorSpace,y.isVideoTexture);Ne(Y,y);let me;const Be=y.mipmaps,Te=y.isVideoTexture!==!0,Ke=_e.__version===void 0||J===!0,I=j.dataReady,oe=U(y,ee);if(y.isDepthTexture)Ce=M(y.format===gi,y.type),Ke&&(Te?t.texStorage2D(i.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Ae,null));else if(y.isDataTexture)if(Be.length>0){Te&&Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Ce,Be[0].width,Be[0].height);for(let V=0,$=Be.length;V<$;V++)me=Be[V],Te?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(i.TEXTURE_2D,V,Ce,me.width,me.height,0,pe,Ae,me.data);y.generateMipmaps=!1}else Te?(Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Ce,ee.width,ee.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Ae,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ee.width,ee.height,0,pe,Ae,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Te&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ce,Be[0].width,Be[0].height,ee.depth);for(let V=0,$=Be.length;V<$;V++)if(me=Be[V],y.format!==Ot)if(pe!==null)if(Te){if(I)if(y.layerUpdates.size>0){const fe=_o(me.width,me.height,y.format,y.type);for(const he of y.layerUpdates){const Le=me.data.subarray(he*fe/me.data.BYTES_PER_ELEMENT,(he+1)*fe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,he,me.width,me.height,1,pe,Le)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ce,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,ee.depth,pe,Ae,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ce,me.width,me.height,ee.depth,0,pe,Ae,me.data)}else{Te&&Ke&&t.texStorage2D(i.TEXTURE_2D,oe,Ce,Be[0].width,Be[0].height);for(let V=0,$=Be.length;V<$;V++)me=Be[V],y.format!==Ot?pe!==null?Te?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(i.TEXTURE_2D,V,Ce,me.width,me.height,0,pe,Ae,me.data)}else if(y.isDataArrayTexture)if(Te){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Ce,ee.width,ee.height,ee.depth),I)if(y.layerUpdates.size>0){const V=_o(ee.width,ee.height,y.format,y.type);for(const $ of y.layerUpdates){const fe=ee.data.subarray($*V/ee.data.BYTES_PER_ELEMENT,($+1)*V/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,pe,Ae,fe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(y.isData3DTexture)Te?(Ke&&t.texStorage3D(i.TEXTURE_3D,oe,Ce,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(y.isFramebufferTexture){if(Ke)if(Te)t.texStorage2D(i.TEXTURE_2D,oe,Ce,ee.width,ee.height);else{let V=ee.width,$=ee.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ce,V,$,0,pe,Ae,null),V>>=1,$>>=1}}else if(Be.length>0){if(Te&&Ke){const V=Me(Be[0]);t.texStorage2D(i.TEXTURE_2D,oe,Ce,V.width,V.height)}for(let V=0,$=Be.length;V<$;V++)me=Be[V],Te?I&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,pe,Ae,me):t.texImage2D(i.TEXTURE_2D,V,Ce,pe,Ae,me);y.generateMipmaps=!1}else if(Te){if(Ke){const V=Me(ee);t.texStorage2D(i.TEXTURE_2D,oe,Ce,V.width,V.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ae,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ce,pe,Ae,ee);g(y)&&f(Y),_e.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ne(A,y,B){if(y.image.length!==6)return;const Y=Oe(A,y),J=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const j=n.get(J);if(J.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+B);const _e=Xe.getPrimaries(Xe.workingColorSpace),ae=y.colorSpace===_n?null:Xe.getPrimaries(y.colorSpace),le=y.colorSpace===_n||_e===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ve=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Ve&&!ee?pe[$]=m(y.image[$],!0,s.maxCubemapSize):pe[$]=ee?y.image[$].image:y.image[$],pe[$]=$e(y,pe[$]);const Ae=pe[0],Ce=r.convert(y.format,y.colorSpace),me=r.convert(y.type),Be=R(y.internalFormat,Ce,me,y.colorSpace),Te=y.isVideoTexture!==!0,Ke=j.__version===void 0||Y===!0,I=J.dataReady;let oe=U(y,Ae);Ne(i.TEXTURE_CUBE_MAP,y);let V;if(Ve){Te&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Be,Ae.width,Ae.height);for(let $=0;$<6;$++){V=pe[$].mipmaps;for(let fe=0;fe<V.length;fe++){const he=V[fe];y.format!==Ot?Ce!==null?Te?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,he.width,he.height,Ce,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,he.width,he.height,Ce,me,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Be,he.width,he.height,0,Ce,me,he.data)}}}else{if(V=y.mipmaps,Te&&Ke){V.length>0&&oe++;const $=Me(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Be,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Te?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ce,me,pe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,pe[$].width,pe[$].height,0,Ce,me,pe[$].data);for(let fe=0;fe<V.length;fe++){const Le=V[fe].image[$].image;Te?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Le.width,Le.height,Ce,me,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Be,Le.width,Le.height,0,Ce,me,Le.data)}}else{Te?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,me,pe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,Ce,me,pe[$]);for(let fe=0;fe<V.length;fe++){const he=V[fe];Te?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Ce,me,he.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Be,Ce,me,he.image[$])}}}g(y)&&f(i.TEXTURE_CUBE_MAP),j.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ge(A,y,B,Y,J,j){const _e=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),le=R(B.internalFormat,_e,ae,B.colorSpace),Ve=n.get(y),ee=n.get(B);if(ee.__renderTarget=y,!Ve.__hasExternalTextures){const pe=Math.max(1,y.width>>j),Ae=Math.max(1,y.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,le,pe,Ae,y.depth,0,_e,ae,null):t.texImage2D(J,j,le,pe,Ae,0,_e,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),He(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,ee.__webglTexture,0,Ie(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,ee.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(A,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const Y=y.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,j=M(y.stencilBuffer,J),_e=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Ie(y);He(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,j,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,A)}else{const Y=y.textures;for(let J=0;J<Y.length;J++){const j=Y[J],_e=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),le=R(j.internalFormat,_e,ae,j.colorSpace),Ve=Ie(y);B&&He(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,le,y.width,y.height):He(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const J=Y.__webglTexture,j=Ie(y);if(y.depthTexture.format===di)He(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===gi)He(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const y=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),de(y.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),de(y.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(A,y,B){const Y=n.get(A);y!==void 0&&ge(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pe(A)}function et(A){const y=A.texture,B=n.get(A),Y=n.get(y);A.addEventListener("dispose",N);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let le=0;le<y.mipmaps.length;le++)B.__webglFramebuffer[ae][le]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ae=0,le=J.length;ae<le;ae++){const Ve=n.get(J[ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&He(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const le=J[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Ve=r.convert(le.format,le.colorSpace),ee=r.convert(le.type),pe=R(le.internalFormat,Ve,ee,le.colorSpace,A.isXRRenderTarget===!0),Ae=Ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,pe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),de(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)ge(B.__webglFramebuffer[ae][le],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else ge(B.__webglFramebuffer[ae],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,le=J.length;ae<le;ae++){const Ve=J[ae],ee=n.get(Ve);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Ne(i.TEXTURE_2D,Ve),ge(B.__webglFramebuffer,A,Ve,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),g(Ve)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),Ne(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)ge(B.__webglFramebuffer[le],A,y,i.COLOR_ATTACHMENT0,ae,le);else ge(B.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ae,0);g(y)&&f(ae),t.unbindTexture()}A.depthBuffer&&Pe(A)}function ze(A){const y=A.textures;for(let B=0,Y=y.length;B<Y;B++){const J=y[B];if(g(J)){const j=C(A),_e=n.get(J).__webglTexture;t.bindTexture(j,_e),f(j),t.unbindTexture()}}}const We=[],D=[];function mt(A){if(A.samples>0){if(He(A)===!1){const y=A.textures,B=A.width,Y=A.height;let J=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(A),ae=y.length>1;if(ae)for(let le=0;le<y.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let le=0;le<y.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const Ve=n.get(y[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,i.NEAREST),l===!0&&(We.length=0,D.length=0,We.push(i.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(We.push(j),D.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<y.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,_e.__webglColorRenderbuffer[le]);const Ve=n.get(y[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ie(A){return Math.min(s.maxSamples,A.samples)}function He(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function be(A){const y=a.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function $e(A,y){const B=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==_i&&B!==_n&&(Xe.getTransfer(B)===Ze?(Y!==Ot||J!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=He}function Vp(i,e){function t(n,s=_n){let r;const a=Xe.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lo)return i.BYTE;if(n===No)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===Qr)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===Do)return i.ALPHA;if(n===Uo)return i.RGB;if(n===Ot)return i.RGBA;if(n===ko)return i.LUMINANCE;if(n===Fo)return i.LUMINANCE_ALPHA;if(n===di)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===na)return i.RED_INTEGER;if(n===Bo)return i.RG;if(n===ia)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===vs)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Er||n===Mr||n===Ar||n===wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tr||n===Rr||n===Cr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tr||n===Rr)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pr||n===Lr||n===Nr||n===Ir||n===Dr||n===Ur||n===kr||n===Fr||n===Or||n===Br||n===zr||n===Hr||n===Vr||n===Gr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Br)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_s||n===Wr||n===Xr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_s)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===jr||n===qr||n===Yr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Gp extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),f=this._getHandJoint(c,m);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new St,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:Xp,fragmentShader:jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yp extends xi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,x=null;const m=new qp,g=t.getContextAttributes();let f=null,C=null;const R=[],M=[],U=new Je;let L=null;const N=new Pt;N.viewport=new it;const F=new Pt;F.viewport=new it;const b=[N,F],v=new Gp;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=R[q];return ne===void 0&&(ne=new lr,R[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=R[q];return ne===void 0&&(ne=new lr,R[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=R[q];return ne===void 0&&(ne=new lr,R[q]=ne),ne.getHandSpace()};function O(q){const ne=M.indexOf(q.inputSource);if(ne===-1)return;const ge=R[ne];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let q=0;q<R.length;q++){const ne=M[q];ne!==null&&(M[q]=null,R[q].disconnect(ne))}P=null,z=null,m.reset(),e.setRenderTarget(f),p=null,h=null,u=null,s=null,C=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Ot,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,ge=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?gi:di,ge=g.stencil?mi:zn);const we={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(we),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Hn(h.textureWidth,h.textureHeight,{format:Ot,type:sn,depthTexture:new tl(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(q){for(let ne=0;ne<q.removed.length;ne++){const ge=q.removed[ne],de=M.indexOf(ge);de>=0&&(M[de]=null,R[de].disconnect(ge))}for(let ne=0;ne<q.added.length;ne++){const ge=q.added[ne];let de=M.indexOf(ge);if(de===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=M.length){M.push(ge),de=Pe;break}else if(M[Pe]===null){M[Pe]=ge,de=Pe;break}if(de===-1)break}const we=R[de];we&&we.connect(ge)}}const G=new H,Q=new H;function X(q,ne,ge){G.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ge.matrixWorld);const de=G.distanceTo(Q),we=ne.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,Ue=we[14]/(we[10]-1),et=we[14]/(we[10]+1),ze=(we[9]+1)/we[5],We=(we[9]-1)/we[5],D=(we[8]-1)/we[0],mt=(Pe[8]+1)/Pe[0],Ie=Ue*D,He=Ue*mt,be=de/(-D+mt),$e=be*-D;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($e),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=Ue+be,A=et+be,y=Ie-$e,B=He+(de-$e),Y=ze*et/A*Me,J=We*et/A*Me;q.projectionMatrix.makePerspective(y,B,Y,J,Me,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,ge=q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),v.near=F.near=N.near=ne,v.far=F.far=N.far=ge,(P!==v.near||z!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,z=v.far),N.layers.mask=q.layers.mask|2,F.layers.mask=q.layers.mask|4,v.layers.mask=N.layers.mask|F.layers.mask;const de=q.parent,we=v.cameras;re(v,de);for(let Pe=0;Pe<we.length;Pe++)re(we[Pe],de);we.length===2?X(v,N,F):v.projectionMatrix.copy(N.projectionMatrix),ie(q,v,de)};function ie(q,ne,ge){ge===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Kr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(v)};let ve=null;function Ne(q,ne){if(d=ne.getViewerPose(c||a),x=ne,d!==null){const ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let de=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let Pe=0;Pe<ge.length;Pe++){const Ue=ge[Pe];let et=null;if(p!==null)et=p.getViewport(Ue);else{const We=u.getViewSubImage(h,Ue);et=We.viewport,Pe===0&&(e.setRenderTargetTextures(C,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(C))}let ze=b[Pe];ze===void 0&&(ze=new Pt,ze.layers.enable(Pe),ze.viewport=new it,b[Pe]=ze),ze.matrix.fromArray(Ue.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ue.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),Pe===0&&(v.matrix.copy(ze.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(ze)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const Pe=u.getDepthInformation(ge[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(e,Pe,s.renderState)}}for(let ge=0;ge<R.length;ge++){const de=M[ge],we=R[ge];de!==null&&we!==void 0&&we.update(de,ne,c||a)}ve&&ve(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}const Oe=new el;Oe.setAnimationLoop(Ne),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Nn=new rn,Kp=new st;function $p(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,$o(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,C,R,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),d(g,f)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),m(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,C,R):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===yt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===yt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const C=e.get(f),R=C.envMap,M=C.envMapRotation;R&&(g.envMap.value=R,Nn.copy(M),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),g.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Nn)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,C,R){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*C,g.scale.value=R*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,C){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function m(g,f){const C=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const M=R.program;n.uniformBlockBinding(C,M)}function c(C,R){let M=s[C.id];M===void 0&&(x(C),M=d(C),s[C.id]=M,C.addEventListener("dispose",g));const U=R.program;n.updateUBOMapping(C,U);const L=e.render.frame;r[C.id]!==L&&(h(C),r[C.id]=L)}function d(C){const R=u();C.__bindingPointIndex=R;const M=i.createBuffer(),U=C.__size,L=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,M),M}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const R=s[C.id],M=C.uniforms,U=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let L=0,N=M.length;L<N;L++){const F=Array.isArray(M[L])?M[L]:[M[L]];for(let b=0,v=F.length;b<v;b++){const P=F[b];if(p(P,L,b,U)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let K=0;K<O.length;K++){const G=O[K],Q=m(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+W,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,R,M,U){const L=C.value,N=R+"_"+M;if(U[N]===void 0)return typeof L=="number"||typeof L=="boolean"?U[N]=L:U[N]=L.clone(),!0;{const F=U[N];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return U[N]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function x(C){const R=C.uniforms;let M=0;const U=16;for(let N=0,F=R.length;N<F;N++){const b=Array.isArray(R[N])?R[N]:[R[N]];for(let v=0,P=b.length;v<P;v++){const z=b[v],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=O.length;W<K;W++){const G=O[W],Q=m(G),X=M%U,re=X%Q.boundary,ie=X+re;M+=re,ie!==0&&U-ie<Q.storage&&(M+=U-ie),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=Q.storage}}}const L=M%U;return L>0&&(M+=U-L),C.__size=M,C.__cache={},this}function m(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function g(C){const R=C.target;R.removeEventListener("dispose",g);const M=a.indexOf(R.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(const C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Jp{constructor(e={}){const{canvas:t=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),m=new Int32Array(4);let g=null,f=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=yn,this.toneMappingExposure=1;const M=this;let U=!1,L=0,N=0,F=null,b=-1,v=null;const P=new it,z=new it;let O=null;const W=new Ye(0);let K=0,G=t.width,Q=t.height,X=1,re=null,ie=null;const ve=new it(0,0,G,Q),Ne=new it(0,0,G,Q);let Oe=!1;const q=new Qo;let ne=!1,ge=!1;const de=new st,we=new st,Pe=new H,Ue=new it,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function We(){return F===null?X:1}let D=n;function mt(S,_){return t.getContext(S,_)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const _="webgl2";if(D=mt(_,S),D===null)throw mt(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ie,He,be,$e,Me,A,y,B,Y,J,j,_e,ae,le,Ve,ee,pe,Ae,Ce,me,Be,Te,Ke,I;function oe(){Ie=new nf(D),Ie.init(),Te=new Vp(D,Ie),He=new Kh(D,Ie,e,Te),be=new Bp(D,Ie),He.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),$e=new af(D),Me=new Mp,A=new Hp(D,Ie,be,Me,He,Te,$e),y=new Zh(M),B=new tf(M),Y=new ud(D),Ke=new qh(D,Y),J=new sf(D,Y,$e,Ke),j=new lf(D,J,Y,$e),Ce=new of(D,He,A),ee=new $h(Me),_e=new Ep(M,y,B,Ie,He,Ke,ee),ae=new $p(M,Me),le=new wp,Ve=new Np(Ie),Ae=new jh(M,y,B,be,j,p,l),pe=new Fp(M,j,He),I=new Zp(D,$e,He,be),me=new Yh(D,Ie,$e),Be=new rf(D,Ie,$e),$e.programs=_e.programs,M.capabilities=He,M.extensions=Ie,M.properties=Me,M.renderLists=le,M.shadowMap=pe,M.state=be,M.info=$e}oe();const V=new Yp(M,D);this.xr=V,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(G,Q,!1))},this.getSize=function(S){return S.set(G,Q)},this.setSize=function(S,_,E=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Q=_,t.width=Math.floor(S*X),t.height=Math.floor(_*X),E===!0&&(t.style.width=S+"px",t.style.height=_+"px"),this.setViewport(0,0,S,_)},this.getDrawingBufferSize=function(S){return S.set(G*X,Q*X).floor()},this.setDrawingBufferSize=function(S,_,E){G=S,Q=_,X=E,t.width=Math.floor(S*E),t.height=Math.floor(_*E),this.setViewport(0,0,S,_)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,_,E,T){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,_,E,T),be.viewport(P.copy(ve).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,_,E,T){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,_,E,T),be.scissor(z.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(S){be.setScissorTest(Oe=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(S=!0,_=!0,E=!0){let T=0;if(S){let w=!1;if(F!==null){const k=F.texture.format;w=k===sa||k===ia||k===na}if(w){const k=F.texture.type,Z=k===sn||k===zn||k===Di||k===mi||k===ea||k===ta,te=Ae.getClearColor(),se=Ae.getClearAlpha(),Ee=te.r,Re=te.g,ue=te.b;Z?(x[0]=Ee,x[1]=Re,x[2]=ue,x[3]=se,D.clearBufferuiv(D.COLOR,0,x)):(m[0]=Ee,m[1]=Re,m[2]=ue,m[3]=se,D.clearBufferiv(D.COLOR,0,m))}else T|=D.COLOR_BUFFER_BIT}_&&(T|=D.DEPTH_BUFFER_BIT),E&&(T|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),le.dispose(),Ve.dispose(),Me.dispose(),y.dispose(),B.dispose(),j.dispose(),Ke.dispose(),I.dispose(),_e.dispose(),V.dispose(),V.removeEventListener("sessionstart",En),V.removeEventListener("sessionend",Mn),wt.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=$e.autoReset,_=pe.enabled,E=pe.autoUpdate,T=pe.needsUpdate,w=pe.type;oe(),$e.autoReset=S,pe.enabled=_,pe.autoUpdate=E,pe.needsUpdate=T,pe.type=w}function he(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Le(S){const _=S.target;_.removeEventListener("dispose",Le),tt(_)}function tt(S){at(S),Me.remove(S)}function at(S){const _=Me.get(S).programs;_!==void 0&&(_.forEach(function(E){_e.releaseProgram(E)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,_,E,T,w,k){_===null&&(_=et);const Z=w.isMesh&&w.matrixWorld.determinant()<0,te=Hi(S,_,E,T,w);be.setMaterial(T,Z);let se=E.index,Ee=1;if(T.wireframe===!0){if(se=J.getWireframeAttribute(E),se===void 0)return;Ee=2}const Re=E.drawRange,ue=E.attributes.position;let ye=Re.start*Ee,ke=(Re.start+Re.count)*Ee;k!==null&&(ye=Math.max(ye,k.start*Ee),ke=Math.min(ke,(k.start+k.count)*Ee)),se!==null?(ye=Math.max(ye,0),ke=Math.min(ke,se.count)):ue!=null&&(ye=Math.max(ye,0),ke=Math.min(ke,ue.count));const Qe=ke-ye;if(Qe<0||Qe===1/0)return;Ke.setup(w,T,te,E,se);let ot,je=me;if(se!==null&&(ot=Y.get(se),je=Be,je.setIndex(ot)),w.isMesh)T.wireframe===!0?(be.setLineWidth(T.wireframeLinewidth*We()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(w.isLine){let xe=T.linewidth;xe===void 0&&(xe=1),be.setLineWidth(xe*We()),w.isLineSegments?je.setMode(D.LINES):w.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else w.isPoints?je.setMode(D.POINTS):w.isSprite&&je.setMode(D.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)je.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))je.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{const xe=w._multiDrawStarts,jt=w._multiDrawCounts,qe=w._multiDrawCount,Nt=se?Y.get(se).bytesPerElement:1,Wn=Me.get(T).currentProgram.getUniforms();for(let Et=0;Et<qe;Et++)Wn.setValue(D,"_gl_DrawID",Et),je.render(xe[Et]/Nt,jt[Et])}else if(w.isInstancedMesh)je.renderInstances(ye,Qe,w.count);else if(E.isInstancedBufferGeometry){const xe=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,jt=Math.min(E.instanceCount,xe);je.renderInstances(ye,Qe,jt)}else je.render(ye,Qe)};function Ge(S,_,E){S.transparent===!0&&S.side===Qt&&S.forceSinglePass===!1?(S.side=yt,S.needsUpdate=!0,wn(S,_,E),S.side=Sn,S.needsUpdate=!0,wn(S,_,E),S.side=Qt):wn(S,_,E)}this.compile=function(S,_,E=null){E===null&&(E=S),f=Ve.get(E),f.init(_),R.push(f),E.traverseVisible(function(w){w.isLight&&w.layers.test(_.layers)&&(f.pushLight(w),w.castShadow&&f.pushShadow(w))}),S!==E&&S.traverseVisible(function(w){w.isLight&&w.layers.test(_.layers)&&(f.pushLight(w),w.castShadow&&f.pushShadow(w))}),f.setupLights();const T=new Set;return S.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;const k=w.material;if(k)if(Array.isArray(k))for(let Z=0;Z<k.length;Z++){const te=k[Z];Ge(te,E,w),T.add(te)}else Ge(k,E,w),T.add(k)}),R.pop(),f=null,T},this.compileAsync=function(S,_,E=null){const T=this.compile(S,_,E);return new Promise(w=>{function k(){if(T.forEach(function(Z){Me.get(Z).currentProgram.isReady()&&T.delete(Z)}),T.size===0){w(S);return}setTimeout(k,10)}Ie.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let ut=null;function vt(S){ut&&ut(S)}function En(){wt.stop()}function Mn(){wt.start()}const wt=new el;wt.setAnimationLoop(vt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(S){ut=S,V.setAnimationLoop(S),S===null?wt.stop():wt.start()},V.addEventListener("sessionstart",En),V.addEventListener("sessionend",Mn),this.render=function(S,_){if(_!==void 0&&_.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(_),_=V.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,_,F),f=Ve.get(S,R.length),f.init(_),R.push(f),we.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),q.setFromProjectionMatrix(we),ge=this.localClippingEnabled,ne=ee.init(this.clippingPlanes,ge),g=le.get(S,C.length),g.init(),C.push(g),V.enabled===!0&&V.isPresenting===!0){const k=M.xr.getDepthSensingMesh();k!==null&&An(k,_,-1/0,M.sortObjects)}An(S,_,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(re,ie),ze=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ze&&Ae.addToRenderList(g,S),this.info.render.frame++,ne===!0&&ee.beginShadows();const E=f.state.shadowsArray;pe.render(E,S,_),ne===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const T=g.opaque,w=g.transmissive;if(f.setupLights(),_.isArrayCamera){const k=_.cameras;if(w.length>0)for(let Z=0,te=k.length;Z<te;Z++){const se=k[Z];Si(T,w,S,se)}ze&&Ae.render(S);for(let Z=0,te=k.length;Z<te;Z++){const se=k[Z];Vn(g,S,se,se.viewport)}}else w.length>0&&Si(T,w,S,_),ze&&Ae.render(S),Vn(g,S,_);F!==null&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),S.isScene===!0&&S.onAfterRender(M,S,_),Ke.resetDefaultState(),b=-1,v=null,R.pop(),R.length>0?(f=R[R.length-1],ne===!0&&ee.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function An(S,_,E,T){if(S.visible===!1)return;if(S.layers.test(_.layers)){if(S.isGroup)E=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(_);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){T&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);const Z=j.update(S),te=S.material;te.visible&&g.push(S,Z,te,E,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const Z=j.update(S),te=S.material;if(T&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Ue.copy(Z.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(we)),Array.isArray(te)){const se=Z.groups;for(let Ee=0,Re=se.length;Ee<Re;Ee++){const ue=se[Ee],ye=te[ue.materialIndex];ye&&ye.visible&&g.push(S,Z,ye,E,Ue.z,ue)}}else te.visible&&g.push(S,Z,te,E,Ue.z,null)}}const k=S.children;for(let Z=0,te=k.length;Z<te;Z++)An(k[Z],_,E,T)}function Vn(S,_,E,T){const w=S.opaque,k=S.transmissive,Z=S.transparent;f.setupLightsView(E),ne===!0&&ee.setGlobalState(M.clippingPlanes,E),T&&be.viewport(P.copy(T)),w.length>0&&an(w,_,E),k.length>0&&an(k,_,E),Z.length>0&&an(Z,_,E),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Si(S,_,E,T){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[T.id]===void 0&&(f.state.transmissionRenderTarget[T.id]=new Hn(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?Ui:sn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const k=f.state.transmissionRenderTarget[T.id],Z=T.viewport||P;k.setSize(Z.z,Z.w);const te=M.getRenderTarget();M.setRenderTarget(k),M.getClearColor(W),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Ae.render(E);const se=M.toneMapping;M.toneMapping=yn;const Ee=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),f.setupLightsView(T),ne===!0&&ee.setGlobalState(M.clippingPlanes,T),an(S,E,T),A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ue=0,ye=_.length;ue<ye;ue++){const ke=_[ue],Qe=ke.object,ot=ke.geometry,je=ke.material,xe=ke.group;if(je.side===Qt&&Qe.layers.test(T.layers)){const jt=je.side;je.side=yt,je.needsUpdate=!0,bi(Qe,E,T,ot,je,xe),je.side=jt,je.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k))}M.setRenderTarget(te),M.setClearColor(W,K),Ee!==void 0&&(T.viewport=Ee),M.toneMapping=se}function an(S,_,E){const T=_.isScene===!0?_.overrideMaterial:null;for(let w=0,k=S.length;w<k;w++){const Z=S[w],te=Z.object,se=Z.geometry,Ee=T===null?Z.material:T,Re=Z.group;te.layers.test(E.layers)&&bi(te,_,E,se,Ee,Re)}}function bi(S,_,E,T,w,k){S.onBeforeRender(M,_,E,T,w,k),S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),w.onBeforeRender(M,_,E,T,S,k),w.transparent===!0&&w.side===Qt&&w.forceSinglePass===!1?(w.side=yt,w.needsUpdate=!0,M.renderBufferDirect(E,_,T,w,S,k),w.side=Sn,w.needsUpdate=!0,M.renderBufferDirect(E,_,T,w,S,k),w.side=Qt):M.renderBufferDirect(E,_,T,w,S,k),S.onAfterRender(M,_,E,T,w,k)}function wn(S,_,E){_.isScene!==!0&&(_=et);const T=Me.get(S),w=f.state.lights,k=f.state.shadowsArray,Z=w.state.version,te=_e.getParameters(S,w.state,k,_,E),se=_e.getProgramCacheKey(te);let Ee=T.programs;T.environment=S.isMeshStandardMaterial?_.environment:null,T.fog=_.fog,T.envMap=(S.isMeshStandardMaterial?B:y).get(S.envMap||T.environment),T.envMapRotation=T.environment!==null&&S.envMap===null?_.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",Le),Ee=new Map,T.programs=Ee);let Re=Ee.get(se);if(Re!==void 0){if(T.currentProgram===Re&&T.lightsStateVersion===Z)return Mi(S,te),Re}else te.uniforms=_e.getUniforms(S),S.onBeforeCompile(te,M),Re=_e.acquireProgram(te,se),Ee.set(se,Re),T.uniforms=te.uniforms;const ue=T.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ue.clippingPlanes=ee.uniform),Mi(S,te),T.needsLights=Cs(S),T.lightsStateVersion=Z,T.needsLights&&(ue.ambientLightColor.value=w.state.ambient,ue.lightProbe.value=w.state.probe,ue.directionalLights.value=w.state.directional,ue.directionalLightShadows.value=w.state.directionalShadow,ue.spotLights.value=w.state.spot,ue.spotLightShadows.value=w.state.spotShadow,ue.rectAreaLights.value=w.state.rectArea,ue.ltc_1.value=w.state.rectAreaLTC1,ue.ltc_2.value=w.state.rectAreaLTC2,ue.pointLights.value=w.state.point,ue.pointLightShadows.value=w.state.pointShadow,ue.hemisphereLights.value=w.state.hemi,ue.directionalShadowMap.value=w.state.directionalShadowMap,ue.directionalShadowMatrix.value=w.state.directionalShadowMatrix,ue.spotShadowMap.value=w.state.spotShadowMap,ue.spotLightMatrix.value=w.state.spotLightMatrix,ue.spotLightMap.value=w.state.spotLightMap,ue.pointShadowMap.value=w.state.pointShadowMap,ue.pointShadowMatrix.value=w.state.pointShadowMatrix),T.currentProgram=Re,T.uniformsList=null,Re}function Ei(S){if(S.uniformsList===null){const _=S.currentProgram.getUniforms();S.uniformsList=xs.seqWithValue(_.seq,S.uniforms)}return S.uniformsList}function Mi(S,_){const E=Me.get(S);E.outputColorSpace=_.outputColorSpace,E.batching=_.batching,E.batchingColor=_.batchingColor,E.instancing=_.instancing,E.instancingColor=_.instancingColor,E.instancingMorph=_.instancingMorph,E.skinning=_.skinning,E.morphTargets=_.morphTargets,E.morphNormals=_.morphNormals,E.morphColors=_.morphColors,E.morphTargetsCount=_.morphTargetsCount,E.numClippingPlanes=_.numClippingPlanes,E.numIntersection=_.numClipIntersection,E.vertexAlphas=_.vertexAlphas,E.vertexTangents=_.vertexTangents,E.toneMapping=_.toneMapping}function Hi(S,_,E,T,w){_.isScene!==!0&&(_=et),A.resetTextureUnits();const k=_.fog,Z=T.isMeshStandardMaterial?_.environment:null,te=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:_i,se=(T.isMeshStandardMaterial?B:y).get(T.envMap||Z),Ee=T.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,Re=!!E.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),ue=!!E.morphAttributes.position,ye=!!E.morphAttributes.normal,ke=!!E.morphAttributes.color;let Qe=yn;T.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Qe=M.toneMapping);const ot=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,je=ot!==void 0?ot.length:0,xe=Me.get(T),jt=f.state.lights;if(ne===!0&&(ge===!0||S!==v)){const Tt=S===v&&T.id===b;ee.setState(T,S,Tt)}let qe=!1;T.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==jt.state.version||xe.outputColorSpace!==te||w.isBatchedMesh&&xe.batching===!1||!w.isBatchedMesh&&xe.batching===!0||w.isBatchedMesh&&xe.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&xe.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&xe.instancing===!1||!w.isInstancedMesh&&xe.instancing===!0||w.isSkinnedMesh&&xe.skinning===!1||!w.isSkinnedMesh&&xe.skinning===!0||w.isInstancedMesh&&xe.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&xe.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&xe.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&xe.instancingMorph===!1&&w.morphTexture!==null||xe.envMap!==se||T.fog===!0&&xe.fog!==k||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ee.numPlanes||xe.numIntersection!==ee.numIntersection)||xe.vertexAlphas!==Ee||xe.vertexTangents!==Re||xe.morphTargets!==ue||xe.morphNormals!==ye||xe.morphColors!==ke||xe.toneMapping!==Qe||xe.morphTargetsCount!==je)&&(qe=!0):(qe=!0,xe.__version=T.version);let Nt=xe.currentProgram;qe===!0&&(Nt=wn(T,_,w));let Wn=!1,Et=!1,Ai=!1;const nt=Nt.getUniforms(),zt=xe.uniforms;if(be.useProgram(Nt.program)&&(Wn=!0,Et=!0,Ai=!0),T.id!==b&&(b=T.id,Et=!0),Wn||v!==S){be.buffers.depth.getReversed()?(de.copy(S.projectionMatrix),zc(de),Hc(de),nt.setValue(D,"projectionMatrix",de)):nt.setValue(D,"projectionMatrix",S.projectionMatrix),nt.setValue(D,"viewMatrix",S.matrixWorldInverse);const on=nt.map.cameraPosition;on!==void 0&&on.setValue(D,Pe.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&nt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&nt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Et=!0,Ai=!0)}if(w.isSkinnedMesh){nt.setOptional(D,w,"bindMatrix"),nt.setOptional(D,w,"bindMatrixInverse");const Tt=w.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),nt.setValue(D,"boneTexture",Tt.boneTexture,A))}w.isBatchedMesh&&(nt.setOptional(D,w,"batchingTexture"),nt.setValue(D,"batchingTexture",w._matricesTexture,A),nt.setOptional(D,w,"batchingIdTexture"),nt.setValue(D,"batchingIdTexture",w._indirectTexture,A),nt.setOptional(D,w,"batchingColorTexture"),w._colorsTexture!==null&&nt.setValue(D,"batchingColorTexture",w._colorsTexture,A));const wi=E.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Ce.update(w,E,Nt),(Et||xe.receiveShadow!==w.receiveShadow)&&(xe.receiveShadow=w.receiveShadow,nt.setValue(D,"receiveShadow",w.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(zt.envMap.value=se,zt.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),T.isMeshStandardMaterial&&T.envMap===null&&_.environment!==null&&(zt.envMapIntensity.value=_.environmentIntensity),Et&&(nt.setValue(D,"toneMappingExposure",M.toneMappingExposure),xe.needsLights&&Gn(zt,Ai),k&&T.fog===!0&&ae.refreshFogUniforms(zt,k),ae.refreshMaterialUniforms(zt,T,X,Q,f.state.transmissionRenderTarget[S.id]),xs.upload(D,Ei(xe),zt,A)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(xs.upload(D,Ei(xe),zt,A),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&nt.setValue(D,"center",w.center),nt.setValue(D,"modelViewMatrix",w.modelViewMatrix),nt.setValue(D,"normalMatrix",w.normalMatrix),nt.setValue(D,"modelMatrix",w.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const Tt=T.uniformsGroups;for(let on=0,ln=Tt.length;on<ln;on++){const la=Tt[on];I.update(la,Nt),I.bind(la,Nt)}}return Nt}function Gn(S,_){S.ambientLightColor.needsUpdate=_,S.lightProbe.needsUpdate=_,S.directionalLights.needsUpdate=_,S.directionalLightShadows.needsUpdate=_,S.pointLights.needsUpdate=_,S.pointLightShadows.needsUpdate=_,S.spotLights.needsUpdate=_,S.spotLightShadows.needsUpdate=_,S.rectAreaLights.needsUpdate=_,S.hemisphereLights.needsUpdate=_}function Cs(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,_,E){Me.get(S.texture).__webglTexture=_,Me.get(S.depthTexture).__webglTexture=E;const T=Me.get(S);T.__hasExternalTextures=!0,T.__autoAllocateDepthBuffer=E===void 0,T.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,_){const E=Me.get(S);E.__webglFramebuffer=_,E.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(S,_=0,E=0){F=S,L=_,N=E;let T=!0,w=null,k=!1,Z=!1;if(S){const se=Me.get(S);if(se.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),T=!1;else if(se.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(se.__hasExternalTextures)A.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ue=S.depthTexture;if(se.__boundDepthTexture!==ue){if(ue!==null&&Me.has(ue)&&(S.width!==ue.image.width||S.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Z=!0);const Re=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[_])?w=Re[_][E]:w=Re[_],k=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?w=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?w=Re[E]:w=Re,P.copy(S.viewport),z.copy(S.scissor),O=S.scissorTest}else P.copy(ve).multiplyScalar(X).floor(),z.copy(Ne).multiplyScalar(X).floor(),O=Oe;if(be.bindFramebuffer(D.FRAMEBUFFER,w)&&T&&be.drawBuffers(S,w),be.viewport(P),be.scissor(z),be.setScissorTest(O),k){const se=Me.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+_,se.__webglTexture,E)}else if(Z){const se=Me.get(S.texture),Ee=_||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,se.__webglTexture,E||0,Ee)}b=-1},this.readRenderTargetPixels=function(S,_,E,T,w,k,Z){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Z!==void 0&&(te=te[Z]),te){be.bindFramebuffer(D.FRAMEBUFFER,te);try{const se=S.texture,Ee=se.format,Re=se.type;if(!He.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=S.width-T&&E>=0&&E<=S.height-w&&D.readPixels(_,E,T,w,Te.convert(Ee),Te.convert(Re),k)}finally{const se=F!==null?Me.get(F).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(S,_,E,T,w,k,Z){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Z!==void 0&&(te=te[Z]),te){const se=S.texture,Ee=se.format,Re=se.type;if(!He.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(_>=0&&_<=S.width-T&&E>=0&&E<=S.height-w){be.bindFramebuffer(D.FRAMEBUFFER,te);const ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ue),D.bufferData(D.PIXEL_PACK_BUFFER,k.byteLength,D.STREAM_READ),D.readPixels(_,E,T,w,Te.convert(Ee),Te.convert(Re),0);const ye=F!==null?Me.get(F).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,ye);const ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bc(D,ke,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,k),D.deleteBuffer(ue),D.deleteSync(ke),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,_=null,E=0){S.isTexture!==!0&&(Ni("WebGLRenderer: copyFramebufferToTexture function signature has changed."),_=arguments[0]||null,S=arguments[1]);const T=Math.pow(2,-E),w=Math.floor(S.image.width*T),k=Math.floor(S.image.height*T),Z=_!==null?_.x:0,te=_!==null?_.y:0;A.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,E,0,0,Z,te,w,k),be.unbindTexture()},this.copyTextureToTexture=function(S,_,E=null,T=null,w=0){S.isTexture!==!0&&(Ni("WebGLRenderer: copyTextureToTexture function signature has changed."),T=arguments[0]||null,S=arguments[1],_=arguments[2],w=arguments[3]||0,E=null);let k,Z,te,se,Ee,Re,ue,ye,ke;const Qe=S.isCompressedTexture?S.mipmaps[w]:S.image;E!==null?(k=E.max.x-E.min.x,Z=E.max.y-E.min.y,te=E.isBox3?E.max.z-E.min.z:1,se=E.min.x,Ee=E.min.y,Re=E.isBox3?E.min.z:0):(k=Qe.width,Z=Qe.height,te=Qe.depth||1,se=0,Ee=0,Re=0),T!==null?(ue=T.x,ye=T.y,ke=T.z):(ue=0,ye=0,ke=0);const ot=Te.convert(_.format),je=Te.convert(_.type);let xe;_.isData3DTexture?(A.setTexture3D(_,0),xe=D.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(A.setTexture2DArray(_,0),xe=D.TEXTURE_2D_ARRAY):(A.setTexture2D(_,0),xe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,_.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,_.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Nt=D.getParameter(D.UNPACK_SKIP_PIXELS),Wn=D.getParameter(D.UNPACK_SKIP_ROWS),Et=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);const Ai=S.isDataArrayTexture||S.isData3DTexture,nt=_.isDataArrayTexture||_.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const zt=Me.get(S),wi=Me.get(_),Tt=Me.get(zt.__renderTarget),on=Me.get(wi.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Tt.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let ln=0;ln<te;ln++)Ai&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,w,Re+ln),S.isDepthTexture?(nt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(_).__webglTexture,w,ke+ln),D.blitFramebuffer(se,Ee,k,Z,ue,ye,k,Z,D.DEPTH_BUFFER_BIT,D.NEAREST)):nt?D.copyTexSubImage3D(xe,w,ue,ye,ke+ln,se,Ee,k,Z):D.copyTexSubImage2D(xe,w,ue,ye,ke+ln,se,Ee,k,Z);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else nt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(xe,w,ue,ye,ke,k,Z,te,ot,je,Qe.data):_.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,w,ue,ye,ke,k,Z,te,ot,Qe.data):D.texSubImage3D(xe,w,ue,ye,ke,k,Z,te,ot,je,Qe):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,w,ue,ye,k,Z,ot,je,Qe.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,w,ue,ye,Qe.width,Qe.height,ot,Qe.data):D.texSubImage2D(D.TEXTURE_2D,w,ue,ye,k,Z,ot,je,Qe);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et),w===0&&_.generateMipmaps&&D.generateMipmap(xe),be.unbindTexture()},this.copyTextureToTexture3D=function(S,_,E=null,T=null,w=0){return S.isTexture!==!0&&(Ni("WebGLRenderer: copyTextureToTexture3D function signature has changed."),E=arguments[0]||null,T=arguments[1]||null,S=arguments[2],_=arguments[3],w=arguments[4]||0),Ni('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,_,E,T,w)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){L=0,N=0,F=null,be.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class Qp extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class al extends Bi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xo=new st,Zr=new Xo,us=new ws,hs=new H;class em extends bt{constructor(e=new Xt,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),us.radius+=r,e.ray.intersectsSphere(us)===!1)return;xo.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,m=p;x<m;x++){const g=c.getX(x);hs.fromBufferAttribute(u,g),yo(hs,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=h,m=p;x<m;x++)hs.fromBufferAttribute(u,x),yo(hs,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yo(i,e,t,n,s,r,a){const o=Zr.distanceSqToPoint(i);if(o<t){const l=new H;Zr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class oa extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,p=new H,x=new Je;for(let m=0;m<=s;m++){for(let g=0;g<=n;g++){const f=r+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,d.push(x.x,x.y)}u+=h}for(let m=0;m<s;m++){const g=m*(n+1);for(let f=0;f<n;f++){const C=f+g,R=C,M=C+n+1,U=C+n+2,L=C+1;o.push(R,M,L),o.push(M,U,L)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);class tm{constructor(e){this.container=e,this.canvas=null,this.renderer=null,this.scene=null,this.camera=null,this.particles=null,this.gridMesh=null,this.animFrameId=null,this.fallbackActive=!1,this.reducedMotion=!1,this.targetCameraX=0,this.targetCameraY=0,this.targetCameraZ=28,this._boundResize=this._onResize.bind(this),this._boundContextLost=this._onContextLost.bind(this),this._boundContextRestored=this._onContextRestored.bind(this)}init(){if(!(!this.container||typeof window>"u")){try{const e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)");this.reducedMotion=!!(e&&e.matches)}catch{this.reducedMotion=!1}if(this.reducedMotion){this._activateStaticFallback("reduced-motion");return}try{const e=document.createElement("canvas");if(e.id="webgl-bg-canvas",e.setAttribute("data-testid","webgl-canvas"),e.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;",!(e.getContext("webgl2")||e.getContext("webgl")||e.getContext("experimental-webgl"))){this._activateStaticFallback("webgl-unavailable");return}e.addEventListener("webglcontextlost",this._boundContextLost,!1),e.addEventListener("webglcontextrestored",this._boundContextRestored,!1),this.canvas=e,this.container.appendChild(e),this.renderer=new Jp({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.scene=new Qp,this.camera=new Pt(55,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,0,28),this._buildSceneObjects(),window.addEventListener("resize",this._boundResize),this._animate(),this.container.setAttribute("data-bg-mode","webgl")}catch(e){console.warn("[Background3D] WebGL initialization failed, activating static fallback:",e),this._activateStaticFallback("webgl-error")}}}_buildSceneObjects(){const e=[2772244,1131902,14194492,8760446,6136433],t=160,n=new Float32Array(t*3),s=new Float32Array(t*3);for(let c=0;c<t;c++){n[c*3]=(Math.random()-.5)*70,n[c*3+1]=(Math.random()-.5)*45,n[c*3+2]=(Math.random()-.5)*35;const d=new Ye(e[c%e.length]);s[c*3]=d.r,s[c*3+1]=d.g,s[c*3+2]=d.b}const r=new Xt;r.setAttribute("position",new Lt(n,3)),r.setAttribute("color",new Lt(s,3));const a=new al({size:.45,vertexColors:!0,transparent:!0,opacity:.55});this.particles=new em(r,a),this.scene.add(this.particles);const o=new oa(8,18,32,2),l=new ra({color:8760446,wireframe:!0,transparent:!0,opacity:.08});this.gridMesh=new Gt(o,l),this.gridMesh.rotation.x=-Math.PI*.35,this.scene.add(this.gridMesh)}onSlideChange(e=0,t=0){this.targetCameraX=(e%10-4.5)*1.4,this.targetCameraY=-(t*1.8),this.targetCameraZ=28-e%3*1.5}_animate(){if(!(this.fallbackActive||!this.renderer||!this.scene||!this.camera)){this.animFrameId=requestAnimationFrame(()=>this._animate());try{this.camera.position.x+=(this.targetCameraX-this.camera.position.x)*.05,this.camera.position.y+=(this.targetCameraY-this.camera.position.y)*.05,this.camera.position.z+=(this.targetCameraZ-this.camera.position.z)*.05,this.particles&&(this.particles.rotation.y+=8e-4,this.particles.rotation.x+=3e-4),this.gridMesh&&(this.gridMesh.rotation.z+=.0012),this.renderer.render(this.scene,this.camera)}catch{this._activateStaticFallback("render-error")}}}_onContextLost(e){e&&typeof e.preventDefault=="function"&&e.preventDefault(),this._activateStaticFallback("context-lost")}_onContextRestored(){this.fallbackActive=!1,this.container&&(this.container.setAttribute("data-bg-mode","webgl"),this.container.classList.remove("webgl-fallback-active")),this._animate()}_activateStaticFallback(e="fallback"){this.fallbackActive=!0,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.canvas&&this.canvas.parentNode&&(this.canvas.style.opacity="0"),this.container&&(this.container.setAttribute("data-bg-mode",`fallback-${e}`),this.container.classList.add("webgl-fallback-active"))}_onResize(){!this.renderer||!this.camera||this.fallbackActive||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}destroy(){this.animFrameId&&cancelAnimationFrame(this.animFrameId),window.removeEventListener("resize",this._boundResize),this.canvas&&(this.canvas.removeEventListener("webglcontextlost",this._boundContextLost),this.canvas.removeEventListener("webglcontextrestored",this._boundContextRestored))}}async function nm(){const i=document.getElementById("app-root"),e=document.getElementById("slides-container"),t=document.getElementById("master-hud"),n=document.getElementById("viewer-count"),s=document.getElementById("master-slide-pos"),r=document.getElementById("sync-dot");Ul(e);const a=new tm(i);a.init(),window.__bg3d=a;const o=To(),l=new gn(document.querySelector(".reveal"),{disableLayout:!0,center:!1,controls:o,progress:o,keyboard:o,touch:o,overview:o,hash:!1,respondToHashChanges:!1,history:!1,fragments:!0,autoAnimate:!0,autoAnimateDuration:.35,transition:"convex",transitionSpeed:"fast",backgroundTransition:"fade"});await l.initialize(),window.__reveal=l;const d=new URL(window.location.href).searchParams.get("room")||"jet-cesko",u=new Yl({reveal:l,roomId:d,onStatusChange:({isMaster:h,connected:p,viewersCount:x,state:m})=>{if(t&&(h?t.classList.remove("hidden"):t.classList.add("hidden")),n&&(n.textContent=String(x??0)),s&&m){const g=(m.indexf??-1)>=0?`/${m.indexf}`:"";s.textContent=`${m.indexh}/${m.indexv}${g}`}r&&r.classList.toggle("offline",!p)}});u.init(),window.__syncEngine=u,l.on("slidechanged",h=>{a.onSlideChange(h.indexh||0,h.indexv||0)})}nm().catch(i=>{console.error("[Presentation] Bootstrap error:",i)});
