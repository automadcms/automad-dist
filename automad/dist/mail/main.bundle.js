/*! Automad 2.0.0-alpha.9, (c) 2024 Marc Anton Dahmen, MIT license */(()=>{"use strict";const t=t=>{const e=[];for(let r=0;r<t.length;r++)e.push(t.charCodeAt(r));return e};Array.from(document.querySelectorAll("[data-eml]")).forEach((e=>{const r=e.dataset.eml,a=e.dataset.key;e.removeAttribute("data-eml"),e.removeAttribute("data-key"),e.addEventListener("click",(()=>{e.href=`mailto:${((e,r)=>{const a=t(r),o=a.length,l=t(atob(e)),n=l.length;let c="";for(let t=0;t<n;t++)c+=String.fromCharCode(l[t]^a[t%o]);return c.replace(/\0/g,"")})(r,a)}`}))}))})();