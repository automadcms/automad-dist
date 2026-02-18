/* This file is part of Automad. Copyright and license info at the end. */
var d=r=>{let e=[];for(let t=0;t<r.length;t++)e.push(r.charCodeAt(t));return e},m=(r,e)=>{let t=d(e),n=t.length,a=d(atob(r)),s=a.length,c="";for(let o=0;o<s;o++)c+=String.fromCharCode(a[o]^t[o%n]);return c.replace(/\0/g,"")},i=()=>{Array.from(document.querySelectorAll("[data-eml]")).forEach(e=>{let t=e.dataset.eml,n=e.dataset.key;e.removeAttribute("data-eml"),e.removeAttribute("data-key"),e.addEventListener("click",()=>{e.href=`mailto:${m(t,n)}`})})};i();
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
