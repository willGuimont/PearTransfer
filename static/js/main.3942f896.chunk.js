(this["webpackJsonppear-transfer"]=this["webpackJsonppear-transfer"]||[]).push([[0],{167:function(e,n,t){},168:function(e,n,t){},175:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=175},183:function(e,n){},185:function(e,n){},196:function(e,n){},198:function(e,n){},225:function(e,n){},227:function(e,n){},228:function(e,n){},233:function(e,n){},235:function(e,n){},24:function(e,n,t){e.exports={appLogo:"Transfer_appLogo__XzSHE",transfer:"Transfer_transfer__1iUHv",pearInput:"Transfer_pearInput__1nng2",pearButtonContainer:"Transfer_pearButtonContainer__gd0Mx",connectContainer:"Transfer_connectContainer__Jy0ax",files:"Transfer_files__3fk41",filesUpload:"Transfer_filesUpload__2DQZw",filesList:"Transfer_filesList__3yfkB"}},241:function(e,n){},243:function(e,n){},262:function(e,n){},274:function(e,n){},277:function(e,n){},291:function(e,n,t){"use strict";t.r(n);var c,r=t(0),a=t.n(r),i=t(21),o=t.n(i),s=(t(167),t(44)),l=t(9),j=(t(168),t(91)),u=t.n(j),d=t(149),f=t(64),b=t(34),h=t(92),p=t(63),O=t(151),x=t.n(O),m=t(152),v=t.n(m),_=new Map;function w(e,n){var t=e.peer;e.on("data",(function(e){return function(e,n){var t=new Blob([e.file],{type:e.filetype}),c=URL.createObjectURL(t),r=e.filename,a=new C(r,c);n(U(a))}(e,n)})),e.on("open",(function(){})),_.set(t,e),n(L(t))}function g(e){var n=function(){var e=v.a.generate({length:5,charset:"alphanumeric",capitalization:"uppercase",readable:!0});return"Pear-".concat(e)}();(c=new x.a(n,{secure:!0})).on("open",(function(n){e(B(n))})),c.on("connection",(function(n){w(n,e)})),c.on("close",(function(){e(S())}))}var y=t(317),C=function e(n,t){Object(h.a)(this,e),this.name=void 0,this.url=void 0,this.name=n,this.url=t},T=function e(n,t,c){Object(h.a)(this,e),this.id=void 0,this.name=void 0,this.url=void 0,this.id=n,this.name=t,this.url=c},N=Object(p.b)({name:"counter",initialState:{id:"",connections:[],files:[]},reducers:{setId:function(e,n){e.id=n.payload},newConnection:function(e,n){e.connections.push(n.payload)},disconnect:function(e){e.connections=[],e.id=""},addFile:function(e,n){var t=n.payload,c=Object(y.a)(),r=new T(c,t.name,t.url);e.files.push(r)}}}),k=N.actions,B=k.setId,L=k.newConnection,S=k.disconnect,U=k.addFile,A=function(e){return function(n){return function(e,n){void 0!=c&&w(c.connect(e),n)}(e,n)}},P=function(e,n){return function(t){return function(e,n,t){e.map((function(e){var t=_.get(e);void 0!=t&&t.send({file:n,filename:n.name,filetype:n.type})}))}(e,n)}},I=function(e){return e.transfer.id},E=function(e){return e.transfer.connections},F=function(e){return e.transfer.files},M=N.reducer,R=t(24),H=t.n(R),D=t(316),G=t(153),J=t(2);function z(){var e=Object(b.c)(I),n=Object(b.c)(E),t=Object(b.c)(F),c=Object(b.b)(),a=Object(r.useState)(""),i=Object(f.a)(a,2),o=i[0],s=i[1],j=Object(l.f)().search,h=new URLSearchParams(j).get("id"),p=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=t&&null!=(r=t.item(0))&&c(P(n,r));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){""===e&&(c((function(e){return g(e)})),setTimeout((function(){null!=h&&c(A(h))}),1e3))})),Object(J.jsxs)("div",{className:H.a.transfer,children:[Object(J.jsx)("img",{src:"/PearTransfer/pear2pear.webp",className:H.a.appLogo,alt:"logo"}),Object(J.jsx)("h2",{children:"Pear transfer"}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("div",{children:["Your pear id: ",Object(J.jsx)("b",{children:e})]}),Object(J.jsxs)("div",{className:H.a.connectContainer,children:[Object(J.jsx)("input",{type:"text",placeholder:"Add a pear",onChange:function(e){return s(e.target.value)},className:H.a.pearInput}),Object(J.jsx)("div",{className:H.a.pearButtonContainer,children:Object(J.jsx)(D.a,{variant:"contained",color:"primary",onClick:function(e){return c(A(o))},children:"Connect"})})]}),Object(J.jsx)("div",{className:H.a.pearButtonContainer,children:Object(J.jsx)(G.CopyToClipboard,{text:window.location.href+"?id=".concat(e),children:Object(J.jsx)(D.a,{variant:"contained",color:"primary",className:H.a.pearButtonContainer,children:"Get sharable link"})})}),Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:"Connected to:"}),n.map((function(e,n){return Object(J.jsx)("div",{children:Object(J.jsx)("b",{children:e})},n)}))]}),Object(J.jsx)("br",{}),Object(J.jsx)("h2",{children:"Files"}),Object(J.jsxs)("div",{className:H.a.files,children:[Object(J.jsx)("div",{className:H.a.filesUpload,children:Object(J.jsxs)("label",{children:["File upload",Object(J.jsx)("br",{}),Object(J.jsx)("input",{type:"file",onChange:function(e){return p(e.target.files)}})]})}),Object(J.jsxs)("div",{className:H.a.filesList,children:[Object(J.jsx)("div",{children:"Received files"}),t.map((function(e,n){return Object(J.jsx)("div",{children:Object(J.jsx)("a",{href:e.url,download:e.name,children:e.name})},e.id)}))]})]}),Object(J.jsx)("br",{})]})]})}var W=t(319),K=t(159),Q=Object(W.a)(Object(K.a)({palette:{type:"dark",primary:{main:"#849719"},secondary:{main:"#fdd186"}}})),X=t(311),Y=t(94),Z=t.n(Y),$=t(318);function q(){var e=a.a.useState(!1),n=Object(f.a)(e,2),t=n[0],c=n[1];return Object(J.jsx)(X.a,{theme:Q,children:Object(J.jsxs)("div",{className:Z.a.about,children:[Object(J.jsx)("h1",{children:"\ud83c\udf50 PearTransfer \ud83c\udf50"}),Object(J.jsx)("p",{children:"The pear-to-pear files transfer app!"}),Object(J.jsxs)(D.a,{onClick:function(){c((function(e){return!e}))},variant:"contained",color:"primary",children:[t?"Hide":"Show"," Special Thanks"]}),Object(J.jsxs)($.a,{in:t,className:Z.a.thanks,children:[Object(J.jsxs)("p",{children:[Object(J.jsx)("b",{children:"Theme idea"}),": Alejandro Khabarov"]}),Object(J.jsxs)("p",{children:[Object(J.jsx)("b",{children:"Logo"}),": Simon Cardinal"]})]})]})})}var V=t(312),ee=t(313),ne=t(320),te=t(314),ce=t(315),re=Object(V.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},titleButton:{textTransform:"none"}}}));var ae=function(){var e=re();return Object(J.jsx)("div",{children:Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(X.a,{theme:Q,children:Object(J.jsx)(ee.a,{children:Object(J.jsxs)(s.a,{basename:"/PearTransfer",children:[Object(J.jsx)(ne.a,{position:"static",children:Object(J.jsxs)(te.a,{children:[Object(J.jsx)(s.b,{to:"/",className:e.title,children:Object(J.jsx)(D.a,{className:e.titleButton,children:Object(J.jsx)(ce.a,{variant:"h6",children:"Pear Transfer"})})}),Object(J.jsx)(s.b,{to:"/",children:Object(J.jsx)(D.a,{children:"Home"})}),Object(J.jsx)(s.b,{to:"/about",children:Object(J.jsx)(D.a,{children:"About"})})]})}),Object(J.jsxs)(l.c,{children:[Object(J.jsx)(l.a,{path:"/about",children:Object(J.jsx)(q,{})}),Object(J.jsx)(l.a,{path:"/",children:Object(J.jsx)(z,{})})]})]})})})})})},ie=Object(p.a)({reducer:{transfer:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(290);o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(b.a,{store:ie,children:Object(J.jsx)(ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,n,t){e.exports={about:"About_about__1A6NA",thanks:"About_thanks__cTlgL"}}},[[291,1,2]]]);
//# sourceMappingURL=main.3942f896.chunk.js.map