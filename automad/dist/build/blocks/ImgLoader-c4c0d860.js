/* This file is part of Automad. Copyright and license info at the end. */
var p=(n,e=[],t={},r=null,i=null,d=!1)=>{let s=document.createElement(n);e.forEach(o=>{s.classList.add(o)});for(let[o,l]of Object.entries(t))typeof l<"u"&&s.setAttribute(o,l);return r&&(d?r.prepend(s):r.appendChild(s)),i&&(s.innerHTML=i),s};var a=class{constructor(e){let t=p("img",[],{src:e.getAttribute("image"),alt:e.getAttribute("alt")||"",width:e.getAttribute("width"),height:e.getAttribute("height"),loading:"lazy"},e);e.hasAttribute("style")&&t.setAttribute("style",e.getAttribute("style"));let r=()=>{e.classList.add("am-loaded"),setTimeout(()=>{e.replaceWith(t)},300)};e.style.backgroundImage=`url(${e.getAttribute("preload")})`,t.complete?r():t.addEventListener("load",r)}};export{a as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
