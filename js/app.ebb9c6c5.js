(function(e){function t(t){for(var n,o,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad28c206"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"a86230ea"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"0418":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("img",{attrs:{id:"logo",src:r("9c57")}}),n("div",{attrs:{id:"dugmici"}},[n("router-link",{attrs:{to:"/"}},[n("button",{attrs:{id:"prvi"}},[e._v("Početna stranica")])]),n("router-link",{attrs:{to:"/about"}},[n("button",{attrs:{id:"drugi"}},[e._v("Info stranica")])])],1)])},o=[],a={name:"Header"},i=a,u=(r("7408"),r("2877")),c=Object(u["a"])(i,n,o,!1,null,"181d23d0",null);t["a"]=c.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),u={},c=Object(i["a"])(u,o,a,!1,null,null,null),s=c.exports,l=(r("d3b7"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{attrs:{id:"dugme"}},[r("Header"),r("router-link",{attrs:{id:"router",to:"/Game"}},[r("button",{attrs:{id:"pokreni"}},[e._v("Pokreni igru")])])],1),r("div",{attrs:{id:"pozadina"}},[r("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1)])},p=[],f=r("0418"),h={name:"home",components:{Header:f["a"]}},m=h,v=(r("cccb"),Object(i["a"])(m,d,p,!1,null,null,null)),b=v.exports;n["a"].use(l["a"]);var g=[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/Game",name:"Game",component:function(){return r.e("about").then(r.bind(null,"7d36"))}}],y=new l["a"]({routes:g}),w=y,_=r("98c9");n["a"].use(_["a"]),n["a"].config.productionTip=!1,new n["a"]({router:w,render:function(e){return e(s)}}).$mount("#app")},"5ce1":function(e,t,r){},"5ced":function(e,t,r){},7408:function(e,t,r){"use strict";var n=r("5ce1"),o=r.n(n);o.a},"85ec":function(e,t,r){},"9c57":function(e,t,r){e.exports=r.p+"img/logo-spider.648099dc.png"},cccb:function(e,t,r){"use strict";var n=r("5ced"),o=r.n(n);o.a}});
//# sourceMappingURL=app.ebb9c6c5.js.map