(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[45],{1819:function(e,t,a){"use strict";a.r(t);var n=a(149),r=a(150),l=a(239),o=a(236),s=a(235),c=a(3),p=a.n(c),i=a(1179),m=a(40),u=a(879),g=a.n(u),v=a(1599),d=function(e){var t=g()("popover","show"),a=g()("popover-inner",e.innerClassName);return p.a.createElement(v.a,Object(m.a)({},e,{popperClassName:t,innerClassName:a}))};d.propTypes=v.b,d.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var b=d,h=a(104),f=a(103),E=a.n(f),O=a(880),j={tag:O.s,className:E.a.string,cssModule:E.a.object},N=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(h.a)(e,["className","cssModule","tag"]),l=Object(O.o)(g()(t,"popover-header"),a);return p.a.createElement(n,Object(m.a)({},r,{className:l}))};N.propTypes=j,N.defaultProps={tag:"h3"};var P=N,y={tag:O.s,className:E.a.string,cssModule:E.a.object},k=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(h.a)(e,["className","cssModule","tag"]),l=Object(O.o)(g()(t,"popover-body"),a);return p.a.createElement(n,Object(m.a)({},r,{className:l}))};k.propTypes=y,k.defaultProps={tag:"div"};var x=k,C=a(1157),q=a(1161),M=a(1152),T=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).toggle=r.toggle.bind(Object(l.a)(r)),r.state={popoverOpen:!1},r}return Object(r.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return p.a.createElement("span",null,p.a.createElement(i.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),p.a.createElement(b,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},p.a.createElement(P,null,"Popover Title"),p.a.createElement(x,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),a}(c.Component),S=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).toggle=r.toggle.bind(Object(l.a)(r)),r.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},r}return Object(r.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(C.a,null,p.a.createElement(q.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Popovers"),p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(M.a,null,p.a.createElement(i.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),p.a.createElement(b,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},p.a.createElement(P,null,"Popover Title"),p.a.createElement(x,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),p.a.createElement(C.a,null,p.a.createElement(q.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Popovers"),p.a.createElement("small",null," list")),p.a.createElement(M.a,null,this.state.popovers.map((function(e,t){return p.a.createElement(T,{key:t,item:e,id:t})})))))}}]),a}(c.Component);t.default=S}}]);
//# sourceMappingURL=45.cb6669bf.chunk.js.map