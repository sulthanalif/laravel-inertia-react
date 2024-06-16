import{r as u,j as o,a as D}from"./app-DfHFJ7Xi.js";import{A as B}from"./ApplicationLogo-B6vCgZE4.js";import{q as W}from"./transition-D2_zr99o.js";const S=u.createContext(),L=({children:e})=>{const[t,r]=u.useState(!1),a=()=>{r(i=>!i)};return o.jsx(S.Provider,{value:{open:t,setOpen:r,toggleOpen:a},children:o.jsx("div",{className:"relative",children:e})})},Y=({children:e})=>{const{open:t,setOpen:r,toggleOpen:a}=u.useContext(S);return o.jsxs(o.Fragment,{children:[o.jsx("div",{onClick:a,children:e}),t&&o.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Z=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:a})=>{const{open:i,setOpen:s}=u.useContext(S);let l="origin-top";e==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let n="";return t==="48"&&(n="w-48"),o.jsx(o.Fragment,{children:o.jsx(W,{as:u.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:o.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${n}`,onClick:()=>s(!1),children:o.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},G=({className:e="",children:t,...r})=>o.jsx(D,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:t});L.Trigger=Y;L.Content=Z;L.Link=G;const w=L;function M({active:e=!1,className:t="",children:r,...a}){return o.jsx(D,{...a,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:r})}function P({active:e=!1,className:t="",children:r,...a}){return o.jsx(D,{...a,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}let J={data:""},Q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||J,V=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,X=/\/\*[^]*?\*\/|  +/g,R=/\n+/g,y=(e,t)=>{let r="",a="",i="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+l+";":a+=s[1]=="f"?y(l,s):s+"{"+y(l,s[1]=="k"?"":t)+"}":typeof l=="object"?a+=y(l,t?t.replace(/([^,])+/g,n=>s.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=y.p?y.p(s,l):s+":"+l+";")}return r+(t&&i?t+"{"+i+"}":i)+a},x={},H=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+H(e[r]);return t}return e},K=(e,t,r,a,i)=>{let s=H(e),l=x[s]||(x[s]=(d=>{let c=0,p=11;for(;c<d.length;)p=101*p+d.charCodeAt(c++)>>>0;return"go"+p})(s));if(!x[l]){let d=s!==e?e:(c=>{let p,g,f=[{}];for(;p=V.exec(c.replace(X,""));)p[4]?f.shift():p[3]?(g=p[3].replace(R," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(R," ").trim();return f[0]})(e);x[l]=y(i?{["@keyframes "+l]:d}:d,r?"":"."+l)}let n=r&&x.g?x.g:null;return r&&(x.g=x[l]),((d,c,p,g)=>{g?c.data=c.data.replace(g,d):c.data.indexOf(d)===-1&&(c.data=p?d+c.data:c.data+d)})(x[l],t,a,n),l},ee=(e,t,r)=>e.reduce((a,i,s)=>{let l=t[s];if(l&&l.call){let n=l(r),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;l=d?"."+d:n&&typeof n=="object"?n.props?"":y(n,""):n===!1?"":n}return a+i+(l??"")},"");function A(e){let t=this||{},r=e.call?e(t.p):e;return K(r.unshift?r.raw?ee(r,[].slice.call(arguments,1),t.p):r.reduce((a,i)=>Object.assign(a,i&&i.call?i(t.p):i),{}):r,Q(t.target),t.g,t.o,t.k)}let U,T,F;A.bind({g:1});let b=A.bind({k:1});function te(e,t,r,a){y.p=t,U=e,T=r,F=a}function v(e,t){let r=this||{};return function(){let a=arguments;function i(s,l){let n=Object.assign({},s),d=n.className||i.className;r.p=Object.assign({theme:T&&T()},n),r.o=/ *go\d+/.test(d),n.className=A.apply(r,a)+(d?" "+d:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),F&&c[0]&&F(n),U(c,n)}return i}}var re=e=>typeof e=="function",O=(e,t)=>re(e)?e(t):e,se=(()=>{let e=0;return()=>(++e).toString()})(),q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ae=20,E=new Map,oe=1e3,_=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),j({type:4,toastId:e})},oe);E.set(e,t)},ie=e=>{let t=E.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ae)};case 1:return t.toast.id&&ie(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?I(e,{type:1,toast:r}):I(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?_(a):e.toasts.forEach(s=>{_(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},$=[],C={toasts:[],pausedAt:void 0},j=e=>{C=I(C,e),$.forEach(t=>{t(C)})},ne={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},le=(e={})=>{let[t,r]=u.useState(C);u.useEffect(()=>($.push(r),()=>{let i=$.indexOf(r);i>-1&&$.splice(i,1)}),[t]);let a=t.toasts.map(i=>{var s,l;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||ne[i.type],style:{...e.style,...(l=e[i.type])==null?void 0:l.style,...i.style}}});return{...t,toasts:a}},de=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||se()}),N=e=>(t,r)=>{let a=de(t,e,r);return j({type:2,toast:a}),a.id},m=(e,t)=>N("blank")(e,t);m.error=N("error");m.success=N("success");m.loading=N("loading");m.custom=N("custom");m.dismiss=e=>{j({type:3,toastId:e})};m.remove=e=>j({type:4,toastId:e});m.promise=(e,t,r)=>{let a=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(i=>(m.success(O(t.success,i),{id:a,...r,...r==null?void 0:r.success}),i)).catch(i=>{m.error(O(t.error,i),{id:a,...r,...r==null?void 0:r.error})}),e};var ce=(e,t)=>{j({type:1,toast:{id:e,height:t}})},ue=()=>{j({type:5,time:Date.now()})},pe=e=>{let{toasts:t,pausedAt:r}=le(e);u.useEffect(()=>{if(r)return;let s=Date.now(),l=t.map(n=>{if(n.duration===1/0)return;let d=(n.duration||0)+n.pauseDuration-(s-n.createdAt);if(d<0){n.visible&&m.dismiss(n.id);return}return setTimeout(()=>m.dismiss(n.id),d)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[t,r]);let a=u.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),i=u.useCallback((s,l)=>{let{reverseOrder:n=!1,gutter:d=8,defaultPosition:c}=l||{},p=t.filter(h=>(h.position||c)===(s.position||c)&&h.height),g=p.findIndex(h=>h.id===s.id),f=p.filter((h,z)=>z<g&&h.visible).length;return p.filter(h=>h.visible).slice(...n?[f+1]:[0,f]).reduce((h,z)=>h+(z.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:ce,startPause:ue,endPause:a,calculateOffset:i}}},me=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fe=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,he=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ge} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,xe=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,be=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${xe} 1s linear infinite;
`,ye=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,je=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,we=v("div")`
  position: absolute;
`,Ne=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ke=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ke} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$e=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?u.createElement(Ee,null,t):t:r==="blank"?null:u.createElement(Ne,null,u.createElement(be,{...a}),r!=="loading"&&u.createElement(we,null,r==="error"?u.createElement(he,{...a}):u.createElement(je,{...a})))},Ce=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Oe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,De="0%{opacity:0;} 100%{opacity:1;}",Le="0%{opacity:1;} 100%{opacity:0;}",Ae=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ze=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Me=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=q()?[De,Le]:[Ce(r),Oe(r)];return{animation:t?`${b(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Pe=u.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?Me(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement($e,{toast:e}),l=u.createElement(ze,{...e.ariaProps},O(e.message,e));return u.createElement(Ae,{className:e.className,style:{...i,...r,...e.style}},typeof a=="function"?a({icon:s,message:l}):u.createElement(u.Fragment,null,s,l))});te(u.createElement);var Te=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let s=u.useCallback(l=>{if(l){let n=()=>{let d=l.getBoundingClientRect().height;a(e,d)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return u.createElement("div",{ref:s,className:t,style:r},i)},Fe=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...i}},Ie=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Se=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:s,containerClassName:l})=>{let{toasts:n,handlers:d}=pe(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...s},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(c=>{let p=c.position||t,g=d.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),f=Fe(p,g);return u.createElement(Te,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?Ie:"",style:f},c.type==="custom"?O(c.message,c):i?i(c):u.createElement(Pe,{toast:c,position:p}))}))},Ue=m;function qe({user:e,header:t,children:r}){const[a,i]=u.useState(!1);return o.jsxs("div",{className:"min-h-screen bg-gray-100",children:[o.jsx("div",{children:o.jsx(Se,{})}),o.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex justify-between h-16",children:[o.jsxs("div",{className:"flex",children:[o.jsx("div",{className:"shrink-0 flex items-center",children:o.jsx(D,{href:"/",children:o.jsx(B,{className:"block h-9 w-auto fill-current text-gray-800"})})}),o.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[o.jsx(M,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),o.jsx(M,{href:route("posts.index"),active:route().current("posts.index"),children:"Post"}),e.roles[0].name==="admin"?o.jsx(M,{href:route("users.index"),active:route().current("users.index"),children:"Users"}):null]})]}),o.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:o.jsx("div",{className:"ms-3 relative",children:o.jsxs(w,{children:[o.jsx(w.Trigger,{children:o.jsx("span",{className:"inline-flex rounded-md",children:o.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.name,o.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),o.jsxs(w.Content,{children:[o.jsx(w.Link,{href:route("profile.edit"),children:"Profile"}),o.jsx(w.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),o.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:o.jsx("button",{onClick:()=>i(s=>!s),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:o.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),o.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),o.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[o.jsx("div",{className:"pt-2 pb-3 space-y-1",children:o.jsx(P,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),o.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[o.jsxs("div",{className:"px-4",children:[o.jsx("div",{className:"font-medium text-base text-gray-800",children:e.name}),o.jsx("div",{className:"font-medium text-sm text-gray-500",children:e.email})]}),o.jsxs("div",{className:"mt-3 space-y-1",children:[o.jsx(P,{href:route("profile.edit"),children:"Profile"}),o.jsx(P,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&o.jsx("header",{className:"bg-white shadow",children:o.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),o.jsx("main",{children:r})]})}export{qe as A,Ue as _};
