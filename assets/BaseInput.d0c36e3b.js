import{o as r,c as l,t as i,n as o}from"./index.583c3ff6.js";const u=["for"],c={__name:"BaseLabel",props:{labelFor:{type:String,required:!0},labelMessage:{type:String,required:!0}},setup(e){return(n,t)=>(r(),l("label",{for:e.labelFor,class:"col-form-label"},i(e.labelMessage),9,u))}},p=["type","id"],f={__name:"BaseInput",props:{formControl:{type:String,default:"form-control",required:!1},ariaLabel:{type:String,required:!1},inputType:{type:String,default:"text",required:!1}},emits:["update:inputValue"],setup(e,{emit:n}){return(t,a)=>(r(),l("input",{class:o(e.formControl),type:e.inputType,id:e.ariaLabel,onInput:a[0]||(a[0]=s=>t.$emit("update:inputValue",s.target.value))},null,42,p))}};export{f as _,c as a};
