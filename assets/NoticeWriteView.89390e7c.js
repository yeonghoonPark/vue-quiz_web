import{f as S,g as x,s as b,u as N,q as M,h as A,o as c,c as p,i as B,b as s,d as n,B as r,T as C,a as e,t as $,m as q,_ as h,v as Y,A as f}from"./index.a336ca41.js";import{_ as U,a as v}from"./BaseInput.36a7a642.js";import{_ as W}from"./BaseTextarea.ec65aa5e.js";import{_ as j}from"./BaseDropdown.7dab3657.js";import{n as y}from"./notice.b16b3c8e.js";const F={id:"NoticeWriteView",class:"user-select-none py-4"},H=e("h1",{class:"text-center mb-5"},"\uAE00 \uC791\uC131",-1),R={class:"container mb-4"},E={class:"row align-items-center py-2"},I=e("div",{class:"col-3 text-center"},[e("span",null,"\uC791\uC131\uC790")],-1),L={class:"col-9"},z=e("hr",null,null,-1),G={class:"row align-items-center py-2"},J=e("div",{class:"col-3 text-center"},[e("span",null,"\uAE00 \uBD84\uB958")],-1),K={class:"col-9"},O=e("option",{value:""},"\uC120\uD0DD",-1),P={key:0,value:"announcement"},Q=e("hr",null,null,-1),X={class:"row align-items-center py-2"},Z={class:"col-3 text-center"},ee={class:"col-9"},te=e("hr",null,null,-1),se={class:"row align-items-start py-2 mb-4"},oe={class:"col-3 text-center"},le={class:"col-9"},ne={class:"container d-flex justify-content-end"},me={__name:"NoticeWriteView",setup(ae){const g=S(),{profile_nickname:a}=g,u=x(),{isNonArticleType:T,isNonContents:w,isWrightSuccess:i,chitchat:d,request:V}=b(u),{onAlertArticleType:k,onAlertContents:_}=u,m=N(),t=M({id:null,article:null,articleType:"",title:null,content:null,author:null,hits:"",createdDate:null,editedDate:null}),D=()=>{console.log("[saveData]"),t.articleType===""?(setTimeout(function(){},1e3),k()):t.title?t.content?t.articleType!==""&&t.title&&t.content&&(i.value=!0,t.id=y.length+1,t.article=t.articleType==="chitchat"?"\uC7A1\uB2F4":"\uC694\uCCAD",t.articleType,d.value.value,t.author=a,t.createdDate=f().format("YY.MM.DD"),t.createdDetailDate=f().format("YY.MM.DD HH:mm:ss"),y.unshift(t),setTimeout(function(){i.value=!1,m.push({name:"NoticeView"})},1e3)):(setTimeout(function(){},1e3),_()):(setTimeout(function(){},1e3),_())};return A(()=>{console.log("[onMounted]")}),(ie,o)=>(c(),p("div",F,[(c(),B(C,{to:"#alert"},[s(r,{isShow:n(T),classType:"alert-dark",message:"\uAE00 \uBD84\uB958\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694."},null,8,["isShow","message"]),s(r,{isShow:n(w),classType:"alert-dark",message:"\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."},null,8,["isShow","message"]),s(r,{isShow:n(i),classType:"alert-primary",message:"\uAE00 \uB4F1\uB85D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},null,8,["isShow","message"])])),H,e("form",R,[e("div",E,[I,e("div",L,[e("span",null,$(n(a)),1)])]),z,e("div",G,[J,e("div",K,[s(j,{class:"",style:{width:"6rem"},selectValue:t.articleType,"onUpdate:selectValue":o[0]||(o[0]=l=>t.articleType=l)},{options:q(()=>[O,n(a)==="\uC6B4\uC601\uC790"?(c(),p("option",P," \uACF5\uC9C0 ")):Y("",!0),e("option",{ref_key:"chitchat",ref:d,value:"chitchat"},"\uC7A1\uB2F4",512),e("option",{ref_key:"request",ref:V,value:"request"},"\uC694\uCCAD",512)]),_:1},8,["selectValue"])])]),Q,e("div",X,[e("div",Z,[s(v,{class:"",labelFor:"title",labelMessage:"\uAE00 \uC81C\uBAA9"})]),e("div",ee,[s(U,{class:"",id:"title",maxlength:"30",value:t.title,inputValue:t.title,"onUpdate:inputValue":o[1]||(o[1]=l=>t.title=l)},null,8,["value","inputValue"])])]),te,e("div",se,[e("div",oe,[s(v,{class:"",labelFor:"content",labelMessage:"\uAE00 \uB0B4\uC6A9"})]),e("div",le,[s(W,{id:"content",rowsType:"9",maxlength:"500",value:t.content,inputValue:t.content,"onUpdate:inputValue":o[2]||(o[2]=l=>t.content=l)},null,8,["value","inputValue"])])])]),e("div",ne,[s(h,{class:"btn-outline-dark me-3",message:"\uBAA9\uB85D",onClick:o[3]||(o[3]=l=>n(m).push({name:"NoticeView"}))}),s(h,{class:"btn-outline-primary",message:"\uAE00 \uC791\uC131\uC644\uB8CC",onClick:D})])]))}};export{me as default};