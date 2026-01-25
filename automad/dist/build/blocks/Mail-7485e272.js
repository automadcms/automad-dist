/* This file is part of Automad. Copyright and license info at the end. */
var d=(s,e=[],t={},r=null,n=null,o=!1)=>{let a=document.createElement(s);e.forEach(i=>{a.classList.add(i)});for(let[i,u]of Object.entries(t))typeof u<"u"&&a.setAttribute(i,u);return r&&(o?r.prepend(a):r.appendChild(a)),n&&(a.innerHTML=n),a};var l=(s,e=document)=>e.querySelector(s),m=(s,e=document)=>Array.from(e.querySelectorAll(s));var p={message:"am-message",validate:"am-validate"},g=s=>{let e=!0;return s.forEach(t=>{t.checkValidity()||(e=!1)}),e},h=s=>{s.forEach(e=>{e.value=""})},c=class{element;constructor(e){this.element=e,setTimeout(this.init.bind(this),2e3)}init(){let e=l("button",this.element),t=m("[name]",this.element);e.addEventListener("click",async()=>{if(this.element.classList.add(p.validate),!!g(t))try{let r=await fetch(window.location.href,{method:"POST",body:this.getData(t)}),{data:n}=await r.json();if(n.status){let o=l("p",this.element)??d("p",[p.message],{},this.element,"",!0);o.textContent=n.status,h(t),this.element.classList.remove(p.validate)}}catch{}})}getData(e){let t=new FormData;return e.forEach(r=>{t.append(r.name,r.value)}),t.append("id",this.element.id),t}};export{c as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * Automad is licensed under the MIT license
 */
