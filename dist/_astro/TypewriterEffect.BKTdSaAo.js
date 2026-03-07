import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.CQwMOPKN.js";const a=["SPFx Architect","Agentic Systems Builder","Process Automation Engineer","Technical Consultant"],p=75,m=38,g=2200;function E(){const[e,o]=s.useState(""),[l,f]=s.useState(0),[t,c]=s.useState(!1),[u,d]=s.useState(!1);return s.useEffect(()=>{if(u)return;const i=a[l];let n;return!t&&e.length<i.length?n=setTimeout(()=>o(i.slice(0,e.length+1)),p):!t&&e.length===i.length?(d(!0),n=setTimeout(()=>{d(!1),c(!0)},g)):t&&e.length>0?n=setTimeout(()=>o(i.slice(0,e.length-1)),m):t&&e.length===0&&(c(!1),f(h=>(h+1)%a.length)),()=>clearTimeout(n)},[e,t,u,l]),r.jsxs("span",{"aria-label":a[l],children:[r.jsx("span",{style:{color:"var(--color-primary)"},children:e}),r.jsx("span",{"aria-hidden":"true",style:{display:"inline-block",width:"2px",height:"0.85em",marginLeft:"2px",backgroundColor:"var(--color-primary)",verticalAlign:"middle",animation:"cursorBlink 1s step-end infinite"}}),r.jsx("style",{children:`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `})]})}export{E as default};
