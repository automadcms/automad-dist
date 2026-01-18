/* Automad, (c) Marc Anton Dahmen, MIT license */
var r=class{constructor(t){this.render(t)}async render(t){t.style.display="none";let e=t.textContent,{katex:o}=await import("../vendor/katex-6f05d4cf.js");o.render(e,t,{throwOnError:!1,displayMode:!0,output:"html"}),t.style.removeProperty("display")}};export{r as default};
