import{a,b as x,i as ue,p as $,h as d,c,m as R,d as L,s as E,e as ce,o as p,f as Ke,_ as f,g as Ye,j as Je,k as Me,l as Qe,n as Xe,q as qe,r as Ze,t as et,u as tt,v as rt,w as nt,x as st,y as it,z as ot,A as at,B as lt,C as ut,D as ct,E as dt,F as gt,G as ft,H as pt,I as _t,J as ht,K as mt,L as vt,M as yt,N as xt,O as bt,P as Pt,Q as Rt,R as wt,S as F,T as Et,U as Ot,V as St,W as A,X as de,Y as Tt,Z as At,$ as Ft,a0 as ge,a1 as It,a2 as fe,a3 as Ct,a4 as pe,a5 as _e,a6 as D,a7 as Lt}from"./chunk-2d7decae.js";function b(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Z(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function U(e,t){const r=Object.getOwnPropertyDescriptor(e,t);return!!r&&!("value"in r)&&!!r.get}function K(e){a(e.urlOriginal),"urlPathname"in e?a(U(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:me,enumerable:!0,configurable:!0}),"url"in e?a(U(e,"url")):Object.defineProperty(e,"url",{get:kt,enumerable:!1,configurable:!0}),"urlParsed"in e?a(U(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:Wt,enumerable:!0,configurable:!0})}function he(e){let t=e.urlOriginal;const{_baseUrl:r,_urlProcessor:n}=e;return a(r.startsWith("/")),a(n===null||ue(n)),n!==null&&(t=n(t)),$(t,r)}function me(){const{pathname:e}=he(this),t=e;return a(t.startsWith("/")),t}function kt(){return x(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),me.call(this)}function Wt(){const e=he(this),{origin:t,pathname:r,pathnameOriginal:n,search:s,searchAll:o,searchOriginal:i,hash:l,hashOriginal:g}=e,_={origin:t,pathname:r,pathnameOriginal:n,search:s,searchAll:o,searchOriginal:i,hash:l,hashOriginal:g,get hashString(){return x(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),g},get searchString(){return x(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return ee(_,"hashString"),ee(_,"searchString"),_}function ee(e,t){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...r,enumerable:!1})}function Nt(e){a(typeof e.urlOriginal=="string"),a(typeof e.urlPathname=="string"),a(b(e.urlParsed)),a(e.urlPathname===e.urlParsed.pathname)}function $t(e,t){if(!b(e))return!1;for(const r of Object.keys(e))if(!t.includes(r))return!1;return!0}function jt(e){return d(e,"then")&&ue(e.then)}const Y="@",G=":";function J(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),a(t.startsWith("/"));const r=e.split("/"),n=t.split("/"),s={};Ht(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(r.length,n.length);o++){const i=r[o],l=n[o];if(i==="*")return s["*"]=n.slice(Math.max(1,o)).join("/"),{routeParams:s};if(i&&k(i)){if(x(!i.startsWith(G),`Outdated route string \`${e}\`, use \`${e.split(G).join(Y)}\` instead.`,{onlyOnce:!0}),!l)return null;s[i.slice(1)]=l}else if((i||"")!==(l||""))return null}return{routeParams:s}}function Ht(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function T(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let r=0;for(const i of t){if(k(i))break;r++}const n=t.filter(i=>!k(i)).length,s=t.filter(i=>k(i)).length,o=e.endsWith("*");return{numberOfParameterSegments:s,numberOfStaticSegmentsBeginning:r,numberOfStaticSegements:n,isCatchAll:o}}function k(e){return e.startsWith(Y)||e.startsWith(G)}function te(e){const r=J(e,e);return r!==null&&Object.keys(r.routeParams).length===0}function Vt(e){e.sort(Dt).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(R(t=>t.routeType==="STRING"&&te(t.routeString)===!1)).sort(R(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(R(t=>t.routeType==="STRING"&&te(t.routeString)===!0)).sort(R(t=>t.routeType==="FILESYSTEM")).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Dt(e,t){var r,n;{const s=(r=e.precedence)!==null&&r!==void 0?r:0,o=(n=t.precedence)!==null&&n!==void 0?n:0;if(s!==o)return s>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=L(i=>T(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=L(i=>T(i).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=L(i=>T(i).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(T(t.routeString).isCatchAll)return-1;if(T(e.routeString).isCatchAll)return 1}return 0}function Ut(e,t){return Kt(e)?J(e,t):Bt(e,t)}function Bt(e,t){return t=zt(t),a(t.startsWith("/")),a(e.startsWith("/")),a(!t.endsWith("/")||t==="/"),a(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function zt(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=E(e,0,-1);return e===""?"/":e}function Gt(e,t){const n=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(L(({filesystemRoot:o})=>o.length))[0];let s;if(n){const{filesystemRoot:o,routeRoot:i}=n,l={pageId:e,filesystemRoot:o,routeRoot:i};a(i.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),l),a(e.startsWith(o),l),o!=="/"?(a(!o.endsWith("/"),l),s=E(e,o.length,0)):s=e,a(s.startsWith("/"),l),s=i+(i.endsWith("/")?"":"/")+E(s,1,0)}else s=e;return a(s.startsWith("/")),s=s.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),a(!s.includes(".page.")),a(!s.endsWith(".")),s.endsWith("/index")&&(s=E(s,0,-6)),s===""&&(s="/"),a(s.startsWith("/")),a(!s.endsWith("/")||s==="/"),s}function Kt(e){return e.includes(Y)}async function Yt(e,t,r){Nt(t);let n=e.default(t);if(c(!jt(n)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${r} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),n=await n,n===!1)return null;if(n===!0&&(n={}),c(b(n),`The Route Function ${r} should return a boolean or a plain JavaScript object, instead it returns \`${d(n,"constructor")?n.constructor:n}\`.`),"match"in n){const{match:i}=n;if(c(typeof i=="boolean",`The \`match\` value returned by the Route Function ${r} should be a boolean.`),!i)return null}let s=null;"precedence"in n&&(s=n.precedence,c(typeof s=="number",`The \`precedence\` value returned by the Route Function ${r} should be a number.`)),ve(n,`The \`routeParams\` object returned by the Route Function ${r} should`);const o=n.routeParams||{};return c(!("pageContext"in n),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),a(b(o)),Object.keys(n).forEach(i=>{c(i==="match"||i==="routeParams"||i==="precedence",`The Route Function ${r} returned an object with an unknown key \`{ ${i} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:s,routeParams:o}}function ve(e,t){a(t.endsWith(" should")),d(e,"routeParams")&&(c(b(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(r=>typeof r=="string"),`${t} only hold string values.`))}function ye(e,{hook:t,errorMessagePrefix:r}){if(!r){a(t);const{hookName:n,hookFilePath:s}=t;a(s.startsWith("/")),a(!n.endsWith(")")),r=`The \`pageContext\` provided by the \`export { ${n} }\` of ${s}`}c(ce(e),`${r} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${r} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),x(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function Jt(e,t){const r=await e.onBeforeRoute(t),n=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(r==null||$t(r,["pageContext"])&&d(r,"pageContext"),`${n} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return null;if(c(d(r,"pageContext","object"),`${n} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(r.pageContext,"_pageId")&&!d(r.pageContext,"_pageId","null")){const o=`${n} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(d(r.pageContext,"_pageId","string"),`${o} a string or \`null\``),c(t._allPageIds.includes(r.pageContext._pageId),`${o} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(r.pageContext,"routeParams")&&ve(r.pageContext,`${n} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const s={};return d(r.pageContext,"url")&&(x(!1,`${n} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),r.pageContext.urlOriginal=r.pageContext.url,delete r.pageContext.url),d(r.pageContext,"urlOriginal")&&(c(d(r.pageContext,"urlOriginal","string"),`${n} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),p(s,{_urlPristine:t.urlOriginal})),ye(r.pageContext,{hook:{hookFilePath:e.filePath,hookName:"onBeforeRoute"}}),p(s,r.pageContext),s}async function Mt(e){let t=null;const r=[];await Promise.all(e._pageFilesAll.filter(i=>i.fileType===".page.route").map(i=>{var l;return(l=i.loadFile)===null||l===void 0?void 0:l.call(i)})),e._pageFilesAll.filter(i=>i.fileType===".page.route"&&i.isDefaultPageFile).forEach(({filePath:i,fileExports:l})=>{if(a(l),"onBeforeRoute"in l){c(d(l,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${i} should be a function.`);const{onBeforeRoute:g}=l;t={filePath:i,onBeforeRoute:g}}"filesystemRoutingRoot"in l&&(c(d(l,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} should be a string.`),c(d(l,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} is \`'${l.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:Xt(i),routeRoot:l.filesystemRoutingRoot}))});const n=e._allPageIds,s=[];return n.filter(i=>!Ke(i)).filter(i=>{const l=Qt(i,e._pageFilesAll);if(!l)return!0;const{filePath:g,fileExports:_}=l;a(_),c("default"in _,`${g} should have a default export.`),c(d(_,"default","string")||d(_,"default","function"),`The default export of ${g} should be a string or a function.`),c(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in _)||d(_,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${g} should be a boolean.`);const u=_.default;return s.push({pageId:i,filesystemRoute:null,pageRouteFile:{filePath:g,fileExports:_,routeValue:u}}),!1}).forEach(i=>{const l=Gt(i,r);a(l.startsWith("/")),a(!l.endsWith("/")||l==="/"),s.push({pageId:i,filesystemRoute:l,pageRouteFile:null})}),{pageRoutes:s,onBeforeRouteHook:t}}function Qt(e,t){return t.find(r=>r.pageId===e&&r.fileType===".page.route")}function Xt(e){a(e.startsWith("/")),a(!e.endsWith("/"));const t=e.split("/"),r=E(t,0,-1).join("/")||"/";return a(r.startsWith("/")),a(!r.endsWith("/")||r==="/"),r}var I;function re(...e){var t,r;I||(I=(r=(t=globalThis).__brillout_debug_createDebugger)===null||r===void 0?void 0:r.call(t,"vps:routing")),I&&I(...e)}async function xe(e){K(e);const{pageRoutes:t,onBeforeRouteHook:r}=await Mt(e);re("Pages routes:",t.map(u=>({pageId:u.pageId,filesystemRoute:u.filesystemRoute,pageRouteFile:u.pageRouteFile&&{filePath:u.pageRouteFile.filePath,routeValue:u.pageRouteFile.routeValue}})));const n={};if(r){const u=await Jt(r,e);if(u){if(p(n,u),d(n,"_pageId","string")||d(n,"_pageId","null"))return d(n,"routeParams")?a(d(n,"routeParams","object")):p(n,{routeParams:{}}),p(n,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:n};p(e,n)}}p(n,{_routingProvidedByOnBeforeRouteHook:!1});const s=e._allPageIds;a(s.length>=0),c(s.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;a(o.startsWith("/"));const i=[];await Promise.all(t.map(async u=>{const{pageId:m,filesystemRoute:O,pageRouteFile:S}=u;if(S){const v=S.fileExports,P=S.filePath;if(d(v,"default","string")){const h=v.default;c(h.startsWith("/"),`A Route String should start with a leading \`/\` but \`${P}\` has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`);const y=J(h,o);if(y){const{routeParams:V}=y;i.push({pageId:m,routeString:h,routeParams:V,routeType:"STRING"})}}else if(d(v,"default","function")){const h=await Yt(v,e,P);if(h){const{routeParams:y,precedence:V}=h;i.push({pageId:m,precedence:V,routeParams:y,routeType:"FUNCTION"})}}else a(!1)}else{const v=Ut(O,o);if(v){const{routeParams:P}=v;i.push({pageId:m,routeParams:P,routeType:"FILESYSTEM"})}}})),Vt(i);const l=i[0];if(re(`Route matches for URL \`${o}\` (in precedence order):`,i),p(n,{_routeMatches:i}),!l)return p(n,{_pageId:null,routeParams:{}}),{pageContextAddendum:n};const{pageId:g,routeParams:_}=l;return a(b(_)),p(n,{_pageId:g,routeParams:_}),{pageContextAddendum:n}}const M={},be={},qt={},j={},Pe={},Zt=!0,er={},tr={},rr={...er,...tr};M[".page"]=rr;const nr={},sr={},ir={...nr,...sr};be[".page.route"]=ir;const or={"/pages/index/index.page.client.ts":()=>f(()=>import("./pages/index/index.page.client.44a313ec.js"),["assets/pages/index/index.page.client.44a313ec.js","assets/chunk-89b08d91.js"])},ar={"/node_modules/vikepress/src/renderer/_default.page.client.ts":()=>f(()=>import("./chunk-bda81f83.js"),["assets/chunk-bda81f83.js","assets/_default.page.client.ec987e6f.css","assets/P.8c851859.css","assets/chunk-89b08d91.js"])},lr={...or,...ar};M[".page.client"]=lr;const ur={"/pages/index/index.page.client.ts":Ye},cr={"/node_modules/vikepress/src/renderer/_default.page.client.ts":Je},dr={...ur,...cr};j[".page.client"]=dr;const gr={"/pages/Abort.page.server.mdx":Me,"/pages/RPC-vs-GraphQL-REST.page.server.mdx":Qe,"/pages/abort-shield.page.server.mdx":Xe,"/pages/abort-vs-error.page.server.mdx":qe,"/pages/auth.page.server.mdx":Ze,"/pages/config.page.server.mdx":et,"/pages/createTelefuncCaller.page.server.mdx":tt,"/pages/error-handling.page.server.mdx":rt,"/pages/error-tracking.page.server.mdx":nt,"/pages/file-structure.page.server.mdx":st,"/pages/file-upload.page.server.mdx":it,"/pages/form-validation.page.server.mdx":ot,"/pages/getContext.page.server.mdx":at,"/pages/index/index.page.server.tsx":lt,"/pages/install.page.server.mdx":ut,"/pages/isomorphic-import.page.server.mdx":ct,"/pages/next.page.server.mdx":dt,"/pages/nuxt.page.server.mdx":gt,"/pages/permissions.page.server.mdx":ft,"/pages/provideTelefuncContext.page.server.mdx":pt,"/pages/shield.page.server.mdx":_t,"/pages/ssr-context.page.server.mdx":ht,"/pages/ssr.page.server.mdx":mt,"/pages/telefunc-server.page.server.mdx":vt,"/pages/tour.page.server.mdx":yt,"/pages/typescript.page.server.mdx":xt,"/pages/vite.page.server.mdx":bt,"/pages/waterfalls.page.server.mdx":Pt},fr={"/node_modules/vikepress/src/renderer/_default.page.server.tsx":Rt},pr={...gr,...fr};j[".page.server"]=pr;const _r={},hr={},mr={..._r,...hr};j[".page"]=mr;const vr={"/pages/Abort.page.server.mdx":()=>f(()=>import("./chunk-87797ab9.js"),[]),"/pages/RPC-vs-GraphQL-REST.page.server.mdx":()=>f(()=>import("./chunk-29f25019.js"),["assets/chunk-29f25019.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/abort-shield.page.server.mdx":()=>f(()=>import("./chunk-29f250192.js"),["assets/chunk-29f250192.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/abort-vs-error.page.server.mdx":()=>f(()=>import("./chunk-29f250193.js"),["assets/chunk-29f250193.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/auth.page.server.mdx":()=>f(()=>import("./chunk-29f250194.js"),["assets/chunk-29f250194.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/config.page.server.mdx":()=>f(()=>import("./chunk-87797ab92.js"),[]),"/pages/createTelefuncCaller.page.server.mdx":()=>f(()=>import("./chunk-87797ab93.js"),[]),"/pages/error-handling.page.server.mdx":()=>f(()=>import("./chunk-29f250195.js"),["assets/chunk-29f250195.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/error-tracking.page.server.mdx":()=>f(()=>import("./chunk-87797ab94.js"),[]),"/pages/file-structure.page.server.mdx":()=>f(()=>import("./chunk-29f250196.js"),["assets/chunk-29f250196.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/file-upload.page.server.mdx":()=>f(()=>import("./chunk-87797ab95.js"),[]),"/pages/form-validation.page.server.mdx":()=>f(()=>import("./chunk-29f250197.js"),["assets/chunk-29f250197.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/getContext.page.server.mdx":()=>f(()=>import("./chunk-87797ab96.js"),[]),"/pages/index/index.page.server.tsx":()=>f(()=>import("./chunk-c29ec61b.js"),["assets/chunk-c29ec61b.js","assets/index.page.server.45d3ba35.css","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/install.page.server.mdx":()=>f(()=>import("./chunk-29f250198.js"),["assets/chunk-29f250198.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/isomorphic-import.page.server.mdx":()=>f(()=>import("./chunk-87797ab97.js"),[]),"/pages/next.page.server.mdx":()=>f(()=>import("./chunk-29f250199.js"),["assets/chunk-29f250199.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/nuxt.page.server.mdx":()=>f(()=>import("./chunk-29f2501910.js"),["assets/chunk-29f2501910.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/permissions.page.server.mdx":()=>f(()=>import("./chunk-29f2501911.js"),["assets/chunk-29f2501911.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/provideTelefuncContext.page.server.mdx":()=>f(()=>import("./chunk-87797ab98.js"),[]),"/pages/shield.page.server.mdx":()=>f(()=>import("./chunk-29f2501912.js"),["assets/chunk-29f2501912.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/ssr-context.page.server.mdx":()=>f(()=>import("./chunk-29f2501913.js"),["assets/chunk-29f2501913.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/ssr.page.server.mdx":()=>f(()=>import("./chunk-29f2501914.js"),["assets/chunk-29f2501914.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/telefunc-server.page.server.mdx":()=>f(()=>import("./chunk-87797ab99.js"),[]),"/pages/tour.page.server.mdx":()=>f(()=>import("./chunk-29f2501915.js"),["assets/chunk-29f2501915.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/typescript.page.server.mdx":()=>f(()=>import("./chunk-29f2501916.js"),["assets/chunk-29f2501916.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/vite.page.server.mdx":()=>f(()=>import("./chunk-29f2501917.js"),["assets/chunk-29f2501917.js","assets/P.8c851859.css","assets/FeatureList.c62da281.css"]),"/pages/waterfalls.page.server.mdx":()=>f(()=>import("./chunk-87797ab910.js"),[])},yr={"/node_modules/vikepress/src/renderer/_default.page.server.tsx":()=>f(()=>import("./chunk-1ad2bff5.js"),["assets/chunk-1ad2bff5.js","assets/_default.page.server.f871bfbc.css"])},xr={...vr,...yr};Pe[".page.server"]=xr;var br=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:M,pageFilesEager:be,pageFilesExportNamesLazy:qt,pageFilesExportNamesEager:j,neverLoaded:Pe,isGeneratedFile:Zt},Symbol.toStringTag,{value:"Module"}));wt(br);function Re(){const e="/";return Pr(e)?"/":e}function Pr(e){return!!e.startsWith("http")}function we(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Rr(e,t){let r=!1;return()=>{r||(r=!0,setTimeout(()=>{r=!1,e()},t))}}function wr(e){return $(e,"/").pathname}function H(e){window.location.href=e}const Er="/";function Or(e,t,r){a(t!==".pageContext.json"||r===!0);const{pathnameOriginal:n,searchOriginal:s,hashOriginal:o}=$(e,Er);e.startsWith("/")&&a(e===`${n}${s||""}${o||""}`,{url:e});let i=n;if(r)i.endsWith("/")&&(i=E(i,0,-1)),a(!i.endsWith("/")),i===""&&(i="/index");else{const g=n.endsWith("/")?"":"/";i=i+`${g}index`}return`${i}${t}${s||""}${o||""}`}function Sr(){return!!Tr()}function Tr(){var e,t,r,n;const s=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),o=!!(!((n=(r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||r===void 0?void 0:r.rendererInterfaces)===null||n===void 0)&&n.size),i=!!window.__vite_plugin_react_preamble_installed__,l=!!window.$RefreshReg$,g=_=>{x(_,"An internal heuristic needs to be updated, see https://github.com/brillout/vite-plugin-ssr/issues/423",{onlyOnce:!0})};return s||o?(g(s&&o&&i&&l),!0):i||l?(a(s===!1&&o===!1),g(i&&l),!0):!1}function Ar(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function Fr(e){return new Promise(t=>setTimeout(t,e))}const Ir=F();let ne=!1;const Ee={markNavigationChange(){ne=!0},get noNavigationChangeYet(){return!ne&&this.isFirstUrl(F())},isFirstUrl(e){return e===Ir}};function Oe(e,t){return Et(e,t)}async function Cr(e,t){const n=Oe(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(n.map(async o=>{o.exportNames||(a(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:n.some(({exportNames:o})=>(a(o),o.includes("onBeforeRender")))}}function Lr(e,t,r,n){a(!t.endsWith(")"));const s=`The \`export { ${t} }\` of ${n}`;c(e==null||b(e),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(kr(e,r,s),"pageContext"in e&&ye(e.pageContext,{hook:{hookName:t,hookFilePath:n}}))}function kr(e,t,r){const n=[],s=Object.keys(e);for(const o of s)t.includes(o)||n.push(o);c(n.length===0,[r,"returned an object with unknown keys",Z(n)+".","Only following keys are allowed:",Z(t)+"."].join(" "))}function Se(e){return a([!0,!1].includes(e.isHydration)),a([!0,!1,null].includes(e.isBackwardNavigation)),Ot(e)}const se=["urlPathname","urlParsed"],Wr=["Page","pageExports","exports"];function Te(e){[...Wr,...se].forEach(r=>{r in e&&(se.includes(r)?(a(r.startsWith("url")),x(!1,`\`pageContext.${r}\` is already available in the browser when using \`useClientRouter()\`; including \`${r}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):x(!1,`\`pageContext.${r}\` is a built-in that cannot be overriden; including \`${r}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[r])})}async function Nr(e){return e._isFirstRenderAttempt&&Ee.isFirstUrl(e.urlOriginal)?(a(d(e,"_isFirstRenderAttempt","true")),$r(e)):(a(d(e,"_isFirstRenderAttempt","false")),Hr(e))}async function $r(e){const t=St();return Te(t),p(t,{isHydration:!0,_comesDirectlyFromServer:!0}),p(t,await A(e._pageFilesAll,t._pageId)),t}async function jr(e){const t=de(e._allPageIds);if(!t)throw new Error("No error page");const r={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return p(r,await A(e._pageFilesAll,r._pageId)),r}async function Hr(e){let t={};p(t,{isHydration:!1}),p(t,await Dr(e)),p(t,await A(e._pageFilesAll,t._pageId));const r=await Vr({...e,...t});if(a([!0,!1].includes(r._comesDirectlyFromServer)),r._isError){t={},a(r._comesDirectlyFromServer===!0),a(d(r,"is404","boolean")),a(d(r,"pageProps","object")),a(d(r.pageProps,"is404","boolean")),a(!("serverSideError"in r));const n=de(e._allPageIds);return a(n),p(t,{isHydration:!1,_pageId:n}),p(t,r),p(t,await A(e._pageFilesAll,t._pageId)),t}else return p(t,r),t}async function Vr(e){const t=Tt(e,"onBeforeRender");if(t){const n=t.hook,s={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=Se({...e,...s}),i=await n(o);Lr(i,"onBeforeRender",["pageContext"],t.filePath);const l=i==null?void 0:i.pageContext;return p(s,l),s}else if((await Cr(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const n=await Ur(e),s={};return Object.assign(s,n),p(s,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:n}),s}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function Dr(e){const r=(await xe(e)).pageContextAddendum;if(!r._pageId)throw new Error("No routing match");return a(d(r,"_pageId","string")),r}async function Ur(e){var t;const r=Or((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal,".pageContext.json",!0),n=await fetch(r);{const l=n.headers.get("content-type"),g=l&&l.includes("application/json");if(!g&&n.status===404){H(e.urlOriginal);const _=new Error("Page doesn't exist");throw Object.assign(_,{_abortRendering:!0}),_}c(g,`Wrong HTTP Response Header \`content-type\` value for URL ${r} (it should be \`application/json\` but we got \`${l}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const s=await n.text(),o=At(s);if("serverSideError"in o)throw Ft("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");a(d(o,"pageContext"));const i=o.pageContext;return a(b(i)),a(d(i,"_pageId","string")),Te(i),i}let B;async function Ae(){return B||(B=await Br()),B}async function Br(){const e=Re();ge(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:r,allPageIds:n}=await It(!0);return p(t,{_pageFilesAll:r,_allPageIds:n}),t}async function Fe(e){const t=await Ae(),r={urlOriginal:e,...t},n=t._pageFilesAll;K(r);const s=await xe(r);if(!("pageContextAddendum"in s))return{pageId:null,pageFilesAll:n};const o=s.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:n}:{pageId:null,pageFilesAll:n}}function W(e){return e.exportNames?e.exportNames:(a(e.fileExports,e.pageId),Object.keys(e.fileExports))}function zr({pageFilesClientSide:e,pageFilesServerSide:t,pageId:r}){return{isHtmlOnly:n(),isClientRouting:o()};function n(){return t.some(g=>g.pageId===r&&g.fileType===".page")?(s(),!1):t.some(g=>g.pageId===r&&g.fileType===".page.server")}function s(){const i=e.some(l=>W(l).includes("render"));c(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((l,g)=>` (${g+1}): ${l.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(l=>W(l).includes("clientRouting"))}}function Gr({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:r,isClientRouting:n}){let s=[];const o=t.filter(l=>!e.includes(l)),i=[];if(i.push(...e.map(l=>({id:l.filePath,onlyAssets:!1}))),i.push(...o.map(l=>({id:l.filePath,onlyAssets:!0}))),r)s=e.map(l=>l.filePath);else{const l=n?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";i.push({id:l,onlyAssets:!1}),s=[l]}return{clientEntries:s,clientDependencies:i}}function Kr(e,t){let r=fe(e,t);const n=Oe(e,t),{isHtmlOnly:s,isClientRouting:o}=zr({pageFilesClientSide:r,pageFilesServerSide:n,pageId:t});s&&(r=r.filter(g=>g.fileType===".page.client"&&!W(g).includes("render")),r=Jr(r));const{clientEntries:i,clientDependencies:l}=Gr({pageFilesClientSide:r,pageFilesServerSide:n,isHtmlOnly:s,isClientRouting:o});return{isHtmlOnly:s,isClientRouting:o,clientEntries:i,clientDependencies:l,pageFilesClientSide:r,pageFilesServerSide:n}}async function Yr(e,t,{sharedPageFilesAlreadyLoaded:r}){const n=fe(e,t);await Promise.all(n.map(async s=>{var o;a(s.fileType===".page"||s.fileType===".page.client"),!(r&&s.fileType===".page")&&await((o=s.loadExportNames)===null||o===void 0?void 0:o.call(s))}))}function Jr(e){const t=[];for(const r of e)if(t.push(r),W(r).includes("overrideDefaultPages"))break;return t}async function Ie(e){const{pageId:t,pageFilesAll:r}=await Fe(e);if(!t)return!1;await Yr(r,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:n,isClientRouting:s}=Kr(r,t);return!n&&s}function Ce(e){const t=e.getAttribute("href");return!!(t===null||t===""||we(t)||Mr(e)||Qr(t)||!Xr(t)||!Ct(t))}function Mr(e){const t=e.getAttribute("target"),r=e.getAttribute("rel");return t==="_blank"||t==="_external"||r==="external"||e.hasAttribute("download")}function Qr(e){if(e.startsWith("#"))return!0;const t=r=>r.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Xr(e){const t=Re();ge(t);const{hasBaseUrl:r}=$(e,t);return r}function qr(e,t){const r=Zr(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:r}}function Zr(e,t){let r=en(t),n=(()=>{if(r!==null)return r===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&c(r===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:s}=e.exports;if(s===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";c(b(s),o);const i=Object.keys(s);c(i.length===1&&i[0]==="when",o);const{when:l}=s;if(l==="HOVER"||l==="VIEWPORT")return{when:l};c(!1,o)}return{when:"HOVER"}})();return n&&n.when==="VIEWPORT"&&!e._isProduction&&(pe(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n={when:"HOVER"}),n}function en(e){let t=e.getAttribute("data-prefetch");if(x(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(a(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const Le=new Map;function ke(e){const t=Ne(e);return Le.has(t)}function We(e){const t=Ne(e);Le.set(t,!0)}function Ne(e){return wr(e)}const ie=new Map;async function z(e){if(c(!we(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),ke(e))return;We(e);const{pageId:t,pageFilesAll:r}=await Fe(e);if(t)try{await A(r,t)}catch(n){if(_e(n))Ue();else throw n}}function tn(e){We(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async r=>{if(ie.has(r))return;ie.set(r,!0);const n=r.getAttribute("href");if(Ce(r)||(a(n),!await Ie(n))||ke(n))return;const s=qr(e,r);if(s.prefetchStaticAssets){if(s.prefetchStaticAssets.when==="HOVER")r.addEventListener("mouseover",()=>z(n)),r.addEventListener("touchstart",()=>z(n),{passive:!0});else if(s.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(i=>{i.forEach(l=>{l.isIntersecting&&(z(n),o.disconnect())})});o.observe(r)}}else return})}function $e(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=He()),"scrollPosition"in e||(t=!0,e.scrollPosition=je()),Ve(e),t&&X(e)}function Q(){const e=window.history.state||{};return Ve(e),e}function je(){return{x:window.scrollX,y:window.scrollY}}function He(){return new Date().getTime()}function oe(){const e=je(),t=Q();X({...t,scrollPosition:e})}function rn(e,t){if(t)X(Q(),e);else{const r=He();nn({timestamp:r,scrollPosition:null},e)}}function Ve(e){if(a(ce(e)),"timestamp"in e){const{timestamp:t}=e;a(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&a(d(t,"x","number")&&d(t,"y","number"))}}function X(e,t){window.history.replaceState(e,"",t)}function nn(e,t){window.history.pushState(e,"",t)}gn();$e();let C,De=!1;function Ue(){De=!0,pe(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function sn(){cn(),on((s,{keepScrollPosition:o})=>{n({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:s,isBackwardNavigation:!1})}),an((s,o)=>{n({scrollTarget:s,isBackwardNavigation:o})}),globalThis.__vite_plugin_ssr__navigate=async(s,{keepScrollPosition:o,overwriteLastHistoryEntry:i})=>{await n({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:s,overwriteLastHistoryEntry:i,isBackwardNavigation:!1})};let e=0,t,r=!1;n({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function n({scrollTarget:s,url:o=F(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:l}){var g,_;if(De){H(o);return}const u={urlOriginal:o,isBackwardNavigation:l},m=++e;a(m>=1),m>1&&r===!1&&(C==null||C(u),r=!0);const O=()=>Sr()&&m===1?!1:m!==e,S=await Ae();if(O())return;const v=m===1;p(u,{_isFirstRenderAttempt:v}),p(u,S),K(u);let P;try{P=await Nr(u)}catch(h){if(le(h,u))return;console.error(h);try{P=await jr(u)}catch(y){if(le(y,u)||(v||setTimeout(()=>{window.location.pathname=o},0),Ar(h,y)))return;throw y}}O()||(p(u,P),D(u,"onPageTransitionStart"),C=u.exports.onPageTransitionStart,t&&await t,!O()&&(ln(o,i),Ee.markNavigationChange(),a(t===void 0),t=(async()=>{const h=Se(u);Lt(u);const y=await u.exports.render(h);c(y===void 0,"`export { render }` of "+u.exportsAll.render[0]._filePath+" should not return any value"),tn(u)})(),await t,t=void 0,u._isFirstRenderAttempt?(D(u,"onHydrationEnd"),await((_=(g=u.exports).onHydrationEnd)===null||_===void 0?void 0:_.call(g,u))):m===e&&(u.exports.onPageTransitionEnd&&(D(u,"onPageTransitionEnd"),u.exports.onPageTransitionEnd(u)),r=!1),Be(s),q(),ze=!0))}}function on(e){document.addEventListener("click",t);return;async function t(s){if(!r(s))return;const o=n(s.target);if(!o)return;const i=o.getAttribute("href");if(Ce(o))return;if(a(i),s.preventDefault(),!await Ie(i)){H(i);return}const l=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:l})}function r(s){return s.button===0&&!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey}function n(s){for(;s.tagName!=="A";){const{parentNode:o}=s;if(!o)return null;s=o}return s}}let w=N();function an(e){window.addEventListener("popstate",()=>{const t=N(),r=t.historyState.scrollPosition||"scroll-to-top-or-hash",n=t.urlWithoutHash===w.urlWithoutHash,s=!t.historyState.timestamp||!w.historyState.timestamp?null:t.historyState.timestamp<w.historyState.timestamp;w=t,n?window.history.state===null?($e(),w=N()):Be(r):e(r,s)})}function ln(e,t){F()!==e&&(q(),rn(e,t),w=N())}function N(){return{urlWithoutHash:F({withoutHash:!0}),historyState:Q()}}function Be(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=dn();if(r&&r!=="top"){const n=document.getElementById(r)||document.getElementsByName(r)[0];if(n){n.scrollIntoView();return}}t={x:0,y:0}}else a("x"in e&&"y"in e),t=e;un(t)}function un(e){const t=()=>window.scrollTo(e.x,e.y),r=()=>window.scrollX===e.x&&window.scrollY===e.y;r()||(t(),!r()&&requestAnimationFrame(()=>{t(),!r()&&setTimeout(async()=>{if(t(),r())return;const n=new Date().getTime();for(;;)if(await Fr(10),t(),r()||new Date().getTime()-n>100)return},0)}))}function cn(){window.addEventListener("scroll",Rr(oe,Math.ceil(1e3/3)),{passive:!0}),Ge(oe)}function dn(){let{hash:e}=window.location;return e===""?null:(a(e.startsWith("#")),e=e.slice(1),e)}let ze=!1;function gn(){ae(),Ge(ae),fn(()=>ze&&q())}function q(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function ae(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ge(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function fn(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function le(e,t){return!!(e!=null&&e._abortRendering||pn(e,t))}function pn(e,t){if(!_e(e))return!1;if(Ue(),t._isFirstRenderAttempt)throw e;return H(t.urlOriginal),!0}sn();
