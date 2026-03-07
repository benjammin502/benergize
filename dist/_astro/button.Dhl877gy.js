import{r as i}from"./index.CQwMOPKN.js";import{j as m}from"./jsx-runtime.D_zvdyIk.js";import{a as V,c as j}from"./utils.BQHNewu7.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e=>{const t=R(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:u,...l},d)=>i.createElement("svg",{ref:d,...S,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:C("lucide",o),...!s&&!_(l)&&{"aria-hidden":"true"},...l},[...u.map(([a,c])=>i.createElement(a,c)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(e,t)=>{const n=i.forwardRef(({className:r,...o},s)=>i.createElement(N,{ref:s,iconNode:t,className:C(`lucide-${A(h(e))}`,`lucide-${e}`,r),...o}));return n.displayName=h(e),n},b=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,y=V,z=(e,t)=>n=>{var r;if(t?.variants==null)return y(e,n?.class,n?.className);const{variants:o,defaultVariants:s}=t,u=Object.keys(o).map(a=>{const c=n?.[a],f=s?.[a];if(c===null)return null;const v=b(c)||b(f);return o[a][v]}),l=n&&Object.entries(n).reduce((a,c)=>{let[f,v]=c;return v===void 0||(a[f]=v),a},{}),d=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((a,c)=>{let{class:f,className:v,...w}=c;return Object.entries(w).every(E=>{let[g,p]=E;return Array.isArray(p)?p.includes({...s,...l}[g]):{...s,...l}[g]===p})?[...a,f,v]:a},[]);return y(e,u,d,n?.class,n?.className)};function x(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function k(...e){return t=>{let n=!1;const r=e.map(o=>{const s=x(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():x(e[o],null)}}}}function H(...e){return i.useCallback(k(...e),e)}function O(e){const t=W(e),n=i.forwardRef((r,o)=>{const{children:s,...u}=r,l=i.Children.toArray(s),d=l.find(L);if(d){const a=d.props.children,c=l.map(f=>f===d?i.Children.count(a)>1?i.Children.only(null):i.isValidElement(a)?a.props.children:null:f);return m.jsx(t,{...u,ref:o,children:i.isValidElement(a)?i.cloneElement(a,void 0,c):null})}return m.jsx(t,{...u,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}var P=O("Slot");function W(e){const t=i.forwardRef((n,r)=>{const{children:o,...s}=n;if(i.isValidElement(o)){const u=B(o),l=$(s,o.props);return o.type!==i.Fragment&&(l.ref=r?k(r,u):u),i.cloneElement(o,l)}return i.Children.count(o)>1?i.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var I=Symbol("radix.slottable");function L(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===I}function $(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...l)=>{const d=s(...l);return o(...l),d}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function B(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const T=z("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",xs:"h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-xs":"size-6 rounded-md [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function K({className:e,variant:t="default",size:n="default",asChild:r=!1,...o}){const s=r?P:"button";return m.jsx(s,{"data-slot":"button","data-variant":t,"data-size":n,className:j(T({variant:t,size:n,className:e})),...o})}export{K as B,O as a,F as c,H as u};
