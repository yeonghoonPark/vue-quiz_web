import{o as a,c as l,t as i,n as o}from"./index.f9744888.js";const u=["for"],c={__name:"BaseLabel",props:{labelFor:{type:String,required:!0},labelMessage:{type:String,required:!0}},setup(e){return(n,t)=>(a(),l("label",{for:e.labelFor,class:"col-form-label"},i(e.labelMessage),9,u))}},p=["type","id"],d={__name:"BaseInput",props:{formControl:{type:String,default:"form-control",required:!1},id:{type:String,required:!1},inputType:{type:String,default:"text",required:!1}},emits:["update:inputValue"],setup(e,{emit:n}){return(t,r)=>(a(),l("input",{class:o(e.formControl),type:e.inputType,id:e.id,onInput:r[0]||(r[0]=s=>t.$emit("update:inputValue",s.target.value))},null,42,p))}};export{d as _,c as a};
