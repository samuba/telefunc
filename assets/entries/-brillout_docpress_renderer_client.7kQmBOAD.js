function a(n,t){if(n)return;const o=t!==void 0;o&&(console.log(t),typeof t=="object"&&(t=JSON.stringify(t)));let e="[DocPress] Bug. Contact DocPress maintainer.";o&&(e+=" Debug info: "+String(t));const i=new Error(e);throw y()&&alert(i.stack),i}function y(){var n;return typeof window<"u"&&((n=window==null?void 0:window.location)==null?void 0:n.port)!==""}w();function w(){const n=document.getElementById("navigation-content-main");a(n);const t=window.location.pathname,o=Array.from(n.querySelectorAll(`a[href="${t}"]`));a(o.length<=1,{navLinks:o,href:t});const e=o[0];if(!e)return;const i=document.documentElement.scrollTop;e.scrollIntoView({behavior:"instant",block:"center",inline:"start"}),document.documentElement.scrollTop=i}E();function E(){if(!document.querySelector(".doc-page #page-container")){a(window.location.pathname==="/");return}[...Array.from(document.querySelectorAll("h2")),...Array.from(document.querySelectorAll("h3"))].forEach(o=>{if(!o.id)return;const e="#"+o.id;k(e,o),o.onclick=()=>{window.location.hash=e,L()}})}function k(n,t){const o=A();{const{pathname:e}=window.location,i=Array.from(o.querySelectorAll(`a[href="${e}"]`));a(i.length===1)}{const e=Array.from(o.querySelectorAll(`a[href="${n}"]`)),{tagName:i}=t;a(i.startsWith("H"));const l=i==="H2"?1:0;a(e.length===l,{urlHash:n})}}function L(){const{hash:n}=window.location;if(n===""||n==="#")return;a(n.startsWith("#"));const t=document.getElementById(n.slice(1));t&&t.scrollIntoView()}function A(){const n=Array.from(document.querySelectorAll("#navigation-container"));return a(n.length===1),n[0]}let u=0;function H(){d(),window.addEventListener("resize",d,{passive:!0}),document.getElementById("navigation-fullscreen-button").onclick=m,document.getElementById("navigation-fullscreen-close").onclick=m,document.addEventListener("keydown",n=>{document.body.classList.contains("DocSearch--active")||n.key==="Escape"&&m()},!1)}function m(){const n=document.getElementById("navigation-container"),t=n.scrollTop;document.documentElement.classList.toggle("navigation-fullscreen"),u!==void 0&&(n.scrollTop=u),u=t}function d(){const t=Array.from(document.querySelectorAll("#navigation-content-main .nav-items-level-1-group")),o=t.length,e=M(),i=Math.max(1,Math.min(o,Math.floor(e/299)));let l=t.map(c=>[{element:c,elementHeight:c.children.length}]);f(l,i);const s=document.getElementById("navigation-content-main");Array.from(s.children).forEach(c=>{a(c.className==="nav-column")}),s.innerHTML="",l.forEach(c=>{const r=document.createElement("div");r.className="nav-column",c.forEach(({element:p})=>{r.appendChild(p)}),s.appendChild(r)});const g=350;s.style.maxWidth=`${i*g}px`}function M(){return document.documentElement.clientWidth}function f(n,t){if(a(n.length>0),a(t>0),n.length<=t)return n;let o={i:-1,mergeHeight:1/0};for(let e=0;e<=n.length-2;e++){const i=n[e+0],l=n[e+1],s=h(i.map(r=>r.elementHeight)),g=h(l.map(r=>r.elementHeight)),c=s+g;o.mergeHeight>c&&(o={i:e,mergeHeight:c})}{const{i:e}=o;a(-1<e&&e<n.length-1,{i:e,columnsLength:n.length,maxNumberOfColumns:t}),n[e]=[...n[e],...n[e+1]],n.splice(e+1,1)}f(n,t)}function h(n){let t=0;return n.forEach(o=>t+=o),t}function S(){N(),B(),b()}function N(){const n=document.getElementById("mobile-show-navigation-toggle");n.onclick=v}function B(){const n=document.getElementById("mobile-navigation-mask");n.onclick=v}function b(){document.addEventListener("click",n=>{const t=n.target;!t||!("classList"in t)||t.classList.contains("nav-item")&&C()})}function v(){document.body.classList.toggle("mobile-show-navigation")}function C(){document.body.classList.remove("mobile-show-navigation")}function I(){T()}function T(){const n=document.getElementById("navigation-header");n.classList.contains("press-kit")&&window.location.pathname!=="/press"&&(n.oncontextmenu=t=>{t.preventDefault(),window.location.href="/press"})}H();S();I();export{a};
