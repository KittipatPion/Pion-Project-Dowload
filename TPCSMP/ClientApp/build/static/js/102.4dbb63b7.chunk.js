(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[102],{969:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return h}));var s=c(40),a=c(671),n=c(1),r=c(668),i=c(675),l=c(686),o=c(900),d=c(890),j=(c(679),c(19)),b=[{key:"sourceCode",label:"".concat(l.a.arrFieldMasterSource[0])},{key:"sourceNameEng",label:"".concat(l.a.arrFieldMasterSource[1])},{key:"sourceNameThai",label:"".concat(l.a.arrFieldMasterSource[2])},{key:"sourceDesc",label:"".concat(l.a.arrFieldMasterSource[3])},{key:"manage",label:"",_style:{width:"1%"},sorter:!1,filter:!1}];function h(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],h=t[1],x=Object(n.useState)(!1),u=Object(a.a)(x,2),O=u[0],m=u[1],f=Object(n.useState)(!1),g=Object(a.a)(f,2),S=g[0],p=g[1],w=Object(n.useState)(!1),N=Object(a.a)(w,2),y=N[0],C=N[1],v=Object(n.useState)(!1),k=Object(a.a)(v,2),F=k[0],D=k[1],M=Object(n.useState)([]),E=Object(a.a)(M,2),L=E[0],z=E[1],K=Object(n.useState)([]),B=Object(a.a)(K,2),H=B[0],A=B[1],T=Object(n.useState)([]),V=Object(a.a)(T,2),q=V[0],I=V[1],P=Object(n.useState)(!1),J=Object(a.a)(P,2),G=J[0],R=J[1],_=Object(n.useState)(!1),Q=Object(a.a)(_,2),U=Q[0],W=Q[1],X=Object(n.useState)(!1),Y=Object(a.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(!1),te=Object(a.a)(ee,2),ce=te[0],se=te[1],ae=Object(n.useState)(null),ne=Object(a.a)(ae,2),re=ne[0],ie=ne[1],le=function(e){return function(t){var c=Object(s.a)({},H);"sourceCode"===e?c.sourceCode=t.target.value:"sourceNameEng"===e?c.sourceNameEng=t.target.value:"sourceNameThai"===e?c.sourceNameThai=t.target.value:"sourceDesc"===e&&(c.sourceDesc=t.target.value),A(c)}},oe=function(){W(!U);var e=document.getElementById("add-source-code").value,t=document.getElementById("add-en-name").value,c=document.getElementById("add-th-name").value,s=document.getElementById("add-description").value;be([e,t,c,s,1])},de=function(){$(!Z);var e=Object(s.a)({},H),t=e.sourceId,c=e.sourceCode,a=e.sourceNameEng,n=e.sourceNameThai,r=e.sourceDesc;he([t,c,a,n,r,1])},je=function(){se(!ce),xe(re)},be=function(e){D(!0),i.a.fetchAddSourceList(e).then((function(e){D(!1),"200"===e.httpCode?window.location.reload(!1):p(e)}),(function(e){D(!1),p(e)}))},he=function(e){D(!0),i.a.fetchEditSourceList(e).then((function(e){D(!1),"200"===e.httpCode?window.location.reload(!1):p(e)}),(function(e){D(!1),p(e)}))},xe=function(e){D(!0),i.a.fetchRemoveSourceList(e).then((function(e){D(!1),"200"===e.httpCode?window.location.reload(!1):p(e)}),(function(e){D(!1),p(e)}))},ue=function(e){C(!0),A({}),i.a.fetchGetSourceListById(e).then((function(e){C(!1),"200"===e.httpCode?A(e.data):p(e)}),(function(e){C(!1),p(e)}))};Object(n.useEffect)((function(){i.a.fetchGetSourceList().then((function(e){m(!0),"200"===e.httpCode?z(e.data):h(e)}),(function(e){m(!0),h(e)}))}),[]);var Oe=function(e){var t=document.querySelectorAll(".".concat(e)),c=!1;return Array.prototype.slice.call(t).forEach((function(e){e.checkValidity()&&(c=!0),e.classList.add("was-validated")})),c},me=function(){Oe("add-needs-validation")&&W(!U)},fe=function(){Oe("edit-needs-validation")&&$(!Z)},ge=function(){return Object(j.jsxs)(r.u,{className:"text-center headtext",children:[Object(j.jsx)(r.cb,{children:l.a.apiLoadingData})," ",Object(j.jsx)(r.Fb,{variant:"grow",size:"md"})]})},Se=function(e){return Object(j.jsx)(r.v,{show:q.includes(e),children:Object(j.jsx)(r.k,{children:pe()})})},pe=function(){if(y)return Object(j.jsxs)("div",{children:[Object(j.jsx)(r.wb,{children:Object(j.jsxs)(r.u,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}),ge(),Object(j.jsx)(r.wb,{children:Object(j.jsxs)(r.u,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})]});if(Object.keys(H).length){var e=Object(s.a)({},H);return Object(j.jsxs)(r.J,{className:"edit-needs-validation",noValidate:!0,children:[Object(j.jsxs)(r.wb,{children:[Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"4",className:"text-left",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[0]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},placeholder:e.sourceCode,value:e.sourceCode,onChange:le("sourceCode"),maxLength:"10",required:!0})}),Object(j.jsx)(r.ab,{children:l.a.inValidNullMessage})]})}),Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"4",className:"text-left",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[1]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},placeholder:e.sourceNameEng,value:e.sourceNameEng,onChange:le("sourceNameEng"),maxLength:"50",required:!0})}),Object(j.jsx)(r.ab,{children:l.a.inValidNullMessage})]})}),Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"4",className:"text-left",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[2]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},placeholder:e.sourceNameThai,value:e.sourceNameThai,onChange:le("sourceNameThai"),maxLength:"50",required:!0})}),Object(j.jsx)(r.ab,{children:l.a.inValidNullMessage})]})})]}),Object(j.jsx)(r.wb,{children:Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"6",className:"text-left",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[3]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},placeholder:e.sourceDesc,value:e.sourceDesc,onChange:le("sourceDesc"),maxLength:"255"})})]})})}),Object(j.jsxs)(r.wb,{className:"justify-content-center",children:[Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"2",children:Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.f,{className:"editbutton",size:l.a.btAddSize,color:"primary",block:!0,onClick:fe,children:l.a.btEditData})})}),Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"2",children:Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.f,{className:"editbutton",size:l.a.btAddSize,color:"danger",onClick:(t=e.sourceId,function(e){se(!ce),ie(t)}),block:!0,children:l.a.btDeleteData})})})]})]})}var t};return c?Object(j.jsxs)(r.u,{className:"text-center",children:[l.a.apiTopicFetchError," : ",c.message]}):O?Object(j.jsxs)(r.wb,{children:[Object(j.jsx)(r.u,{xs:"12",lg:"12",children:Object(j.jsxs)(r.j,{children:[Object(j.jsxs)(r.n,{children:[Object(j.jsxs)(r.wb,{children:[Object(j.jsx)(r.u,{children:Object(j.jsx)("h3",{className:"headertable",children:l.a.txtMasterSource})}),Object(j.jsx)(r.u,{md:"2",xs:"4",children:Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.f,{block:!0,className:"btn-mainsmp",size:l.a.btHeaderSize,onClick:function(){R(!G)},children:l.a.btAddData})})})]}),Object(j.jsx)(r.v,{show:G,children:Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.j,{className:"p-3",children:Object(j.jsxs)(r.J,{className:"add-needs-validation",noValidate:!0,children:[Object(j.jsxs)(r.wb,{children:[Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"3",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[0]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},id:"add-source-code",maxLength:"10",required:!0})}),Object(j.jsx)(r.ab,{children:l.a.inValidNullMessage})]})}),Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"3",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[1]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},id:"add-en-name",maxLength:"50",required:!0})}),Object(j.jsx)(r.ab,{children:l.a.inValidNullMessage})]})}),Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"3",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[2]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},id:"add-th-name",maxLength:"50",required:!0})}),Object(j.jsx)(r.ab,{children:l.a.inValidNullMessage})]})}),Object(j.jsx)(r.u,{md:"3"}),Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"6",children:Object(j.jsxs)(r.K,{children:[Object(j.jsx)(r.cb,{children:l.a.arrFieldMasterSource[3]}),Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.S,{type:"text",style:{height:l.a.styleHeightField},id:"add-description",maxLength:"255"})})]})})]}),Object(j.jsx)(r.wb,{className:"justify-content-center",children:Object(j.jsx)(r.u,{xs:"12",sm:"6",md:"4",lg:"2",children:Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.f,{className:"editbutton",size:l.a.btAddSize,color:"success",block:!0,onClick:me,children:l.a.btSave})})})})]})})})})]}),Object(j.jsx)(r.k,{children:Object(j.jsx)(r.j,{children:Object(j.jsx)(r.k,{children:Object(j.jsx)(r.y,{items:L,fields:b,columnFilter:!0,tableFilter:{label:"".concat(l.a.tabletxtSearch),placeholder:"".concat(l.a.tabletxtPlaceholder)},itemsPerPageSelect:{label:"".concat(l.a.tabletxtCountPage)},itemsPerPage:10,hover:!0,sorter:!0,pagination:!0,scopedSlots:{manage:function(e,t){return Object(j.jsx)("td",{className:"py-2",children:Object(j.jsx)(o.a,{className:"border-set",component:d.a,item:!0,boxShadow:1,xs:{width:" 100%"},children:Object(j.jsx)(r.f,{color:"primary",variant:"outline",shape:"square",size:l.a.btAddSize,block:!0,onClick:function(){!function(e,t){var c=q.indexOf(e),s=q.slice();-1!==c?s.splice(c,1):(s=[q,e],y||ue(t)),I(s)}(t,e.sourceId)},children:q.includes(t)?"".concat(l.a.btCollapseHide):"".concat(l.a.btCollapseShow)})})})},details:function(e,t){return Se(t)}}})})})})]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(r.gb,{size:"sm",show:F,centered:!0,closeOnBackdrop:!1,children:Object(j.jsx)(r.hb,{children:ge()})}),Object(j.jsxs)(r.gb,{show:S,color:"danger",closeOnBackdrop:!1,children:[Object(j.jsx)(r.jb,{children:Object(j.jsx)("h5",{children:Object(j.jsx)(r.cb,{children:l.a.apiTopicFetchError})})}),Object(j.jsx)(r.hb,{children:Object(j.jsx)(r.cb,{children:S?null!=S.message?S.message:S.messageDescription:" "})}),Object(j.jsx)(r.ib,{children:Object(j.jsx)(r.f,{color:"secondary",onClick:function(){return p(null)},children:l.a.btOK})})]}),Object(j.jsxs)(r.gb,{show:U,onClose:function(){return W(!U)},color:"success",children:[Object(j.jsx)(r.jb,{closeButton:!0,children:Object(j.jsx)("h5",{children:Object(j.jsx)(r.kb,{children:l.a.titleConfirmChangeData})})}),Object(j.jsx)(r.hb,{children:l.a.contentConfirmAddData}),Object(j.jsxs)(r.ib,{children:[Object(j.jsx)(r.f,{color:"success",onClick:oe,children:l.a.btOK})," ",Object(j.jsx)(r.f,{color:"secondary",onClick:function(){return W(!U)},children:l.a.btCancel})]})]}),Object(j.jsxs)(r.gb,{show:Z,onClose:function(){return $(!Z)},color:"success",children:[Object(j.jsx)(r.jb,{closeButton:!0,children:Object(j.jsx)("h5",{children:Object(j.jsx)(r.kb,{children:l.a.titleConfirmChangeData})})}),Object(j.jsx)(r.hb,{children:l.a.contentConfirmEditData}),Object(j.jsxs)(r.ib,{children:[Object(j.jsx)(r.f,{color:"success",onClick:de,children:l.a.btOK})," ",Object(j.jsx)(r.f,{color:"secondary",onClick:function(){return $(!Z)},children:l.a.btCancel})]})]}),Object(j.jsxs)(r.gb,{show:ce,onClose:function(){return se(!ce)},color:"danger",children:[Object(j.jsx)(r.jb,{closeButton:!0,children:Object(j.jsx)(r.kb,{children:l.a.titleConfirmChangeData})}),Object(j.jsx)(r.hb,{children:l.a.contentConfirmDeleteData}),Object(j.jsxs)(r.ib,{children:[Object(j.jsx)(r.f,{color:"danger",onClick:je,children:l.a.btOK})," ",Object(j.jsx)(r.f,{color:"secondary",onClick:function(){return se(!ce)},children:l.a.btCancel})]})]})]})]}):ge()}}}]);
//# sourceMappingURL=102.4dbb63b7.chunk.js.map