/* This file is part of Automad. Copyright and license info at the end. */
var d=(l,e=document)=>Array.from(e.querySelectorAll(l));var i=class{element;get listTag(){return this.element.getAttribute("type")=="ordered"?"ol":"ul"}constructor(e){if(this.element=e,document.readyState==="loading"){document.addEventListener("DOMContentLoaded",this.render.bind(this));return}this.render()}render(){let e=0,t=1,r="";d("h2[id], h3[id], h4[id]").forEach(a=>{let o=parseInt(a.tagName.replace(/h/i,""));if(o>t){let n=o-t;for(let s=1;s<=n;s++)e++,r+=`<${this.listTag}><li>`}if(o<t){let n=t-o;for(let s=1;s<=n;s++)e--,r+=`</li></${this.listTag}>`}o<=t&&(r+="</li><li>"),r+=`<a href="#${a.id}">${a.textContent}</a>`,t=o});for(var p=1;p<=e;p++)r+=`</li></${this.listTag}>`;this.element.innerHTML=r}};export{i as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
