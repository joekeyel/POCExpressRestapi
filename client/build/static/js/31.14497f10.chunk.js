(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{1082:function(e,a,l){"use strict";var t=l(40),c=l(104),m=l(3),s=l.n(m),r=l(103),o=l.n(r),n=l(879),b=l.n(n),i=l(880),d={tag:i.s,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},E=function(e){var a=e.className,l=e.cssModule,m=e.noGutters,r=e.tag,o=e.form,n=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(i.o)(b()(a,m?"no-gutters":null,o?"form-row":"row"),l);return s.a.createElement(r,Object(t.a)({},n,{className:d}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},1083:function(e,a,l){"use strict";var t=l(40),c=l(104),m=l(944),s=l.n(m),r=l(3),o=l.n(r),n=l(103),b=l.n(n),i=l(879),d=l.n(i),E=l(880),u=b.a.oneOfType([b.a.number,b.a.string]),x=b.a.oneOfType([b.a.bool,b.a.number,b.a.string,b.a.shape({size:b.a.oneOfType([b.a.bool,b.a.number,b.a.string]),order:u,offset:u})]),N={tag:E.s,xs:x,sm:x,md:x,lg:x,xl:x,className:b.a.string,cssModule:b.a.object,widths:b.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},k=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},p=function(e){var a=e.className,l=e.cssModule,m=e.widths,r=e.tag,n=Object(c.a)(e,["className","cssModule","widths","tag"]),b=[];m.forEach((function(a,t){var c=e[a];if(delete n[a],c||""===c){var m=!t;if(s()(c)){var r,o=m?"-":"-"+a+"-",i=k(m,a,c.size);b.push(Object(E.o)(d()(((r={})[i]=c.size||""===c.size,r["order"+o+c.order]=c.order||0===c.order,r["offset"+o+c.offset]=c.offset||0===c.offset,r)),l))}else{var u=k(m,a,c);b.push(u)}}})),b.length||b.push("col");var i=Object(E.o)(d()(a,b),l);return o.a.createElement(r,Object(t.a)({},n,{className:i}))};p.propTypes=N,p.defaultProps=g,a.a=p},1152:function(e,a,l){"use strict";var t=l(40),c=l(104),m=l(3),s=l.n(m),r=l(103),o=l.n(r),n=l(879),b=l.n(n),i=l(880),d={tag:i.s,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,m=e.innerRef,r=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),n=Object(i.o)(b()(a,"card-body"),l);return s.a.createElement(r,Object(t.a)({},o,{className:n,ref:m}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},1157:function(e,a,l){"use strict";var t=l(40),c=l(104),m=l(3),s=l.n(m),r=l(103),o=l.n(r),n=l(879),b=l.n(n),i=l(880),d={tag:i.s,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,m=e.color,r=e.body,o=e.inverse,n=e.outline,d=e.tag,E=e.innerRef,u=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),x=Object(i.o)(b()(a,"card",!!o&&"text-white",!!r&&"card-body",!!m&&(n?"border":"bg")+"-"+m),l);return s.a.createElement(d,Object(t.a)({},u,{className:x,ref:E}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},1161:function(e,a,l){"use strict";var t=l(40),c=l(104),m=l(3),s=l.n(m),r=l(103),o=l.n(r),n=l(879),b=l.n(n),i=l(880),d={tag:i.s,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,l=e.cssModule,m=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(i.o)(b()(a,"card-header"),l);return s.a.createElement(m,Object(t.a)({},r,{className:o}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},1179:function(e,a,l){"use strict";var t=l(40),c=l(104),m=l(929),s=l(67),r=l(3),o=l.n(r),n=l(103),b=l.n(n),i=l(879),d=l.n(i),E=l(880),u={active:b.a.bool,"aria-label":b.a.string,block:b.a.bool,color:b.a.string,disabled:b.a.bool,outline:b.a.bool,tag:E.s,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),onClick:b.a.func,size:b.a.string,children:b.a.node,className:b.a.string,cssModule:b.a.object,close:b.a.bool},x=function(e){function a(a){var l;return(l=e.call(this,a)||this).onClick=l.onClick.bind(Object(m.a)(l)),l}Object(s.a)(a,e);var l=a.prototype;return l.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},l.render=function(){var e=this.props,a=e.active,l=e["aria-label"],m=e.block,s=e.className,r=e.close,n=e.cssModule,b=e.color,i=e.outline,u=e.size,x=e.tag,N=e.innerRef,g=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var k="btn"+(i?"-outline":"")+"-"+b,p=Object(E.o)(d()(s,{close:r},r||"btn",r||k,!!u&&"btn-"+u,!!m&&"btn-block",{active:a,disabled:this.props.disabled}),n);g.href&&"button"===x&&(x="a");var f=r?"Close":null;return o.a.createElement(x,Object(t.a)({type:"button"===x&&g.onClick?"button":void 0},g,{className:p,ref:N,onClick:this.onClick,"aria-label":l||f}))},a}(o.a.Component);x.propTypes=u,x.defaultProps={color:"secondary",tag:"button"},a.a=x},1769:function(e,a,l){"use strict";l.r(a);var t=l(149),c=l(150),m=l(236),s=l(235),r=l(3),o=l.n(r),n=l(1157),b=l(1161),i=l(1152),d=l(1082),E=l(1083),u=l(1179),x=function(e){Object(m.a)(l,e);var a=Object(s.a)(l);function l(){return Object(t.a)(this,l),a.apply(this,arguments)}return Object(c.a)(l,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Standard Buttons")),o.a.createElement(i.a,null,o.a.createElement(d.a,{className:"align-items-center"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"primary"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"secondary"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"success"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"warning"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"danger"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"info"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"light"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"dark"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"link"},"Link"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"primary","aria-pressed":"true"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"secondary","aria-pressed":"true"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"success","aria-pressed":"true"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"warning","aria-pressed":"true"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"danger","aria-pressed":"true"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"info","aria-pressed":"true"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"light","aria-pressed":"true"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"dark","aria-pressed":"true"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"link","aria-pressed":"true"},"Link"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"primary",disabled:!0},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"secondary",disabled:!0},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"success",disabled:!0},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"warning",disabled:!0},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"danger",disabled:!0},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"info",disabled:!0},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"light",disabled:!0},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"dark",disabled:!0},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"link",disabled:!0},"Link"))))),o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Outline Buttons")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"outline")," prop"),o.a.createElement(d.a,{className:"align-items-center"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"primary"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"secondary"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"success"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"warning"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"danger"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"info"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"light"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"dark"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"primary","aria-pressed":"true"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"secondary","aria-pressed":"true"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"success","aria-pressed":"true"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"warning","aria-pressed":"true"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"danger","aria-pressed":"true"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"info","aria-pressed":"true"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"light","aria-pressed":"true"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,active:!0,color:"dark","aria-pressed":"true"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"primary",disabled:!0},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"secondary",disabled:!0},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"success",disabled:!0},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"warning",disabled:!0},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"danger",disabled:!0},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"info",disabled:!0},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"light",disabled:!0},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,outline:!0,color:"dark",disabled:!0},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})))),o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Ghost Buttons")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Use",o.a.createElement("code",null,".btn-ghost-*")," class for ghost buttons."),o.a.createElement(d.a,{className:"align-items-center"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-primary"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-secondary"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-success"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-warning"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-danger"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-info"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-light"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-dark"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-primary","aria-pressed":"true"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-secondary","aria-pressed":"true"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-success","aria-pressed":"true"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-warning","aria-pressed":"true"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-danger","aria-pressed":"true"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-info","aria-pressed":"true"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-light","aria-pressed":"true"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,active:!0,color:"ghost-dark","aria-pressed":"true"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-primary",disabled:!0},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-secondary",disabled:!0},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-success",disabled:!0},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-warning",disabled:!0},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-danger",disabled:!0},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-info",disabled:!0},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-light",disabled:!0},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"ghost-dark",disabled:!0},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})))),o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Square Buttons")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Use",o.a.createElement("code",null,".btn-square")," class for square buttons."),o.a.createElement(d.a,{className:"align-items-center"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"primary",className:"btn-square"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"secondary",className:"btn-square"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"success",className:"btn-square"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"warning",className:"btn-square"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"danger",className:"btn-square"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"info",className:"btn-square"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"light",className:"btn-square"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"dark",className:"btn-square"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"link",className:"btn-square"},"Link"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"primary",className:"btn-square","aria-pressed":"true"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"secondary",className:"btn-square","aria-pressed":"true"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"success",className:"btn-square","aria-pressed":"true"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"warning",className:"btn-square","aria-pressed":"true"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"danger",className:"btn-square","aria-pressed":"true"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"info",className:"btn-square","aria-pressed":"true"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"light",className:"btn-square","aria-pressed":"true"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"dark",className:"btn-square","aria-pressed":"true"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"link",className:"btn-square","aria-pressed":"true"},"Link"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"primary",className:"btn-square",disabled:!0},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"secondary",className:"btn-square",disabled:!0},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"success",className:"btn-square",disabled:!0},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"warning",className:"btn-square",disabled:!0},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"danger",className:"btn-square",disabled:!0},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"info",className:"btn-square",disabled:!0},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"light",className:"btn-square",disabled:!0},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"dark",className:"btn-square",disabled:!0},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"link",className:"btn-square",disabled:!0},"Link"))))),o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Pill Buttons")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Use",o.a.createElement("code",null,".btn-pill")," class for pill buttons."),o.a.createElement(d.a,{className:"align-items-center"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"primary",className:"btn-pill"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"secondary",className:"btn-pill"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"success",className:"btn-pill"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"warning",className:"btn-pill"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"danger",className:"btn-pill"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"info",className:"btn-pill"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"light",className:"btn-pill"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"dark",className:"btn-pill"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"link",className:"btn-pill"},"Link"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"primary",className:"btn-pill","aria-pressed":"true"},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"secondary",className:"btn-pill","aria-pressed":"true"},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"success",className:"btn-pill","aria-pressed":"true"},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"warning",className:"btn-pill","aria-pressed":"true"},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"danger",className:"btn-pill","aria-pressed":"true"},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"info",className:"btn-pill","aria-pressed":"true"},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"light",className:"btn-pill","aria-pressed":"true"},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"dark",className:"btn-pill","aria-pressed":"true"},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{active:!0,block:!0,color:"link",className:"btn-pill","aria-pressed":"true"},"Link"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"primary",className:"btn-pill",disabled:!0},"Primary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"secondary",className:"btn-pill",disabled:!0},"Secondary")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"success",className:"btn-pill",disabled:!0},"Success")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"warning",className:"btn-pill",disabled:!0},"Warning")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"danger",className:"btn-pill",disabled:!0},"Danger")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"info",className:"btn-pill",disabled:!0},"Info")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"light",className:"btn-pill",disabled:!0},"Light")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"dark",className:"btn-pill",disabled:!0},"Dark")),o.a.createElement(E.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},o.a.createElement(u.a,{block:!0,color:"link",className:"btn-pill",disabled:!0},"Link"))))),o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Sizes")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Fancy larger or smaller buttons? Add ",o.a.createElement("code",null,'size="lg"')," or ",o.a.createElement("code",null,'size="sm"')," for additional sizes."),o.a.createElement(d.a,{className:"align-items-center"},o.a.createElement(E.a,{col:"2",xl:!0,className:"mb-3 mb-xl-0"},"Small"),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"primary",size:"sm"},"Standard Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"secondary",outline:!0,size:"sm"},"Outline Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{size:"sm",color:"ghost-success"},"Ghost Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"warning",size:"sm",className:"btn-square"},"Square Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"danger",size:"sm",className:"btn-pill"},"Pill Button"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"2",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"primary"},"Standard Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{outline:!0,color:"secondary"},"Outline Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"ghost-success"},"Ghost Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"warning",className:"btn-square"},"Square Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"danger",className:"btn-pill"},"Pill Button"))),o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{col:"2",xl:!0,className:"mb-3 mb-xl-0"},"Large"),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"primary",size:"lg"},"Standard Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{outline:!0,color:"secondary",size:"lg"},"Outline Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"ghost-success",size:"lg"},"Ghost Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"warning",size:"lg",className:"btn-square"},"Square Button")),o.a.createElement(E.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},o.a.createElement(u.a,{color:"danger",size:"lg",className:"btn-pill"},"Pill Button"))))),o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"With Icons")),o.a.createElement(i.a,null,o.a.createElement(d.a,{className:"align-items-center mt-3"},o.a.createElement(E.a,{sm:!0,xs:"12",className:"text-center mt-3"},o.a.createElement(u.a,{color:"primary"},o.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Standard Button")),o.a.createElement(E.a,{sm:!0,xs:"12",className:"text-center mt-3"},o.a.createElement(u.a,{color:"secondary",outline:!0},o.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Outline Button")),o.a.createElement(E.a,{sm:!0,xs:"12",className:"text-center mt-3"},o.a.createElement(u.a,{color:"ghost-success"},o.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Ghost Button")),o.a.createElement(E.a,{sm:!0,xs:"12",className:"text-center mt-3"},o.a.createElement(u.a,{color:"warning",className:"btn-square"},o.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Square Button")),o.a.createElement(E.a,{sm:!0,xs:"12",className:"text-center mt-3"},o.a.createElement(u.a,{color:"danger",className:"btn-pill"},o.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Pill Button"))))),o.a.createElement(d.a,null,o.a.createElement(E.a,{xs:"12",md:"6"},o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Block Level Buttons")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Add prop ",o.a.createElement("code",null,"block")),o.a.createElement(u.a,{color:"secondary",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"primary",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"success",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"info",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"warning",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"danger",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"link",size:"lg",block:!0},"Block level button")))),o.a.createElement(E.a,{xs:"12",md:"6"},o.a.createElement(n.a,null,o.a.createElement(b.a,null,o.a.createElement("strong",null,"Block Level Buttons")),o.a.createElement(i.a,null,o.a.createElement("p",null,"Add prop ",o.a.createElement("code",null,"block")),o.a.createElement(u.a,{outline:!0,color:"secondary",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{outline:!0,color:"primary",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{outline:!0,color:"success",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{outline:!0,color:"info",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{outline:!0,color:"warning",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{outline:!0,color:"danger",size:"lg",block:!0},"Block level button"),o.a.createElement(u.a,{color:"ghost-info",size:"lg",block:!0},"Block level button"))))))}}]),l}(r.Component);a.default=x},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}}}]);
//# sourceMappingURL=31.14497f10.chunk.js.map