(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[94],{1082:function(e,a,t){"use strict";var n=t(40),l=t(104),o=t(3),r=t.n(o),c=t(103),s=t.n(c),i=t(879),u=t.n(i),m=t(880),E={tag:m.s,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},d=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,s=e.form,i=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),E=Object(m.o)(u()(a,o?"no-gutters":null,s?"form-row":"row"),t);return r.a.createElement(c,Object(n.a)({},i,{className:E}))};d.propTypes=E,d.defaultProps={tag:"div"},a.a=d},1083:function(e,a,t){"use strict";var n=t(40),l=t(104),o=t(944),r=t.n(o),c=t(3),s=t.n(c),i=t(103),u=t.n(i),m=t(879),E=t.n(m),d=t(880),C=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:C,offset:C})]),p={tag:d.s,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},R=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach((function(a,n){var l=e[a];if(delete i[a],l||""===l){var o=!n;if(r()(l)){var c,s=o?"-":"-"+a+"-",m=g(o,a,l.size);u.push(Object(d.o)(E()(((c={})[m]=l.size||""===l.size,c["order"+s+l.order]=l.order||0===l.order,c["offset"+s+l.offset]=l.offset||0===l.offset,c)),t))}else{var C=g(o,a,l);u.push(C)}}})),u.length||u.push("col");var m=Object(d.o)(E()(a,u),t);return s.a.createElement(c,Object(n.a)({},i,{className:m}))};R.propTypes=p,R.defaultProps=f,a.a=R},1152:function(e,a,t){"use strict";var n=t(40),l=t(104),o=t(3),r=t.n(o),c=t(103),s=t.n(c),i=t(879),u=t.n(i),m=t(880),E={tag:m.s,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.o)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},s,{className:i,ref:o}))};d.propTypes=E,d.defaultProps={tag:"div"},a.a=d},1157:function(e,a,t){"use strict";var n=t(40),l=t(104),o=t(3),r=t.n(o),c=t(103),s=t.n(c),i=t(879),u=t.n(i),m=t(880),E={tag:m.s,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,s=e.inverse,i=e.outline,E=e.tag,d=e.innerRef,C=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(m.o)(u()(a,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return r.a.createElement(E,Object(n.a)({},C,{className:b,ref:d}))};d.propTypes=E,d.defaultProps={tag:"div"},a.a=d},1161:function(e,a,t){"use strict";var n=t(40),l=t(104),o=t(3),r=t.n(o),c=t(103),s=t.n(c),i=t(879),u=t.n(i),m=t(880),E={tag:m.s,className:s.a.string,cssModule:s.a.object},d=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.o)(u()(a,"card-header"),t);return r.a.createElement(o,Object(n.a)({},c,{className:s}))};d.propTypes=E,d.defaultProps={tag:"div"},a.a=d},1179:function(e,a,t){"use strict";var n=t(40),l=t(104),o=t(929),r=t(67),c=t(3),s=t.n(c),i=t(103),u=t.n(i),m=t(879),E=t.n(m),d=t(880),C={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.s,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,c=e.close,i=e.cssModule,u=e.color,m=e.outline,C=e.size,b=e.tag,p=e.innerRef,f=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof f.children&&(f.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(m?"-outline":"")+"-"+u,R=Object(d.o)(E()(r,{close:c},c||"btn",c||g,!!C&&"btn-"+C,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);f.href&&"button"===b&&(b="a");var A=c?"Close":null;return s.a.createElement(b,Object(n.a)({type:"button"===b&&f.onClick?"button":void 0},f,{className:R,ref:p,onClick:this.onClick,"aria-label":t||A}))},a}(s.a.Component);b.propTypes=C,b.defaultProps={color:"secondary",tag:"button"},a.a=b},1523:function(e,a,t){"use strict";t.r(a);var n=t(974),l=t(3),o=t.n(l),r=t(1082),c=t(1083),s=t(1157),i=t(1161),u=t(1329),m=t(1152),E=t(1339),d=t(1232),C=t(1153),b=t(1179),p=(t(990),t(1033)),f=t.n(p),g=t(238);a.default=function(e){var a=Object(l.useState)("#b3d9ff"),t=Object(n.a)(a,2),p=t[0],R=(t[1],Object(l.useState)(e.actionForm)),A=Object(n.a)(R,2),_=A[0],v=(A[1],Object(l.useState)(!1)),y=Object(n.a)(v,2),O=y[0],h=y[1],N=Object(l.useState)(!1),S=Object(n.a)(N,2),j=S[0],K=S[1],k=Object(l.useState)(!0),P=Object(n.a)(k,2),T=P[0],M=P[1],I=Object(l.useState)({}),D=Object(n.a)(I,2),L=D[0],x=D[1],U=Object(l.useState)({}),B=Object(n.a)(U,2),w=B[0],Y=B[1],W=Object(l.useState)(""),z=Object(n.a)(W,2),G=z[0],F=z[1],H=Object(l.useState)(""),Z=Object(n.a)(H,2),J=Z[0],q=Z[1],V=Object(l.useState)(""),$=Object(n.a)(V,2),Q=$[0],X=$[1],ee=Object(l.useState)(""),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=Object(l.useState)({}),oe=Object(n.a)(le,2),re=oe[0],ce=oe[1];Object(l.useEffect)((function(){console.log("propsForm",e),"CREATE"==_&&(K(!0),x(e.optionSite),Y(e.optionLocation)),"EDIT"==_&&(h(!0),M(!1)),fetch("/claritybqm/reportFetch/?scriptName=DC_RACK").then((function(e){return e.json()})).then((function(a){if(e.rackid){var t=Object.values(a).filter((function(a){return a.RACK_ID==e.rackid}));ce(t[0]),console.log("filter",t)}}))}),[e]);var se=function(e){var a=!0,t=f()("#formRack :input"),n={};return t.each((function(){1==f()(this).is(":radio")||1==f()(this).is(":checkbox")?n[this.name]=void 0==f()("input[name="+f()(this).attr("name")+"]:checked").val()?"":f()("input[name="+f()(this).attr("name")+"]:checked").val():n[this.name]=void 0==f()(this).val()?"":f()(this).val(),n.RACK_ID="",n.RACK_CONTRACTUAL_POWER="",n.RACK_INSERT_BY=g.a.authenticated.username?g.a.authenticated.username.toUpperCase():"TMIMS_FORM"})),console.log("handleValidation",n),""==n.SITE_NAME&&(a=!1,q("Please select DC Site"),F("solid red")),n.SITE_NAME&&(a=!0,q(""),F("")),""==n.LOCN_NAME&&(a=!1,X("Please select DC Location"),F("solid red")),n.LOCN_NAME&&(a=!0,X(""),F("")),""==n.RACK_ROOM&&(a=!1,ne("Cannot be empty"),F("solid red")),n.RACK_ROOM&&(a=!0,ne(""),F("")),""==n.RACK_NO&&(a=!1,ne("Cannot be empty"),F("solid red")),n.RACK_NO&&(a=!0,ne(""),F("")),a};return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(r.a,null,o.a.createElement(c.a,{xs:"12"},o.a.createElement(s.a,null,o.a.createElement(i.a,null,"Rack ",o.a.createElement("strong",null,"(",_,")")),o.a.createElement(u.a,{name:"formRack",id:"formRack",onSubmit:e.onSubmit},o.a.createElement(m.a,null,o.a.createElement(r.a,{style:{marginLeft:"250px"}},o.a.createElement(c.a,{xs:"4"},o.a.createElement(E.a,null,o.a.createElement(d.a,null,"DC Site"),o.a.createElement(C.a,{type:"select",name:"SITE_NAME",id:"SITE_NAME",onChange:e.onChange,style:{backgroundColor:p,border:G}},L.site?L.site.map((function(e,a){return o.a.createElement("option",{key:a,value:e.SITE_NAME},e.SITE_NAME)})):o.a.createElement("option",{key:"id",value:re.SITE_NAME},re.SITE_NAME)),o.a.createElement("span",{style:{color:"red"}},J)),o.a.createElement(E.a,null,o.a.createElement(d.a,null,"DC Location"),o.a.createElement(C.a,{type:"select",name:"LOCN_NAME",id:"LOCN_NAME",onChange:e.onChange,style:{backgroundColor:p,border:G}},w.loc?w.loc.map((function(e,a){return o.a.createElement("option",{key:a,value:e.LOCN_NAME},e.LOCN_NAME)})):o.a.createElement("option",{key:"id",value:re.LOCATION_NAME},re.LOCATION_NAME)),o.a.createElement("span",{style:{color:"red"}},Q))),o.a.createElement(c.a,{xs:"4"},o.a.createElement(E.a,null,o.a.createElement(d.a,null,"Room"),o.a.createElement(C.a,{type:"text",id:"RACK_ROOM",name:"RACK_ROOM",value:re.RACK_ROOM,onChange:e.onChange,style:{backgroundColor:p,border:G}}),o.a.createElement("span",{style:{color:"red"}},te)))),o.a.createElement(s.a,null,o.a.createElement(m.a,null,o.a.createElement(r.a,null,o.a.createElement(c.a,{xs:"3"},o.a.createElement(E.a,{hidden:T},o.a.createElement(d.a,null,"Rack ID"),o.a.createElement(C.a,{type:"text",value:re.RACK_ID,readOnly:!0})),o.a.createElement(E.a,null,o.a.createElement(d.a,null,"Rack No"),o.a.createElement(C.a,{type:"text",id:"RACK_NO",name:"RACK_NO",value:re.RACK_NO,onChange:e.onChange,style:{backgroundColor:p,border:G}}),o.a.createElement("span",{style:{color:"red"}},te)),o.a.createElement(E.a,null,o.a.createElement(d.a,null,"Rack Type"),o.a.createElement(C.a,{type:"text",id:"RACK_TYPE",name:"RACK_TYPE",value:re.RACK_TYPE,onChange:e.onChange,style:{backgroundColor:p}})),o.a.createElement(E.a,null,o.a.createElement(d.a,null,"Rack Size"),o.a.createElement(C.a,{type:"text",id:"RACK_SIZE",name:"RACK_SIZE",value:re.RACK_SIZE,onChange:e.onChange,style:{backgroundColor:p}}))),o.a.createElement(c.a,{xs:"3"},o.a.createElement(d.a,null,"Power Density"),o.a.createElement(C.a,{type:"select",name:"RACK_POWER_DENSITY",id:"RACK_POWER_DENSITY",value:re.RACK_POWER_DENSITY,onChange:e.onChange,style:{backgroundColor:p}},o.a.createElement("option",{value:""},"Please select"),o.a.createElement("option",{value:"1.5"},"1.5"),o.a.createElement("option",{value:"3.0"},"3.0"),o.a.createElement("option",{value:"5.0"},"5.0"),o.a.createElement("option",{value:"7.0"},"7.0"),o.a.createElement("option",{value:"10.0"},"10.0"),o.a.createElement("option",{value:""},"NULL")),o.a.createElement(d.a,null,"Breaker Type"),o.a.createElement(C.a,{type:"select",name:"RACK_BREAKER_TYPE",id:"RACK_BREAKER_TYPE",value:re.RACK_BREAKER_TYPE,onChange:e.onChange,style:{backgroundColor:p}},o.a.createElement("option",{value:""},"Please select"),o.a.createElement("option",{value:"16"},"16")),o.a.createElement(d.a,null,"Power Phase"),o.a.createElement(C.a,{type:"select",name:"RACK_POWER_PHASE",id:"RACK_POWER_PHASE",value:re.RACK_POWER_PHASE,onChange:e.onChange,style:{backgroundColor:p}},o.a.createElement("option",{value:""},"Please select"),o.a.createElement("option",{value:"Single"},"Single"),o.a.createElement("option",{value:""},"Null")),o.a.createElement(d.a,null,"Cable ID"),o.a.createElement(C.a,{type:"text",id:"RACK_CABLE_ID",name:"RACK_CABLE_ID",value:re.RACK_CABLE_ID,onChange:e.onChange,style:{backgroundColor:p}})),o.a.createElement(c.a,{xs:"3"},o.a.createElement(d.a,null,"PDU A"),o.a.createElement(C.a,{type:"text",id:"RACK_PDU_A",name:"RACK_PDU_A",value:re.RACK_PDU_A,onChange:e.onChange,style:{backgroundColor:p}}),o.a.createElement(d.a,null,"PDU B"),o.a.createElement(C.a,{type:"text",id:"RACK_PDU_B",name:"RACK_PDU_B",value:re.RACK_PDU_B,onChange:e.onChange,style:{backgroundColor:p}}),o.a.createElement(d.a,null,"Source A"),o.a.createElement(C.a,{type:"text",id:"RACK_SOURCE_A",name:"RACK_SOURCE_A",value:re.RACK_SOURCE_A,onChange:e.onChange,style:{backgroundColor:p}}),o.a.createElement(d.a,null,"Source B"),o.a.createElement(C.a,{type:"text",id:"RACK_SOURCE_B",name:"RACK_SOURCE_B",value:re.RACK_SOURCE_B,onChange:e.onChange,style:{backgroundColor:p}}),o.a.createElement(d.a,null,"Power Pre-Laid"),o.a.createElement(C.a,{type:"select",name:"RACK_POWER_PRELAID",id:"RACK_POWER_PRELAID",value:re.RACK_POWER_PRELAID,onChange:e.onChange,style:{backgroundColor:p}},o.a.createElement("option",{value:""},"Please select"),o.a.createElement("option",{value:"Yes"},"Yes"),o.a.createElement("option",{value:"No"},"No")),o.a.createElement(d.a,null,"Cabling Pre-Laid"),o.a.createElement(C.a,{type:"select",name:"RACK_CABLING_PRELAID",id:"RACK_CABLING_PRELAID",value:re.RACK_CABLING_PRELAID,onChange:e.onChange,style:{backgroundColor:p}},o.a.createElement("option",{value:""},"Please select"),o.a.createElement("option",{value:"Yes"},"Yes"),o.a.createElement("option",{value:"No"},"No"))),o.a.createElement(c.a,{xs:"3"},o.a.createElement(d.a,null,"Status"),o.a.createElement(C.a,{type:"select",name:"RACK_STATUS",id:"RACK_STATUS",value:re.RACK_STATUS,onChange:e.onChange,style:{backgroundColor:p}},o.a.createElement("option",{value:"0"},"Please select"),o.a.createElement("option",{value:""},"Null"),o.a.createElement("option",{value:"Registered"},"Registered"),o.a.createElement("option",{value:"Unoccupied"},"Unoccupied")),o.a.createElement(d.a,null,"Description"),o.a.createElement(C.a,{type:"textarea",size:"6",id:"RACK_DESC",name:"RACK_DESC",value:re.RACK_DESC,onChange:e.onChange,style:{backgroundColor:p}})))))),o.a.createElement("div",{className:"form-button"},o.a.createElement(r.a,{style:{marginBottom:"20px"}},o.a.createElement(c.a,null,o.a.createElement(b.a,{color:"info",onClick:function(){window.history.back()}},o.a.createElement("i",{className:"fa fa-history"}),"\xa0 Back"),"\xa0\xa0\xa0",o.a.createElement(b.a,{color:"primary",type:"submit",hidden:O,onClick:function(){se()}},o.a.createElement("i",{className:"fa fa-plus"}),"\xa0 Create"),"\xa0",o.a.createElement(b.a,{color:"primary",type:"submit",hidden:j,onClick:function(){se()}},o.a.createElement("i",{className:"fa fa-save"}),"\xa0 Save"),"\xa0",o.a.createElement(b.a,{color:"success",type:"submit"},o.a.createElement("i",{className:"fa fa-send"}),"\xa0 Submit")))))))))}},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},974:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,l=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(n=(r=c.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(s){l=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return l}))},990:function(e,a,t){}}]);
//# sourceMappingURL=94.0dec0bd8.chunk.js.map