import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.CQwMOPKN.js";import{c as n,B as m}from"./button.Dhl877gy.js";import"./utils.BQHNewu7.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],i=n("moon",l);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],d=n("sun",h);function f(){const[o,s]=c.useState(!1);c.useEffect(()=>{s(document.documentElement.classList.contains("dark"))},[]);const r=()=>{const a=document.documentElement,t=!o;a.classList.toggle("dark",t),a.classList.toggle("light",!t),localStorage.setItem("theme",t?"dark":"light"),s(t)};return e.jsx(m,{variant:"ghost",size:"icon",onClick:r,"aria-label":"Toggle theme",className:"text-foreground/60 hover:text-foreground transition-colors",children:o?e.jsx(d,{className:"h-[1.1rem] w-[1.1rem]"}):e.jsx(i,{className:"h-[1.1rem] w-[1.1rem]"})})}export{f as default};
