import{o as a,c as l,z as r,v as n}from"./index.f9744888.js";const u=["value"],c={__name:"BaseDropdown",props:{selectValue:{type:String,required:!0}},emits:["update:selectValue"],setup(s,{emit:p}){return(e,t)=>(a(),l("select",{value:s.selectValue,onInput:t[0]||(t[0]=o=>e.$emit("update:selectValue",o.target.value)),class:"form-select"},[e.$slots.options?r(e.$slots,"options",{key:0}):n("",!0)],40,u))}};export{c as _};
