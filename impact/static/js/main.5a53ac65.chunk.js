(this.webpackJsonpimpact=this.webpackJsonpimpact||[]).push([[0],{28:function(t,e,a){},29:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(0),s=a.n(c),i=a(17),l=a.n(i),r=(a(28),a(29),a(15)),d=a(12),h=a(18),j=a(19),o=a(22),u=a(21),b=a(2);var O=function(t){var e=Object(b.f)(),a=t.data,c=a.name,s=a.Image,i=a.id;return Object(n.jsxs)("div",{className:"candidate",id:i,children:[Object(n.jsx)("img",{alt:c,src:s,onClick:function(){t.updateSingleData(t.data),e.push("/impact"+t.data.id)}}),Object(n.jsx)("div",{children:c}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){var e=t.data.id,a=t.handleShortlist;a(e)},children:"Shortlist"}),Object(n.jsx)("button",{onClick:function(){var e=t.data.id,a=t.handleRejected;a(e)},children:"Reject"})]})]})},x=a(8);var p=function(t){var e=t.list,a=t.statusList,c=e.filter((function(t){return a.includes(t.id)}));return c.length?c.map((function(t,e){return Object(n.jsxs)("div",{className:"candidate-status",id:t.id,children:[Object(n.jsx)("img",{alt:t.name,src:t.Image}),Object(n.jsx)("div",{children:t.name})]},e)})):null},m=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={list:[],shortlisted:[],rejected:[],search:"",singleData:{}},t.handleChange=function(e){var a,n=e.target.value,c=e.target.name,s=t.state.list.filter((function(t){return t.name.indexOf(n)>0}));t.setState((a={},Object(d.a)(a,c,n),Object(d.a)(a,"list",s),a))},t.handleShortlist=function(e){var a=[].concat(Object(r.a)(t.state.shortlisted),[e]);t.setState({shortlisted:a})},t.handleRejected=function(e){var a=[].concat(Object(r.a)(t.state.rejected),[e]);t.setState({rejected:a})},t.updateSingleData=function(e){t.setState({singleData:e})},t}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(t){return t.json()})).then((function(e){return t.setState({list:e})}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.list,c=e.search,s=e.shortlisted,i=e.rejected,l=e.singleData;return Object(n.jsxs)(x.a,{children:[Object(n.jsxs)("div",{className:"status-btns",children:[Object(n.jsx)("button",{children:Object(n.jsx)(x.b,{to:"/impact",children:"Home"})}),Object(n.jsx)("button",{children:Object(n.jsx)(x.b,{to:"/shortlisted",children:"Shortlisted"})}),Object(n.jsx)("button",{children:Object(n.jsx)(x.b,{to:"/rejected",children:"Rejected"})})]}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/shortlisted",children:Object(n.jsx)("div",{className:"list-container",children:Object(n.jsx)(p,{list:a,statusList:s})})}),Object(n.jsx)(b.a,{path:"/rejected",children:Object(n.jsx)("div",{className:"list-container",children:Object(n.jsx)(p,{list:a,statusList:i})})}),Object(n.jsx)(b.a,{path:"/impact/:id",children:Object(n.jsx)(O,{data:l,handleShortlist:this.handleShortlist,handleRejected:this.handleRejected})}),Object(n.jsxs)(b.a,{path:"/impact",children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"search",value:c,name:"search",onChange:this.handleChange,placeholder:"search candidate"})}),Object(n.jsx)("div",{className:"list-container",children:a.length?a.map((function(e,a){return Object(n.jsx)(O,{data:e,handleShortlist:t.handleShortlist,handleRejected:t.handleRejected,updateSingleData:t.updateSingleData},a)})):null})]}),Object(n.jsxs)(b.a,{path:"/",children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"search",value:c,name:"search",onChange:this.handleChange,placeholder:"search candidate"})}),Object(n.jsx)("div",{className:"list-container",children:a.length?a.map((function(e,a){return Object(n.jsx)(O,{data:e,handleShortlist:t.handleShortlist,handleRejected:t.handleRejected,updateSingleData:t.updateSingleData},a)})):null})]})]})]})}}]),a}(s.a.Component);var v=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m,{})})},f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),s(t),i(t)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.5a53ac65.chunk.js.map