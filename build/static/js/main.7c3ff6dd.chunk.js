(this["webpackJsonpour-data"]=this["webpackJsonpour-data"]||[]).push([[0],{16:function(e,n,t){e.exports={peerId:"Transfer_peerId__1kcQP"}},21:function(e,n,t){},29:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=29},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var c,o=t(0),r=t.n(o),i=t(4),a=t.n(i),s=(t(21),t(8)),u=t.n(s),l=t(13),d=t(12),f=t(3),j=t(11),b=t(5),h=t(15),p=t.n(h),O=new Map;function v(e,n){console.log("Registering ".concat(e.peer));var t=e.peer;e.on("data",(function(e){return function(e,n){console.log("Received data ".concat(e));var t=new Blob([e.file],{type:e.filetype}),c=URL.createObjectURL(t),o=e.filename,r=new m(o,c);n(I(r))}(e,n)})),e.on("open",(function(){console.log("New connection opened")})),O.set(t,e),n(C(t))}var x=t(34),m=function e(n,t){Object(j.a)(this,e),this.name=void 0,this.url=void 0,this.name=n,this.url=t},w=function e(n,t,c){Object(j.a)(this,e),this.id=void 0,this.name=void 0,this.url=void 0,this.id=n,this.name=t,this.url=c},g=Object(b.b)({name:"counter",initialState:{id:"",connections:[],files:[]},reducers:{setId:function(e,n){e.id=n.payload},newConnection:function(e,n){e.connections.push(n.payload)},disconnect:function(e){e.connections=[],e.id=""},addFile:function(e,n){var t=n.payload,c=Object(x.a)(),o=new w(c,t.name,t.url);e.files.push(o)}}}),y=g.actions,k=y.setId,C=y.newConnection,N=y.disconnect,I=y.addFile,F=function(){return function(e){return function(e){console.log("New peer"),(c=new p.a).on("open",(function(n){e(k(n))})),c.on("connection",(function(n){v(n,e)})),c.on("close",(function(){e(N())}))}(e)}},S=function(e){return function(n){return function(e,n){if(void 0!=c){var t=c.connect(e);console.log("Connecting to ".concat(e)),v(t,n)}}(e,n)}},_=function(e,n){return function(t){return function(e,n,t){e.map((function(e){var t=O.get(e);void 0!=t&&(console.log("Sending file ".concat(n.name," to ").concat(e)),t.send({file:n,filename:n.name,filetype:n.type}))}))}(e,n)}},P=function(e){return e.transfer.id},R=function(e){return e.transfer.connections},U=function(e){return e.transfer.files},B=g.reducer,E=t(16),L=t.n(E),M=t(1);function T(){var e=Object(f.c)(P),n=Object(f.c)(R),t=Object(f.c)(U),c=Object(f.b)(),r=Object(o.useState)(""),i=Object(d.a)(r,2),a=i[0],s=i[1],j=Object(o.useState)(""),b=Object(d.a)(j,2),h=(b[0],b[1],function(){var e=Object(l.a)(u.a.mark((function e(t){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=t&&null!=(o=t.item(0))&&c(_(n,o));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());return Object(M.jsxs)("div",{children:["Test ",Object(M.jsx)("br",{}),"Peer id:",Object(M.jsxs)("div",{className:L.a.peerId,children:[e||"Please click to create Peer",Object(M.jsx)("br",{}),Object(M.jsx)("button",{onClick:function(){return c(F())},children:"Create peer"}),Object(M.jsx)("br",{}),Object(M.jsx)("input",{type:"text",placeholder:"Other person's id",onChange:function(e){return s(e.target.value)}}),Object(M.jsx)("br",{}),Object(M.jsx)("button",{onClick:function(e){return c(S(a))},children:"Connect"}),Object(M.jsx)("br",{}),n.map((function(e,n){return Object(M.jsx)("div",{children:e},n)})),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsxs)("label",{children:["File:",Object(M.jsx)("input",{type:"file",onChange:function(e){return h(e.target.files)}})]}),Object(M.jsx)("br",{}),Object(M.jsx)("p",{children:"Files"}),Object(M.jsx)("br",{}),t.map((function(e,n){return Object(M.jsx)("div",{children:Object(M.jsx)("a",{href:e.url,download:e.name,children:e.name})},e.id)}))]})]})}t(31);var A=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)("header",{className:"App-header",children:Object(M.jsx)(T,{})})})},D=Object(b.a)({reducer:{transfer:B}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(f.a,{store:D,children:Object(M.jsx)(A,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7c3ff6dd.chunk.js.map