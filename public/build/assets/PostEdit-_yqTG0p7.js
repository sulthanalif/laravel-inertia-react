import{W as j,r as c,j as e,Y as v,a as f}from"./app-DfHFJ7Xi.js";import{D as b}from"./DangerButton-DQ7lwPSV.js";import{I as r}from"./InputError-D9SH5QlZ.js";import{I as o}from"./InputLabel-BdzWRQ0y.js";import{P as y}from"./PrimaryButton-BBINsyf-.js";import{T as m}from"./TextInput-CZ-PS2mC.js";import{A as N}from"./AuthenticatedLayout-Rcumanvz.js";import"./ApplicationLogo-B6vCgZE4.js";import"./transition-D2_zr99o.js";const F=({auth:d,post:l})=>{const{data:t,setData:a,put:x,processing:g,errors:i}=j({title:l.title,slug:l.slug,description:l.description,body:l.body}),[n,p]=c.useState(t.title?u(t.title):"");c.useEffect(()=>{p(u(t.title)),a("slug",n)},[t.title]);const h=s=>{x(route("posts.update",l.slug)),s.preventDefault()};return e.jsxs(N,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit Post"}),children:[e.jsx(v,{title:"Edit Post"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 bg-white border-b border-gray-200",children:e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"title",value:"Title"}),e.jsx(m,{id:"title",type:"text",name:"title",value:t.title,className:"mt-1 block w-full",onChange:s=>a("title",s.target.value)}),e.jsx(r,{message:i.title,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"slug",value:"Slug"}),e.jsx(m,{id:"slug",type:"text",name:"slug",value:n,className:"mt-1 block w-full",onChange:s=>a("slug",s.target.value),readOnly:!0}),e.jsx(r,{message:i.slug,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"description",value:"Description"}),e.jsx(m,{id:"description",type:"text",name:"description",value:t.description,className:"mt-1 block w-full",onChange:s=>a("description",s.target.value)}),e.jsx(r,{message:i.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"body",value:"Body"}),e.jsx(m,{id:"body",type:"text",name:"body",value:t.body,className:"mt-1 block w-full",onChange:s=>a("body",s.target.value)}),e.jsx(r,{message:i.body,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(y,{className:"ms-4",disabled:g,children:"Save"}),e.jsx(f,{href:route("posts.index"),children:e.jsx(b,{className:"ms-4",children:"Back"})})]})]})})})})})]})};function u(d){return d.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-")}export{F as default};