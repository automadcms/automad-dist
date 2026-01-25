/* This file is part of Automad. Copyright and license info at the end. */
var a=[{tag:"am-gallery",importer:async()=>await import("../blocks/Gallery-ca288d21.js")},{tag:"am-image-slideshow",importer:async()=>await import("../blocks/ImageSlideshow-ce74bdd2.js")},{tag:"am-img-loader",importer:async()=>await import("../blocks/ImgLoader-57f7fcab.js")},{tag:"am-inline-tex",importer:async()=>await import("../blocks/InlineTex-3482c948.js")},{tag:"am-mail",importer:async()=>await import("../blocks/Mail-7485e272.js")},{tag:"am-table-of-contents",importer:async()=>await import("../blocks/TableOfContents-63b5e33f.js")},{tag:"am-tex",importer:async()=>await import("../blocks/Tex-4959d6b4.js")}];for(let{tag:e,importer:i}of a)customElements.define(e,class extends HTMLElement{constructor(){super()}async connectedCallback(){let t=(await i()).default;new t(this)}});
/*!
 * Automad (https://automad.org)
 * 
 * Copyright (c) 2026 Marc Anton Dahmen (https://marcdahmen.de)
 * Automad is licensed under the MIT license
 */
