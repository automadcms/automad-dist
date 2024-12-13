/*! Automad 2.0.0-alpha.15, (c) 2024 Marc Anton Dahmen, MIT license */(()=>{var t={384:function(t,e,i){
/*!
 * Draggabilly v3.0.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */
!function(e,n){t.exports?t.exports=n(e,i(131),i(842)):e.Draggabilly=n(e,e.getSize,e.Unidragger)}("undefined"!=typeof window?window:this,(function(t,e,i){let n=t.jQuery;function o(t,e){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options={},this.option(e),this._create()}let s=o.prototype=Object.create(i.prototype);s.option=function(t){this.options={...this.options,...t}};const r=["relative","absolute","fixed"];s._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition={...this.position};let t=getComputedStyle(this.element);r.includes(t.position)||(this.element.style.position="relative"),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.setHandles(),this.enable()},s.setHandles=function(){let{handle:t}=this.options;"string"==typeof t?this.handles=this.element.querySelectorAll(t):"object"==typeof t&&t.length?this.handles=t:t instanceof HTMLElement?this.handles=[t]:this.handles=[this.element]};const a=["dragStart","dragMove","dragEnd"];let h=s.emitEvent;function d(t,e,i){return e?(i=i||"round",Math[i](t/e)*e):t}s.emitEvent=function(e,i){if(!this.isEnabled&&a.includes(e))return;h.call(this,e,i);let n,o=t.jQuery;if(!o||!this.$element)return;let s=i;i&&i[0]instanceof Event&&([n,...s]=i);let r=o.Event(n);r.type=e,this.$element.trigger(r,s)},s._getPosition=function(){let t=getComputedStyle(this.element),e=this._getPositionCoord(t.left,"width"),i=this._getPositionCoord(t.top,"height");this.position.x=isNaN(e)?0:e,this.position.y=isNaN(i)?0:i,this._addTransformPosition(t)},s._getPositionCoord=function(t,i){if(t.includes("%")){let n=e(this.element.parentNode);return n?parseFloat(t)/100*n[i]:0}return parseInt(t,10)},s._addTransformPosition=function(t){let e=t.transform;if(!e.startsWith("matrix"))return;let i=e.split(","),n=e.startsWith("matrix3d")?12:4,o=parseInt(i[n],10),s=parseInt(i[n+1],10);this.position.x+=o,this.position.y+=s},s.handlePointerDown=function(t,e){this.isEnabled&&(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),document.activeElement.blur(),this.bindActivePointerEvents(t),this.element.classList.add("is-pointer-down"))},s.handleDragStart=function(){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.animate())},s.measureContainment=function(){let t=this.getContainer();if(!t)return;let i=e(this.element),n=e(t),{borderLeftWidth:o,borderRightWidth:s,borderTopWidth:r,borderBottomWidth:a}=n,h=this.element.getBoundingClientRect(),d=t.getBoundingClientRect(),l=o+s,c=r+a,p=this.relativeStartPosition={x:h.left-(d.left+o),y:h.top-(d.top+r)};this.containSize={width:n.width-l-p.x-i.width,height:n.height-c-p.y-i.height}},s.getContainer=function(){let t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},s.handleDragMove=function(t,e,i){if(!this.isEnabled)return;let n=i.x,o=i.y,s=this.options.grid,r=s&&s[0],a=s&&s[1];n=d(n,r),o=d(o,a),n=this.containDrag("x",n,r),o=this.containDrag("y",o,a),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o},s.containDrag=function(t,e,i){if(!this.options.containment)return e;let n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],i,"ceil"),s=this.containSize[n];return s=d(s,i,"floor"),Math.max(o,Math.min(s,e))},s.handlePointerUp=function(){this.element.classList.remove("is-pointer-down")},s.handleDragEnd=function(){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"))},s.animate=function(){this.isDragging&&(this.positionDrag(),requestAnimationFrame((()=>this.animate())))},s.setLeftTop=function(){let{x:t,y:e}=this.position;this.element.style.left=`${t}px`,this.element.style.top=`${e}px`},s.positionDrag=function(){let{x:t,y:e}=this.dragPoint;this.element.style.transform=`translate3d(${t}px, ${e}px, 0)`},s.setPosition=function(t,e){this.position.x=t,this.position.y=e,this.setLeftTop()},s.enable=function(){this.isEnabled||(this.isEnabled=!0,this.bindHandles())},s.disable=function(){this.isEnabled&&(this.isEnabled=!1,this.isDragging&&this.dragEnd(),this.unbindHandles())};const l=["transform","left","top","position"];return s.destroy=function(){this.disable(),l.forEach((t=>{this.element.style[t]=""})),this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},s._init=function(){},n&&n.bridget&&n.bridget("draggabilly",o),o}))},158:function(t){var e,i;e="undefined"!=typeof window?window:this,i=function(){function t(){}let e=t.prototype;return e.on=function(t,e){if(!t||!e)return this;let i=this._events=this._events||{},n=i[t]=i[t]||[];return n.includes(e)||n.push(e),this},e.once=function(t,e){if(!t||!e)return this;this.on(t,e);let i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this},e.off=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;let n=i.indexOf(e);return-1!=n&&i.splice(n,1),this},e.emitEvent=function(t,e){let i=this._events&&this._events[t];if(!i||!i.length)return this;i=i.slice(0),e=e||[];let n=this._onceEvents&&this._onceEvents[t];for(let o of i)n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e);return this},e.allOff=function(){return delete this._events,delete this._onceEvents,this},t},t.exports?t.exports=i():e.EvEmitter=i()},131:t=>{
/*!
 * Infinite Scroll v2.0.4
 * measure size of elements
 * MIT license
 */
!function(e,i){t.exports?t.exports=i():e.getSize=i()}(window,(function(){function t(t){let e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}let e=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];e.length;return function(i){if("string"==typeof i&&(i=document.querySelector(i)),!(i&&"object"==typeof i&&i.nodeType))return;let n=getComputedStyle(i);if("none"==n.display)return function(){let t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return e.forEach((e=>{t[e]=0})),t}();let o={};o.width=i.offsetWidth,o.height=i.offsetHeight;let s=o.isBorderBox="border-box"==n.boxSizing;e.forEach((t=>{let e=n[t],i=parseFloat(e);o[t]=isNaN(i)?0:i}));let r=o.paddingLeft+o.paddingRight,a=o.paddingTop+o.paddingBottom,h=o.marginLeft+o.marginRight,d=o.marginTop+o.marginBottom,l=o.borderLeftWidth+o.borderRightWidth,c=o.borderTopWidth+o.borderBottomWidth,p=t(n.width);!1!==p&&(o.width=p+(s?0:r+l));let u=t(n.height);return!1!==u&&(o.height=u+(s?0:a+c)),o.innerWidth=o.width-(r+l),o.innerHeight=o.height-(a+c),o.outerWidth=o.width+h,o.outerHeight=o.height+d,o}}))},842:function(t,e,i){
/*!
 * Unidragger v3.0.1
 * Draggable base class
 * MIT license
 */
!function(e,n){t.exports?t.exports=n(e,i(158)):e.Unidragger=n(e,e.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,e){function i(){}let n,o,s=i.prototype=Object.create(e.prototype);s.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},"ontouchstart"in t?(n="touchstart",o=["touchmove","touchend","touchcancel"]):t.PointerEvent?(n="pointerdown",o=["pointermove","pointerup","pointercancel"]):(n="mousedown",o=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(e,i){this.handles.forEach((o=>{o[e](n,this),o[e]("click",this),t.PointerEvent&&(o.style.touchAction=i)}))},s.bindActivePointerEvents=function(){o.forEach((e=>{t.addEventListener(e,this)}))},s.unbindActivePointerEvents=function(){o.forEach((e=>{t.removeEventListener(e,this)}))},s.withPointer=function(t,e){e.pointerId===this.pointerIdentifier&&this[t](e,e)},s.withTouch=function(t,e){let i;for(let t of e.changedTouches)t.identifier===this.pointerIdentifier&&(i=t);i&&this[t](e,i)},s.onmousedown=function(t){this.pointerDown(t,t)},s.ontouchstart=function(t){this.pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this.pointerDown(t,t)};const r=["TEXTAREA","INPUT","SELECT","OPTION"],a=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(t,e){let i=r.includes(t.target.nodeName),n=a.includes(t.target.type),o=!i||n;!this.isPointerDown&&!t.button&&o&&(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this.bindActivePointerEvents(),this.emitEvent("pointerDown",[t,e]))},s.onmousemove=function(t){this.pointerMove(t,t)},s.onpointermove=function(t){this.withPointer("pointerMove",t)},s.ontouchmove=function(t){this.withTouch("pointerMove",t)},s.pointerMove=function(t,e){let i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[t,e,i]),!this.isDragging&&this.hasDragStarted(i)&&this.dragStart(t,e),this.isDragging&&this.dragMove(t,e,i)},s.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},s.dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[t,e])},s.dragMove=function(t,e,i){this.emitEvent("dragMove",[t,e,i])},s.onmouseup=function(t){this.pointerUp(t,t)},s.onpointerup=function(t){this.withPointer("pointerUp",t)},s.ontouchend=function(t){this.withTouch("pointerUp",t)},s.pointerUp=function(t,e){this.pointerDone(),this.emitEvent("pointerUp",[t,e]),this.isDragging?this.dragEnd(t,e):this.staticClick(t,e)},s.dragEnd=function(t,e){this.isDragging=!1,setTimeout((()=>delete this.isPreventingClicks)),this.emitEvent("dragEnd",[t,e])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(t){this.withPointer("pointerCancel",t)},s.ontouchcancel=function(t){this.withTouch("pointerCancel",t)},s.pointerCancel=function(t,e){this.pointerDone(),this.emitEvent("pointerCancel",[t,e])},s.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},s.staticClick=function(t,e){let i="mouseup"===t.type;i&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[t,e]),i&&(this.isIgnoringMouseUp=!0,setTimeout((()=>{delete this.isIgnoringMouseUp}),400)))},i}))}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=(t,e=[],i={},n=null,o=null,s=!1)=>{const r=document.createElement(t);e.forEach((t=>{r.classList.add(t)}));for(const[t,e]of Object.entries(i))r.setAttribute(t,e);return n&&(s?n.prepend(r):n.appendChild(r)),o&&(r.innerHTML=o),r};var e;!function(t){t.setup="setup",t.login="login",t.resetpassword="resetpassword",t.search="search",t.home="home",t.system="system",t.shared="shared",t.packages="packages",t.page="page",t.trash="trash",t.inpage="inpage"}(e||(e={}));const n="AutomadInPageScrollY",o="AutomadInPageDockPosition",s=()=>{sessionStorage.setItem(n,`${window.scrollY}`)},r=t=>{sessionStorage.setItem(o,JSON.stringify(t.position))};class a extends HTMLElement{constructor(){super()}getAttr(t){const e=this.getAttribute(t);return this.removeAttribute(t),e}}var h=i(384),d=i.n(h);customElements.define("am-inpage-dock",class extends a{connectedCallback(){this.classList.add("am-inpage-dock"),(()=>{const t=sessionStorage.getItem(n);t&&(window.scrollTo(window.scrollX,parseInt(t)),sessionStorage.removeItem(n))})();const i=this.getAttr("csrf"),o=this.getAttr("api"),s=this.getAttr("dashboard"),r=this.getAttr("url"),a=this.getAttr("state"),h=JSON.parse(decodeURIComponent(this.getAttr("labels"))),d=t("div",["am-inpage-dock__container"],{},this),l=t("span",["am-inpage-dock__handle"],{},d,'<i class="bi bi-grip-vertical"></i>');this.initDrag(d,l),t("div",["am-inpage-dock__logo"],{},t("a",["am-inpage-dock__item"],{href:s},d),'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="994px" height="1170px" viewBox="0 0 994 1170" style="enable-background:new 0 0 994 1170" preserveAspectRatio="xMinYMin meet" xml:space="preserve" fill="currentColor"> <path d="M626.1,345.8L60.7,567.5l-57.4-143L269.6,4.7H724l266.7,419.8l-78.5,195.4L626.1,345.8z M876.2,452.9l7.4-18.5\n\t\tl-96.4-151.8l-62.9,24.7L876.2,452.9z M114.1,443.7l620.8-243.4l-63.4-99.9H322.2L110.4,434.4L114.1,443.7z"/> <path d="M300.7,1165.3l-48.3-120.2l-224.6,62.6l-25.7-92.2l307.2-85.6l56.1,139.7h262.8l56.2-139.7l307.4,85.6\n\t\tl-25.7,92.2l-224.9-62.6l-48.3,120.2H300.7z"/> </svg> ');const c=(i,n,o)=>{t("i",["bi",`bi-${i}`],{},t("a",["am-inpage-dock__item"],{href:`${s}/${e.page}?url=${encodeURIComponent(r)}&section=${n}`,"data-tooltip":o},d))};c("ui-checks","settings",h.fieldsSettings),c("body-text","text",h.fieldsContent),c("grid","files",h.uploadedFiles),t("am-inpage-publish",[],{state:a,url:r,api:o,csrf:i,label:h.publish},d)}initDrag(t,e){const i=new(d())(t,{handle:e});(t=>{const e=sessionStorage.getItem(o);if(!e)return;const i=JSON.parse(e);t.setPosition(i.x,i.y)})(i),i.on("dragEnd",(()=>{r(i)})),e.addEventListener("dblclick",(()=>{i.setPosition(0,0),r(i)}))}});customElements.define("am-inpage-edit",class extends a{connectedCallback(){this.classList.add("am-inpage-edit");const e=this.getAttr("page"),i=this.getAttr("dashboard"),n=this.getAttr("context"),o=this.getAttr("label"),r=this.getAttribute("field");setTimeout((()=>{const a=t("span",["am-inpage-edit__overlay"],{},this);t("span",["am-inpage-edit__button"],{},a,o).addEventListener("click",(()=>{const t=new URLSearchParams({field:r,page:e,context:n}).toString();s(),window.location.href=`${i}/inpage?${t}`}))}),0)}});var l=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{h(n.next(t))}catch(t){s(t)}}function a(t){try{h(n.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}h((n=n.apply(t,e||[])).next())}))};const c=(...t)=>{0};var p=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{h(n.next(t))}catch(t){s(t)}}function a(t){try{h(n.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}h((n=n.apply(t,e||[])).next())}))};customElements.define("am-inpage-publish",class extends a{connectedCallback(){const t=this.getAttr("state"),e=this.getAttr("url"),i=this.getAttr("api"),n=this.getAttr("csrf"),o=()=>p(this,void 0,void 0,(function*(){const t=yield((t,e,i,n)=>l(void 0,void 0,void 0,(function*(){c(`${e} >>`,n);const o=new FormData;o.append("__csrf__",i),o.append("__json__",JSON.stringify(n));const s={method:"POST",body:o},r=yield fetch(`${t}/${(t=>{const[e,i]=t.split("::"),n=t=>t.replace(/([A-Z])/g," $1").trim().toLowerCase().replace(/\s/g,"-");return`${n(e.replace("Controller",""))}/${n(i)}`})(e)}`,s),a=yield r.json();return c(`${e} <<`,a),a})))(i,"InPageController::publish",n,{url:e});200==t.code&&(s(),t.redirect?window.location.href=`${t.redirect}`:window.location.reload())}));this.textContent=this.getAttr("label"),"draft"!==t?this.setAttribute("disabled",""):this.addEventListener("click",o)}})})()})();