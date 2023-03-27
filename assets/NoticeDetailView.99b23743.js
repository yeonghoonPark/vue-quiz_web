import{f as F,s as N,g as G,C as H,u as J,p as V,h as K,o as a,c as r,i as T,b as t,d,B as p,T as E,v as f,m as B,x as O,a as e,t as l,_ as i,l as $}from"./index.59ae0ca3.js";import{n as g}from"./notice.b16b3c8e.js";const P={id:"NoticeDetailView",class:"py-4"},Q={key:0,class:"position-fixed top-0 start-0 w-100 h-100 user-select-none",style:{"z-index":"1"}},U={key:1,class:"position-fixed top-50 start-50 translate-middle",style:{"z-index":"2"}},W=e("h5",{class:""},"\uC54C\uB9BC",-1),X=e("h6",{class:"card-title p-2 mb-3"},[$(" \uD55C\uBC88 \uC0AD\uC81C\uD55C \uC790\uB8CC\uB294 \uBCF5\uAD6C\uD560 \uBC29\uBC95\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. "),e("br"),e("br"),$(" \uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? ")],-1),Y={class:"text-center mb-5"},Z={class:"container mb-4"},ee={class:"row align-items-center py-2"},se=e("div",{class:"col-3 text-center"},[e("span",null,"\uC791\uC131\uC790")],-1),te={class:"col-9"},oe=e("hr",null,null,-1),le={class:"row align-items-center py-2"},ae=e("div",{class:"col-3 text-center"},[e("span",null,"\uAE00 \uBD84\uB958")],-1),ne={class:"col-9"},ie={class:"box py-1 px-3"},ce=e("hr",null,null,-1),re={class:"row align-items-center py-2"},de=e("div",{class:"col-3 text-center"},[e("span",null,"\uAE00 \uC81C\uBAA9")],-1),ue={class:"col-9"},_e=e("hr",null,null,-1),he={class:"row align-items-start py-2 mb-4"},me=e("div",{class:"col-3 text-center"},[e("span",null,"\uAE00 \uB0B4\uC6A9")],-1),ve={class:"col-9 word-break py-1 overflow-auto",style:{height:"230px"}},pe={class:"d-flex align-items-end flex-column text-muted"},fe={class:"fw-light mb-2",style:{"font-size":"0.8rem"}},ge={key:0,class:"fw-light",style:{"font-size":"0.8rem"}},we={class:"container d-flex justify-content-end"},be={__name:"NoticeDetailView",setup(xe){const z=F(),{profile_nickname:w}=N(z),I=G(),{isDeleteSuccess:u,isEditMismatch:_,isDeleteMismatch:h}=N(I),M=H(),m=J(),s=V(null),v=parseInt(M.params.id),n=V(!1);g.forEach(o=>{o.id===v&&(s.value=o)});const R=o=>{console.log("[goNoticeEditView]"),m.push({name:"NoticeEditView",params:{id:o}})},A=()=>{console.log("[onEditButtonClick]"),w.value===s.value.author?R(v):(_.value=!0,setTimeout(function(){_.value=!1},1e3))},j=()=>{console.log("[showDeleteCard]"),w.value===s.value.author?n.value=!0:(h.value=!0,setTimeout(function(){h.value=!1},1e3))},L=()=>{console.log("[deleteSelectedItem]"),g.forEach(o=>{o.id===v&&(n.value=!1,u.value=!0,g.splice(o,1),setTimeout(function(){u.value=!1,m.push({name:"NoticeView"})},1e3))})};return K(()=>{console.log("[onMounted]")}),(o,c)=>{var x,y,k,b,S,C,D;return a(),r("div",P,[(a(),T(E,{to:"#alert"},[t(p,{class:"text-center",isShow:d(u),classType:"alert-info",message:"\uAE00 \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."},null,8,["isShow","message"]),t(p,{class:"text-center",isShow:d(_),classType:"alert-danger",message:"\uC791\uC131\uC790\uB9CC \uC218\uC815 \uAC00\uB2A5\uD569\uB2C8\uB2E4."},null,8,["isShow","message"]),t(p,{class:"text-center",isShow:d(h),classType:"alert-danger",message:"\uC791\uC131\uC790\uB9CC \uC0AD\uC81C \uAC00\uB2A5\uD569\uB2C8\uB2E4."},null,8,["isShow","message"])])),(a(),T(E,{to:"#card"},[n.value?(a(),r("div",Q)):f("",!0),n.value?(a(),r("div",U,[t(O,{class:"text-center"},{header:B(()=>[W]),default:B(()=>[X,t(i,{class:"btn-outline-primary me-3",message:"\uD655\uC778",onClick:L}),t(i,{class:"btn-outline-danger",message:"\uCDE8\uC18C",onClick:c[0]||(c[0]=q=>n.value=!1)})]),_:1})])):f("",!0)])),e("h1",Y,l(`'${(x=s.value)==null?void 0:x.author}'`)+"\uB2D8\uC758 \uAE00",1),e("div",Z,[e("div",ee,[se,e("div",te,[e("span",null,l((y=s.value)==null?void 0:y.author),1)])]),oe,e("div",le,[ae,e("div",ne,[e("span",ie,l((k=s.value)==null?void 0:k.article),1)])]),ce,e("div",re,[de,e("div",ue,[e("span",null,l((b=s.value)==null?void 0:b.title),1)])]),_e,e("div",he,[me,e("div",ve,l((S=s.value)==null?void 0:S.content),1)]),e("div",pe,[e("span",fe," \uC791\uC131\uC77C "+l((C=s.value)==null?void 0:C.createdDetailDate),1),s.value.editedDate?(a(),r("span",ge," \uC218\uC815\uC77C "+l((D=s.value)==null?void 0:D.editedDate),1)):f("",!0)])]),e("div",we,[t(i,{class:"btn-outline-dark me-3",message:"\uBAA9\uB85D",onClick:c[1]||(c[1]=q=>d(m).push({name:"NoticeView"}))}),t(i,{class:"btn-outline-success me-3",message:"\uC218\uC815",onClick:A}),t(i,{class:"btn-outline-danger",message:"\uC0AD\uC81C",onClick:j})])])}}};export{be as default};
