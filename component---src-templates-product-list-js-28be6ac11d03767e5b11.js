(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,n,t){"use strict";t.r(n);t(57);var a=t(0),r=t.n(a),o=t(209),i=t(188);n.default=function(e){var n=e.pageContext.products;return r.a.createElement(i.a,null,r.a.createElement("h2",null,"Products"),n.map(function(e){return r.a.createElement(o.a,Object.assign({key:e.id},e))}))}},160:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});var a={HEADER_BAR:"#24292e",WHITE:"#ffffff",BLACK:"#000000",REBECCA_PURPLE:"#663399",BLUE:"#1a58cc",TEXT_WEAK:"rgba(0,0,0,.4)",TEXT:"rgba(0,0,0,.87)"},r={MAX_WIDTH:"64rem"}},167:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var a=t(0),r=t.n(a),o=t(4),i=t.n(o),c=t(34),l=t.n(c);t.d(n,"a",function(){return l.a});t(168);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},168:function(e,n,t){var a;e.exports=(a=t(181))&&a.default||a},181:function(e,n,t){"use strict";t.r(n);var a=t(12),r=t.n(a),o=t(0),i=t.n(o),c=t(4),l=t.n(c),s=t(59),u=t(2),d=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(s.a,r()({location:n,pageResources:t},t.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},n.default=d},182:function(e,n,t){var a=t(84),r=t(56),o=t(36),i=t(79),c=t(28),l=t(82),s=Object.getOwnPropertyDescriptor;n.f=t(18)?s:function(e,n){if(e=o(e),n=i(n,!0),l)try{return s(e,n)}catch(t){}if(c(e,n))return r(!a.f.call(e,n),e[n])}},186:function(e){e.exports={data:{site:{siteMetadata:{title:"XYZ Clothing"}}}}},188:function(e,n,t){"use strict";var a=t(186),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(231),s=t.n(l),u=t(167),d=t(155),m=t(160),p=t(55),f=t(457),b=t(232),g=Object(b.a)(function(e){return e.map(function(e){return{text:e.base,value:e.base}})}),h=function(e){var n=e.currency,t=e.onChange,a=e.exchangeRates;return o.a.createElement(f.a,{inline:!0,options:g(a),value:n,onChange:function(e,n){var a=n.value;return t(a)}})},y=d.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1ym6w85-0"})(["background-color:",";color:white;padding:0.75em;"],m.a.HEADER_BAR),v=d.b.div.withConfig({displayName:"Header__HeaderInner",componentId:"sc-1ym6w85-1"})(["max-width:",";margin:auto;display:flex;flex-flow:nowrap row;justify-content:space-between;"],m.b.MAX_WIDTH),E=function(){var e=Object(r.useContext)(p.b),n=e.currency,t=e.setCurrency,a=e.exchangeRates;return o.a.createElement(y,null,o.a.createElement(v,null,o.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",o.a.createElement(h,{currency:n,exchangeRates:a,onChange:t})))},x=t(81),j=t.n(x),O=d.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-1dse63j-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(e){return e.isDebug&&"background-color: orange;"}),w=function(e){var n=e.children,t=j()(e,["children"]);return o.a.createElement(O,t,n)};w.defaultProps={isDebug:!1},w.propTypes={isDebug:c.a.bool};t(236);var z=t(237),N=t.n(z),_=t(238);function k(){var e=N()(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ",";\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n"]);return k=function(){return e},e}var I="\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n",C=Object(d.a)(k(),"\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",m.a.BLACK,m.a.WHITE,I,I,I,I,I,I,m.a.BLUE,Object(_.a)(.2,m.a.BLUE),Object(_.b)(m.a.BLACK,.15),Object(_.b)(m.a.BLACK,.15),Object(_.b)(m.a.BLACK,.075),Object(_.b)(m.a.BLACK,.075)),A=function(e){var n=e.children;return o.a.createElement(u.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null),o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(E,null),o.a.createElement(w,null,n))},data:a})};A.propTypes={children:c.a.node.isRequired},t.d(n,"a",function(){return A})},190:function(e,n,t){var a=t(27).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||t(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},191:function(e,n,t){"use strict";t(210),t(80);var a=t(0),r=t.n(a),o=t(155),i=t(55),c=t(160),l=o.b.span.withConfig({displayName:"Price__PriceWrapper",componentId:"sc-16u4ioe-0"})(["color:",";font-size:",";& sup{font-size:0.6em;}"],c.a.TEXT,function(e){return e.large?"2.5em":"1.2em"});n.a=function(e){var n=e.base,t=e.amount,o=e.large,c=Object(a.useContext)(i.b),s=c.currency,u=c.exchangeRates;return r.a.createElement(l,{large:o},r.a.createElement("sup",null,s),function(e,n,t,a){if(t===a)return e.toFixed(2);var r=n.find(function(e){return e.base===t}).rates;return Number(e*r[a]).toFixed(2)}(t,u,n,s))}},209:function(e,n,t){"use strict";t(190);var a=t(0),r=t.n(a),o=t(155),i=t(167),c=t(451),l=t(191),s=t(160),u=o.b.div.withConfig({displayName:"ProductSummary__ProductName",componentId:"sc-8fczaz-0"})(["font-size:1.2em;font-weight:bold;color:",";"],s.a.TEXT),d=o.b.div.withConfig({displayName:"ProductSummary__ProductId",componentId:"sc-8fczaz-1"})(["font-size:0.8em;color:",";"],s.a.TEXT_WEAK),m=o.b.div.withConfig({displayName:"ProductSummary__FlexWrapper",componentId:"sc-8fczaz-2"})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;"]),p=o.b.div.withConfig({displayName:"ProductSummary__NameIdWrapper",componentId:"sc-8fczaz-3"})(["flex:2 0 260px;"]),f=o.b.div.withConfig({displayName:"ProductSummary__FlexPrice",componentId:"sc-8fczaz-4"})(["display:flex;justify-content:flex-end;flex:1;"]),b=Object(o.b)(i.a).withConfig({displayName:"ProductSummary__SummaryLink",componentId:"sc-8fczaz-5"})(["display:block;&:not(:last-child){margin-bottom:1rem;}&:hover{text-decoration:none;}"]);n.a=function(e){var n=e.id,t=e.name,a=e.price;return r.a.createElement(b,{to:"/p/"+n},r.a.createElement(c.a,null,r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(u,null,t),r.a.createElement(d,null,"#",n)),r.a.createElement(f,null,r.a.createElement(l.a,a)))))}},210:function(e,n,t){"use strict";var a=t(6),r=t(28),o=t(15),i=t(211),c=t(79),l=t(19),s=t(213).f,u=t(182).f,d=t(27).f,m=t(214).trim,p=a.Number,f=p,b=p.prototype,g="Number"==o(t(85)(b)),h="trim"in String.prototype,y=function(e){var n=c(e,!1);if("string"==typeof n&&n.length>2){var t,a,r,o=(n=h?n.trim():m(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(t=n.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+n}for(var i,l=n.slice(2),s=0,u=l.length;s<u;s++)if((i=l.charCodeAt(s))<48||i>r)return NaN;return parseInt(l,a)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var n=arguments.length<1?0:e,t=this;return t instanceof p&&(g?l(function(){b.valueOf.call(t)}):"Number"!=o(t))?i(new f(y(n)),t,p):y(n)};for(var v,E=t(18)?s(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;E.length>x;x++)r(f,v=E[x])&&!r(p,v)&&d(p,v,u(f,v));p.prototype=b,b.constructor=p,t(20)(a,"Number",p)}},211:function(e,n,t){var a=t(11),r=t(212).set;e.exports=function(e,n,t){var o,i=n.constructor;return i!==t&&"function"==typeof i&&(o=i.prototype)!==t.prototype&&a(o)&&r&&r(e,o),e}},212:function(e,n,t){var a=t(11),r=t(5),o=function(e,n){if(r(e),!a(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,n,a){try{(a=t(21)(Function.call,t(182).f(Object.prototype,"__proto__").set,2))(e,[]),n=!(e instanceof Array)}catch(r){n=!0}return function(e,t){return o(e,t),n?e.__proto__=t:a(e,t),e}}({},!1):void 0),check:o}},213:function(e,n,t){var a=t(83),r=t(58).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},214:function(e,n,t){var a=t(13),r=t(22),o=t(19),i=t(215),c="["+i+"]",l=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),u=function(e,n,t){var r={},c=o(function(){return!!i[e]()||"​"!="​"[e]()}),l=r[e]=c?n(d):i[e];t&&(r[t]=l),a(a.P+a.F*c,"String",r)},d=u.trim=function(e,n){return e=String(r(e)),1&n&&(e=e.replace(l,"")),2&n&&(e=e.replace(s,"")),e};e.exports=u},215:function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},451:function(e,n,t){"use strict";var a=t(78),r=t.n(a),o=(t(170),t(152)),i=t.n(o),c=(t(4),t(0)),l=t.n(c),s=t(169),u=t(251),d=t(252),m=t(151);function p(e){var n=e.children,t=e.className,a=e.compact,o=e.content,c=e.horizontal,f=e.piled,b=e.raised,g=e.size,h=e.stacked,y=i()("ui",g,Object(s.a)(a,"compact"),Object(s.a)(c,"horizontal"),Object(s.a)(f,"piled"),Object(s.a)(b,"raised"),Object(s.a)(h,"stacked"),"segments",t),v=Object(u.a)(p,e),E=Object(d.a)(p,e);return l.a.createElement(E,r()({},v,{className:y}),m.a.isNil(n)?o:n)}p.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],p.propTypes={};var f=p;function b(e){var n=e.children,t=e.className,a=e.content,o=i()("inline",t),c=Object(u.a)(b,e),s=Object(d.a)(b,e);return l.a.createElement(s,r()({},c,{className:o}),m.a.isNil(n)?a:n)}b.handledProps=["as","children","className","content"],b.propTypes={};var g=b;function h(e){var n=e.attached,t=e.basic,a=e.children,o=e.circular,c=e.className,p=e.clearing,f=e.color,b=e.compact,g=e.content,y=e.disabled,v=e.floated,E=e.inverted,x=e.loading,j=e.placeholder,O=e.padded,w=e.piled,z=e.raised,N=e.secondary,_=e.size,k=e.stacked,I=e.tertiary,C=e.textAlign,A=e.vertical,T=i()("ui",f,_,Object(s.a)(t,"basic"),Object(s.a)(o,"circular"),Object(s.a)(p,"clearing"),Object(s.a)(b,"compact"),Object(s.a)(y,"disabled"),Object(s.a)(E,"inverted"),Object(s.a)(x,"loading"),Object(s.a)(j,"placeholder"),Object(s.a)(w,"piled"),Object(s.a)(z,"raised"),Object(s.a)(N,"secondary"),Object(s.a)(k,"stacked"),Object(s.a)(I,"tertiary"),Object(s.a)(A,"vertical"),Object(s.b)(n,"attached"),Object(s.b)(O,"padded"),Object(s.c)(C),Object(s.d)(v,"floated"),"segment",c),P=Object(u.a)(h,e),S=Object(d.a)(h,e);return l.a.createElement(S,r()({},P,{className:T}),m.a.isNil(a)?g:a)}h.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],h.Group=f,h.Inline=g,h.propTypes={};n.a=h}}]);
//# sourceMappingURL=component---src-templates-product-list-js-28be6ac11d03767e5b11.js.map