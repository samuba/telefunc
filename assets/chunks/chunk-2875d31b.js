import{a as i}from"./chunk-e8d54927.js";p();function p(){const n=document.getElementById("navigation-content-main");i(n);const e=window.location.pathname,o=Array.from(n.querySelectorAll(`a[href="${e}"]`));i(o.length<=1,{navLinks:o,href:e});const t=o[0];!t||t.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}E();function E(){if(!document.querySelector(".doc-page #page-container")){i(window.location.pathname==="/");return}[...Array.from(document.querySelectorAll("h2")),...Array.from(document.querySelectorAll("h3"))].forEach(o=>{if(!o.id)return;const t="#"+o.id;w(t,o),o.onclick=()=>{window.location.hash=t,k()}})}function w(n,e){const o=A();{const t=Array.from(o.querySelectorAll(`a[href="${window.location.pathname}"]`));i(t.length===1)}{const t=Array.from(o.querySelectorAll(`a[href="${n}"]`)),{tagName:l}=e;i(l.startsWith("H"));const r=l==="H2"?1:0;i(t.length===r,{urlHash:n})}}function k(){const{hash:n}=window.location;if(n===""||n==="#")return;i(n.startsWith("#"));const e=document.getElementById(n.slice(1));!e||e.scrollIntoView()}function A(){const n=Array.from(document.querySelectorAll("#navigation-container"));return i(n.length===1),n[0]}var m=0;function H(){d(),window.addEventListener("resize",d,{passive:!0}),document.getElementById("navigation-fullscreen-button").onclick=u,document.getElementById("navigation-fullscreen-close").onclick=u,document.addEventListener("keydown",n=>{document.body.classList.contains("DocSearch--active")||n.key==="Escape"&&u()},!1)}function u(){const n=document.getElementById("navigation-container"),e=n.scrollTop;document.documentElement.classList.toggle("navigation-fullscreen"),m!==void 0&&(n.scrollTop=m),m=e}function d(){const e=Array.from(document.querySelectorAll("#navigation-content-main .nav-h1-group")),o=e.length,t=I(),l=Math.max(1,Math.min(o,Math.floor(t/299)));let r=e.map(a=>[{element:a,elementHeight:a.children.length}]);f(r,l);const s=document.getElementById("navigation-content-main");Array.from(s.children).forEach(a=>{i(a.className==="nav-column")}),s.innerHTML="",r.forEach(a=>{const c=document.createElement("div");c.className="nav-column",a.forEach(({element:y})=>{c.appendChild(y)}),s.appendChild(c)});const g=350;s.style.maxWidth=`${l*g}px`}function I(){return document.documentElement.clientWidth}function f(n,e){if(i(n.length>0),i(e>0),n.length<=e)return n;let o={i:-1,mergeHeight:1/0};for(let t=0;t<=n.length-2;t++){const l=n[t+0],r=n[t+1],s=h(l.map(c=>c.elementHeight)),g=h(r.map(c=>c.elementHeight)),a=s+g;o.mergeHeight>a&&(o={i:t,mergeHeight:a})}{const{i:t}=o;i(-1<t&&t<n.length-1,{i:t,columnsLength:n.length,maxNumberOfColumns:e}),n[t]=[...n[t],...n[t+1]],n.splice(t+1,1)}f(n,e)}function h(n){let e=0;return n.forEach(o=>e+=o),e}M();L();H();function L(){const n=document.getElementById("menu-toggle");n.onclick=v}function M(){const n=document.getElementById("navigation-mask");n.onclick=v}function v(){document.body.classList.toggle("show-menu")}
