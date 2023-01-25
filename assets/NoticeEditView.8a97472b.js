import{f as A,s as h,g as C,C as B,u as M,p as $,h as q,o as u,c as f,i as E,b as o,d as i,B as r,T as R,a as e,t as U,m as j,_ as g,v as F,A as H}from"./index.583c3ff6.js";import{_ as I,a as y}from"./BaseInput.d0c36e3b.js";import{_ as Y}from"./BaseTextarea.bd849002.js";import{_ as L}from"./BaseDropdown.cc1b2266.js";import{n as W}from"./notice.b16b3c8e.js";const z={id:"NoticeEditView",class:"user-select-none py-4"},G=e("h1",{class:"text-center mb-5"},"\uAE00 \uC218\uC815",-1),J={class:"container mb-4"},K={class:"row align-items-center py-2"},O=e("div",{class:"col-3 text-center"},[e("span",null,"\uC791\uC131\uC790")],-1),P={class:"col-9"},Q=e("hr",null,null,-1),X={class:"row align-items-center py-2"},Z=e("div",{class:"col-3 text-center"},[e("span",null,"\uAE00 \uBD84\uB958")],-1),ee={class:"col-9"},te=e("option",{value:""},"\uC120\uD0DD",-1),se={key:0,value:"announcement"},oe=e("hr",null,null,-1),le={class:"row align-items-center py-2"},ae={class:"col-3 text-center"},ne={class:"col-9"},ie=e("hr",null,null,-1),ce={class:"row align-items-start py-2 mb-4"},ue={class:"col-3 text-center"},re={class:"col-9"},de={class:"container d-flex justify-content-end"},ge={__name:"NoticeEditView",setup(_e){const w=A(),{profile_nickname:T}=h(w),d=C(),{isNonArticleType:V,isNonContents:k,isWrightSuccess:c,chitchat:_,request:S}=h(d),{onAlertArticleType:x,onAlertContents:m}=d,N=B(),p=M(),t=$(null),v=parseInt(N.params.id);W.forEach(a=>{a.id===v&&(t.value=a,console.log(t.value,"\uC5D0\uB527\uD2F0\uB4DC"))});const b=a=>{console.log("[goNoticeDetailView]"),p.push({name:"NoticeDetailView",params:{id:a}})},D=()=>{var a,s,n,l;console.log("[editData]"),((a=t.value)==null?void 0:a.articleType)===""?(setTimeout(function(){},1e3),x()):t.value.title?t.value.content?((s=t.value)==null?void 0:s.articleType)!==""&&t.value.title&&t.value.content&&(c.value=!0,t.value.article=((n=t.value)==null?void 0:n.articleType)==="chitchat"?"\uC7A1\uB2F4":"\uC694\uCCAD",(l=t.value)==null||l.articleType,_.value.value,t.value.editedDate=H().format("YY.MM.DD HH:mm:ss"),setTimeout(function(){c.value=!1,b(v)},1e3)):(setTimeout(function(){},1e3),m()):(setTimeout(function(){},1e3),m())};return q(()=>{console.log("[onMounted]")}),(a,s)=>{var n;return u(),f("div",z,[(u(),E(R,{to:"#alert"},[o(r,{isShow:i(V),classType:"alert-dark",message:"\uAE00 \uBD84\uB958\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694."},null,8,["isShow","message"]),o(r,{isShow:i(k),classType:"alert-dark",message:"\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."},null,8,["isShow","message"]),o(r,{isShow:i(c),classType:"alert-info",message:"\uAE00 \uC218\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},null,8,["isShow","message"])])),G,e("form",J,[e("div",K,[O,e("div",P,[e("span",null,U((n=t.value)==null?void 0:n.author),1)])]),Q,e("div",X,[Z,e("div",ee,[o(L,{class:"",style:{width:"6rem"},selectValue:t.value.articleType,"onUpdate:selectValue":s[0]||(s[0]=l=>t.value.articleType=l)},{options:j(()=>[te,i(T)==="\uC6B4\uC601\uC790"?(u(),f("option",se," \uACF5\uC9C0 ")):F("",!0),e("option",{ref_key:"chitchat",ref:_,value:"chitchat"},"\uC7A1\uB2F4",512),e("option",{ref_key:"request",ref:S,value:"request"},"\uC694\uCCAD",512)]),_:1},8,["selectValue"])])]),oe,e("div",le,[e("div",ae,[o(y,{class:"",labelFor:"title",labelMessage:"\uAE00 \uC81C\uBAA9"})]),e("div",ne,[o(I,{class:"",id:"title",maxlength:"30",value:t.value.title,inputValue:t.value.title,"onUpdate:inputValue":s[1]||(s[1]=l=>t.value.title=l)},null,8,["value","inputValue"])])]),ie,e("div",ce,[e("div",ue,[o(y,{class:"",labelFor:"content",labelMessage:"\uAE00 \uB0B4\uC6A9"})]),e("div",re,[o(Y,{id:"content",rowsType:"9",maxlength:"500",value:t.value.content,inputValue:t.value.content,"onUpdate:inputValue":s[2]||(s[2]=l=>t.value.content=l)},null,8,["value","inputValue"])])])]),e("div",de,[o(g,{class:"btn-outline-dark me-3",message:"\uBAA9\uB85D",onClick:s[3]||(s[3]=l=>i(p).push({name:"NoticeView"}))}),o(g,{class:"btn-info",message:"\uAE00 \uC218\uC815\uC644\uB8CC",onClick:D})])])}}};export{ge as default};
