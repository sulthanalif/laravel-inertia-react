import{j as e,y as o}from"./app-DfHFJ7Xi.js";import{P as c}from"./PrimaryButton-BBINsyf-.js";import{D as a}from"./DangerButton-DQ7lwPSV.js";import{_ as i}from"./AuthenticatedLayout-Rcumanvz.js";const u=({setShowConfirm:s,id:t,r:l})=>{const r=()=>{o.post(route(`${l}.destroy`,t),{_method:"DELETE"},{onSuccess:()=>[s(!1),i.success("Deleted successfully",{style:{borderRadius:"10px",background:"#333",color:"#fff"}})]})};return e.jsxs("section",{className:"w-full fixed left-0 top-0 flex flex-col justify-center items-center h-screen",children:[e.jsx("div",{className:"w-full fixed bg-black/50 left-0 top-0 h-screen",onClick:()=>s(!1)}),e.jsxs("div",{className:"bg-white relative rounded-md flex-center",children:[e.jsx("header",{className:"border-b py-2 px-6 font-bold text-xl",children:"Confirmation"}),e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{children:"Are you sure you want to delete this data?"}),e.jsxs("div",{className:"flex pt-6 space-x-4 justify-end",children:[e.jsx(c,{onClick:r,children:"Yes, I'm sure!"}),e.jsx(a,{onClick:()=>s(!1),children:"No"})]})]})]})]})};export{u as P};
