(this.webpackJsonpsocialhub=this.webpackJsonpsocialhub||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c,i,a,s,j,r,o,l=n(2),b=n.n(l),h=n(25),d=n.n(h),x=(n(37),n(38),n(18)),O=n(9),u=n(10),p=n(12),m=n(13),f=n(17),g=n(8),v=n(11),k=n(1),N=[{title:"Home",path:"/home",icon:Object(k.jsx)(f.a,{}),iconClosed:Object(k.jsx)(v.a,{}),iconOpened:Object(k.jsx)(v.b,{}),subNav:[{title:"Benutzer",path:"/home/users",icon:Object(k.jsx)(g.c,{})},{title:"API-Token",path:"/home/apitoken",icon:Object(k.jsx)(g.c,{})},{title:"Test",path:"/home/test",icon:Object(k.jsx)(g.c,{})}]},{title:"Telegram",path:"/telegram/main",icon:Object(k.jsx)(m.d,{}),iconClosed:Object(k.jsx)(v.a,{}),iconOpened:Object(k.jsx)(v.b,{}),subNav:[{title:"Gesendet",path:"/telegram/send",icon:Object(k.jsx)(g.c,{}),cName:"sub-nav"},{title:"Empfangen",path:"/telegram/received",icon:Object(k.jsx)(g.c,{}),cName:"sub-nav"},{title:"L\xf6schen",path:"/telegram/deleted",icon:Object(k.jsx)(g.c,{})}]},{title:"Whatsapp",path:"/whatsapp",icon:Object(k.jsx)(m.e,{}),iconClosed:Object(k.jsx)(v.a,{}),iconOpened:Object(k.jsx)(v.b,{}),subNav:[{title:"Gesendet",path:"/whatsapp/send",icon:Object(k.jsx)(g.a,{})},{title:"Empfangen",path:"/whatsapp/received",icon:Object(k.jsx)(g.b,{})}]},{title:"TikTok",path:"/tiktok",icon:Object(k.jsx)(m.a,{}),iconClosed:Object(k.jsx)(v.a,{}),iconOpened:Object(k.jsx)(v.b,{}),subNav:[{title:"Gesendet",path:"/tiktok/tiktok_send",icon:Object(k.jsx)(g.a,{})},{title:"Empfangen",path:"/tiktok/received",icon:Object(k.jsx)(g.b,{})}]},{title:"Instagram",path:"/insta/",icon:Object(k.jsx)(m.c,{})}],C=Object(u.a)(p.b)(c||(c=Object(O.a)(["\n    display: flex;\n    color: #e1e9fc:\n    justify-content: space-between;\n    align-items: center;\n    passing: 20px;\n    list-style: none;\n    height: 60px;\n    text-decoration: none;\n    font-size: 18px;\n\n    &:hover {\n        background: #252831;\n        border-left: 4px solid #632ce4;\n        cursor: pointer;\n    }\n"]))),y=u.a.span(i||(i=Object(O.a)(["\n    margin-left: 16px;\n    color: #fff;\n"]))),T=Object(u.a)(p.b)(a||(a=Object(O.a)(["\n    background: #414757;\n    height: 60px;\n    padding-left: 3rem;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #f5f5f5;\n    font-size: 18px;\n\n    &:hover {\n        background: #632ce4;\n        cursor: pointer;\n    }\n"]))),w=function(e){var t=e.item,n=Object(l.useState)(!1),c=Object(x.a)(n,2),i=c[0],a=c[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(C,{to:t.path,onClick:t.subNav&&function(){return a(!i)},children:[Object(k.jsxs)("div",{children:[t.icon,Object(k.jsx)(y,{children:t.title})]}),Object(k.jsx)("div",{children:t.subNav&&i?t.iconOpened:t.subNav?t.iconClosed:null})]}),i&&t.subNav.map((function(e,t){return Object(k.jsxs)(T,{to:e.path,children:[e.icon,Object(k.jsx)(y,{children:e.title})]},t)}))]})},H=n(0),E=u.a.div(s||(s=Object(O.a)(["\n    background: #15171c;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n"]))),F=Object(u.a)(p.b)(j||(j=Object(O.a)(["\n    margin-left: 2rem;\n    font-size: 2rem;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n"]))),G=u.a.nav(r||(r=Object(O.a)(["\n  background: #15171c;\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: 350ms;\n  z-index: 10;\n"])),(function(e){return e.sidebar?"0":"-100%"})),z=u.a.div(o||(o=Object(O.a)(["\n    width: 100%;\n"]))),I=function(){var e=Object(l.useState)(!1),t=Object(x.a)(e,2),n=t[0],c=t[1],i=function(){return c(!n)};return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(H.b.Provider,{value:{color:"#fff"},children:[Object(k.jsx)(E,{children:Object(k.jsx)(F,{to:"#",children:Object(k.jsx)(m.b,{onClick:i})})}),Object(k.jsx)(G,{sidebar:n,children:Object(k.jsxs)(z,{children:[Object(k.jsx)(F,{to:"#",children:Object(k.jsx)(f.b,{onClick:i})}),N.map((function(e,t){return Object(k.jsx)(w,{item:e},t)}))]})})]})})},P=function(){return Object(k.jsx)("div",{className:"home",children:Object(k.jsx)("h1",{children:"Hauptseite"})})},S=function(){return Object(k.jsx)("div",{className:"users",children:Object(k.jsx)("h1",{children:"Hauptseite - User"})})};function _(){alert("You clicked me!")}var B=function(){return Object(k.jsx)("div",{className:"main",children:Object(k.jsx)("h1",{children:"Hauptseite Telegram"})})},L=function(){return Object(k.jsxs)("div",{className:"send",children:[Object(k.jsx)("h1",{children:"Telegram/Gesendete Nachrichten"}),Object(k.jsx)("buttom",{onClick:_,children:"Test"})]})},A=function(){return Object(k.jsx)("div",{className:"received",children:Object(k.jsx)("h1",{children:"Telegram/Empfangene Nachrichten"})})},J=function(){return Object(k.jsxs)("div",{className:"deleted",children:[Object(k.jsx)("h1",{children:"Telegram/Gel\xf6schte Nachrichten"}),Object(k.jsx)("button",{onClick:_,children:"Senden!"})]})},D=function(){return Object(k.jsx)("div",{className:"tiktok_send",children:Object(k.jsx)("h1",{children:"Telegram/Gesendete Nachrichten"})})},U=function(){return Object(k.jsx)("div",{className:"tiktok_api",children:Object(k.jsx)("h1",{children:"TikTok/API"})})},W=n(29),Y=n(30),q=n(32),K=n(31),M=function(e){Object(q.a)(n,e);var t=Object(K.a)(n);function n(e){var c;return Object(W.a)(this,n),(c=t.call(this,e)).myChangeHandler=function(e){c.setState({username:e.target.value})},c.state={username:""},c}return Object(Y.a)(n,[{key:"render",value:function(){var e="";return e=this.state.username?Object(k.jsxs)("h1",{children:["Hello ",this.state.username]}):"",Object(k.jsxs)("form",{children:[e,Object(k.jsx)("p",{children:"Enter your name:"}),Object(k.jsx)("input",{type:"text",onChange:this.myChangeHandler})]})}}]),n}(b.a.Component),Q=n(3);var R=function(){return Object(k.jsxs)(p.a,{children:[Object(k.jsx)(I,{}),Object(k.jsxs)(Q.c,{children:[Object(k.jsx)(Q.a,{path:"/home",exact:!0,component:P}),Object(k.jsx)(Q.a,{path:"/home/users",exact:!0,component:S}),Object(k.jsx)(Q.a,{path:"/home/test",exact:!0,component:M}),Object(k.jsx)(Q.a,{path:"/telegram/main",exact:!0,component:B}),Object(k.jsx)(Q.a,{path:"/telegram/send",exact:!0,component:L}),Object(k.jsx)(Q.a,{path:"/telegram/received",exact:!0,component:A}),Object(k.jsx)(Q.a,{path:"/telegram/deleted",exact:!0,component:J}),Object(k.jsx)(Q.a,{path:"/tiktok/tiktok_send",exact:!0,component:D}),Object(k.jsx)(Q.a,{path:"/tiktok/send",exact:!0,component:D}),Object(k.jsx)(Q.a,{path:"/tiktok/send",exact:!0,component:U})]})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};d.a.render(Object(k.jsx)(R,{}),document.getElementById("root")),V()}},[[50,1,2]]]);
//# sourceMappingURL=main.d4534801.chunk.js.map