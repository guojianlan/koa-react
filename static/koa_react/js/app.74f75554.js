!function(e){function t(t){for(var r,o,l=t[0],c=t[1],u=t[2],s=0,d=[];s<l.length;s++)o=l[s],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},a={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{1:1,2:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="koa_react/"+({}[e]||e)+"-"+e+".74f75554.css",o=l.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=(s=a[i]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){var s;if((c=(s=u[i]).getAttribute("data-href"))===r||c===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},p.href=o,document.getElementsByTagName("head")[0].appendChild(p)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=function(e){return l.p+"koa_react/js/"+({}[e]||e)+".74f75554.js"}(e),i=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,c.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=u;i.push([18,4]),n()}([function(e,t,n){e.exports=n(4)(2)},,function(e,t,n){e.exports=n(4)(329)},function(e,t,n){e.exports=n(4)(321)},function(e,t){e.exports=libs_library},,,,,,,,function(e,t,n){e.exports=n(4)(153)},function(e,t,n){},function(e,t,n){e.exports=n(4)(1)},,function(e,t,n){e.exports=n(4)(154)},,function(e,t,n){"use strict";n.r(t);var r,o,a,i,l=n(5),c=n.n(l),u=n(7),s=n.n(u),p=(n(12),n(0)),d=n.n(p),f=n(3),m=n.n(f),g=(n(13),n(2)),h=n(8),b=n.n(h),v=n(6),y=n(10),E=n.n(y),w=n(9),x=n.n(w),_=(n(17),n(1)),S={commonStore:new(r=class{constructor(){E()(this,"title",o,this),E()(this,"is_login",a,this)}changeLoginState(e){this.is_login=e}},o=x()(r.prototype,"title",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"this is about page"}}),a=x()(r.prototype,"is_login",[_.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),x()(r.prototype,"changeLoginState",[_.d],Object.getOwnPropertyDescriptor(r.prototype,"changeLoginState"),r.prototype),r)},j=Object(v.b)("commonStore")(i=Object(v.c)(i=class extends d.a.Component{constructor(e){super(e)}render(){const e=this.props,{component:t}=e,n=s()(e,["component"]);return d.a.createElement(g.Route,c()({},n,{render:e=>n.need_login&&!this.props.commonStore.is_login?d.a.createElement(g.Redirect,{to:{pathname:"/login"}}):d.a.createElement(t,c()({},e,n))}))}})||i)||i;const k=b()({loader:()=>n.e(1).then(n.bind(null,21)),loading:()=>d.a.createElement("div",null,"Loading Index...")}),L=b()({loader:()=>n.e(2).then(n.bind(null,22)),loading:()=>d.a.createElement("div",null,"Loading Login...")}),O=b()({loader:()=>n.e(3).then(n.bind(null,23)),loading:()=>d.a.createElement("div",null,"Loading Login...")});m.a.render(d.a.createElement(class extends d.a.Component{constructor(e){super(e)}render(){return d.a.createElement(v.a,S,d.a.createElement(g.BrowserRouter,null,d.a.createElement("div",null,d.a.createElement(g.Link,{to:"/"},"index"),d.a.createElement(g.Link,{to:"/login"},"login"),d.a.createElement(g.Link,{to:"/edit"},"edit"),d.a.createElement("div",null,d.a.createElement(g.Switch,null,d.a.createElement(j,{exact:!0,path:"/",component:k}),d.a.createElement(j,{exact:!0,path:"/login",component:L}),d.a.createElement(j,{need_login:!0,path:"/edit",component:O}))))))}},null),document.getElementById("app"))}]);