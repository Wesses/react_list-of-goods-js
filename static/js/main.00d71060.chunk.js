(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),r=n.n(s),c=n(6),o=n(8),i=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="leng",h="alph",d=function(){var t=Object(i.useState)(""),e=Object(c.a)(t,2),n=e[0],s=e[1],r=Object(i.useState)(!1),a=Object(c.a)(r,2),d=a[0],p=a[1],g=function(t,e){var n=e.sortType,s=e.isReverse;if(""===n&&!s)return t;var r=Object(o.a)(t);return n!==j&&n!==h||r.sort((function(t,e){switch(n){case j:return t.length-e.length;case h:return t.localeCompare(e);default:throw new Error("Unbelievable error")}})),s&&r.reverse(),r}(b,{sortType:n,isReverse:d});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":h!==n}),onClick:function(){return s(h)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":j!==n}),onClick:function(){return s(j)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!d}),onClick:function(){return p(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),p(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:g.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.00d71060.chunk.js.map