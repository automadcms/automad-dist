/* This file is part of Automad. Copyright and license info at the end. */
var W="#fff",z="20px",J="13px",K=`
.codeflask {
  background: `+W+`;
  color: #4f559c;
}

.codeflask .token.punctuation {
  color: #4a4a4a;
}

.codeflask .token.keyword {
  color: #8500ff;
}

.codeflask .token.operator {
  color: #ff5598;
}

.codeflask .token.string {
  color: #41ad8f;
}

.codeflask .token.comment {
  color: #9badb7;
}

.codeflask .token.function {
  color: #8500ff;
}

.codeflask .token.boolean {
  color: #8500ff;
}

.codeflask .token.number {
  color: #8500ff;
}

.codeflask .token.selector {
  color: #8500ff;
}

.codeflask .token.property {
  color: #8500ff;
}

.codeflask .token.tag {
  color: #8500ff;
}

.codeflask .token.attr-value {
  color: #8500ff;
}
`;function X(r,e){return typeof CSS<"u"?CSS.supports(r,e):typeof document<"u"&&Y(r)in document.body.style}function Y(r){return(r=r.split("-").filter(function(e){return!!e}).map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(""))[0].toLowerCase()+r.substr(1)}var M='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',Q=X("caret-color","#000")?W:"#ccc",C="40px",V=`
  .codeflask {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .codeflask, .codeflask * {
    box-sizing: border-box;
  }

  .codeflask__pre {
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
  }

  .codeflask__textarea {
    background: none;
    border: none;
    color: `+Q+`;
    z-index: 1;
    resize: none;
    font-family: `+M+`;
    -webkit-appearance: pre;
    caret-color: #111;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .codeflask--has-line-numbers .codeflask__textarea {
    width: calc(100% - `+C+`);
  }

  .codeflask__code {
    display: block;
    font-family: `+M+`;
    overflow: hidden;
  }

  .codeflask__flatten {
    padding: 10px;
    font-size: `+J+`;
    line-height: `+z+`;
    white-space: pre;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    margin: 0 !important;
    outline: none;
    text-align: left;
  }

  .codeflask--has-line-numbers .codeflask__flatten {
    width: calc(100% - `+C+`);
    left: `+C+`;
  }

  .codeflask__line-highlight {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: `+z+`;
    background: rgba(0,0,0,0.1);
    z-index: 1;
  }

  .codeflask__lines {
    padding: 10px 4px;
    font-size: 12px;
    line-height: `+z+`;
    font-family: 'Cousine', monospace;
    position: absolute;
    left: 0;
    top: 0;
    width: `+C+`;
    height: 100%;
    text-align: right;
    color: #999;
    z-index: 2;
  }

  .codeflask__lines__line {
    display: block;
  }

  .codeflask.codeflask--has-line-numbers {
    padding-left: `+C+`;
  }

  .codeflask.codeflask--has-line-numbers:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: `+C+`;
    height: 100%;
    background: #eee;
    z-index: 1;
  }
`;function D(r,e,o){var u=e||"codeflask-style",p=o||document.head;if(!r)return!1;if(document.getElementById(u))return!0;var a=document.createElement("style");return a.innerHTML=r,a.id=u,p.appendChild(a),!0}var ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function R(r){return String(r).replace(/[&<>"'`=/]/g,function(e){return ee[e]})}var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function te(r,e){return r(e={exports:{}},e.exports),e.exports}var B=te(function(r){var e=(function(o){var u=/\blang(?:uage)?-([\w-]+)\b/i,p=0,a={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function(n){return n instanceof g?new g(n.type,a.util.encode(n.content),n.alias):Array.isArray(n)?n.map(a.util.encode):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++p}),n.__id},clone:function n(t,i){var s,l,h=a.util.type(t);switch(i=i||{},h){case"Object":if(l=a.util.objId(t),i[l])return i[l];for(var c in s={},i[l]=s,t)t.hasOwnProperty(c)&&(s[c]=n(t[c],i));return s;case"Array":return l=a.util.objId(t),i[l]?i[l]:(s=[],i[l]=s,t.forEach(function(m,y){s[y]=n(m,i)}),s);default:return t}}},languages:{extend:function(n,t){var i=a.util.clone(a.languages[n]);for(var s in t)i[s]=t[s];return i},insertBefore:function(n,t,i,s){var l=(s=s||a.languages)[n],h={};for(var c in l)if(l.hasOwnProperty(c)){if(c==t)for(var m in i)i.hasOwnProperty(m)&&(h[m]=i[m]);i.hasOwnProperty(c)||(h[c]=l[c])}var y=s[n];return s[n]=h,a.languages.DFS(a.languages,function(x,b){b===y&&x!=n&&(this[x]=h)}),h},DFS:function n(t,i,s,l){l=l||{};var h=a.util.objId;for(var c in t)if(t.hasOwnProperty(c)){i.call(t,c,t[c],s||c);var m=t[c],y=a.util.type(m);y!=="Object"||l[h(m)]?y!=="Array"||l[h(m)]||(l[h(m)]=!0,n(m,i,c,l)):(l[h(m)]=!0,n(m,i,null,l))}}},plugins:{},highlightAll:function(n,t){a.highlightAllUnder(document,n,t)},highlightAllUnder:function(n,t,i){var s={callback:i,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s);for(var l,h=s.elements||n.querySelectorAll(s.selector),c=0;l=h[c++];)a.highlightElement(l,t===!0,s.callback)},highlightElement:function(n,t,i){for(var s,l,h=n;h&&!u.test(h.className);)h=h.parentNode;h&&(s=(h.className.match(u)||[,""])[1].toLowerCase(),l=a.languages[s]),n.className=n.className.replace(u,"").replace(/\s+/g," ")+" language-"+s,n.parentNode&&(h=n.parentNode,/pre/i.test(h.nodeName)&&(h.className=h.className.replace(u,"").replace(/\s+/g," ")+" language-"+s));var c={element:n,language:s,grammar:l,code:n.textContent},m=function(x){c.highlightedCode=x,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(t&&o.Worker){var y=new Worker(a.filename);y.onmessage=function(x){m(x.data)},y.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else m(a.highlight(c.code,c.grammar,c.language));else m(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(n,t,i){var s={code:n,grammar:t,language:i};return a.hooks.run("before-tokenize",s),s.tokens=a.tokenize(s.code,s.grammar),a.hooks.run("after-tokenize",s),g.stringify(a.util.encode(s.tokens),s.language)},matchGrammar:function(n,t,i,s,l,h,c){for(var m in i)if(i.hasOwnProperty(m)&&i[m]){if(m==c)return;var y=i[m];y=a.util.type(y)==="Array"?y:[y];for(var x=0;x<y.length;++x){var b=y[x],O=b.inside,I=!!b.lookbehind,L=!!b.greedy,E=0,q=b.alias;if(L&&!b.pattern.global){var G=b.pattern.toString().match(/[imuy]*$/)[0];b.pattern=RegExp(b.pattern.source,G+"g")}b=b.pattern||b;for(var v=s,w=l;v<t.length;w+=t[v].length,++v){var A=t[v];if(t.length>n.length)return;if(!(A instanceof g)){if(L&&v!=t.length-1){if(b.lastIndex=w,!(k=b.exec(n)))break;for(var T=k.index+(I?k[1].length:0),N=k.index+k[0].length,F=v,_=w,U=t.length;F<U&&(_<N||!t[F].type&&!t[F-1].greedy);++F)T>=(_+=t[F].length)&&(++v,w=_);if(t[v]instanceof g)continue;j=F-v,A=n.slice(w,_),k.index-=w}else{b.lastIndex=0;var k=b.exec(A),j=1}if(k){I&&(E=k[1]?k[1].length:0),N=(T=k.index+E)+(k=k[0].slice(E)).length;var $=A.slice(0,T),P=A.slice(N),S=[v,j];$&&(++v,w+=$.length,S.push($));var Z=new g(m,O?a.tokenize(k,O):k,q,k,L);if(S.push(Z),P&&S.push(P),Array.prototype.splice.apply(t,S),j!=1&&a.matchGrammar(n,t,i,v,w,!0,m),h)break}else if(h)break}}}}},tokenize:function(n,t){var i=[n],s=t.rest;if(s){for(var l in s)t[l]=s[l];delete t.rest}return a.matchGrammar(n,i,t,0,0,!1),i},hooks:{all:{},add:function(n,t){var i=a.hooks.all;i[n]=i[n]||[],i[n].push(t)},run:function(n,t){var i=a.hooks.all[n];if(i&&i.length)for(var s,l=0;s=i[l++];)s(t)}},Token:g};function g(n,t,i,s,l){this.type=n,this.content=t,this.alias=i,this.length=0|(s||"").length,this.greedy=!!l}if(o.Prism=a,g.stringify=function(n,t,i){if(typeof n=="string")return n;if(Array.isArray(n))return n.map(function(c){return g.stringify(c,t,n)}).join("");var s={type:n.type,content:g.stringify(n.content,t,i),tag:"span",classes:["token",n.type],attributes:{},language:t,parent:i};if(n.alias){var l=Array.isArray(n.alias)?n.alias:[n.alias];Array.prototype.push.apply(s.classes,l)}a.hooks.run("wrap",s);var h=Object.keys(s.attributes).map(function(c){return c+'="'+(s.attributes[c]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(h?" "+h:"")+">"+s.content+"</"+s.tag+">"},!o.document)return o.addEventListener&&(a.disableWorkerMessageHandler||o.addEventListener("message",function(n){var t=JSON.parse(n.data),i=t.language,s=t.code,l=t.immediateClose;o.postMessage(a.highlight(s,a.languages[i],i)),l&&o.close()},!1)),a;var d=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return d&&(a.filename=d.src,a.manual||d.hasAttribute("data-manual")||(document.readyState!=="loading"?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a})(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});r.exports&&(r.exports=e),H!==void 0&&(H.Prism=e),e.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(o,u){var p={};p["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[u]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};a["language-"+u]={pattern:/[\s\S]+/,inside:e.languages[u]};var g={};g[o]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,o),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",g)}}),e.languages.xml=e.languages.extend("markup",{}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,(function(o){var u=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+u.source+"|.*?)\\)","i"),selector:RegExp(`[^{}\\s](?:[^{};"']|`+u.source+")*?(?=\\s*\\{)"),string:{pattern:u,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var p=o.languages.markup;p&&(p.tag.addInlined("style","css"),o.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:p.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:o.languages.css}},alias:"language-css"}},p.tag))})(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}}}),e.languages.markup&&e.languages.markup.tag.addInlined("script","javascript"),e.languages.js=e.languages.javascript,typeof self<"u"&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(o){o=o||document;var u={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(o.querySelectorAll("pre[data-src]")).forEach(function(p){if(!p.hasAttribute("data-src-loaded")){for(var a,g=p.getAttribute("data-src"),d=p,n=/\blang(?:uage)?-([\w-]+)\b/i;d&&!n.test(d.className);)d=d.parentNode;if(d&&(a=(p.className.match(n)||[,""])[1]),!a){var t=(g.match(/\.(\w+)$/)||[,""])[1];a=u[t]||t}var i=document.createElement("code");i.className="language-"+a,p.textContent="",i.textContent="Loading\u2026",p.appendChild(i);var s=new XMLHttpRequest;s.open("GET",g,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?(i.textContent=s.responseText,e.highlightElement(i),p.setAttribute("data-src-loaded","")):s.status>=400?i.textContent="\u2716 Error "+s.status+" while fetching file: "+s.statusText:i.textContent="\u2716 Error: File does not exist or is empty")},s.send(null)}}),e.plugins.toolbar&&e.plugins.toolbar.registerButton("download-file",function(p){var a=p.element.parentNode;if(a&&/pre/i.test(a.nodeName)&&a.hasAttribute("data-src")&&a.hasAttribute("data-download-link")){var g=a.getAttribute("data-src"),d=document.createElement("a");return d.textContent=a.getAttribute("data-download-link-label")||"Download",d.setAttribute("download",""),d.href=g,d}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}),f=function(r,e){if(!r)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!e)throw Error("CodeFlask expects an object containing options as second parameter");if(r.nodeType)this.editorRoot=r;else{var o=document.querySelector(r);o&&(this.editorRoot=o)}this.opts=e,this.startEditor()};f.prototype.startEditor=function(){if(!D(V,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code)},f.prototype.createWrapper=function(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask")},f.prototype.createTextarea=function(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten")},f.prototype.createPre=function(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten")},f.prototype.createCode=function(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code","language-"+(this.opts.language||"html"))},f.prototype.createLineNumbers=function(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.setLineNumber()},f.prototype.createElement=function(r,e){var o=document.createElement(r);return e.appendChild(o),o},f.prototype.runOptions=function(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=this.opts.defaultTheme!==!1,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||null,typeof this.opts.handleTabs!="boolean"&&(this.opts.handleTabs=!0),typeof this.opts.handleSelfClosingCharacters!="boolean"&&(this.opts.handleSelfClosingCharacters=!0),typeof this.opts.handleNewLineIndentation!="boolean"&&(this.opts.handleNewLineIndentation=!0),this.opts.rtl===!0&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),this.opts.enableAutocorrect===!1&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&D(K,"theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode()},f.prototype.updateLineNumbersCount=function(){for(var r="",e=1;e<=this.lineNumber;e++)r=r+'<span class="codeflask__lines__line">'+e+"</span>";this.elLineNumbers.innerHTML=r},f.prototype.listenTextarea=function(){var r=this;this.elTextarea.addEventListener("input",function(e){r.code=e.target.value,r.elCode.innerHTML=R(e.target.value),r.highlight(),setTimeout(function(){r.runUpdate(),r.setLineNumber()},1)}),this.elTextarea.addEventListener("keydown",function(e){r.handleTabs(e),r.handleSelfClosingCharacters(e),r.handleNewLineIndentation(e)}),this.elTextarea.addEventListener("scroll",function(e){r.elPre.style.transform="translate3d(-"+e.target.scrollLeft+"px, -"+e.target.scrollTop+"px, 0)",r.elLineNumbers&&(r.elLineNumbers.style.transform="translate3d(0, -"+e.target.scrollTop+"px, 0)")})},f.prototype.handleTabs=function(r){if(this.opts.handleTabs){if(r.keyCode!==9)return;r.preventDefault();var e=this.elTextarea,o=e.selectionDirection,u=e.selectionStart,p=e.selectionEnd,a=e.value,g=a.substr(0,u),d=a.substring(u,p),n=a.substring(p),t=" ".repeat(this.opts.tabSize);if(u!==p&&d.length>=t.length){var i=u-g.split(`
`).pop().length,s=t.length,l=t.length;r.shiftKey?(a.substr(i,t.length)===t?(s=-s,i>u?(d=d.substring(0,i)+d.substring(i+t.length),l=0):i===u?(s=0,l=0,d=d.substring(t.length)):(l=-l,g=g.substring(0,i)+g.substring(i+t.length))):(s=0,l=0),d=d.replace(new RegExp(`
`+t.split("").join("\\"),"g"),`
`)):(g=g.substr(0,i)+t+g.substring(i,u),d=d.replace(/\n/g,`
`+t)),e.value=g+d+n,e.selectionStart=u+s,e.selectionEnd=u+d.length+l,e.selectionDirection=o}else e.value=g+t+n,e.selectionStart=u+t.length,e.selectionEnd=u+t.length;var h=e.value;this.updateCode(h),this.elTextarea.selectionEnd=p+this.opts.tabSize}},f.prototype.handleSelfClosingCharacters=function(r){if(this.opts.handleSelfClosingCharacters){var e=r.key;if(["(","[","{","<","'",'"'].includes(e)||[")","]","}",">","'",'"'].includes(e))switch(e){case"(":case")":this.closeCharacter(e);break;case"[":case"]":this.closeCharacter(e);break;case"{":case"}":this.closeCharacter(e);break;case"<":case">":case"'":case'"':this.closeCharacter(e)}}},f.prototype.setLineNumber=function(){this.lineNumber=this.code.split(`
`).length,this.opts.lineNumbers&&this.updateLineNumbersCount()},f.prototype.handleNewLineIndentation=function(r){if(this.opts.handleNewLineIndentation&&r.keyCode===13){r.preventDefault();var e=this.elTextarea,o=e.selectionStart,u=e.selectionEnd,p=e.value,a=p.substr(0,o),g=p.substring(u),d=p.lastIndexOf(`
`,o-1),n=d+p.slice(d+1).search(/[^ ]|$/),t=n>d?n-d:0,i=a+`
`+" ".repeat(t)+g;e.value=i,e.selectionStart=o+t+1,e.selectionEnd=o+t+1,this.updateCode(e.value)}},f.prototype.closeCharacter=function(r){var e=this.elTextarea.selectionStart,o=this.elTextarea.selectionEnd;if(this.skipCloseChar(r)){var u=this.code.substr(o,1)===r,p=u?o+1:o,a=!u&&["'",'"'].includes(r)?r:"",g=""+this.code.substring(0,e)+a+this.code.substring(p);this.updateCode(g),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart}else{var d=r;switch(r){case"(":d=String.fromCharCode(r.charCodeAt()+1);break;case"<":case"{":case"[":d=String.fromCharCode(r.charCodeAt()+2)}var n=this.code.substring(e,o),t=""+this.code.substring(0,e)+n+d+this.code.substring(o);this.updateCode(t)}this.elTextarea.selectionEnd=e},f.prototype.skipCloseChar=function(r){var e=this.elTextarea.selectionStart,o=this.elTextarea.selectionEnd,u=Math.abs(o-e)>0;return[")","}","]",">"].includes(r)||["'",'"'].includes(r)&&!u},f.prototype.updateCode=function(r){this.code=r,this.elTextarea.value=r,this.elCode.innerHTML=R(r),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1)},f.prototype.updateLanguage=function(r){var e=this.opts.language;this.elCode.classList.remove("language-"+e),this.elCode.classList.add("language-"+r),this.opts.language=r,this.highlight()},f.prototype.addLanguage=function(r,e){B.languages[r]=e},f.prototype.populateDefault=function(){this.updateCode(this.code)},f.prototype.highlight=function(){B.highlightElement(this.elCode,!1)},f.prototype.onUpdate=function(r){if(r&&{}.toString.call(r)!=="[object Function]")throw Error("CodeFlask expects callback of type Function");this.updateCallBack=r},f.prototype.getCode=function(){return this.code},f.prototype.runUpdate=function(){this.updateCallBack&&this.updateCallBack(this.code)},f.prototype.enableReadonlyMode=function(){this.elTextarea.setAttribute("readonly",!0)},f.prototype.disableReadonlyMode=function(){this.elTextarea.removeAttribute("readonly")};var ne=f;export{ne as CodeFlask};
