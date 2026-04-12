/* This file is part of Automad. Copyright and license info at the end. */
var d=(r,e=[],t={},o=null,s=null,n=!1)=>{let a=document.createElement(r);e.forEach(i=>{a.classList.add(i)});for(let[i,u]of Object.entries(t))typeof u<"u"&&a.setAttribute(i,u);return o&&(n?o.prepend(a):o.appendChild(a)),s&&(a.innerHTML=s),a};var l=(r,e=document)=>e.querySelector(r),m=(r,e=document)=>Array.from(e.querySelectorAll(r));var p={message:"am-message",validate:"am-validate"},g=r=>{let e=!0;return r.forEach(t=>{t.checkValidity()||(e=!1)}),e},f=r=>{r.forEach(e=>{e.value=""})},c=class{element;constructor(e){this.element=e,setTimeout(this.init.bind(this),2e3)}init(){let e=l("button",this.element),t=m("[name]",this.element);e.addEventListener("click",async()=>{if(this.element.classList.add(p.validate),!!g(t))try{let o=await fetch(window.location.href,{method:"POST",body:this.getData(t)}),{data:s}=await o.json();if(s.status){let n=l("p",this.element)??d("p",[p.message],{},this.element,"",!0);n.textContent=s.status,f(t),this.element.classList.remove(p.validate)}}catch{}})}getData(e){let t=new FormData;return e.forEach(o=>{t.append(o.name,o.value)}),t.append("id",this.element.id),t}};export{c as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
