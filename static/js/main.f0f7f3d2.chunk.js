(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{44:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),o=t(34),i=t.n(o),a=(t(44),t(8)),d=t(63),s=t(1);t(47);var b=function(){return Object(s.jsx)("h1",{className:"head-title pt-3 pb-3",children:Object(s.jsx)("b",{children:"\uc77c \ud574\uc57c\uc9c0?"})})},j=t(9),l=(t(48),t(18)),x=t(7);var u=function(){return Object(s.jsx)("div",{className:"mt-3",children:Object(s.jsx)("img",{style:{width:"inherit",maxWidth:"100%",height:"auto"},src:"https://cdn.eyesmag.com/content/uploads/posts/2020/02/25/sundayryan_ep_01_thum-ea017180-076d-4970-b012-229cd996ea8a.jpg"})})},h=t(38),p=t(17),O=t(15),f=t(14),m=t(64),v=t(61),g=t(62);var k,y=function(){var e=Object(c.useState)({name:"",phone:""}),n=Object(f.a)(e,2),t=n[0],r=n[1],o=t.name,i=t.phone,a=Object(c.useState)([{id:1,name:"\ud64d\uae38\ub3d9",phone:"010-1111-2222",bookmark:!1},{id:2,name:"\uc804\uc6b0\uce58",phone:"010-3333-4444",bookmark:!1}]),d=Object(f.a)(a,2),b=d[0],j=d[1],l=function(e){var n=e.target,c=n.value,o=n.name;r(Object(O.a)(Object(O.a)({},t),{},Object(p.a)({},o,c)))},x=Object(c.useRef)(),u=Object(c.useRef)(3);console.log(u);var k=Object(c.useState)(!1),y=Object(f.a)(k,2),C=y[0],w=y[1];return Object(s.jsxs)("div",{className:"PhoneBook-border bg-white pb-3 ps-1 pe-1",children:[Object(s.jsxs)(m.a,{className:"mt-2 pt-3 pb-5 ps-3 pe-3",children:[Object(s.jsxs)(m.a.Group,{className:"mb-3",children:[Object(s.jsx)(m.a.Label,{children:"\uc774\ub984"}),Object(s.jsx)(m.a.Control,{ref:x,placeholder:"Enter name",name:"name",value:o,onChange:l})]}),Object(s.jsxs)(m.a.Group,{className:"mb-3",children:[Object(s.jsx)(m.a.Label,{children:"\ud578\ub4dc\ud3f0 \ubc88\ud638"}),Object(s.jsx)(m.a.Control,{placeholder:"Enter phone number",name:"phone",value:i,onChange:l})]}),Object(s.jsx)(m.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(s.jsx)(m.a.Check,{type:"checkbox",label:"\uc990\uaca8\ucc3e\uae30",onChange:function(e){!0===e.target.checked?w(!0):w(!1)}})}),Object(s.jsx)(v.a,{variant:"dark",onClick:function(){!function(e){var n={id:u.current,name:o,phone:i,bookmark:!!e};""!==n.name&&""!==n.phone?(j([].concat(Object(h.a)(b),[n])),r({name:"",phone:""}),u.current+=1,x.current.focus()):alert("\uc774\ub984, \ud578\ub4dc\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")}(C)},children:"\ub4f1\ub85d"})]}),Object(s.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"\uc774\ub984"}),Object(s.jsx)("th",{children:"\ud578\ub4dc\ud3f0 \ubc88\ud638"}),Object(s.jsx)("th",{children:"\uc990\uaca8\ucc3e\uae30"}),Object(s.jsx)("th",{})]})}),b.map((function(e,n){return Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:n+1}),Object(s.jsx)("td",{children:Object(s.jsx)("b",{style:{color:e.bookmark?"blue":"black"},children:e.name})}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{style:{width:"100px"},children:Object(s.jsx)(v.a,{variant:"outline-dark",size:"sm",onClick:function(){var n;n=e.id,j(b.map((function(e,t){return e.id===n?Object(O.a)(Object(O.a)({},e),{},{bookmark:!e.bookmark}):e})))},children:e.bookmark?"\ud574\uc81c":"\ub4f1\ub85d"})}),Object(s.jsx)("td",{style:{width:"70px"},children:Object(s.jsx)(v.a,{variant:"outline-danger",size:"sm",onClick:function(){var n;n=e.id,j(b.filter((function(e){return e.id!==n})))},children:"\uc0ad\uc81c"})})]})},n)}))]})]})},C=j.c.div(k||(k=Object(a.a)(["\n    width:inherit;\n    height:800px;\n\n    position: relative;\n    background: white;\n    border-radius: 16px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n    margin: 0 auto;\n\n    margin-top: 10px;\n    margin-bottom: 32px;\n    display: flex;\n    flex-direction: column;\n"])));var w=function(e){var n=e.children;return Object(s.jsxs)(C,{children:[" ",n," "]})},E=[{id:1,text:"\ud559\uc6d0 \uac15\uc758 \ub4e3\uae30",done:!0},{id:2,text:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud558\uae30",done:!0},{id:3,text:"\uc810\uc2ec \uba39\uae30",done:!1},{id:4,text:"\ub4dc\ub77c\ub9c8 \ubcf4\uae30",done:!1},{id:5,text:"\uc800\ub141 \uba39\uae30",done:!1},{id:6,text:"\ud504\ub85c\uc81d\ud2b8 \ud558\ub098 \ub9cc\ub4e4\uae30",done:!1},{id:7,text:"\ud578\ub4dc\ud3f0 \ubcf4\uba74\uc11c \uc790\uae30",done:!1}];function L(e,n){switch(n.type){case"CREATE":return e.concat(n.todo);case"TOGGLE":return e.map((function(e){return e.id===n.id?Object(O.a)(Object(O.a)({},e),{},{done:!e.done}):e}));case"REMOVE":return e.filter((function(e){return e.id!==n.id}));default:throw new Error("Unhandled action type: ".concat(n.type))}}var z,P=Object(c.createContext)(),N=Object(c.createContext)(),R=Object(c.createContext)();function S(e){var n=e.children,t=Object(c.useReducer)(L,E),r=Object(f.a)(t,2),o=r[0],i=r[1],a=Object(c.useRef)(5);return Object(s.jsx)(P.Provider,{value:o,children:Object(s.jsx)(N.Provider,{value:i,children:Object(s.jsx)(R.Provider,{value:a,children:n})})})}function T(){var e=Object(c.useContext)(P);if(!e)throw new Error("Cannot find TodoProvider");return e}function F(){var e=Object(c.useContext)(N);if(!e)throw new Error("Cannot find TodoProvider");return e}var G=j.c.div(z||(z=Object(a.a)(["\n    padding-top: 48px;\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-bottom: 24px;\n    border-bottom: 1px solid #e9ecef;\n    h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n    }\n    .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n    }\n    .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n    }\n"])));var D,I,B,K,M,_,A=function(){var e=T().filter((function(e){return!e.done})),n=new Date,t=n.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),c=n.toLocaleDateString("ko-KR",{weekday:"long"});return Object(s.jsxs)(G,{children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("div",{className:"day",children:c}),Object(s.jsxs)("div",{className:"tasks-left",children:["\ud560 \uc77c ",e.length,"\uac1c \ub0a8\uc74c"]})]})},J=t(21),V=j.c.div(D||(D=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n  display: none;\n"]))),W=j.c.div(I||(I=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),V),H=j.c.div(B||(B=Object(a.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(e){return e.done&&Object(j.b)(K||(K=Object(a.a)(["\n      border: 1px solid #38d9a9;\n      color: #38d9a9;\n    "])))})),U=j.c.div(M||(M=Object(a.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n"])),(function(e){return e.done&&Object(j.b)(_||(_=Object(a.a)(["\n      color: #ced4da;\n    "])))}));function q(e){var n=e.id,t=e.done,c=e.text,r=F();return Object(s.jsxs)(W,{children:[Object(s.jsx)(H,{done:t,onClick:function(){return r({type:"TOGGLE",id:n})},children:t&&Object(s.jsx)(J.c,{})}),Object(s.jsx)(U,{done:t,children:c}),Object(s.jsx)(V,{onClick:function(){return r({type:"REMOVE",id:n})},children:Object(s.jsx)(J.b,{})})]})}var Q,X=r.a.memo(q),Y=j.c.div(Q||(Q=Object(a.a)(["\n    flex: 1;\n    padding: 20px 32px;\n    padding-bottom: 48;\n    overflow-y:auto;\n"])));var Z,$,ee,ne,te,ce=function(){var e=T();return Object(s.jsx)(Y,{children:e.map((function(e){return Object(s.jsx)(X,{id:e.id,text:e.text,done:e.done},e.id)}))})},re=j.c.button(Z||(Z=Object(a.a)(["\n    background: #38d9a9;\n    &:hover {\n        background: #63e6be;\n    }\n    &:active {\n        background: #20c997;\n    }\n\n    z-index: 5;\n    cursor: pointer;\n    width: 80px;\n    height: 80px;\n    display:block;\n    align-items: center;\n    justify-content: center;\n    font-size: 60px;\n    position: absolute;\n    left: 50%;\n    bottom: 0px;\n    transform: translate(-50%, 50%);\n    color: white;\n    border-radius: 50%;\n    border: none;\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    transition: 0.125s all ease-in;\n    ","\n  "])),(function(e){return e.open&&Object(j.b)($||($=Object(a.a)(["\n        background: #ff6b6b;\n        &:hover {\n          background: #ff8787;\n        }\n        &:active {\n          background: #fa5252;\n        }\n        transform: translate(-50%, 50%) rotate(45deg);\n      "])))})),oe=j.c.div(ee||(ee=Object(a.a)(["\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n  "]))),ie=j.c.form(ne||(ne=Object(a.a)(["\n    background: #f8f9fa;\n    padding-left: 32px;\n    padding-top: 32px;\n    padding-right: 32px;\n    padding-bottom: 72px;\n  \n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n    border-top: 1px solid #e9ecef;\n  "]))),ae=j.c.input(te||(te=Object(a.a)(["\n    padding: 12px;\n    border-radius: 4px;\n    border: 1px solid #dee2e6;\n    width: 100%;\n    outline: none;\n    font-size: 18px;\n    box-sizing: border-box;\n  "])));function de(){var e=Object(c.useState)(!1),n=Object(f.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),i=Object(f.a)(o,2),a=i[0],d=i[1],b=F(),j=function(){var e=Object(c.useContext)(R);if(!e)throw new Error("Cannot find TodoProvider");return e}();return Object(s.jsxs)(s.Fragment,{children:[t&&Object(s.jsx)(oe,{children:Object(s.jsx)(ie,{onSubmit:function(e){e.preventDefault(),b({type:"CREATE",todo:{id:j.current,text:a,done:!1}}),d(""),r(!1),j.current+=1},children:Object(s.jsx)(ae,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",onChange:function(e){return d(e.target.value)},value:a})})}),Object(s.jsx)(re,{onClick:function(){return r(!t)},open:t,children:Object(s.jsx)(J.a,{})})]})}var se=r.a.memo(de);var be=function(){return Object(s.jsxs)("div",{className:"PostWrapper mt-3",children:[Object(s.jsxs)(d.a,{variant:"pills",children:[Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(d.a.Link,{as:l.b,Link:!0,to:"/",eventKey:"link-1",children:"Home"})}),Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(d.a.Link,{as:l.b,Link:!0,to:"/todolist",eventKey:"link-2",children:"To Do List"})}),Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(d.a.Link,{as:l.b,Link:!0,to:"/phonebook",eventKey:"link-3",children:"Phone Book"})})]}),Object(s.jsx)(x.a,{exact:!0,path:"/",children:Object(s.jsx)("div",{children:Object(s.jsx)(u,{})})}),Object(s.jsx)(x.a,{exact:!0,path:"/todolist",children:Object(s.jsx)("div",{children:Object(s.jsx)(S,{children:Object(s.jsxs)(w,{children:[Object(s.jsx)(A,{}),Object(s.jsx)(ce,{}),Object(s.jsx)(se,{})]})})})}),Object(s.jsx)(x.a,{exact:!0,path:"/phonebook",children:Object(s.jsx)("div",{children:Object(s.jsx)(y,{})})})]})};var je=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(be,{})})};var le,xe=Object(j.a)(le||(le=Object(a.a)(["\n  body {\n    background:#e9ecef;\n  }\n"])));var ue=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(xe,{}),Object(s.jsx)(b,{}),Object(s.jsx)(je,{})]})},he=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),o(e),i(e)}))};t(59);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(ue,{})})}),document.getElementById("root")),he()}},[[60,1,2]]]);
//# sourceMappingURL=main.f0f7f3d2.chunk.js.map