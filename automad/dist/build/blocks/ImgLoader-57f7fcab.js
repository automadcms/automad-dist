/* This file is part of Automad. Copyright and license info at the end. */
var p=(n,e=[],t={},r=null,i=null,d=!1)=>{let s=document.createElement(n);e.forEach(a=>{s.classList.add(a)});for(let[a,l]of Object.entries(t))typeof l<"u"&&s.setAttribute(a,l);return r&&(d?r.prepend(s):r.appendChild(s)),i&&(s.innerHTML=i),s};var o=class{constructor(e){let t=p("img",[],{src:e.getAttribute("image"),alt:e.getAttribute("alt")||"",width:e.getAttribute("width"),height:e.getAttribute("height"),loading:"lazy"},e);e.hasAttribute("style")&&t.setAttribute("style",e.getAttribute("style"));let r=()=>{e.classList.add("am-loaded"),setTimeout(()=>{e.replaceWith(t)},300)};e.style.backgroundImage=`url(${e.getAttribute("preload")})`,t.complete?r():t.addEventListener("load",r)}};export{o as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * Automad is licensed under the MIT license
 */
