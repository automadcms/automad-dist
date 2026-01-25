/* This file is part of Automad. Copyright and license info at the end. */
var r=class{constructor(t){this.render(t)}async render(t){t.style.display="none";let o=t.textContent,{katex:s}=await import("../vendor/katex-4b40ccdd.js");s.render(o,t,{throwOnError:!1,output:"html"}),t.style.removeProperty("display")}};export{r as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * Automad is licensed under the MIT license
 */
