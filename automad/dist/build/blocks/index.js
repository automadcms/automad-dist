/* This file is part of Automad. Copyright and license info at the end. */
var a=[{tag:"am-gallery",importer:async()=>await import("../blocks/Gallery-22b0f4b4.js")},{tag:"am-image-slideshow",importer:async()=>await import("../blocks/ImageSlideshow-e8441bca.js")},{tag:"am-img-loader",importer:async()=>await import("../blocks/ImgLoader-c5893c87.js")},{tag:"am-inline-tex",importer:async()=>await import("../blocks/InlineTex-ff09485b.js")},{tag:"am-mail",importer:async()=>await import("../blocks/Mail-e15c2ba6.js")},{tag:"am-table-of-contents",importer:async()=>await import("../blocks/TableOfContents-cdfd8f2f.js")},{tag:"am-tex",importer:async()=>await import("../blocks/Tex-fbd30a3f.js")}];for(let{tag:e,importer:i}of a)customElements.define(e,class extends HTMLElement{constructor(){super()}async connectedCallback(){let t=(await i()).default;new t(this)}});
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * See LICENSE.md for license information.
 */
