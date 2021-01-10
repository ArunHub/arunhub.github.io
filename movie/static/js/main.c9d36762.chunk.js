(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),r=c(18),s=c.n(r),j=(c(25),c(26),c(11)),l=c(8),o=c(2),d=c(12);function b(e){var t=e.data,c=e.isFavourite,a=Object(i.useState)(!1),r=Object(l.a)(a,2),s=r[0],b=r[1],h=Object(o.f)();return Object(n.jsxs)("div",{className:"movie-card",children:[c?Object(n.jsxs)("div",{className:"favorites",children:[Object(n.jsx)("label",{htmlFor:"fav",children:"Favourites"}),Object(n.jsx)("input",{id:"fav",type:"checkbox",checked:s,onChange:function(e){var c=e.target.checked;if(b(c),c){var n=JSON.parse(localStorage.getItem("favorites"));null!==n?localStorage.setItem("favorites",JSON.stringify(Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},t.Title,t)))):localStorage.setItem("favorites",JSON.stringify(Object(d.a)({},t.Title,t)))}else{var i=JSON.parse(localStorage.getItem("favorites"));i&&delete i[t.Title]}}})]}):null,c?Object(n.jsx)("img",{onClick:function(){h.push("/".concat(t.imdbID))},src:t.Poster,alt:t.Title}):Object(n.jsx)("img",{src:t.Poster,alt:t.Title}),Object(n.jsxs)("div",{children:["Movie title: ",t.Title]}),Object(n.jsxs)("div",{children:["Release Date: ",t.Year]}),Object(n.jsxs)("div",{children:["Type: ",t.Type]})]})}var h=function(e){var t="http://www.omdbapi.com/?apikey=992b2990&";return t+=function(e){var t=[];for(var c in e)e.hasOwnProperty(c)&&t.push(encodeURIComponent(c)+"="+encodeURIComponent(e[c]));return t.join("&")}(e)};function u(e){var t=Object(o.f)(),c=Object(i.useState)([]),a=Object(l.a)(c,2),r=a[0],s=a[1],d=Object(i.useState)(""),u=Object(l.a)(d,2),O=u[0],v=u[1],x=Object(i.useState)("all"),f=Object(l.a)(x,2),p=f[0],m=f[1],g=Object(i.useState)(""),S=Object(l.a)(g,2),I=(S[0],S[1]),N=Object(o.g)().imdbId,T=function(t){e.handleImgClick(t)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("input",{type:"search",onChange:function(e){var t=e.target.value;v(t)},placeholder:"Search here",value:O}),Object(n.jsxs)("select",{value:p,onChange:function(e){var t=e.target.value;m(t)},children:[Object(n.jsx)("option",{value:"all",children:"all"}),Object(n.jsx)("option",{value:"movie",children:"movies"}),Object(n.jsx)("option",{value:"series",children:"series"}),Object(n.jsx)("option",{value:"episode",children:"episode"})]}),Object(n.jsx)("button",{onClick:function(){(function(e){return fetch(e).then((function(e){return e.json()}))})(h(Object(j.a)({s:O},"all"!==p?{type:p}:{}))).then((function(e){if("False"===e.Response)throw new Error(e.Error);s(e.Search),t.push("/list")})).catch((function(e){I(e.message)}))},children:"Search"})]}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/list",render:function(){r.length&&r.map((function(e,t){return Object(n.jsx)(b,{data:e,isFavourite:!0,handleImgClick:T},t)}))}}),Object(n.jsx)(o.a,{path:"/:imdbId",children:function(){var e=r.find((function(e){return e.imdbId===N}));return Object(n.jsx)("div",{children:Object(n.jsx)(b,{data:e})})}}),Object(n.jsx)(o.a,{path:"/",children:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"No results found"})})}})]})]})}function O(e){var t=JSON.parse(localStorage.getItem("favorites"));return Object(n.jsx)("section",{className:"favorite-list",children:null!==t?Object.values(t).map((function(e,t){return Object(n.jsxs)("div",{className:"movie-card",children:[Object(n.jsx)("img",{src:e.Poster,alt:e.Title}),Object(n.jsxs)("div",{children:["Movie title: ",e.Title]}),Object(n.jsxs)("div",{children:["Release Date: ",e.Year]}),Object(n.jsxs)("div",{children:["Type: ",e.Type]})]},t)})):"No Favorites"})}var v=c(9);var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)("div",{className:"navbar",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(v.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(v.b,{to:"/favorites",children:"Favorites"})})]})}),Object(n.jsx)("main",{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/favorites",children:Object(n.jsx)(O,{})}),Object(n.jsx)(o.a,{path:"/",children:Object(n.jsx)(u,{})})]})})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.c9d36762.chunk.js.map