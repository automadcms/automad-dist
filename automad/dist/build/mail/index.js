/* This file is part of Automad. Copyright and license info at the end. */
var d=n=>{let e=[];for(let t=0;t<n.length;t++)e.push(n.charCodeAt(t));return e},i=(n,e)=>{let t=d(e),o=t.length,c=d(atob(n)),s=c.length,a="";for(let r=0;r<s;r++)a+=String.fromCharCode(c[r]^t[r%o]);return a.replace(/\0/g,"")},m=()=>{Array.from(document.querySelectorAll("[data-eml]")).forEach(e=>{let t=e.dataset.eml,o=e.dataset.key;e.removeAttribute("data-eml"),e.removeAttribute("data-key"),e.addEventListener("click",()=>{e.href=`mailto:${i(t,o)}`})})};m();
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * Automad is licensed under the MIT license
 */
