(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="leng",h="alph",d=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(false),a=Object(r.a)(c,2),d=a[0],p=a[1],f=function(t,e){var n=e.sortType,s=e.isReverse,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t.length-e.length;case h:return t.localeCompare(e);default:return 0}})),s&&c.reverse(),c}(b,{sortType:n,isReverse:d});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":h!==n}),onClick:function(){return s(h)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":j!==n}),onClick:function(){return s(j)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!d}),onClick:function(){return p(!d)},children:"Reverse"}),(n||d)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),p(false)},children:"Reset"})]}),Object(u.jsx)("ul",{children:f.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e3c7aaaa.chunk.js.map