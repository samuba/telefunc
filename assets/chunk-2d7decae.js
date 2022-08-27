function X(e,t){e.stack=Z(e.stack,t)}function Z(e,t){if(!e)return e;const r=te(e);let s=0;return r.filter(a=>a.includes(" (internal/")||a.includes(" (node:internal")?!1:s<t&&ee(a)?(s++,!1):!0).join(`
`)}function ee(e){return e.startsWith("    at ")}function te(e){return e.split(/\r?\n/)}function W(e,t){let r;{var s=Error.stackTraceLimit;Error.stackTraceLimit=1/0,r=new Error(e),Error.stackTraceLimit=s}return X(r,t),r}const re="0.4.26",m={projectName:"vite-plugin-ssr",projectVersion:re,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"},O=`[${m.npmPackageName}@${m.projectVersion}]`,ne=`${O}[Bug]`,se=`${O}[Wrong Usage]`,ie=`${O}[Warning]`,oe=`${O}[Info]`,R=2;function i(e,t){if(e)return;const r=(()=>{if(!t)return"";const n=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${m.projectName} maintainers; you can ignore this): ${n}.`})();throw W([`${ne} You stumbled upon a bug in ${m.projectName}'s source code.`,`Reach out at ${m.githubRepository}/issues/new or ${m.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${m.projectName} more robust.`,r].join(" "),R)}function g(e,t){if(e)return;const r=t.startsWith("[")?"":" ";throw W(`${se}${r}${t}`,R)}function ae(e){return W(`${O} ${e}`,R)}let P=new Set;function B(e,t,{onlyOnce:r,showStackTrace:s}){if(e)return;const n=`${ie} ${t}`;if(r){const a=r===!0?n:r;if(P.has(a))return;P.add(a)}console.warn(s?new Error(n):n)}function Tt(e,t,{onlyOnce:r}){if(e)return;const s=`${oe} ${t}`,n=s;P.has(n)||(P.add(n),console.log(s))}function T(e,t,r){return typeof e=="string"?L(e.split(""),t,r).join(""):L(e,t,r)}function L(e,t,r){const s=[];let n=t>=0?t:e.length+t;i(n>=0&&n<=e.length);let a=r>=0?r:e.length+r;for(i(a>=0&&a<=e.length);!(n===a||(n===e.length&&(n=0),n===a));){const o=e[n];i(o!==void 0),s.push(o),n++}return s}function le(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ce(e,t){i(le(e),{url:e}),i(t.startsWith("/"),{url:e,baseUrl:t});const[r,...s]=e.split("#");i(r!==void 0);const n=["",...s].join("#")||null;i(n===null||n.startsWith("#"));const a=n===null?"":E(n.slice(1)),[o,...l]=r.split("?");i(o!==void 0);const c=["",...l].join("?")||null;i(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const d={},x={};Array.from(new URLSearchParams(c||"")).forEach(([h,b])=>{d[h]=b,x[h]=[...x[h]||[],b]});const{origin:_,pathnameResolved:S}=fe(e,t);i(_===null||_===E(_),{origin:_}),i(S.startsWith("/"),{url:e,pathnameResolved:S}),i(_===null||e.startsWith(_),{url:e,origin:_});const w=o.slice((_||"").length);{const h=`${_||""}${w}${c||""}${n||""}`;i(e===h,{url:e,urlRecreated:h})}let{pathname:u,hasBaseUrl:p}=ge(S,t);return u=ue(u),i(u.startsWith("/")),{origin:_,pathname:u,pathnameOriginal:w,hasBaseUrl:p,search:d,searchAll:x,searchOriginal:c,hash:a,hashOriginal:n}}function E(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function ue(e){return e.split("/").map(t=>E(t).split("/").join("%2F")).join("/")}function fe(e,t){var r;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let s,n;try{const a=new URL(e);s=a.origin,n=a.pathname}catch{s=null;let o=typeof window!="undefined"&&((r=window==null?void 0:window.document)===null||r===void 0?void 0:r.baseURI);o=o||"http://fake.example.org"+t,n=new URL(e,o).pathname}return i(n.startsWith("/"),{url:e,pathnameResolved:n}),i(n===n.split("?")[0].split("#")[0]),{origin:s,pathnameResolved:n}}function de(e){i(e.startsWith("/"))}function _e(e){i(e.startsWith("/")),i(!e.includes("?")),i(!e.includes("#"))}function ge(e,t){_e(e),de(t);let r=e;if(i(r.startsWith("/")),i(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let s=t;return t.endsWith("/")&&r===T(t,0,-1)&&(s=T(t,0,-1),i(r===s)),r.startsWith(s)?(i(r.startsWith("/")||r.startsWith("http")),i(r.startsWith(s)),r=r.slice(s.length),r.startsWith("/")||(r="/"+r),i(r.startsWith("/")),{pathname:r,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function G(e,t){Object.assign(e,t)}function I(e){return e instanceof Function||typeof e=="function"}function j(e){return typeof e=="object"&&e!==null}function pe(e){return Array.from(new Set(e))}function wt(e){return(t,r)=>{const s=e(t),n=e(r);return s===n?0:s>n?-1:1}}function he(e){return(t,r)=>{const s=e(t),n=e(r);if(i([!0,!1,null].includes(s)),i([!0,!1,null].includes(n)),s===n)return 0;if(s===!0||n===!1)return-1;if(n===!0||s===!1)return 1;i(!1)}}function me(e){return he(t=>{const r=e(t);return r===null?null:!r})}function be(){return typeof window!="undefined"&&typeof window.scrollY=="number"}function f(e,t,r="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return r==="undefined";if(r==="unknown")return!0;const n=e[t];return r==="array"?Array.isArray(n):r==="string[]"?Array.isArray(n)&&n.every(a=>typeof a=="string"):r==="function"?I(n):Array.isArray(r)?typeof n=="string"&&r.includes(n):r==="null"?n===null:r==="undefined"?n===void 0:r==="true"?n===!0:r==="false"?n===!1:typeof n===r}function ve(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ye=e=>e!=null,xe="\\";function y(e){i(e&&!e.includes(xe),`Wrongly formatted path: ${e}`)}const Se=["clientRouting"];function je(e){Se.forEach(t=>{if(i(e.fileExports),!(t in e.fileExports))return;const r=`The value of \`${t}\` is only allowed to be \`true\`.`;g(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${r})`),g(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${r}`)})}const J=["render","clientRouting","prerender","doNotPrerender"];function Oe(e,t){g(!J.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function $e(e){const t={};e.forEach(n=>{Ne(n).forEach(({exportName:o,exportValue:l,isFromDefaultExport:c})=>{var d;i(o!=="default"),t[o]=(d=t[o])!==null&&d!==void 0?d:[],t[o].push({exportValue:l,_filePath:n.filePath,_fileType:n.fileType,_isFromDefaultExport:c})})});const r=Te(),s={};return Object.entries(t).forEach(([n,a])=>{a.forEach(({exportValue:o,_fileType:l,_isFromDefaultExport:c})=>{var d;s[n]=(d=s[n])!==null&&d!==void 0?d:o,l===".page"&&!c&&(n in r||(r[n]=o))})}),i(!("default"in s)),i(!("default"in t)),{exports:s,exportsAll:t,pageExports:r}}function Ne(e){const{filePath:t,fileExports:r}=e;i(r);const s=[];return Object.entries(r).sort(me(([n])=>n==="default")).forEach(([n,a])=>{let o=n==="default";if(o)if(!Pe(t))n="Page";else{g(j(a),`The \`export default\` of ${t} should be an object.`),Object.entries(a).forEach(([l,c])=>{Oe(l,t),s.push({exportName:l,exportValue:c,isFromDefaultExport:o})});return}s.push({exportName:n,exportValue:a,isFromDefaultExport:o})}),s.forEach(({exportName:n,isFromDefaultExport:a})=>{i(!(a&&J.includes(n)))}),s}function Pe(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Te(){return new Proxy({},{get(...e){return be()||B(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function V(e){const t=".page.",r=T(e.split(t),0,-1).join(t);return i(!r.includes("\\")),r}function Et(e){const t=e.filter(r=>M(r));if(g(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const r=t[0];return i(r),r}return null}function M(e){return i(!e.includes("\\")),e.includes("/_error")}function we(e){const t=n=>s.pageId===n||s.isDefaultPageFile&&(s.isRendererPageFile||Fe(n,s.filePath)),r=Ee(e),s={filePath:e,fileType:r,isRelevant:t,isDefaultPageFile:z(e),isRendererPageFile:z(e)&&ze(e),isErrorPageFile:M(e),pageId:V(e)};return s}function Ee(e){y(e);const r=e.split("/").slice(-1)[0].split("."),s=r.slice(-3)[0],n=r.slice(-2)[0];if(n==="page")return".page";if(i(s==="page",{filePath:e}),n==="server")return".page.server";if(n==="client")return".page.client";if(n==="route")return".page.route";i(!1,{filePath:e})}function z(e){return y(e),i(e.startsWith("/")),M(e)?!1:e.includes("/_default")}function ze(e){return y(e),i(e.startsWith("/")),e.includes("/renderer/")}function Fe(e,t){y(e),y(t),i(e.startsWith("/")),i(t.startsWith("/")),i(!e.endsWith("/")),i(!t.endsWith("/")),i(z(t));const r=T(t.split("/"),0,-1).filter(s=>s!=="_default").join("/");return e.startsWith(r)}const We=[".page",".page.server",".page.route",".page.client"];function Re(e){i(f(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),i(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),i(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),i(f(e,"pageFilesLazy","object")),i(f(e,"pageFilesEager","object")),i(f(e,"pageFilesExportNamesLazy","object")),i(f(e,"pageFilesExportNamesEager","object")),i(f(e.pageFilesLazy,".page")),i(f(e.pageFilesLazy,".page.client")||f(e.pageFilesLazy,".page.server"));const t={};$(e.pageFilesLazy).forEach(({filePath:s,pageFile:n,globValue:a})=>{var o;n=t[s]=(o=t[s])!==null&&o!==void 0?o:n;const l=a;A(l),n.loadFile=async()=>{"fileExports"in n||(n.fileExports=await l(),je(n))}}),$(e.pageFilesExportNamesLazy).forEach(({filePath:s,pageFile:n,globValue:a})=>{var o;n=t[s]=(o=t[s])!==null&&o!==void 0?o:n;const l=a;A(l),n.loadExportNames=async()=>{if(!("exportNames"in n)){const c=await l();i(f(c,"exportNames","string[]"),n.filePath),n.exportNames=c.exportNames}}}),$(e.pageFilesEager).forEach(({filePath:s,pageFile:n,globValue:a})=>{var o;n=t[s]=(o=t[s])!==null&&o!==void 0?o:n;const l=a;i(j(l)),n.fileExports=l}),$(e.pageFilesExportNamesEager).forEach(({filePath:s,pageFile:n,globValue:a})=>{var o;n=t[s]=(o=t[s])!==null&&o!==void 0?o:n;const l=a;i(j(l)),i(f(l,"exportNames","string[]"),n.filePath),n.exportNames=l.exportNames});const r=Object.values(t);return r.forEach(({filePath:s})=>{i(!s.includes("\\"))}),r}function $(e){const t=[];return Object.entries(e).forEach(([r,s])=>{i(We.includes(r)),i(j(s)),Object.entries(s).forEach(([n,a])=>{const o=we(n);i(o.fileType===r),t.push({filePath:n,pageFile:o,globValue:a})})}),t}function A(e){i(I(e))}const v=globalThis.__vite_plugin_ssr__pageFiles=globalThis.__vite_plugin_ssr__pageFiles||{pageFilesAll:void 0,pageFilesGetter:void 0};function zt(e){v.pageFilesAll=Re(e)}async function Ft(e,t){e?(i(!v.pageFilesGetter),i(t===void 0)):(i(v.pageFilesGetter),i(typeof t=="boolean"),(!v.pageFilesAll||!t)&&await v.pageFilesGetter()),i(v.pageFilesAll);const r=v.pageFilesAll,s=Ie(r);return{pageFilesAll:r,allPageIds:s}}function Ie(e){const t=e.filter(({isDefaultPageFile:s})=>!s).map(({filePath:s})=>s).map(V);return pe(t)}function Me(e,t){return H(e,t,!0)}function Wt(e,t){return H(e,t,!1)}function H(e,t,r){const s=r?".page.client":".page.server",n=Le(s,t),a=e.filter(u=>u.isRelevant(t)),o=u=>a.filter(p=>p.isRendererPageFile&&p.fileType===u).sort(n)[0],l=u=>{const p=a.filter(b=>b.pageId===t&&b.fileType===u);g(p.length<=1,`Merge the following files into a single file: ${p.map(b=>b.filePath).join(" ")}`);const h=p[0];return i(h===void 0||!h.isDefaultPageFile),p[0]},c=a.filter(u=>u.isDefaultPageFile&&!u.isRendererPageFile&&(u.fileType===s||u.fileType===".page"));c.sort(n);const d=o(s),x=o(".page"),_=l(s),S=l(".page");return[_,S,...c,d,x].filter(ye)}function Le(e,t){return(a,o)=>{i(a.isDefaultPageFile&&o.isDefaultPageFile);{const l=a.isRendererPageFile,c=o.isRendererPageFile;if(!l&&c)return-1;if(!c&&l)return 1;i(l===c)}{const l=k(t,a.filePath),c=k(t,o.filePath);if(l<c)return-1;if(c<l)return 1;i(l===c)}{if(a.fileType===e&&o.fileType!==e)return-1;if(o.fileType===e&&a.fileType!==e)return 1}{if(a.fileType===".page"&&o.fileType!==".page")return 1;if(o.fileType===".page"&&a.fileType!==".page")return-1}return 0}}function k(e,t){y(e),y(t),i(e.startsWith("/")),i(t.startsWith("/"));let r=0;for(;r<e.length&&r<t.length&&e[r]===t[r];r++);const s=e.slice(r),n=t.slice(r),a=s.split("/").length,o=n.split("/").length;return a+o}function Ae(e,t){return Me(e,t)}const ke="modulepreload",D={},De="/",Rt=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${De}${s}`,s in D)return;D[s]=!0;const n=s.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":ke,n||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),n)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Ce=[];var It=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ce},Symbol.toStringTag,{value:"Module"}));const Ue=[];var Mt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ue},Symbol.toStringTag,{value:"Module"}));const Be=["headings","default"];var Lt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Be},Symbol.toStringTag,{value:"Module"}));const Ge=["headings","default"];var At=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ge},Symbol.toStringTag,{value:"Module"}));const Je=["headings","default"];var kt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Je},Symbol.toStringTag,{value:"Module"}));const Ve=["headings","default"];var Dt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ve},Symbol.toStringTag,{value:"Module"}));const He=["headings","default"];var Ct=Object.freeze(Object.defineProperty({__proto__:null,exportNames:He},Symbol.toStringTag,{value:"Module"}));const qe=["headings","default"];var Ut=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"}));const Ye=["headings","default"];var Bt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"}));const Ke=["headings","default"];var Gt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"}));const Qe=["headings","default"];var Jt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"}));const Xe=["headings","default"];var Vt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"}));const Ze=["headings","default"];var Ht=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"}));const et=["headings","default"];var qt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"}));const tt=["headings","default"];var Yt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"}));const rt=["Page"];var Kt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"}));const nt=["headings","default"];var Qt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"}));const st=["headings","default"];var Xt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"}));const it=["headings","default"];var Zt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"}));const ot=["headings","default"];var er=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"}));const at=["headings","default"];var tr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"}));const lt=["headings","default"];var rr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"}));const ct=["headings","default"];var nr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"}));const ut=["headings","default"];var sr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"}));const ft=["headings","default"];var ir=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"}));const dt=["headings","default"];var or=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"}));const _t=["headings","default"];var ar=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"}));const gt=["headings","default"];var lr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"}));const pt=["headings","default"];var cr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"}));const ht=["headings","default"];var ur=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"}));const mt=["render"];var fr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"}));const{projectVersion:F}=m,C="__vite_plugin_ssr_version",U=globalThis[C]=globalThis[C]=F;g(U===F,`Multiple versions \`vite-pluging-ssr@${U}\` and \`vite-pluging-ssr@${F}\` loaded. Make sure to load the same version.`);const q=Math.random();globalThis.__vite_plugin_ssr__codeId=globalThis.__vite_plugin_ssr__codeId||q;B(q===globalThis.__vite_plugin_ssr__codeId,"vite-plugin-ssr is included twice in your bundle, which should be avoided in order reduce KBs loaded by the browser",{onlyOnce:!0});function dr(e){const t=window.location.href,{origin:r,searchOriginal:s,hashOriginal:n,pathnameOriginal:a}=ce(t,"/");let o;if(e!=null&&e.withoutHash){o=`${a}${s||""}`;const l=`${r||""}${o}${n||""}`;i(t===l,{url:t,urlRecreated:l})}else{o=`${a}${s||""}${n||""}`;const l=`${r||""}${o}`;i(t===l,{url:t,urlRecreated:l})}return o}const bt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt=="undefined")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),r=t[1],s=t[2];return new RegExp(r,s)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Y(e){const t=JSON.parse(e);return K(t)}function K(e){return typeof e=="string"?vt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,r])=>{e[t]=K(r)}),e)}function vt(e){for(const{match:t,deserialize:r}of bt)if(t(e))return r(e,Y);return e}function _r(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;i(t);const r=Y(t);i(f(r,"pageContext","object"));const{pageContext:s}=r;if(i(f(s,"_pageId","string")),"_serverSideErrorWhileStreaming"in s)throw ae("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return G(s,{_pageContextRetrievedFromServer:{...s},_comesDirectlyFromServer:!0}),s}function yt(e,t){if(!(t in e.exports))return null;const r=e.exports[t],s=e.exportsAll[t][0];i(s.exportValue===r);const n=s._filePath;return i(n),i(!t.endsWith(")")),g(I(r),`\`export { ${t} }\` of ${n} should be a function`),{hook:r,filePath:n}}function xt(e,t){yt(e,t)}function St(e){const t=Object.entries(e);for(const r in e)delete e[r];t.sort(([r],[s])=>ve(r,s)).forEach(([r,s])=>{e[r]=s})}function gr(e){i("exports"in e),i("exportsAll"in e),i("pageExports"in e),i(j(e.pageExports));const t=e.exports.Page;return G(e,{Page:t}),Pt(e),St(e),i([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?$t(e):e}const jt=["then","toJSON"],Ot=["_pageId","_serverSideErrorWhileStreaming"];let N=!1;function $t(e){return new Proxy(e,{get:r});function t(s){return!(s in e||jt.includes(s)||typeof s=="symbol"||typeof s!="string"||s.startsWith("__v_"))}function r(s,n){return N!==!1&&N!==n&&Nt(e._pageContextRetrievedFromServer,n,t(n)),N=n,window.setTimeout(()=>{N=!1},0),e[n]}}function Nt(e,t,r){if(!r||e===null)return;const s=Object.keys(e).filter(n=>!Ot.includes(n));g(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${s.map(n=>`'${n}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function Pt(e){Object.entries(e).forEach(([t,r])=>{delete e[t],e[t]=r})}const Q="__whileFetchingAssets";async function pr(e,t){const r=Ae(e,t);try{await Promise.all(r.map(l=>{var c;return(c=l.loadFile)===null||c===void 0?void 0:c.call(l)}))}catch(l){throw l&&Object.assign(l,{[Q]:!0}),l}const{exports:s,exportsAll:n,pageExports:a}=$e(r);return{exports:s,exportsAll:n,pageExports:a,_pageFilesLoaded:r}}function hr(e){return e?e[Q]===!0:!1}function mr(e){var t;if(f(e.exports,"render"))xt(e,"render");else{const r=e._pageFilesLoaded.filter(n=>n.fileType===".page.client");let s;if(r.length===0){const n=(t=e.urlOriginal)!==null&&t!==void 0?t:window.location.href;s="No file `*.page.client.*` found for URL "+n}else s="One of the following files should export a `render()` hook: "+r.map(n=>n.filePath).join(" ");g(!1,s)}}export{ae as $,Yt as A,Kt as B,Qt as C,Xt as D,Zt as E,er as F,tr as G,rr as H,nr as I,sr as J,ir as K,or as L,ar as M,lr as N,cr as O,ur as P,fr as Q,zt as R,dr as S,Wt as T,gr as U,_r as V,pr as W,Et as X,yt as Y,Y as Z,Rt as _,i as a,de as a0,Ft as a1,Ae as a2,le as a3,Tt as a4,hr as a5,xt as a6,mr as a7,B as b,g as c,wt as d,j as e,M as f,It as g,f as h,I as i,Mt as j,Lt as k,At as l,he as m,kt as n,G as o,ce as p,Dt as q,Ct as r,T as s,Ut as t,Bt as u,Gt as v,Jt as w,Vt as x,Ht as y,qt as z};
