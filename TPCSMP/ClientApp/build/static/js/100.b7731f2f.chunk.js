(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[100],{973:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var a=c(40),s=c(671),n=c(1),i=c(668),l=c(682),r=c(675),d=c(686),j=c(890),b=c(900),o=(c(679),c(19)),h=[{key:"cyplaceCode",label:"".concat(d.a.arrFieldMasterCYPlace[0])},{key:"cyplaceNameThai",label:"".concat(d.a.arrFieldMasterCYPlace[1])},{key:"cyplaceNameEng",label:"".concat(d.a.arrFieldMasterCYPlace[2])},{key:"description",label:"".concat(d.a.arrFieldMasterCYPlace[3])},{key:"isActive",label:"".concat(d.a.arrFieldMasterCYPlace[4]),_style:{width:"1%"}},{key:"manage",label:"",_style:{width:"1%"},sorter:!1,filter:!1}];function x(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),c=t[0],x=t[1],O=Object(n.useState)(!1),m=Object(s.a)(O,2),u=m[0],p=m[1],f=Object(n.useState)(!1),g=Object(s.a)(f,2),y=g[0],C=g[1],w=Object(n.useState)(!1),N=Object(s.a)(w,2),v=N[0],S=N[1],k=Object(n.useState)(!1),F=Object(s.a)(k,2),P=F[0],A=F[1],M=Object(n.useState)([]),Y=Object(s.a)(M,2),E=Y[0],L=Y[1],z=Object(n.useState)([]),K=Object(s.a)(z,2),D=K[0],H=K[1],B=Object(n.useState)([]),V=Object(s.a)(B,2),I=V[0],T=V[1],q=Object(n.useState)(!1),J=Object(s.a)(q,2),G=J[0],_=J[1],R=Object(n.useState)(!1),Q=Object(s.a)(R,2),U=Q[0],W=Q[1],X=Object(n.useState)(!1),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ce=Object(s.a)(te,2),ae=ce[0],se=ce[1],ne=Object(n.useState)(null),ie=Object(s.a)(ne,2),le=ie[0],re=ie[1],de=function(e){return function(t){var c=Object(a.a)({},D);"cyplaceCode"===e?c.cyplaceCode=t.target.value:"cyplaceNameEng"===e?c.cyplaceNameEng=t.target.value:"cyplaceNameThai"===e?c.cyplaceNameThai=t.target.value:"description"===e?c.description=t.target.value:"isActive"===e&&(c.isActive=!c.isActive),H(c)}},je=function(){W(!U);var e=document.getElementById("add-cyplace-code").value,t=document.getElementById("add-en-name").value,c=document.getElementById("add-th-name").value,a=document.getElementById("add-description").value;he([e,t,c,a,!0,1])},be=function(){ee(!$);var e=Object(a.a)({},D),t=e.cyplaceId,c=e.cyplaceCode,s=e.cyplaceNameEng,n=e.cyplaceNameThai,i=e.description,l=e.isActive;xe([t,c,s,n,i,l,1])},oe=function(){se(!ae),Oe(le)},he=function(e){A(!0),r.a.fetchAddCYPlaceList(e).then((function(e){A(!1),"200"===e.httpCode?window.location.reload(!1):C(e)}),(function(e){A(!1),C(e)}))},xe=function(e){A(!0),r.a.fetchEditCYPlaceList(e).then((function(e){A(!1),"200"===e.httpCode?window.location.reload(!1):C(e)}),(function(e){A(!1),C(e)}))},Oe=function(e){A(!0),r.a.fetchRemoveCYPlaceList(e).then((function(e){A(!1),"200"===e.httpCode?window.location.reload(!1):C(e)}),(function(e){A(!1),C(e)}))},me=function(e){S(!0),H({}),r.a.fetchGetCYPlaceListById(e).then((function(e){S(!1),"200"===e.httpCode?(H(e.data),console.log(e.data)):C(e)}),(function(e){S(!1),C(e)}))};Object(n.useEffect)((function(){r.a.fetchGetCYPlaceList().then((function(e){p(!0),"200"===e.httpCode?L(e.data):x(e)}),(function(e){p(!0),x(e)}))}),[]);var ue=function(e){var t=document.querySelectorAll(".".concat(e)),c=!1;return Array.prototype.slice.call(t).forEach((function(e){e.checkValidity()&&(c=!0),e.classList.add("was-validated")})),c},pe=function(){ue("add-needs-validation")&&W(!U)},fe=function(){ue("edit-needs-validation")&&ee(!$)},ge=function(){return Object(o.jsxs)(i.u,{className:"text-center headtext",children:[Object(o.jsx)(i.cb,{children:d.a.apiLoadingData})," ",Object(o.jsx)(i.Fb,{variant:"grow",size:"md"})]})},ye=function(e){return Object(o.jsx)(i.v,{show:I.includes(e),children:Object(o.jsx)(i.k,{children:Ce()})})},Ce=function(){if(v)return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.wb,{children:Object(o.jsxs)(i.u,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}),ge(),Object(o.jsx)(i.wb,{children:Object(o.jsxs)(i.u,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})]});if(Object.keys(D).length){var e=Object(a.a)({},D);return Object(o.jsxs)(i.J,{className:"edit-needs-validation",noValidate:!0,children:[Object(o.jsxs)(i.wb,{children:[Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"4",className:"text-left",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[0]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},value:e.cyplaceCode,onChange:de("cyplaceCode"),maxLength:"10",required:!0})}),Object(o.jsx)(i.ab,{children:d.a.inValidNullMessage})]})}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"4",className:"text-left",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[1]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},value:e.cyplaceNameThai,onChange:de("cyplaceNameThai"),maxLength:"50",required:!0})}),Object(o.jsx)(i.ab,{children:d.a.inValidNullMessage})]})}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"4",className:"text-left",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[2]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},value:e.cyplaceNameEng,onChange:de("cyplaceNameEng"),maxLength:"50"})}),Object(o.jsx)(i.ab,{children:d.a.inValidNullMessage})]})})]}),Object(o.jsxs)(i.wb,{children:[Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"6",className:"text-left",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[3]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},value:e.description,onChange:de("description"),maxLength:"255"})})]})}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"6",className:"text-left",children:Object(o.jsxs)(i.K,{children:[Object(o.jsxs)(i.cb,{className:"mt-1",class:"align-top",variant:"checkbox",onClick:de("isActive"),children:["\xa0 ",d.a.txtFormisActive]}),Object(o.jsx)(i.K,{variant:"checkbox",className:"checkbox",children:Object(o.jsx)(i.Hb,{className:"mx-1",variant:"3d",color:"success",onChange:de("isActive"),checked:e.isActive,labelOn:"\u2713",labelOff:"\u2715"})})]})})]}),Object(o.jsxs)(i.wb,{className:"justify-content-center",children:[Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"2",children:Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.f,{className:"editbutton",size:d.a.btAddSize,color:"primary",block:!0,onClick:fe,children:d.a.btEditData})})}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"2",children:Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.f,{className:"editbutton",size:d.a.btAddSize,color:"danger",onClick:(t=e.cyplaceId,function(e){se(!ae),re(t)}),block:!0,children:d.a.btDeleteData})})})]})]})}var t};return c?Object(o.jsxs)(i.u,{className:"text-center",children:[d.a.apiTopicFetchError," : ",c.message]}):u?Object(o.jsxs)(i.wb,{children:[Object(o.jsx)(i.u,{xs:"12",lg:"12",children:Object(o.jsxs)(i.j,{children:[Object(o.jsxs)(i.n,{children:[Object(o.jsxs)(i.wb,{children:[Object(o.jsx)(i.u,{children:Object(o.jsx)("h3",{className:"headertable",children:d.a.txtMasterCYPlace})}),Object(o.jsx)(i.u,{md:"2",xs:"4",children:Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.f,{block:!0,className:"btn-mainsmp",size:d.a.btHeaderSize,onClick:function(){_(!G)},children:d.a.btAddData})})})]}),Object(o.jsx)(i.v,{show:G,children:Object(o.jsx)(i.k,{children:Object(o.jsx)(i.J,{className:"add-needs-validation",noValidate:!0,children:Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsxs)(i.j,{className:"p-3",children:[Object(o.jsxs)(i.wb,{children:[Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"3",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[0]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},id:"add-cyplace-code",maxLength:"15",required:!0})}),Object(o.jsx)(i.ab,{children:d.a.inValidNullMessage})]})}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"3",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[1]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},id:"add-th-name",maxLength:"50",required:!0})}),Object(o.jsx)(i.ab,{children:d.a.inValidNullMessage})]})}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"3",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[2]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},id:"add-en-name",maxLength:"50"})}),Object(o.jsx)(i.ab,{children:d.a.inValidNullMessage})]})}),Object(o.jsx)(i.u,{md:"3"}),Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"6",children:Object(o.jsxs)(i.K,{children:[Object(o.jsx)(i.cb,{children:d.a.arrFieldMasterCYPlace[3]}),Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.S,{type:"text",style:{height:d.a.styleHeightField},id:"add-description",maxLength:"255"})})]})})]}),Object(o.jsx)(i.wb,{children:Object(o.jsx)(i.u,{xs:"12",sm:"6",md:"4",lg:"2",children:Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.f,{className:"editbutton",size:d.a.btAddSize,color:"success",block:!0,onClick:pe,children:d.a.btSave})})})})]})})})})})]}),Object(o.jsx)(i.k,{children:Object(o.jsx)(i.j,{children:Object(o.jsx)(i.k,{children:Object(o.jsx)(i.y,{items:E,fields:h,columnFilter:!0,tableFilter:{label:"".concat(d.a.tabletxtSearch),placeholder:"".concat(d.a.tabletxtPlaceholder)},itemsPerPageSelect:{label:"".concat(d.a.tabletxtCountPage)},itemsPerPage:10,hover:!0,sorter:!0,pagination:!0,scopedSlots:{isActive:function(e){return Object(o.jsx)("td",{className:"py-2 text-center",children:e.isActive?Object(o.jsx)(l.a,{name:"cil-check-circle",style:{color:"green"},size:"2xl"}):Object(o.jsx)(l.a,{name:"cil-x-circle",style:{color:"red"},size:"2xl"})})},manage:function(e,t){return Object(o.jsx)("td",{className:"py-2",children:Object(o.jsx)(b.a,{className:"border-set",component:j.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(o.jsx)(i.f,{color:"primary",variant:"outline",shape:"square",size:d.a.btAddSize,block:!0,onClick:function(){!function(e,t){var c=I.indexOf(e),a=I.slice();-1!==c?a.splice(c,1):(a=[I,e],v||me(t)),T(a)}(t,e.cyplaceId)},children:I.includes(t)?"".concat(d.a.btCollapseHide):"".concat(d.a.btCollapseShow)})})})},details:function(e,t){return ye(t)}}})})})})]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(i.gb,{size:"sm",show:P,centered:!0,closeOnBackdrop:!1,children:Object(o.jsx)(i.hb,{children:ge()})}),Object(o.jsxs)(i.gb,{show:y,color:"danger",closeOnBackdrop:!1,children:[Object(o.jsx)(i.jb,{children:Object(o.jsx)("h5",{children:Object(o.jsx)(i.cb,{children:d.a.apiTopicFetchError})})}),Object(o.jsx)(i.hb,{children:Object(o.jsx)(i.cb,{children:y?null!=y.message?y.message:y.messageDescription:" "})}),Object(o.jsx)(i.ib,{children:Object(o.jsx)(i.f,{color:"secondary",onClick:function(){return C(null)},children:d.a.btOK})})]}),Object(o.jsxs)(i.gb,{show:U,onClose:function(){return W(!U)},color:"success",children:[Object(o.jsx)(i.jb,{closeButton:!0,children:Object(o.jsx)("h5",{children:Object(o.jsx)(i.kb,{children:d.a.titleConfirmChangeData})})}),Object(o.jsx)(i.hb,{children:d.a.contentConfirmAddData}),Object(o.jsxs)(i.ib,{children:[Object(o.jsx)(i.f,{color:"success",onClick:je,children:d.a.btOK})," ",Object(o.jsx)(i.f,{color:"secondary",onClick:function(){return W(!U)},children:d.a.btCancel})]})]}),Object(o.jsxs)(i.gb,{show:$,onClose:function(){return ee(!$)},color:"success",children:[Object(o.jsx)(i.jb,{closeButton:!0,children:Object(o.jsx)("h5",{children:Object(o.jsx)(i.kb,{children:d.a.titleConfirmChangeData})})}),Object(o.jsx)(i.hb,{children:d.a.contentConfirmEditData}),Object(o.jsxs)(i.ib,{children:[Object(o.jsx)(i.f,{color:"success",onClick:be,children:d.a.btOK})," ",Object(o.jsx)(i.f,{color:"secondary",onClick:function(){return ee(!$)},children:d.a.btCancel})]})]}),Object(o.jsxs)(i.gb,{show:ae,onClose:function(){return se(!ae)},color:"danger",children:[Object(o.jsx)(i.jb,{closeButton:!0,children:Object(o.jsx)(i.kb,{children:d.a.titleConfirmChangeData})}),Object(o.jsx)(i.hb,{children:d.a.contentConfirmDeleteData}),Object(o.jsxs)(i.ib,{children:[Object(o.jsx)(i.f,{color:"danger",onClick:oe,children:d.a.btOK})," ",Object(o.jsx)(i.f,{color:"secondary",onClick:function(){return se(!ae)},children:d.a.btCancel})]})]})]})]}):ge()}}}]);
//# sourceMappingURL=100.b7731f2f.chunk.js.map