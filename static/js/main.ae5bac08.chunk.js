(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=(n(44),n(11)),s=(n(45),n(30)),l=n.n(s),d=n(90),u=n(27),j=n.n(u),b=n(31),h=n(87),x=n(93),m=n(91),p=n(89),g=n(92),O=n(35),f=n.n(O),v=n(32),y=n.n(v),w=n(34),C=n(4),N=Object(h.a)({root:{minWidth:275,margin:"0px auto",maxWidth:"50%",position:"relative"},quote:{textAlign:"center",padding:"0.5em",marginTop:"1em",opacity:1,transition:"opacity 1s ease-in"},author:{display:"flex",justifyContent:"flex-end",marginRight:"20px"},footer:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:0},twitter:{margin:20,cursor:"pointer"},btn:{margin:10}});var q=function(e){console.log("this is card props",e);var t=N(),n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=(r[0],r[1],Object(a.useState)("")),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(a.useState)(""),h=Object(i.a)(u,2),O=h[0],v=h[1];function q(){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random");case 2:return t=e.sent,console.log("response is ",t),e.next=6,t.json();case 6:n=e.sent,a=n.content,r=n.author,l(a),v(r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return q()}),[]),Object(C.jsxs)(x.a,{className:t.root,id:"quote-box",children:[Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(d.a,{className:t.quote,variant:"h5",component:"h2",id:"text",gutterBottom:!0,children:[Object(C.jsx)(y.a,{path:w.a,size:2}),s]}),Object(C.jsx)("div",{className:t.author,children:Object(C.jsx)(d.a,{color:"textSecondary",id:"author",children:O})})]}),Object(C.jsxs)("div",{className:t.footer,children:[Object(C.jsx)("a",{href:"twitter.com/intent/tweet",id:"tweet-quote",target:"_blank",children:Object(C.jsx)(f.a,{size:"medium",className:t.twitter})}),Object(C.jsx)(m.a,{className:t.btnPosition,children:Object(C.jsx)(g.a,{onClick:function(){q(),console.log("index is",e.index),e.index!==e.maxIndex?e.setColor(e.colorsArray[e.index+1]):e.setColor(e.colorsArray[0])},className:t.btn,size:"small",variant:"outlined",id:"new-quote",children:"Get Quote"})})]})]})},S=["rgba(34, 167, 240, 0.4)","rgba(77, 19, 209, 0.4)","rgba(200, 247, 197, 0.6)","rgba(137, 196, 244, 0.6)","rgba(210, 215, 211, 0.6)","rgba(54, 215, 183, 0.6)"];var k=function(){var e=Object(a.useState)(S[0]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=S.indexOf(n),c=S.length-1;return Object(C.jsxs)("div",{style:{background:n,height:"100vh",transition:"background-color 1s ease-in"},children:[Object(C.jsx)(l.a,{}),Object(C.jsx)(d.a,{className:"page-header",variant:"h3",component:"h3",gutterBottom:!0,children:"Random Quote App"}),Object(C.jsx)("div",{className:"card-wrapper",children:Object(C.jsx)(q,{color:n,setColor:r,colorsArray:S,index:o,maxIndex:c})}),Object(C.jsx)(d.a,{color:"textSecondary",id:"signature",children:"by James"})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(k,{})}),document.getElementById("root")),A()}},[[67,1,2]]]);
//# sourceMappingURL=main.ae5bac08.chunk.js.map