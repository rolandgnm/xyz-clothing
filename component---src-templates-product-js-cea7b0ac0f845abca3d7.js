(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(n,e,t){"use strict";t.r(e);t(166),t(86),t(87),t(80);var r=t(0),a=t.n(r),o=t(156),i=t(168),c=t(167),u=t(161);e.default=function(n){var e=n.pageContext,t=e.products,l=function(n,e){return n?n.find(function(n){return n.id===e}):void 0}(t,e.selectedId),s=function(n,e){return n?n.filter(function(n){return e.includes(n.id)}):[]}(t,l.relatedProducts),m=l.id,p=l.name,f=l.description,d=l.price;return a.a.createElement(u.a,null,a.a.createElement("div",null,a.a.createElement(o.a,{to:"/"},"<"," Products")),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("h2",null,"#",m," ",p),a.a.createElement("p",null,f),a.a.createElement("div",null," ",a.a.createElement(c.a,d)," ")),a.a.createElement("br",null),a.a.createElement("h3",null,"Related"),a.a.createElement("div",null,s.map(function(n){return a.a.createElement(r.Fragment,{key:n.id},a.a.createElement("br",null),a.a.createElement(i.a,n))})))}},155:function(n,e,t){var r;n.exports=(r=t(157))&&r.default||r},156:function(n,e,t){"use strict";t.d(e,"b",function(){return s});var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(34),u=t.n(c);t.d(e,"a",function(){return u.a});t(155);var l=a.a.createContext({}),s=function(n){return a.a.createElement(l.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(n,e,t){"use strict";t.r(e);var r=t(13),a=t.n(r),o=t(0),i=t.n(o),c=t(4),u=t.n(c),l=t(56),s=t(2),m=function(n){var e=n.location,t=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(l.a,a()({location:e,pageResources:t},t.json))};m.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=m},159:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r={WHITE:"#ffffff",BLACK:"#000000",REBECCA_PURPLE:"#663399",BLUE:"#1a58cc"}},160:function(n){n.exports={data:{site:{siteMetadata:{title:"XYZ Clothing"}}}}},161:function(n,e,t){"use strict";var r=t(160),a=t(0),o=t.n(a),i=t(4),c=t.n(i),u=t(163),l=t.n(u),s=t(156),m=t(55),p=function(){var n=Object(a.useContext)(m.b),e=n.currency,t=n.setCurrency,r=n.exchangeRates;return o.a.createElement("header",null,o.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",o.a.createElement("select",{value:e,onChange:function(n){t(n.target.value)}},r.map(function(n){return o.a.createElement("option",{key:n.base},n.base)})))},f=t(78),d=t.n(f),b=t(158),g=b.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-99vn9v-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(n){return n.isDebug&&"background-color: orange;"}),h=function(n){var e=n.children,t=d()(n,["children"]);return o.a.createElement(g,t,e)};h.defaultProps={isDebug:!1},h.propTypes={isDebug:c.a.bool};var y=t(164),v=t.n(y),E=t(162),x=t(159);function k(){var n=v()(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ",";\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n"]);return k=function(){return n},n}var w="\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n",z=Object(b.a)(k(),"\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",x.a.BLACK,x.a.WHITE,w,w,w,w,w,w,x.a.BLUE,Object(E.a)(.2,x.a.BLUE),Object(E.b)(x.a.BLACK,.15),Object(E.b)(x.a.BLACK,.15),Object(E.b)(x.a.BLACK,.075),Object(E.b)(x.a.BLACK,.075)),N=function(n){var e=n.children;return o.a.createElement(s.b,{query:"755544856",render:function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(z,null),o.a.createElement(l.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(p,null),o.a.createElement(h,null,e))},data:r})};N.propTypes={children:c.a.node.isRequired},t.d(e,"a",function(){return N});e.b=N},165:function(n,e,t){var r=t(83),a=t(57),o=t(35),i=t(79),c=t(27),u=t(81),l=Object.getOwnPropertyDescriptor;e.f=t(18)?l:function(n,e){if(n=o(n),e=i(e,!0),u)try{return l(n,e)}catch(t){}if(c(n,e))return a(!r.f.call(n,e),n[e])}},166:function(n,e,t){var r=t(26).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||t(18)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(n){return""}}})},167:function(n,e,t){"use strict";t(169),t(80);var r=t(0),a=t.n(r),o=t(55);e.a=function(n){var e=n.base,t=n.amount,i=Object(r.useContext)(o.b),c=i.currency,u=i.exchangeRates;return a.a.createElement("span",null,c," ",function(n,e,t,r){if(t===r)return n.toFixed(2);var a=e.find(function(n){return n.base===t}).rates;return Number(n*a[r]).toFixed(2)}(t,u,e,c))}},168:function(n,e,t){"use strict";t(166);var r=t(0),a=t.n(r),o=t(156),i=t(167);e.a=function(n){var e=n.id,t=n.name,r=n.price;return a.a.createElement(o.a,{to:"/p/"+e},a.a.createElement("span",null,a.a.createElement("span",null,t)," - ",a.a.createElement(i.a,r)))}},169:function(n,e,t){"use strict";var r=t(6),a=t(27),o=t(15),i=t(170),c=t(79),u=t(19),l=t(172).f,s=t(165).f,m=t(26).f,p=t(173).trim,f=r.Number,d=f,b=f.prototype,g="Number"==o(t(84)(b)),h="trim"in String.prototype,y=function(n){var e=c(n,!1);if("string"==typeof e&&e.length>2){var t,r,a,o=(e=h?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(t=e.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var i,u=e.slice(2),l=0,s=u.length;l<s;l++)if((i=u.charCodeAt(l))<48||i>a)return NaN;return parseInt(u,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(n){var e=arguments.length<1?0:n,t=this;return t instanceof f&&(g?u(function(){b.valueOf.call(t)}):"Number"!=o(t))?i(new d(y(e)),t,f):y(e)};for(var v,E=t(18)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)a(d,v=E[x])&&!a(f,v)&&m(f,v,s(d,v));f.prototype=b,b.constructor=f,t(20)(r,"Number",f)}},170:function(n,e,t){var r=t(11),a=t(171).set;n.exports=function(n,e,t){var o,i=e.constructor;return i!==t&&"function"==typeof i&&(o=i.prototype)!==t.prototype&&r(o)&&a&&a(n,o),n}},171:function(n,e,t){var r=t(11),a=t(5),o=function(n,e){if(a(n),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,e,r){try{(r=t(21)(Function.call,t(165).f(Object.prototype,"__proto__").set,2))(n,[]),e=!(n instanceof Array)}catch(a){e=!0}return function(n,t){return o(n,t),e?n.__proto__=t:r(n,t),n}}({},!1):void 0),check:o}},172:function(n,e,t){var r=t(82),a=t(59).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(n){return r(n,a)}},173:function(n,e,t){var r=t(12),a=t(22),o=t(19),i=t(174),c="["+i+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(n,e,t){var a={},c=o(function(){return!!i[n]()||"​"!="​"[n]()}),u=a[n]=c?e(m):i[n];t&&(a[t]=u),r(r.P+r.F*c,"String",a)},m=s.trim=function(n,e){return n=String(a(n)),1&e&&(n=n.replace(u,"")),2&e&&(n=n.replace(l,"")),n};n.exports=s},174:function(n,e){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=component---src-templates-product-js-cea7b0ac0f845abca3d7.js.map