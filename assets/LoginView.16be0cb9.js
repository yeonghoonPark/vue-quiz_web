import{f as V,s as p,g as S,h as x,o as g,c as I,i as B,b as e,d as s,B as r,T as L,a as l,j as c,_}from"./index.a336ca41.js";import{_ as u,a as d}from"./BaseInput.36a7a642.js";const N={id:"LoginView",class:"py-4"},T=l("h1",{class:"text-center mb-5"},"\uB85C\uADF8\uC778",-1),C={class:"container mb-5 pt-5"},M={class:"row align-items-center py-2 mb-1"},F=l("hr",null,null,-1),P={class:"row align-items-center py-2 mb-1"},U=l("hr",null,null,-1),$={class:"row align-items-center py-2 mb-1"},A={class:"container d-flex flex-column align-items-center"},j={__name:"LoginView",setup(E){const m=V(),{userId:t,userPassword:n,userNickname:i,isLoginSuccess:h,isLoginKakaoSuccess:w}=p(m),{onLogin:b,onLoginWithKakao:f}=m,k=S(),{isNonContents:v}=p(k);return x(()=>{console.log("[onMounted]"),document.getElementById("userId").focus()}),(y,a)=>(g(),I("div",N,[(g(),B(L,{to:"#alert"},[e(r,{isShow:s(v),classType:"alert-dark",message:"\uBE48\uCE78 \uC5C6\uC774 \uC785\uB825\uD574\uC8FC\uC138\uC694."},null,8,["isShow","message"]),e(r,{isShow:s(h),classType:"alert-primary",message:"\uB85C\uADF8\uC778\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."},null,8,["isShow","message"]),e(r,{isShow:s(w),classType:"alert-warning",message:"\uCE74\uCE74\uC624\uB85C\uADF8\uC778\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4."},null,8,["isShow","message"])])),T,l("form",C,[l("div",M,[e(d,{class:"col-3 text-center",labelFor:"userId",labelMessage:"\uC544\uC774\uB514"}),e(u,{class:"col-9 w-50",type:"email",id:"userId",maxlength:"35",placeholder:"\uC774\uBA54\uC77C \uB610\uB294 \uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",value:s(t),inputValue:s(t),"onUpdate:inputValue":a[0]||(a[0]=o=>c(t)?t.value=o:null)},null,8,["value","inputValue"])]),F,l("div",P,[e(d,{class:"col-3 text-center",labelFor:"userPassword",labelMessage:"\uBE44\uBC00\uBC88\uD638"}),e(u,{class:"col-9 w-50",type:"password",id:"userPassword",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",value:s(n),inputValue:s(n),"onUpdate:inputValue":a[1]||(a[1]=o=>c(n)?n.value=o:null)},null,8,["value","inputValue"])]),U,l("div",$,[e(d,{class:"col-3 text-center",labelFor:"userNickname",labelMessage:"\uB2C9\uB124\uC784"}),e(u,{class:"col-9 w-50",id:"userNickname",maxlength:"16",placeholder:"\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",value:s(i),inputValue:s(i),"onUpdate:inputValue":a[2]||(a[2]=o=>c(i)?i.value=o:null)},null,8,["value","inputValue"])])]),l("div",A,[e(_,{style:{width:"30%"},class:"btn-primary mb-3",message:"\uB85C\uADF8\uC778",onClick:s(b)},null,8,["onClick"]),e(_,{style:{width:"30%"},class:"kakao mb-3",message:"\uCE74\uCE74\uC624",onClick:s(f)},null,8,["onClick"])])]))}};export{j as default};
