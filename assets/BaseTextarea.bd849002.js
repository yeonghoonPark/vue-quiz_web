import{o,c as s,n as l}from"./index.583c3ff6.js";const n=["id","rows"],m={__name:"BaseTextarea",props:{formControl:{type:String,default:"form-control",required:!1},ariaLabel:{type:String,required:!1},rowsType:{type:String,default:"5",required:!1}},emits:["update:inputValue"],setup(e,{emit:i}){return(r,t)=>(o(),s("textarea",{class:l(e.formControl),id:e.ariaLabel,rows:e.rowsType,onInput:t[0]||(t[0]=a=>r.$emit("update:inputValue",a.target.value))},null,42,n))}};export{m as _};
