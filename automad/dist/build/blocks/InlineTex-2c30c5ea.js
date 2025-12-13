/* Automad, (c) Marc Anton Dahmen, MIT license */
var r=class{constructor(t){this.render(t)}async render(t){t.style.display="none";let o=t.textContent,{katex:s}=await import("../vendor/katex-0f616d04.js");s.render(o,t,{throwOnError:!1,output:"html"}),t.style.removeProperty("display")}};export{r as default};
