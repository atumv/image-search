(this["webpackJsonpimage-search-app"]=this["webpackJsonpimage-search-app"]||[]).push([[0],{41:function(e,t,a){e.exports=a(58)},53:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(19),i=a(3),m=a(33),l=a(16),u=a.n(l),p=a(24),f=a(17),g=function(e){var t=e.getImages,a=Object(n.useRef)();return Object(n.useEffect)((function(){return a.current.focus()})),r.a.createElement("form",{className:"form",onSubmit:t},r.a.createElement("input",{className:"form-input",type:"text",name:"query",placeholder:"type here",ref:a}))},d=a(37),v=a.n(d),b=function(e){return r.a.createElement(v.a,{pageStart:0,loadMore:e.loadMore,hasMore:!0,threshold:1100,initialLoad:!1},e.children)},E=function(e){var t=e.images,a=e.loadMore;return r.a.createElement(b,{loadMore:a},r.a.createElement("div",{className:"image-list"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.b,{to:{pathname:"/image/".concat(e.id),state:{image:e}}},r.a.createElement("img",{className:"img-thumb",src:e.previewURL,alt:e.tags})))}))))},h=function(e){var t=e.error;return r.a.createElement("p",{className:"error"},t)},w=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=(a(53),function(){var e=Object(n.useState)("16587840-38253a67588d5082167fb10f6"),t=Object(f.a)(e,1)[0],a=Object(n.useState)("https://pixabay.com/api/?orientation=horizontal&per_page=120"),c=Object(f.a)(a,1)[0],o=Object(n.useState)([]),s=Object(f.a)(o,2),i=s[0],l=s[1],d=Object(n.useState)(1),v=Object(f.a)(d,2),b=v[0],j=v[1],O=Object(n.useState)(void 0),x=Object(f.a)(O,2),y=x[0],N=x[1],k=Object(n.useState)(void 0),L=Object(f.a)(k,2),S=L[0],I=L[1],M=function(){var e=Object(p.a)(u.a.mark((function e(a){var n,r,o,s,i,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements.query.value,r=n.trim(),o="".concat(c,"&key=").concat(t,"&q=").concat(r,"&page=1"),e.next=6,w(o);case 6:s=e.sent,i=s.total,m=s.hits,r?i?i&&(N(r),l(m),I(void 0)):(l([]),I("No images were found.")):(l([]),I(void 0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(u.a.mark((function e(){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(c,"&key=").concat(t,"&q=").concat(y,"&page=").concat(b+1),e.next=3,w(a);case 3:n=e.sent,r=n.hits,l([].concat(Object(m.a)(i),Object(m.a)(r))),j(1===b?3:b+1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(g,{getImages:M}),r.a.createElement(E,{images:i,loadMore:R}),r.a.createElement(h,{error:S}))}),O=function(e){var t=e.image;return r.a.createElement("img",{className:"img-preview",src:t.webformatURL,alt:t.tags})},x=function(e){var t=e.image;return r.a.createElement("div",null,t.userImageURL&&r.a.createElement("img",{className:"user-image",src:t.userImageURL,alt:"user-image"}),r.a.createElement("h4",{className:"credit"},"by\xa0",r.a.createElement("a",{className:"profile-link",href:"http://pixabay.com/users/".concat(t.user,"-").concat(t.user_id)},t.user)))},y=a(74),N=a(38),k=a.n(N),L=function(e){var t=e.image;return r.a.createElement("a",{className:"download-link",href:t.largeImageURL,target:"_blank"},r.a.createElement(y.a,{variant:"contained",color:"default",size:"large",style:{textTransform:"none",fontWeight:"bold"},startIcon:r.a.createElement(k.a,null)},"Download"))},S=function(){return r.a.createElement("button",{className:"back-btn"},r.a.createElement("svg",{className:"back-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},r.a.createElement("path",{d:"M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z"})))},I=function(e){var t=e.location.state.image;return r.a.createElement("div",{className:"image-view-container"},r.a.createElement("div",{className:"image-view"},r.a.createElement(O,{image:t}),r.a.createElement(x,{image:t}),r.a.createElement(L,{image:t}),r.a.createElement(s.b,{to:"/"},r.a.createElement(S,null))))};o.a.render(r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:j}),r.a.createElement(i.a,{path:"/image/:id",component:I}))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.eb8914fa.chunk.js.map