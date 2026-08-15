/* This file is part of Automad. Copyright and license info at the end. */
var d=(s,e=[],t={},o=null,a=null,n=!1)=>{let r=document.createElement(s);e.forEach(i=>{r.classList.add(i)});for(let[i,c]of Object.entries(t))typeof c<"u"&&r.setAttribute(i,c);return o&&(n?o.prepend(r):o.appendChild(r)),a&&(r.innerHTML=a),r};var l=(s,e=document)=>e.querySelector(s),m=(s,e=document)=>Array.from(e.querySelectorAll(s));var p={message:"am-message",validate:"am-validate"},g=s=>{let e=!0;return s.forEach(t=>{t.checkValidity()||(e=!1)}),e},f=s=>{s.forEach(e=>{e.value=""})},u=class{element;constructor(e){this.element=e,setTimeout(this.init.bind(this),2e3)}init(){let e=l("button",this.element),t=m("[name]",this.element);e.addEventListener("click",async()=>{if(this.element.classList.add(p.validate),!!g(t))try{let o=await fetch(window.location.href,{method:"POST",body:this.getData(t)}),{data:a}=await o.json();if(a.status){let n=l("p",this.element)??d("p",[p.message],{},this.element,"",!0);n.textContent=a.status,f(t),this.element.classList.remove(p.validate)}}catch{}})}getData(e){let t=new FormData;return e.forEach(o=>{t.append(o.name,o.value)}),t.append("id",this.element.id),t}};export{u as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
