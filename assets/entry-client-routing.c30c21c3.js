import{i as le,h as j,a as l,s as w,b as Ge,c as u,d as f,e as v,p as $,m as R,f as ue,o as p,_ as c,g as ze,j as Ke,k as Ye,l as Je,n as qe,q as Me,r as Qe,t as Xe,u as Ze,v as et,w as tt,x as rt,y as nt,z as st,A as it,B as ot,C as at,D as lt,E as ut,F as ct,G as dt,H as gt,I as ft,J as pt,K as _t,L as mt,M as ht,N as vt,O as bt,P as yt,Q as Pt,R as xt,S as Rt,T as Ot,U as St,V as K,W as I,X as Et,Y as wt,Z as Tt,$ as A,a0 as ce,a1 as At,a2 as It,a3 as Ct,a4 as de,a5 as Ft,a6 as ge,a7 as Lt,a8 as fe,a9 as pe,aa as V,ab as jt,ac as kt}from"./chunk-5c0a7d1a.js";function y(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function X(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function W(e,t){const r=Object.getOwnPropertyDescriptor(e,t);return!!r&&!("value"in r)&&!!r.get}function Nt(e,t){if(!y(e))return!1;for(const r of Object.keys(e))if(!t.includes(r))return!1;return!0}function $t(e){return typeof e=="object"&&e!==null&&"then"in e&&le(e.then)}function Ht(e,t){const s=t.filter(({filesystemRoot:i})=>e.startsWith(i)).sort(j(({filesystemRoot:i})=>i.length))[0];let n;if(s){const{filesystemRoot:i,routeRoot:o}=s,a={pageId:e,filesystemRoot:i,routeRoot:o};l(o.startsWith("/")&&e.startsWith("/")&&i.startsWith("/"),a),l(e.startsWith(i),a),i!=="/"?(l(!i.endsWith("/"),a),n=w(e,i.length,0)):n=e,l(n.startsWith("/"),a),n=o+(o.endsWith("/")?"":"/")+w(n,1,0)}else n=e;return l(n.startsWith("/")),n=n.split("/").filter(i=>i!=="pages"&&i!=="src"&&i!=="index").join("/"),l(!n.includes(".page.")),l(!n.endsWith(".")),n.endsWith("/index")&&(n=w(n,0,-6)),n===""&&(n="/"),l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}async function Dt(e){await Promise.all(e._pageFilesAll.filter(n=>n.fileType===".page.route").map(n=>{var i;return(i=n.loadFile)===null||i===void 0?void 0:i.call(n)}));const{onBeforeRouteHook:t,filesystemRoots:r}=Wt(e);return{pageRoutes:Vt(r,e),onBeforeRouteHook:t}}function Vt(e,t){const r=[];return t._allPageIds.filter(s=>!Ge(s)).forEach(s=>{const n=Ut(s,t._pageFilesAll);if(n){const{filePath:i,fileExports:o}=n;if(l(o),u("default"in o,`${i} should have a default export.`),f(o,"default","string")){const a=o.default;u(a.startsWith("/"),`A Route String should start with a leading \`/\` but \`${i}\` has \`export default '${a}'\`. Make sure to \`export default '/${a}'\` instead.`),r.push({pageId:s,routeString:a,pageRouteFilePath:i,routeType:"STRING"});return}if(f(o,"default","function")){const a=o.default;let d=!1;const _="iKnowThePerformanceRisksOfAsyncRouteFunctions";_ in o&&(u(f(o,_,"boolean"),`The export \`${_}\` of ${i} should be a boolean.`),d=o[_]),r.push({pageId:s,routeFunction:a,pageRouteFilePath:i,allowAsync:d,routeType:"FUNCTION"});return}u(!1,`The default export of ${i} should be a string or a function.`)}else{const i=Ht(s,e);l(i.startsWith("/")),l(!i.endsWith("/")||i==="/"),r.push({pageId:s,routeString:i,pageRouteFilePath:null,routeType:"FILESYSTEM"})}}),r}function Wt(e){let t=null;const r=[];return e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:n})=>{if(l(n),"onBeforeRoute"in n){u(f(n,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:i}=n;t={filePath:s,onBeforeRoute:i}}"filesystemRoutingRoot"in n&&(u(f(n,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(f(n,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${n.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:Bt(s),routeRoot:n.filesystemRoutingRoot}))}),{onBeforeRouteHook:t,filesystemRoots:r}}function Ut(e,t){return t.find(r=>r.pageId===e&&r.fileType===".page.route")}function Bt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),r=w(t,0,-1).join("/")||"/";return l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}function Y(e){l(e.urlOriginal),"urlPathname"in e?l(W(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:me,enumerable:!0,configurable:!0}),"url"in e?l(W(e,"url")):Object.defineProperty(e,"url",{get:Gt,enumerable:!1,configurable:!0}),"urlParsed"in e?l(W(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:zt,enumerable:!0,configurable:!0})}function _e(e){let t=e.urlOriginal;const{_baseUrl:r,_urlProcessor:s}=e;return l(r.startsWith("/")),l(s===null||le(s)),s!==null&&(t=s(t)),$(t,r)}function me(){const{pathname:e}=_e(this),t=e;return l(t.startsWith("/")),t}function Gt(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),me.call(this)}function zt(){const e=_e(this),{origin:t,pathname:r,pathnameOriginal:s,search:n,searchAll:i,searchOriginal:o,hash:a,hashOriginal:d}=e,_={origin:t,pathname:r,pathnameOriginal:s,search:n,searchAll:i,searchOriginal:o,hash:a,hashOriginal:d,get hashString(){return v(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),d},get searchString(){return v(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),o}};return Z(_,"hashString"),Z(_,"searchString"),_}function Z(e,t){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...r,enumerable:!1})}function Kt(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(y(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const he="@",G=":";function z(e,t){u(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const r=e.split("/"),s=t.split("/"),n={};Yt(e),e==="*"&&(e="/*");for(let i=0;i<Math.max(r.length,s.length);i++){const o=r[i],a=s[i];if(o==="*")return n["*"]=s.slice(Math.max(1,i)).join("/"),{routeParams:n};if(o&&k(o)){if(v(!o.startsWith(G),`Outdated route string \`${e}\`, use \`${e.split(G).join(he)}\` instead.`,{onlyOnce:!0}),!a)return null;n[o.slice(1)]=a}else if((o||"")!==(a||""))return null}return{routeParams:n}}function Yt(e){const t=e.split("*").length-1;u(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function E(e){const t=e.split("/").filter(o=>o!==""&&o!=="*");let r=0;for(const o of t){if(k(o))break;r++}const s=t.filter(o=>!k(o)).length,n=t.filter(o=>k(o)).length,i=e.endsWith("*");return{numberOfParameterSegments:n,numberOfStaticSegmentsBeginning:r,numberOfStaticSegements:s,isCatchAll:i}}function k(e){return e.startsWith(he)||e.startsWith(G)}function ee(e){const r=z(e,e);return l(r),Object.keys(r.routeParams).length===0}function Jt(e){e.sort(qt).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(R(t=>t.routeType==="STRING"&&ee(t.routeString)===!1)).sort(R(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(R(t=>t.routeType==="STRING"&&ee(t.routeString)===!0)).sort(R(t=>t.routeType==="FILESYSTEM")).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function qt(e,t){var r,s;{const n=(r=e.precedence)!==null&&r!==void 0?r:0,i=(s=t.precedence)!==null&&s!==void 0?s:0;if(n!==i)return n>i?-1:1}if(!t.routeString||!e.routeString)return 0;{const i=j(o=>E(o).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(i!==0)return i}{const i=j(o=>E(o).numberOfStaticSegements)(e.routeString,t.routeString);if(i!==0)return i}{const i=j(o=>E(o).numberOfParameterSegments)(e.routeString,t.routeString);if(i!==0)return i}{if(E(t.routeString).isCatchAll)return-1;if(E(e.routeString).isCatchAll)return 1}return 0}async function Mt(e,t,r,s){Kt(r);let n=e(r);if(u(!$t(n)||t,`The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),n=await n,n===!1)return null;if(n===!0&&(n={}),u(y(n),`The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${f(n,"constructor")?n.constructor:n}\`.`),"match"in n){const{match:a}=n;if(u(typeof a=="boolean",`The \`match\` value returned by the Route Function ${s} should be a boolean.`),!a)return null}let i=null;"precedence"in n&&(i=n.precedence,u(typeof i=="number",`The \`precedence\` value returned by the Route Function ${s} should be a number.`)),ve(n,`The \`routeParams\` object returned by the Route Function ${s} should`);const o=n.routeParams||{};return u(!("pageContext"in n),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),l(y(o)),Object.keys(n).forEach(a=>{u(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:i,routeParams:o}}function ve(e,t){l(t.endsWith(" should")),f(e,"routeParams")&&(u(y(e.routeParams),`${t} be a plain JavaScript object.`),u(Object.values(e.routeParams).every(r=>typeof r=="string"),`${t} only hold string values.`))}function be(e,{hook:t,errorMessagePrefix:r}){if(!r){l(t);const{hookName:s,hookFilePath:n}=t;l(n.startsWith("/")),l(!s.endsWith(")")),r=`The \`pageContext\` provided by the \`export { ${s} }\` of ${n}`}u(ue(e),`${r} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${r} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function Qt(e,t){const r=await e.onBeforeRoute(t),s=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(u(r==null||Nt(r,["pageContext"])&&f(r,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return null;if(u(f(r,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),f(r.pageContext,"_pageId")&&!f(r.pageContext,"_pageId","null")){const i=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(f(r.pageContext,"_pageId","string"),`${i} a string or \`null\``),u(t._allPageIds.includes(r.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(o=>`'${o}'`).join(", ")}]\`.`)}f(r.pageContext,"routeParams")&&ve(r.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const n={};return f(r.pageContext,"url")&&(v(!1,`${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),r.pageContext.urlOriginal=r.pageContext.url,delete r.pageContext.url),f(r.pageContext,"urlOriginal")&&(u(f(r.pageContext,"urlOriginal","string"),`${s} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),p(n,{_urlPristine:t.urlOriginal})),be(r.pageContext,{hook:{hookFilePath:e.filePath,hookName:"onBeforeRoute"}}),p(n,r.pageContext),n}var L;function te(...e){var t,r;L||(L=(r=(t=globalThis).__brillout_debug_createDebugger)===null||r===void 0?void 0:r.call(t,"vps:routing")),L&&L(...e)}async function ye(e){Y(e);const{pageRoutes:t,onBeforeRouteHook:r}=await Dt(e);te("Pages routes:",t);const s={};if(r){const d=await Qt(r,e);if(d){if(p(s,d),f(s,"_pageId","string")||f(s,"_pageId","null"))return f(s,"routeParams")?l(f(s,"routeParams","object")):p(s,{routeParams:{}}),p(s,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:s};p(e,s)}}p(s,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),u(n.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:i}=e;l(i.startsWith("/"));const o=[];await Promise.all(t.map(async d=>{const{pageId:_,routeType:P}=d;if(d.routeType==="FILESYSTEM"){const{routeString:g}=d,m=z(g,i);if(m){const{routeParams:b}=m;o.push({pageId:_,routeParams:b,routeString:g,routeType:P})}return}if(d.routeType==="STRING"){const{routeString:g}=d,m=z(g,i);if(m){const{routeParams:b}=m;l(P==="STRING"),o.push({pageId:_,routeString:g,routeParams:b,routeType:P})}return}if(d.routeType==="FUNCTION"){const{routeFunction:g,allowAsync:m,pageRouteFilePath:b}=d,C=await Mt(g,m,e,b);if(C){const{routeParams:F,precedence:O}=C;o.push({pageId:_,precedence:O,routeParams:F,routeType:P})}return}l(!1)})),Jt(o);const a=o[0];if(te(`Route matches for URL \`${i}\` (in precedence order):`,o),p(s,{_routeMatches:o}),!a)return p(s,{_pageId:null,routeParams:{}}),{pageContextAddendum:s};{const{routeParams:d}=a;l(y(d)),p(s,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:s}}const J={},Pe={},Xt={},H={},xe={},Zt=!0,er=Object.assign({}),tr=Object.assign({}),rr={...er,...tr};J[".page"]=rr;const nr=Object.assign({}),sr=Object.assign({}),ir={...nr,...sr};Pe[".page.route"]=ir;const or=Object.assign({"/pages/index/index.page.client.ts":()=>c(()=>import("./pages/index/index.page.client.6bd31cee.js"),["assets/pages/index/index.page.client.6bd31cee.js","assets/chunk-d3482699.js"])}),ar=Object.assign({"/node_modules/@brillout/docpress/src/renderer/_default.page.client.ts":()=>c(()=>import("./chunk-f9350749.js"),["assets/chunk-f9350749.js","assets/chunk-d3482699.js","assets/_default.page.client.2a70f547.css","assets/P.59ef0673.css"])}),lr={...or,...ar};J[".page.client"]=lr;const ur=Object.assign({"/pages/index/index.page.client.ts":ze}),cr=Object.assign({"/node_modules/@brillout/docpress/src/renderer/_default.page.client.ts":Ke}),dr={...ur,...cr};H[".page.client"]=dr;const gr=Object.assign({"/pages/Abort.page.server.mdx":Ye,"/pages/RPC-vs-GraphQL-REST.page.server.mdx":Je,"/pages/RPC.page.server.mdx":qe,"/pages/abort-vs-error.page.server.mdx":Me,"/pages/babel-plugin.page.server.mdx":Qe,"/pages/disableNamingConvention.page.server.mdx":Xe,"/pages/error-handling.page.server.mdx":Ze,"/pages/event-based.page.server.mdx":et,"/pages/file-upload.page.server.mdx":tt,"/pages/form-validation.page.server.mdx":rt,"/pages/getContext.page.server.mdx":nt,"/pages/httpHeaders.page.server.mdx":st,"/pages/index/index.page.server.tsx":it,"/pages/initial-page-data.page.server.mdx":ot,"/pages/install.page.server.mdx":at,"/pages/next.page.server.mdx":lt,"/pages/nuxt.page.server.mdx":ut,"/pages/onAbort.page.server.mdx":ct,"/pages/onBug.page.server.mdx":dt,"/pages/permissions.page.server.mdx":gt,"/pages/react-native.page.server.mdx":ft,"/pages/root.page.server.mdx":pt,"/pages/shield.page.server.mdx":_t,"/pages/svelte-kit.page.server.mdx":mt,"/pages/telefunc.page.server.mdx":ht,"/pages/telefuncFiles.page.server.mdx":vt,"/pages/telefuncUrl.page.server.mdx":bt,"/pages/transformer.page.server.mdx":yt,"/pages/vite-plugin.page.server.mdx":Pt,"/pages/vite.page.server.mdx":xt,"/pages/webpack-plugin.page.server.mdx":Rt}),fr=Object.assign({"/node_modules/@brillout/docpress/src/renderer/_default.page.server.tsx":Ot}),pr={...gr,...fr};H[".page.server"]=pr;const _r=Object.assign({}),mr=Object.assign({}),hr={..._r,...mr};H[".page"]=hr;const vr=Object.assign({"/pages/Abort.page.server.mdx":()=>c(()=>import("./chunk-337d730d.js"),["assets/chunk-337d730d.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/RPC-vs-GraphQL-REST.page.server.mdx":()=>c(()=>import("./chunk-337d730d2.js"),["assets/chunk-337d730d2.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/RPC.page.server.mdx":()=>c(()=>import("./chunk-337d730d3.js"),["assets/chunk-337d730d3.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/abort-vs-error.page.server.mdx":()=>c(()=>import("./chunk-337d730d4.js"),["assets/chunk-337d730d4.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/babel-plugin.page.server.mdx":()=>c(()=>import("./chunk-337d730d5.js"),["assets/chunk-337d730d5.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/disableNamingConvention.page.server.mdx":()=>c(()=>import("./chunk-337d730d6.js"),["assets/chunk-337d730d6.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/error-handling.page.server.mdx":()=>c(()=>import("./chunk-337d730d7.js"),["assets/chunk-337d730d7.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/event-based.page.server.mdx":()=>c(()=>import("./chunk-337d730d8.js"),["assets/chunk-337d730d8.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/file-upload.page.server.mdx":()=>c(()=>import("./chunk-87797ab9.js"),[]),"/pages/form-validation.page.server.mdx":()=>c(()=>import("./chunk-87797ab92.js"),[]),"/pages/getContext.page.server.mdx":()=>c(()=>import("./chunk-337d730d9.js"),["assets/chunk-337d730d9.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/httpHeaders.page.server.mdx":()=>c(()=>import("./chunk-87797ab93.js"),[]),"/pages/index/index.page.server.tsx":()=>c(()=>import("./chunk-b6e6e055.js"),["assets/chunk-b6e6e055.js","assets/pages/index/index.page.server.6c2d1ceb.css","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/initial-page-data.page.server.mdx":()=>c(()=>import("./chunk-87797ab94.js"),[]),"/pages/install.page.server.mdx":()=>c(()=>import("./chunk-337d730d10.js"),["assets/chunk-337d730d10.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/next.page.server.mdx":()=>c(()=>import("./chunk-337d730d11.js"),["assets/chunk-337d730d11.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/nuxt.page.server.mdx":()=>c(()=>import("./chunk-337d730d12.js"),["assets/chunk-337d730d12.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/onAbort.page.server.mdx":()=>c(()=>import("./chunk-337d730d13.js"),["assets/chunk-337d730d13.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/onBug.page.server.mdx":()=>c(()=>import("./chunk-87797ab95.js"),[]),"/pages/permissions.page.server.mdx":()=>c(()=>import("./chunk-337d730d14.js"),["assets/chunk-337d730d14.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/react-native.page.server.mdx":()=>c(()=>import("./chunk-337d730d15.js"),["assets/chunk-337d730d15.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/root.page.server.mdx":()=>c(()=>import("./chunk-337d730d16.js"),["assets/chunk-337d730d16.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/shield.page.server.mdx":()=>c(()=>import("./chunk-337d730d17.js"),["assets/chunk-337d730d17.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/svelte-kit.page.server.mdx":()=>c(()=>import("./chunk-337d730d18.js"),["assets/chunk-337d730d18.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/telefunc.page.server.mdx":()=>c(()=>import("./chunk-337d730d19.js"),["assets/chunk-337d730d19.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/telefuncFiles.page.server.mdx":()=>c(()=>import("./chunk-337d730d20.js"),["assets/chunk-337d730d20.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/telefuncUrl.page.server.mdx":()=>c(()=>import("./chunk-337d730d21.js"),["assets/chunk-337d730d21.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/transformer.page.server.mdx":()=>c(()=>import("./chunk-337d730d22.js"),["assets/chunk-337d730d22.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/vite-plugin.page.server.mdx":()=>c(()=>import("./chunk-337d730d23.js"),["assets/chunk-337d730d23.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/vite.page.server.mdx":()=>c(()=>import("./chunk-337d730d24.js"),["assets/chunk-337d730d24.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"]),"/pages/webpack-plugin.page.server.mdx":()=>c(()=>import("./chunk-337d730d25.js"),["assets/chunk-337d730d25.js","assets/P.59ef0673.css","assets/FeatureList.a95a6883.css"])}),br=Object.assign({"/node_modules/@brillout/docpress/src/renderer/_default.page.server.tsx":()=>c(()=>import("./chunk-919ba71e.js"),["assets/chunk-919ba71e.js","assets/../node_modules/.pnpm/@brillout+docpress@0.1.8_se7lxagkunlp4luyiouooh4dii/node_modules/@brillout/docpress/src/renderer/_default.page.server.8fa1a7c1.css"])}),yr={...vr,...br};xe[".page.server"]=yr;const Pr=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:J,pageFilesEager:Pe,pageFilesExportNamesLazy:Xt,pageFilesExportNamesEager:H,neverLoaded:xe,isGeneratedFile:Zt},Symbol.toStringTag,{value:"Module"}));St(Pr);function xr(e){return!!e.startsWith("http")}function Re(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Rr(e,t){let r=!1;return()=>{r||(r=!0,setTimeout(()=>{r=!1,e()},t))}}function Or(e){return $(e,"/").pathname}function D(e){window.location.href=e}function Sr(){return!!Er()}function Er(){var e,t,r,s;const n=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),i=!!(!((s=(r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||r===void 0?void 0:r.rendererInterfaces)===null||s===void 0)&&s.size),o=!!window.__vite_plugin_react_preamble_installed__,a=d=>{v(d,"An internal heuristic needs to be updated, see https://github.com/brillout/vite-plugin-ssr/issues/423",{onlyOnce:!0})};return n||i?(a(n&&o),!0):o?(l(n===!1&&i===!1),!0):!1}function wr(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function Tr(e){return new Promise(t=>setTimeout(t,e))}const re=K("navigationState.ts",{}),Ar=I(),Oe={markNavigationChange(){re.navigationChanged=!0},get noNavigationChangeYet(){return!re.navigationChanged&&this.isFirstUrl(I())},isFirstUrl(e){return e===Ar}};function Se(e,t){return Et(e,t)}async function Ir(e,t){const s=Se(e,t).filter(i=>i.fileType===".page.server");return await Promise.all(s.map(async i=>{i.exportNames||(l(i.loadExportNames,t),await i.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:s.some(({exportNames:i})=>(l(i),i.includes("onBeforeRender")))}}function Cr(e,t,r,s){l(!t.endsWith(")"));const n=`The \`export { ${t} }\` of ${s}`;u(e==null||y(e),`${n} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(Fr(e,r,n),"pageContext"in e&&be(e.pageContext,{hook:{hookName:t,hookFilePath:s}}))}function Fr(e,t,r){const s=[],n=Object.keys(e);for(const i of n)t.includes(i)||s.push(i);u(s.length===0,[r,"returned an object with unknown keys",X(s)+".","Only following keys are allowed:",X(t)+"."].join(" "))}function Ee(e){return l([!0,!1].includes(e.isHydration)),l([!0,!1,null].includes(e.isBackwardNavigation)),wt(e)}const ne=["urlPathname","urlParsed"],Lr=["Page","pageExports","exports"];function we(e){[...Lr,...ne].forEach(r=>{r in e&&(ne.includes(r)?(l(r.startsWith("url")),v(!1,`\`pageContext.${r}\` is already available in the browser when using Client Routing; including \`${r}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):v(!1,`\`pageContext.${r}\` is a built-in that cannot be overriden; including \`${r}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[r])})}const jr="/";function kr(e,t,r){const{pathnameOriginal:s,searchOriginal:n,hashOriginal:i}=$(e,jr);e.startsWith("/")&&l(e===`${s}${n||""}${i||""}`,{url:e});const o=s.endsWith("/");let a;return r&&s!=="/"?(o?a=w(s,0,-1):a=s,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=s+(o?"":"/")+"index",l(a),a=a+t,`${a}${n||""}${i||""}`}const Nr=".pageContext.json",$r=!1;function Hr(e){return kr(e,Nr,$r)}async function Dr(e){return e._isFirstRenderAttempt&&Oe.isFirstUrl(e.urlOriginal)?(l(f(e,"_isFirstRenderAttempt","true")),Vr(e)):(l(f(e,"_isFirstRenderAttempt","false")),Ur(e))}async function Vr(e){const t=Tt();return we(t),p(t,{isHydration:!0,_comesDirectlyFromServer:!0}),p(t,await A(e._pageFilesAll,t._pageId)),t}async function Wr(e){const t=ce(e._allPageIds);if(!t)throw new Error("No error page");const r={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return p(r,await A(e._pageFilesAll,r._pageId)),r}async function Ur(e){let t={};p(t,{isHydration:!1}),p(t,await Gr(e)),p(t,await A(e._pageFilesAll,t._pageId));const r=await Br({...e,...t});if(l([!0,!1].includes(r._comesDirectlyFromServer)),r._isError){t={},l(r._comesDirectlyFromServer===!0),l(f(r,"is404","boolean")),l(f(r,"pageProps","object")),l(f(r.pageProps,"is404","boolean")),l(!("serverSideError"in r));const s=ce(e._allPageIds);return l(s),p(t,{isHydration:!1,_pageId:s}),p(t,r),p(t,await A(e._pageFilesAll,t._pageId)),t}else return p(t,r),t}async function Br(e){const t=At(e,"onBeforeRender");if(t){const s=t.hook,n={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},i=Ee({...e,...n}),o=await s(i);Cr(o,"onBeforeRender",["pageContext"],t.filePath);const a=o==null?void 0:o.pageContext;return p(n,a),n}else if((await Ir(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const s=await zr(e),n={};return Object.assign(n,s),p(n,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:s}),n}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function Gr(e){const r=(await ye(e)).pageContextAddendum;if(!r._pageId)throw new Error("No routing match");return l(f(r,"_pageId","string")),r}async function zr(e){var t;const r=Hr((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),s=await fetch(r);{const a=s.headers.get("content-type"),d=a&&a.includes("application/json");if(!d&&s.status===404){D(e.urlOriginal);const _=new Error("Page doesn't exist");throw Object.assign(_,{_abortRendering:!0}),_}u(d,`Wrong HTTP Response Header \`content-type\` value for URL ${r} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const n=await s.text(),i=It(n);if("serverSideError"in i)throw Ct("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(f(i,"pageContext"));const o=i.pageContext;return l(y(o)),l(f(o,"_pageId","string")),we(o),o}function Te(){const e="/";return xr(e)?"/":e}const U=K("getGlobalContext.ts",{});async function Ae(){return U.globalContext||(U.globalContext=await Kr()),U.globalContext}async function Kr(){const e=Te();de(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:r,allPageIds:s}=await Ft(!0);return p(t,{_pageFilesAll:r,_allPageIds:s}),t}async function Ie(e){const t=await Ae(),r={urlOriginal:e,...t},s=t._pageFilesAll;Y(r);const n=await ye(r);if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:s};const i=n.pageContextAddendum._pageId;return i?{pageId:i,pageFilesAll:s}:{pageId:null,pageFilesAll:s}}function T(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function Yr({pageFilesClientSide:e,pageFilesServerSide:t,pageId:r}){return{isHtmlOnly:s(),isClientRouting:i()};function s(){return t.some(a=>a.pageId===r&&a.fileType===".page")?(n(),!1):!(!t.some(a=>a.pageId===r&&a.fileType===".page.server")||e.some(a=>a.pageId===r&&a.fileType===".page.client"&&T(a).includes("render")))}function n(){const o=e.some(a=>T(a).includes("render"));u(o,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,d)=>` (${d+1}): ${a.filePath}`)].join(`
`)].join(" "))}function i(){return e.some(a=>T(a).includes("clientRouting"))}}function Jr({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:r,isClientRouting:s}){let n=[];const i=t.filter(a=>!e.includes(a)),o=[];if(o.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),o.push(...i.map(a=>({id:a.filePath,onlyAssets:!0}))),r)n=e.map(a=>a.filePath);else{const a=s?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";o.push({id:a,onlyAssets:!1}),n=[a]}return{clientEntries:n,clientDependencies:o}}function qr(e,t){let r=ge(e,t);const s=Se(e,t),{isHtmlOnly:n,isClientRouting:i}=Yr({pageFilesClientSide:r,pageFilesServerSide:s,pageId:t});n&&(r=r.filter(d=>d.fileType===".page.client"&&!T(d).includes("render")),r=Qr(r));const{clientEntries:o,clientDependencies:a}=Jr({pageFilesClientSide:r,pageFilesServerSide:s,isHtmlOnly:n,isClientRouting:i});return{isHtmlOnly:n,isClientRouting:i,clientEntries:o,clientDependencies:a,pageFilesClientSide:r,pageFilesServerSide:s}}async function Mr(e,t,{sharedPageFilesAlreadyLoaded:r}){const s=ge(e,t);await Promise.all(s.map(async n=>{var i;l(n.fileType===".page"||n.fileType===".page.client"),!(r&&n.fileType===".page")&&await((i=n.loadExportNames)===null||i===void 0?void 0:i.call(n))}))}function Qr(e){const t=[];for(const r of e)if(t.push(r),T(r).includes("overrideDefaultPages"))break;return t}async function Ce(e){const{pageId:t,pageFilesAll:r}=await Ie(e);if(!t)return!1;await Mr(r,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:s,isClientRouting:n}=qr(r,t);return!s&&n}function Fe(e){const t=e.getAttribute("href");return!!(t===null||t===""||Re(t)||Xr(e)||Zr(t)||!en(t)||!Lt(t))}function Xr(e){const t=e.getAttribute("target"),r=e.getAttribute("rel");return t==="_blank"||t==="_external"||r==="external"||e.hasAttribute("download")}function Zr(e){if(e.startsWith("#"))return!0;const t=r=>r.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function en(e){const t=Te();de(t);const{hasBaseUrl:r}=$(e,t);return r}function tn(e,t){return{prefetchPageContext:!1,prefetchStaticAssets:rn(e,t)}}function rn(e,t){let r=nn(t),s=(()=>{if(r!==null)return r===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(r===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;const i="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(y(n),i);const o=Object.keys(n);u(o.length===1&&o[0]==="when",i);const{when:a}=n;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,i)}return{when:"HOVER"}})();return s&&s.when==="VIEWPORT"&&!e._isProduction&&(fe(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),s={when:"HOVER"}),s}function nn(e){let t=e.getAttribute("data-prefetch");if(v(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const Le=new Map;function je(e){const t=Ne(e);return Le.has(t)}function ke(e){const t=Ne(e);Le.set(t,!0)}function Ne(e){return Or(e)}const se=new Map;async function B(e){if(u(!Re(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),je(e))return;ke(e);const{pageId:t,pageFilesAll:r}=await Ie(e);if(t)try{await A(r,t)}catch(s){if(pe(s))We();else throw s}}function sn(e){ke(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async r=>{if(se.has(r))return;se.set(r,!0);const s=r.getAttribute("href");if(Fe(r)||(l(s),!await Ce(s))||je(s))return;const n=tn(e,r);if(n.prefetchStaticAssets){if(n.prefetchStaticAssets.when==="HOVER")r.addEventListener("mouseover",()=>B(s)),r.addEventListener("touchstart",()=>B(s),{passive:!0});else if(n.prefetchStaticAssets.when==="VIEWPORT"){const i=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(B(s),i.disconnect())})});i.observe(r)}}else return})}function $e(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=De()),"scrollPosition"in e||(t=!0,e.scrollPosition=He()),Ve(e),t&&M(e)}function q(){const e=window.history.state||{};return Ve(e),e}function He(){return{x:window.scrollX,y:window.scrollY}}function De(){return new Date().getTime()}function ie(){const e=He(),t=q();M({...t,scrollPosition:e})}function on(e,t){if(t)M(q(),e);else{const r=De();an({timestamp:r,scrollPosition:null},e)}}function Ve(e){if(l(ue(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(f(t,"x","number")&&f(t,"y","number"))}}function M(e,t){window.history.replaceState(e,"",t)}function an(e,t){window.history.pushState(e,"",t)}const h=K("useClientRouter.ts",{previousState:N()});_n();$e();function We(){h.clientRoutingIsDisabled=!0,fe(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function ln(){h.isUsingClientRouting=!0,fn(),un((n,{keepScrollPosition:i})=>{s({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",url:n,isBackwardNavigation:!1})}),cn((n,i)=>{s({scrollTarget:n,isBackwardNavigation:i})}),globalThis.__vite_plugin_ssr__navigate=async(n,{keepScrollPosition:i,overwriteLastHistoryEntry:o})=>{await s({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",url:n,overwriteLastHistoryEntry:o,isBackwardNavigation:!1})};let e=0,t,r=!1;s({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function s({scrollTarget:n,url:i=I(),overwriteLastHistoryEntry:o=!1,isBackwardNavigation:a}){var d,_,P;if(h.clientRoutingIsDisabled){D(i);return}const g={urlOriginal:i,isBackwardNavigation:a},m=++e;l(m>=1),m>1&&r===!1&&((d=h.onPageTransitionStart)===null||d===void 0||d.call(h,g),r=!0);const b=()=>Sr()&&m===1?!1:m!==e,C=await Ae();if(b())return;const F=m===1;p(g,{_isFirstRenderAttempt:F}),p(g,C),Y(g);let O;try{O=await Dr(g)}catch(x){if(ae(x,g))return;console.error(x);try{O=await Wr(g)}catch(S){if(ae(S,g)||(F||setTimeout(()=>{window.location.pathname=i},0),wr(x,S)))return;throw S}}b()||(p(g,O),V(g,"onPageTransitionStart"),h.onPageTransitionStart=g.exports.onPageTransitionStart,t&&await t,!b()&&(dn(i,o),Oe.markNavigationChange(),l(t===void 0),t=(async()=>{const x=Ee(g);jt(g);const S=await g.exports.render(x);u(S===void 0,"`export { render }` of "+g.exportsAll.render[0]._filePath+" should not return any value"),sn(g)})(),await t,t=void 0,g._isFirstRenderAttempt?(V(g,"onHydrationEnd"),await((P=(_=g.exports).onHydrationEnd)===null||P===void 0?void 0:P.call(_,g))):m===e&&(g.exports.onPageTransitionEnd&&(V(g,"onPageTransitionEnd"),g.exports.onPageTransitionEnd(g)),r=!1),Ue(n),Q(),h.initialRenderIsDone=!0))}}function un(e){document.addEventListener("click",t);return;async function t(n){if(!r(n))return;const i=s(n.target);if(!i)return;const o=i.getAttribute("href");if(Fe(i))return;if(l(o),n.preventDefault(),!await Ce(o)){D(o);return}const a=![null,"false"].includes(i.getAttribute("keep-scroll-position"));e(o,{keepScrollPosition:a})}function r(n){return n.button===0&&!n.ctrlKey&&!n.shiftKey&&!n.altKey&&!n.metaKey}function s(n){for(;n.tagName!=="A";){const{parentNode:i}=n;if(!i)return null;n=i}return n}}function cn(e){window.addEventListener("popstate",()=>{const t=N(),r=t.historyState.scrollPosition||"scroll-to-top-or-hash",s=t.urlWithoutHash===h.previousState.urlWithoutHash,n=!t.historyState.timestamp||!h.previousState.historyState.timestamp?null:t.historyState.timestamp<h.previousState.historyState.timestamp;h.previousState=t,s?window.history.state===null?($e(),h.previousState=N()):Ue(r):e(r,n)})}function dn(e,t){I()!==e&&(Q(),on(e,t),h.previousState=N())}function N(){return{urlWithoutHash:I({withoutHash:!0}),historyState:q()}}function Ue(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=pn();if(r&&r!=="top"){const s=document.getElementById(r)||document.getElementsByName(r)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;gn(t)}function gn(e){const t=()=>window.scrollTo(e.x,e.y),r=()=>window.scrollX===e.x&&window.scrollY===e.y;r()||(t(),!r()&&requestAnimationFrame(()=>{t(),!r()&&setTimeout(async()=>{if(t(),r())return;const s=new Date().getTime();for(;;)if(await Tr(10),t(),r()||new Date().getTime()-s>100)return},0)}))}function fn(){window.addEventListener("scroll",Rr(ie,Math.ceil(1e3/3)),{passive:!0}),Be(ie)}function pn(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function _n(){oe(),Be(oe),mn(()=>h.initialRenderIsDone&&Q())}function Q(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Be(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function mn(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function ae(e,t){return!!(e!=null&&e._abortRendering||hn(e,t))}function hn(e,t){if(!pe(e))return!1;if(We(),t._isFirstRenderAttempt)throw e;return D(t.urlOriginal),!0}kt();ln();
