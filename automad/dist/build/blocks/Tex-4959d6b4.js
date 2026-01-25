/* This file is part of Automad. Copyright and license info at the end. */
var r=class{constructor(t){this.render(t)}async render(t){t.style.display="none";let e=t.textContent,{katex:o}=await import("../vendor/katex-4b40ccdd.js");o.render(e,t,{throwOnError:!1,displayMode:!0,output:"html"}),t.style.removeProperty("display")}};export{r as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * Automad is licensed under the MIT license
 */
