(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{id:1,name:"Brown Shoes",description:"A brown shirt made from fine cotton.",price:{base:"USD",amount:50},relatedProducts:[2]},{id:2,name:"Green Pants",description:"A super slick pair of green pants, hand crafted by artisan clothmakers in the Amazon.",price:{base:"USD",amount:30},relatedProducts:[1,4]},{id:3,name:"Green Pants",description:"A super slick pair of green pants, hand crafted by artisan clothmakers in the Amazon.",price:{base:"USD",amount:25},relatedProducts:[1,4]},{id:4,name:"White Shirt",description:"A pristine white shirt, sure to look great with any outfit.",price:{base:"USD",amount:20},relatedProducts:[3,5]},{id:5,name:"Blue Shirt",description:"You haven't seen a blue shirt like this before.",price:{base:"CNY",amount:300},relatedProducts:[4,1]}]},13:function(e){e.exports=[{base:"AUD",rates:{USD:.72,CNY:4.87}},{base:"USD",rates:{AUD:1.39,CNY:6.77}},{base:"CNY",rates:{AUD:.21,USD:.15}}]},14:function(e,t,n){e.exports=n(24)},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),u=(n(20),n(9)),o=n(27),i=n(28),s=n(29),m=r.a.createContext(),d=function(){var e=Object(a.useContext)(m),t=e.currency,n=e.setCurrency,c=e.exchangeRates;return r.a.createElement("header",null,r.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",r.a.createElement("select",{value:t,onChange:function(e){n(e.target.value)}},c.map(function(e){return r.a.createElement("option",{key:e.base},e.base)})))},p=n(25),E=function(e){var t=e.base,n=e.amount,c=Object(a.useContext)(m),l=c.currency,u=c.exchangeRates;return r.a.createElement("span",null,l," ",function(e,t,n,a){if(n===a)return e.toFixed(2);var r=t.find(function(e){return e.base===n}).rates;return Number(e*r[a]).toFixed(2)}(n,u,t,l))},f=function(e){var t=e.id,n=e.name,a=e.price;return r.a.createElement(p.a,{to:"/p/".concat(t)},r.a.createElement("span",null,r.a.createElement("span",null,n)," ","-"," ",r.a.createElement(E,a)))},b=function(e){var t=e.products,n=void 0===t?[]:t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),n?n.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(f,Object.assign({key:e.id},e)))}):r.a.createElement("div",null,"Loading products..."))},h=n(12),v=n(26),g=function(e){var t=e.products,n=function(e,t){return e?e.find(function(e){return e.id===t}):void 0}(t,e.selectedId);if(!n)return r.a.createElement(v.a,{to:"/404"});var a=function(e,t){return e?e.filter(function(e){return t.includes(e.id)}):[]}(t,n.relatedProducts),c=n.id,l=n.name,u=n.description,o=n.price;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,{to:"/"},"Products")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h2",null,"#",c," ",l),r.a.createElement("p",null,u),r.a.createElement("div",null," ",r.a.createElement(E,o)," ")),r.a.createElement("br",null),r.a.createElement("h3",null,"Related"),r.a.createElement("div",null,a.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(f,Object.assign({key:e.id},e)))})))},k=function(){return r.a.createElement("div",null,"Not Found!",r.a.createElement("br",null),r.a.createElement(p.a,{to:"/"},"back to products"))},x=n(13),y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("AUD"),p=Object(u.a)(l,2),E=p[0],f=p[1];Object(a.useEffect)(function(){c(h)},[]);var v={currency:E,setCurrency:f,exchangeRates:x};return r.a.createElement(o.a,null,r.a.createElement(m.Provider,{value:v},r.a.createElement("div",{className:"App"},r.a.createElement(d,null),n.length&&r.a.createElement(i.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:function(){return r.a.createElement(b,{products:n})}}),r.a.createElement(s.a,{path:"/p/:id",component:function(e){var t=e.match;return r.a.createElement(g,{products:n,selectedId:+t.params.id})}}),r.a.createElement(s.a,{component:k})))))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0df06420.chunk.js.map