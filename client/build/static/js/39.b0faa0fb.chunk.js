(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[39],{1082:function(e,a,t){"use strict";var l=t(40),s=t(104),n=t(3),r=t.n(n),i=t(103),c=t.n(i),o=t(879),m=t.n(o),u=t(880),f={tag:u.s,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},d=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,c=e.form,o=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(u.o)(m()(a,n?"no-gutters":null,c?"form-row":"row"),t);return r.a.createElement(i,Object(l.a)({},o,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},1083:function(e,a,t){"use strict";var l=t(40),s=t(104),n=t(944),r=t.n(n),i=t(3),c=t.n(i),o=t(103),m=t.n(o),u=t(879),f=t.n(u),d=t(880),h=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:h,offset:h})]),g={tag:d.s,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},k=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach((function(a,l){var s=e[a];if(delete o[a],s||""===s){var n=!l;if(r()(s)){var i,c=n?"-":"-"+a+"-",u=b(n,a,s.size);m.push(Object(d.o)(f()(((i={})[u]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i)),t))}else{var h=b(n,a,s);m.push(h)}}})),m.length||m.push("col");var u=Object(d.o)(f()(a,m),t);return c.a.createElement(i,Object(l.a)({},o,{className:u}))};k.propTypes=g,k.defaultProps=E,a.a=k},1449:function(e,a,t){"use strict";var l=t(40),s=t(104),n=t(1089),r=t(3),i=t.n(r),c=t(103),o=t.n(c),m=t(879),u=t.n(m),f=t(1444),d=t(880),h=Object(n.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.s,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,c=e.cssModule,o=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.q)(h,d.c),g=Object(d.p)(h,d.c);return i.a.createElement(f.Transition,p,(function(e){var s="entered"===e,f=Object(d.o)(u()(r,t,s&&n),c);return i.a.createElement(a,Object(l.a)({className:f},g,{ref:m}),o)}))}g.propTypes=h,g.defaultProps=p,a.a=g},1589:function(e,a,t){"use strict";var l=t(40),s=t(104),n=t(1089),r=t(3),i=t.n(r),c=t(103),o=t.n(c),m=t(879),u=t.n(m),f=t(880),d=t(1449),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.s,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},d.a.defaultProps,{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,p=e.toggle,g=e.children,E=e.transition,b=e.fade,k=e.innerRef,y=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(f.o)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),c),N=Object(f.o)(u()("close",t),c),O=Object(n.a)({},d.a.defaultProps,E,{baseClass:b?E.baseClass:"",timeout:b?E.timeout:0});return i.a.createElement(d.a,Object(l.a)({},y,O,{tag:o,className:v,in:h,role:"alert",innerRef:k}),p?i.a.createElement("button",{type:"button",className:N,"aria-label":r,onClick:p},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=h,g.defaultProps=p,a.a=g},1774:function(e,a,t){"use strict";t.r(a);var l=t(149),s=t(150),n=t(239),r=t(236),i=t(235),c=t(3),o=t.n(c),m=t(1082),u=t(1083),f=t(1157),d=t(1161),h=t(1152),p=t(1589),g=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={visible:!0},s.onDismiss=s.onDismiss.bind(Object(n.a)(s)),s}return Object(s.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),o.a.createElement(p.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),o.a.createElement(p.a,{color:"success"},"This is a success alert \u2014 check it out!"),o.a.createElement(p.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),o.a.createElement(p.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),o.a.createElement(p.a,{color:"info"},"This is a info alert \u2014 check it out!"),o.a.createElement(p.a,{color:"light"},"This is a light alert \u2014 check it out!"),o.a.createElement(p.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null," use ",o.a.createElement("code",null,".alert-link")," to provide links")),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"primary"},"This is a primary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"secondary"},"This is a secondary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"success"},"This is a success alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"danger"},"This is a danger alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"warning"},"This is a warning alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"info"},"This is a info alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"light"},"This is a light alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"dark"},"This is a dark alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"additional content")),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"success"},o.a.createElement("h4",{className:"alert-heading"},"Well done!"),o.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),o.a.createElement("hr",null),o.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"dismissing")),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(c.Component);a.default=g},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}}}]);
//# sourceMappingURL=39.b0faa0fb.chunk.js.map