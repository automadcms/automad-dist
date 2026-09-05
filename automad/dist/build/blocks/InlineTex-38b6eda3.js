/* This file is part of Automad. Copyright and license info at the end. */
var e=class{constructor(t){this.render(t)}async render(t){t.style.display="none";let o=t.textContent,{katex:r}=await import("../vendor/katex-4b40ccdd.js");r.render(o,t,{throwOnError:!1,output:"html"}),t.style.removeProperty("display")}};export{e as default};
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
