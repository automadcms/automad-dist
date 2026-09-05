/* This file is part of Automad. Copyright and license info at the end. */
var l=(n,e=[],t={},r=null,i=null,u=!1)=>{let o=document.createElement(n);e.forEach(s=>{o.classList.add(s)});for(let[s,p]of Object.entries(t))typeof p<"u"&&o.setAttribute(s,p);return r&&(u?r.prepend(o):r.appendChild(o)),i&&(o.innerHTML=i),o};var a=class{constructor(e){let t=l("img",[],{src:e.getAttribute("image"),alt:e.getAttribute("alt")||"",width:e.getAttribute("width"),height:e.getAttribute("height"),loading:"lazy"},e);e.hasAttribute("style")&&t.setAttribute("style",e.getAttribute("style"));let r=()=>{e.classList.add("am-loaded"),setTimeout(()=>{e.replaceWith(t)},300)};e.style.backgroundImage=`url(${e.getAttribute("preload")})`,t.complete?r():t.addEventListener("load",r)}};export{a as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
