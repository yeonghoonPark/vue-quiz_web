import{k as V,o as u,c as g,a as t,n as B,d as y,w as q,t as T,l as L,b as s,F as I,r as K,m as w,f as O,s as U,u as W,p as f,q as A,h as R,i as G,v as P,x as H,T as J,y as Q,_ as C}from"./index.f9744888.js";import{_ as v,a as $}from"./BaseInput.7e9c4f9b.js";import{_ as X}from"./BaseDropdown.644b4de7.js";import{_ as b}from"./BaseTh.7e297a8a.js";import{n as _}from"./notice.b16b3c8e.js";const Y={"aria-label":"Page navigation"},Z={class:"pagination"},ee=t("span",{"aria-hidden":"true"},"\xAB",-1),te=[ee],se={class:"page-item disabled","aria-current":"page"},ae={class:"page-link",href:"#"},le={class:"text-primary"},ne=t("span",{"aria-hidden":"true"},"\xBB",-1),oe=[ne],ie={__name:"BasePagination",props:{pageTotalCount:{type:Number,required:!0},pageCurrentNumber:{type:Number,required:!0}},emits:["page"],setup(c,{emit:k}){const d=c,l=V(()=>({disabled:!(d.pageCurrentNumber>0)})),i=V(()=>({disabled:!(d.pageCurrentNumber<d.pageTotalCount-1)}));return(r,o)=>(u(),g("nav",Y,[t("ul",Z,[t("li",{class:B(["page-item",y(l)])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:o[0]||(o[0]=q(p=>r.$emit("page",c.pageCurrentNumber-1),["prevent"]))},te)],2),t("li",se,[t("a",ae,[t("span",le,T(c.pageCurrentNumber+1),1),L(" / "+T(c.pageTotalCount),1)])]),t("li",{class:B(["page-item",y(i)])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:o[1]||(o[1]=q(p=>r.$emit("page",c.pageCurrentNumber+1),["prevent"]))},oe)],2)])]))}},x={__name:"BaseTd",props:{message:{type:[String,Number,Array],required:!0}},setup(c){return(k,d)=>(u(),g("td",null,T(c.message),1))}},re={class:"table align-middle table-striped table-hover text-center"},ce={class:"table-group-divider"},ue={class:"box py-1 px-3"},de={__name:"noticeTable",props:{items:{type:[Array,Object],required:!0}},setup(c){return(k,d)=>(u(),g("table",re,[t("thead",null,[t("tr",null,[s(b,{class:"col-2",scopeStyle:"col",message:"\uBD84\uB958"}),s(b,{class:"col-6",scopeStyle:"col",message:"\uC81C\uBAA9"}),s(b,{class:"col-2 d-sm-hidden d-md-hidden",scopeStyle:"col",message:"\uC791\uC131\uC790"}),s(b,{class:"col-2 d-sm-hidden d-md-hidden",scopeStyle:"col",message:"\uC791\uC131\uC77C"}),s(b,{class:"d-none",scopeStyle:"col",message:"id"})])]),t("tbody",ce,[(u(!0),g(I,null,K(c.items,(l,i)=>(u(),g("tr",{key:i,class:"pointer",style:{height:"65px"}},[s(b,{scopeStyle:"row"},{span:w(()=>[t("span",ue,T(l==null?void 0:l.article),1)]),_:2},1024),s(x,{class:"text-start",message:l==null?void 0:l.title},null,8,["message"]),s(x,{class:"d-sm-hidden d-md-hidden fw-light",message:l==null?void 0:l.author},null,8,["message"]),s(x,{class:"d-sm-hidden d-md-hidden fw-light",message:l==null?void 0:l.createdDate,style:{"font-size":"12px"}},null,8,["message"]),s(x,{class:"d-none fw-light",message:l==null?void 0:l.id,style:{"font-size":"12px"}},null,8,["message"])]))),128))])]))}},pe={id:"NoticeView",class:"user-select-none py-4"},ge={key:0,class:"position-fixed top-0 start-0 w-100 h-100 user-select-none",style:{"z-index":"1"}},be={key:1,class:"position-fixed top-50 start-50 translate-middle",style:{"min-width":"348px","z-index":"2"}},he=t("h5",{class:""},"\uC54C\uB9BC",-1),me=t("h6",{class:"card-title p-2 mb-3"},[L(" \uB85C\uADF8\uC778 \uD6C4 \uAE00 \uC791\uC131\uACFC \uC5F4\uB78C\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. "),t("br"),t("br"),L(" \uB85C\uADF8\uC778\uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? ")],-1),fe=t("h1",{class:"text-center mb-5"},"\uAC8C\uC2DC\uD310",-1),ve={class:"btn-group w-100 mb-4",role:"group","aria-label":"Basic radio toggle button group"},_e={class:"d-flex justify-content-end mb-4"},ye={class:"me-3"},ke=t("option",{value:"title"},"\uC81C\uBAA9",-1),Ne=t("option",{value:"author"},"\uC791\uC131\uC790",-1),Ce={class:"me-3"},$e={class:""},xe={class:"d-flex justify-content-end mb-4"},we={class:"d-flex justify-content-center"},Be={__name:"NoticeView",setup(c){const k=O(),{profile_nickname:d}=U(k),l=W(),i=f([]),r=A({pageNumber:0,pageLimit:5}),o=f("total"),p=f(null),h=f("title"),m=f(!1);i.value=_;const F=()=>{console.log("[goNoticeWriteView]"),d.value?l.push({name:"NoticeWriteView"}):m.value=!0},z=V(()=>{let n=i.value.length,e=r.pageLimit,a=Math.floor(i.value.length/r.pageLimit);return n%e>0&&(a+=1),a}),D=V(()=>{const n=r.pageNumber*r.pageLimit,e=n+r.pageLimit;return i.value.slice(n,e)}),N=(n,e)=>{console.log("[onClickMenu]"),i.value=[],o.value=n,_.forEach(a=>{var M;a.article===e&&(a.articleType=(M=a.articleType)!=null?M:n,i.value.push(a)),o.value==="total"&&(i.value=_),r.pageNumber=0,p.value="",h.value="title"})},S=()=>{console.log("[findItemByNotice]");const n=[];h.value==="title"?_.forEach(e=>{var a;((a=e==null?void 0:e.title)==null?void 0:a.indexOf(p.value))!==-1&&(o.value===(e==null?void 0:e.articleType)||o.value==="total")&&n.push(e)}):h.value==="author"&&_.forEach(e=>{var a;((a=e==null?void 0:e.author)==null?void 0:a.indexOf(p.value))!==-1&&(o.value===(e==null?void 0:e.articleType)||o.value==="total")&&n.push(e)}),i.value=[],i.value=n,r.pageNumber=0},j=n=>{console.log("[goNoticeDetailView]"),l.push({name:"NoticeDetailView",params:{id:n}})},E=n=>{if(console.log("[getId]"),!d.value)m.value=!0;else{const e=n.target.parentNode.lastChild.innerText;j(e)}};return R(()=>{console.log("[onMounted]")}),(n,e)=>(u(),g("div",pe,[(u(),G(J,{to:"#card"},[m.value?(u(),g("div",ge)):P("",!0),m.value?(u(),g("div",be,[s(H,{class:"text-center"},{header:w(()=>[he]),default:w(()=>[me,s(C,{class:"btn-outline-primary me-3",message:"\uD655\uC778",onClick:e[0]||(e[0]=a=>y(l).push({name:"LoginView"}))}),s(C,{class:"btn-outline-danger",message:"\uCDE8\uC18C",onClick:e[1]||(e[1]=a=>m.value=!1)})]),_:1})])):P("",!0)])),fe,t("div",ve,[s(v,{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:o.value==="total",onClick:e[2]||(e[2]=a=>N("total","\uC804\uCCB4"))},null,8,["checked"]),s($,{class:"btn btn-outline-dark py-2 fs-5",labelFor:"btnradio1",labelMessage:"\uC804\uCCB4"}),s(v,{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off",checked:o.value==="announcement",onClick:e[3]||(e[3]=a=>N("announcement","\uACF5\uC9C0"))},null,8,["checked"]),s($,{class:"btn btn-outline-dark py-2 fs-5",labelFor:"btnradio2",labelMessage:"\uACF5\uC9C0"}),s(v,{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off",checked:o.value==="request",onClick:e[4]||(e[4]=a=>N("request","\uC694\uCCAD"))},null,8,["checked"]),s($,{class:"btn btn-outline-dark py-2 fs-5",labelFor:"btnradio3",labelMessage:"\uC694\uCCAD"}),s(v,{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio4",autocomplete:"off",checked:o.value==="chitchat",onClick:e[5]||(e[5]=a=>N("chitchat","\uC7A1\uB2F4"))},null,8,["checked"]),s($,{class:"btn btn-outline-dark py-2 fs-5",labelFor:"btnradio4",labelMessage:"\uC7A1\uB2F4"})]),s(de,{items:y(D),class:"mb-4",onClick:E},null,8,["items"]),t("div",_e,[t("div",ye,[s(X,{selectValue:h.value,"onUpdate:selectValue":e[6]||(e[6]=a=>h.value=a)},{options:w(()=>[ke,Ne]),_:1},8,["selectValue"])]),t("div",Ce,[s(v,{style:{width:"138px"},ariaLabel:"\uAC80\uC0C9",onKeyup:Q(S,["enter"]),value:p.value,inputValue:p.value,"onUpdate:inputValue":e[7]||(e[7]=a=>p.value=a)},null,8,["onKeyup","value","inputValue"])]),t("div",$e,[s(C,{class:"btn-primary",message:"\uAC80\uC0C9",onClick:S})])]),t("div",xe,[s(C,{class:"btn-primary",message:"\uAE00 \uC791\uC131",onClick:F})]),t("div",we,[s(ie,{pageTotalCount:y(z),pageCurrentNumber:r.pageNumber,onPage:e[8]||(e[8]=a=>r.pageNumber=a)},null,8,["pageTotalCount","pageCurrentNumber"])])]))}};export{Be as default};
