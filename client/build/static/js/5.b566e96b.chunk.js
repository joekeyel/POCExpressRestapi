(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{1160:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}},1472:function(e,t,n){"use strict";var o=n(40),r=n(104),i=n(929),a=n(67),s=n(3),c=n.n(s),p=n(103),l=n.n(p),u=n(1506),d=n(879),f=n.n(d),h=n(1511),v=n(880),m={disabled:l.a.bool,direction:l.a.oneOf(["up","down","left","right"]),group:l.a.bool,isOpen:l.a.bool,nav:l.a.bool,active:l.a.bool,addonType:l.a.oneOfType([l.a.bool,l.a.oneOf(["prepend","append"])]),size:l.a.string,tag:v.s,toggle:l.a.func,children:l.a.node,className:l.a.string,cssModule:l.a.object,inNavbar:l.a.bool,setActiveFromChild:l.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).addEvents=n.addEvents.bind(Object(i.a)(n)),n.handleDocumentClick=n.handleDocumentClick.bind(Object(i.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(i.a)(n)),n.removeEvents=n.removeEvents.bind(Object(i.a)(n)),n.toggle=n.toggle.bind(Object(i.a)(n)),n.containerRef=c.a.createRef(),n}Object(a.a)(t,e);var n=t.prototype;return n.getContextValue=function(){return{toggle:this.props.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar}},n.componentDidMount=function(){this.handleProps()},n.componentDidUpdate=function(e){this.props.isOpen!==e.isOpen&&this.handleProps()},n.componentWillUnmount=function(){this.removeEvents()},n.getContainer=function(){return this.containerRef.current},n.getMenuCtrl=function(){return this._$menuCtrl||(this._$menuCtrl=this.getContainer().querySelector("[aria-expanded]")),this._$menuCtrl},n.getMenuItems=function(){return[].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'))},n.addEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))},n.removeEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))},n.handleDocumentClick=function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===v.n.tab)){var t=this.getContainer();(!t.contains(e.target)||t===e.target||"keyup"===e.type&&e.which!==v.n.tab)&&this.toggle(e)}},n.handleKeyDown=function(e){var t=this;if(!(/input|textarea/i.test(e.target.tagName)||v.n.tab===e.which&&"menuitem"!==e.target.getAttribute("role"))&&(e.preventDefault(),!this.props.disabled&&(this.getMenuCtrl()===e.target&&!this.props.isOpen&&[v.n.space,v.n.enter,v.n.up,v.n.down].indexOf(e.which)>-1&&(this.toggle(e),setTimeout((function(){return t.getMenuItems()[0].focus()}))),this.props.isOpen&&"menuitem"===e.target.getAttribute("role"))))if([v.n.tab,v.n.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([v.n.space,v.n.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([v.n.down,v.n.up].indexOf(e.which)>-1||[v.n.n,v.n.p].indexOf(e.which)>-1&&e.ctrlKey){var n=this.getMenuItems(),o=n.indexOf(e.target);v.n.up===e.which||v.n.p===e.which&&e.ctrlKey?o=0!==o?o-1:n.length-1:(v.n.down===e.which||v.n.n===e.which&&e.ctrlKey)&&(o=o===n.length-1?0:o+1),n[o].focus()}else if(v.n.end===e.which){var r=this.getMenuItems();r[r.length-1].focus()}else if(v.n.home===e.which){this.getMenuItems()[0].focus()}else if(e.which>=48&&e.which<=90)for(var i=this.getMenuItems(),a=String.fromCharCode(e.which).toLowerCase(),s=0;s<i.length;s+=1){if((i[s].textContent&&i[s].textContent[0].toLowerCase())===a){i[s].focus();break}}},n.handleProps=function(){this.props.isOpen?this.addEvents():this.removeEvents()},n.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){var e,t,n=Object(v.p)(this.props,["toggle","disabled","inNavbar"]),i=n.className,a=n.cssModule,s=n.direction,p=n.isOpen,l=n.group,d=n.size,m=n.nav,b=n.setActiveFromChild,g=n.active,y=n.addonType,w=n.tag,O=Object(r.a)(n,["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","addonType","tag"]),x=w||(m?"li":"div"),C=!1;b&&c.a.Children.map(this.props.children[1].props.children,(function(e){e&&e.props.active&&(C=!0)}));var N=Object(v.o)(f()(i,"down"!==s&&"drop"+s,!(!m||!g)&&"active",!(!b||!C)&&"active",((e={})["input-group-"+y]=y,e["btn-group"]=l,e["btn-group-"+d]=!!d,e.dropdown=!l&&!y,e.show=p,e["nav-item"]=m,e)),a);return c.a.createElement(h.a.Provider,{value:this.getContextValue()},c.a.createElement(u.a,null,c.a.createElement(x,Object(o.a)({},O,((t={})["string"===typeof x?"ref":"innerRef"]=this.containerRef,t),{onKeyDown:this.handleKeyDown,className:N}))))},t}(c.a.Component);b.propTypes=m,b.defaultProps={isOpen:!1,direction:"down",nav:!1,active:!1,addonType:!1,inNavbar:!1,setActiveFromChild:!1},t.a=b},1506:function(e,t,n){"use strict";n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return k}));var o=n(1160),r=n.n(o),i=n(909),a=n.n(i),s=n(185),c=n.n(s),p=n(930),l=n.n(p),u=n(919),d=n.n(u),f=n(3),h=n(1530),v=n(1538),m=n.n(v)()({setReferenceNode:void 0,referenceNode:void 0}),b=function(e){function t(){var t;return t=e.call(this)||this,d()(l()(l()(t)),"setReferenceNode",(function(e){e&&t.state.context.referenceNode!==e&&t.setState((function(t){var n=t.context;return{context:a()({},n,{referenceNode:e})}}))})),t.state={context:{setReferenceNode:t.setReferenceNode,referenceNode:void 0}},t}return c()(t,e),t.prototype.render=function(){return f.createElement(m.Provider,{value:this.state.context},this.props.children)},t}(f.Component),g=function(e){return Array.isArray(e)?e[0]:e},y=function(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return e.apply(void 0,n)}},w={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"},O={},x=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,d()(l()(l()(t)),"state",{data:void 0,placement:void 0}),d()(l()(l()(t)),"popperInstance",void 0),d()(l()(l()(t)),"popperNode",null),d()(l()(l()(t)),"arrowNode",null),d()(l()(l()(t)),"setPopperNode",(function(e){e&&t.popperNode!==e&&(y(t.props.innerRef,e),t.popperNode=e,t.updatePopperInstance())})),d()(l()(l()(t)),"setArrowNode",(function(e){t.arrowNode=e})),d()(l()(l()(t)),"updateStateModifier",{enabled:!0,order:900,fn:function(e){var n=e.placement;return t.setState({data:e,placement:n}),e}}),d()(l()(l()(t)),"getOptions",(function(){return{placement:t.props.placement,eventsEnabled:t.props.eventsEnabled,positionFixed:t.props.positionFixed,modifiers:a()({},t.props.modifiers,{arrow:a()({},t.props.modifiers&&t.props.modifiers.arrow,{enabled:!!t.arrowNode,element:t.arrowNode}),applyStyle:{enabled:!1},updateStateModifier:t.updateStateModifier})}})),d()(l()(l()(t)),"getPopperStyle",(function(){return t.popperNode&&t.state.data?a()({position:t.state.data.offsets.popper.position},t.state.data.styles):w})),d()(l()(l()(t)),"getPopperPlacement",(function(){return t.state.data?t.state.placement:void 0})),d()(l()(l()(t)),"getArrowStyle",(function(){return t.arrowNode&&t.state.data?t.state.data.arrowStyles:O})),d()(l()(l()(t)),"getOutOfBoundariesState",(function(){return t.state.data?t.state.data.hide:void 0})),d()(l()(l()(t)),"destroyPopperInstance",(function(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)})),d()(l()(l()(t)),"updatePopperInstance",(function(){t.destroyPopperInstance();var e=l()(l()(t)).popperNode,n=t.props.referenceElement;n&&e&&(t.popperInstance=new h.a(n,e,t.getOptions()))})),d()(l()(l()(t)),"scheduleUpdate",(function(){t.popperInstance&&t.popperInstance.scheduleUpdate()})),t}c()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.placement!==e.placement||this.props.referenceElement!==e.referenceElement||this.props.positionFixed!==e.positionFixed?this.updatePopperInstance():this.props.eventsEnabled!==e.eventsEnabled&&this.popperInstance&&(this.props.eventsEnabled?this.popperInstance.enableEventListeners():this.popperInstance.disableEventListeners()),t.placement!==this.state.placement&&this.scheduleUpdate()},n.componentWillUnmount=function(){y(this.props.innerRef,null),this.destroyPopperInstance()},n.render=function(){return g(this.props.children)({ref:this.setPopperNode,style:this.getPopperStyle(),placement:this.getPopperPlacement(),outOfBoundaries:this.getOutOfBoundariesState(),scheduleUpdate:this.scheduleUpdate,arrowProps:{ref:this.setArrowNode,style:this.getArrowStyle()}})},t}(f.Component);d()(x,"defaultProps",{placement:"bottom",eventsEnabled:!0,referenceElement:void 0,positionFixed:!1});h.a.placements;function C(e){var t=e.referenceElement,n=r()(e,["referenceElement"]);return f.createElement(m.Consumer,null,(function(e){var o=e.referenceNode;return f.createElement(x,a()({referenceElement:void 0!==t?t:o},n))}))}var N=n(1542),E=n.n(N),j=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,d()(l()(l()(t)),"refHandler",(function(e){y(t.props.innerRef,e),y(t.props.setReferenceNode,e)})),t}return c()(t,e),t.prototype.render=function(){return E()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),g(this.props.children)({ref:this.refHandler})},t}(f.Component);function k(e){return f.createElement(m.Consumer,null,(function(t){var n=t.setReferenceNode;return f.createElement(j,a()({setReferenceNode:n},e))}))}},1511:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(3),r=n.n(o).a.createContext({})},1538:function(e,t,n){"use strict";t.__esModule=!0;var o=i(n(3)),r=i(n(1539));function i(e){return e&&e.__esModule?e:{default:e}}t.default=o.default.createContext||r.default,e.exports=t.default},1539:function(e,t,n){"use strict";t.__esModule=!0;var o=n(3),r=(a(o),a(n(103))),i=a(n(242));a(n(1540));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,o){e=n,t.forEach((function(t){return t(e,o)}))}}}t.default=function(e,t){var n,a,u="__create-react-context-"+(0,i.default)()+"__",d=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=c(this,e.call.apply(e,[this].concat(i))),o.emitter=l(o.props.value),c(o,t)}return p(n,e),n.prototype.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,o=e.value,r=void 0;((i=n)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?r=0:(r="function"===typeof t?t(n,o):1073741823,0!==(r|=0)&&this.emitter.set(e.value,r))}var i,a},n.prototype.render=function(){return this.props.children},n}(o.Component);d.childContextTypes=((n={})[u]=r.default.object.isRequired,n);var f=function(t){function n(){var e,o;s(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=o=c(this,t.call.apply(t,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(e,t){0!==((0|o.observedBits)&t)&&o.setState({value:o.getValue()})},c(o,e)}return p(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[u]?this.context[u].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return f.contextTypes=((a={})[u]=r.default.object,a),{Provider:d,Consumer:f}},e.exports=t.default},1540:function(e,t,n){"use strict";var o=n(1541);e.exports=o},1541:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},1542:function(e,t,n){"use strict";var o=function(){};e.exports=o},1750:function(e,t,n){"use strict";var o=n(40),r=n(104),i=n(929),a=n(67),s=n(3),c=n.n(s),p=n(103),l=n.n(p),u=n(879),d=n.n(u),f=n(1506),h=n(1511),v=n(880),m=n(1179),b={caret:l.a.bool,color:l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,disabled:l.a.bool,onClick:l.a.func,"aria-haspopup":l.a.bool,split:l.a.bool,tag:v.s,nav:l.a.bool},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.render=function(){var e,t=this,n=this.props,i=n.className,a=n.color,s=n.cssModule,p=n.caret,l=n.split,u=n.nav,h=n.tag,b=Object(r.a)(n,["className","color","cssModule","caret","split","nav","tag"]),g=b["aria-label"]||"Toggle Dropdown",y=Object(v.o)(d()(i,{"dropdown-toggle":p||l,"dropdown-toggle-split":l,"nav-link":u}),s),w=b.children||c.a.createElement("span",{className:"sr-only"},g);return u&&!h?(e="a",b.href="#"):h?e=h:(e=m.a,b.color=a,b.cssModule=s),this.context.inNavbar?c.a.createElement(e,Object(o.a)({},b,{className:y,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:w})):c.a.createElement(f.c,null,(function(n){var r,i=n.ref;return c.a.createElement(e,Object(o.a)({},b,((r={})["string"===typeof e?"ref":"innerRef"]=i,r),{className:y,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:w}))}))},t}(c.a.Component);g.propTypes=b,g.defaultProps={"aria-haspopup":!0,color:"secondary"},g.contextType=h.a,t.a=g},1751:function(e,t,n){"use strict";var o=n(40),r=n(1089),i=n(104),a=n(67),s=n(3),c=n.n(s),p=n(103),l=n.n(p),u=n(879),d=n.n(u),f=n(1506),h=n(1511),v=n(880),m={tag:v.s,children:l.a.node.isRequired,right:l.a.bool,flip:l.a.bool,modifiers:l.a.object,className:l.a.string,cssModule:l.a.object,persist:l.a.bool},b={flip:{enabled:!1}},g={up:"top",left:"left",right:"right",down:"bottom"},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,a=t.cssModule,s=t.right,p=t.tag,l=t.flip,u=t.modifiers,h=t.persist,m=Object(i.a)(t,["className","cssModule","right","tag","flip","modifiers","persist"]),y=Object(v.o)(d()(n,"dropdown-menu",{"dropdown-menu-right":s,show:this.context.isOpen}),a),w=p;if(h||this.context.isOpen&&!this.context.inNavbar){var O=(g[this.context.direction]||"bottom")+"-"+(s?"end":"start"),x=l?u:Object(r.a)({},u,b);return c.a.createElement(f.b,{placement:O,modifiers:x},(function(t){var n=t.ref,r=t.style,i=t.placement;return c.a.createElement(w,Object(o.a)({tabIndex:"-1",role:"menu",ref:n,style:r},m,{"aria-hidden":!e.context.isOpen,className:y,"x-placement":i}))}))}return c.a.createElement(w,Object(o.a)({tabIndex:"-1",role:"menu"},m,{"aria-hidden":!this.context.isOpen,className:y,"x-placement":m.placement}))},t}(c.a.Component);y.propTypes=m,y.defaultProps={tag:"div",flip:!0},y.contextType=h.a,t.a=y},1752:function(e,t,n){"use strict";var o=n(40),r=n(104),i=n(929),a=n(67),s=n(3),c=n.n(s),p=n(103),l=n.n(p),u=n(879),d=n.n(u),f=n(1511),h=n(880),v={children:l.a.node,active:l.a.bool,disabled:l.a.bool,divider:l.a.bool,tag:h.s,header:l.a.bool,onClick:l.a.func,className:l.a.string,cssModule:l.a.object,toggle:l.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n.getTabIndex=n.getTabIndex.bind(Object(i.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,n=Object(h.p)(this.props,["toggle"]),i=n.className,a=n.cssModule,s=n.divider,p=n.tag,l=n.header,u=n.active,f=Object(r.a)(n,["className","cssModule","divider","tag","header","active"]),v=Object(h.o)(d()(i,{disabled:f.disabled,"dropdown-item":!s&&!l,active:u,"dropdown-header":l,"dropdown-divider":s}),a);return"button"===p&&(l?p="h6":s?p="div":f.href&&(p="a")),c.a.createElement(p,Object(o.a)({type:"button"===p&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:e,role:t,className:v,onClick:this.onClick}))},t}(c.a.Component);m.propTypes=v,m.defaultProps={tag:"button",toggle:!0},m.contextType=f.a,t.a=m},909:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},919:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},930:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}}}]);
//# sourceMappingURL=5.b566e96b.chunk.js.map