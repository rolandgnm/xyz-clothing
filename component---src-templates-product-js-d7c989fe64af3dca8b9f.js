(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,n,t){"use strict";t.r(n);t(57),t(190),t(87),t(88),t(80);var a=t(0),r=t.n(a),o=t(155),i=t(167),c=t(458),l=t(293),u=t(209),m=t(191),s=t(188),d=t(160),p=o.b.span.withConfig({displayName:"product__Id",componentId:"eoty7f-0"})(["color:",";font-size:0.5em;"],d.a.TEXT_WEAK),f=o.b.p.withConfig({displayName:"product__Description",componentId:"eoty7f-1"})(["margin-bottom:2em;"]),b=o.b.div.withConfig({displayName:"product__DetailsWrapper",componentId:"eoty7f-2"})(["display:flex;flex-wrap:wrap;"]),g=o.b.div.withConfig({displayName:"product__NameDescWrapper",componentId:"eoty7f-3"})(["flex:1 0 500px;margin:0 1em 2em 0;"]);n.default=function(e){var n=e.pageContext,t=n.products,a=function(e,n){return e?e.find(function(e){return e.id===n}):void 0}(t,n.selectedId),o=function(e,n){return e?e.filter(function(e){return n.includes(e.id)}):[]}(t,a.relatedProducts),y=a.id,h=a.name,E=a.description,x=a.price;return r.a.createElement(s.a,null,r.a.createElement(i.a,{to:"/",style:{color:d.a.TEXT}},r.a.createElement(c.a,{icon:!0,circular:!0},r.a.createElement(l.a,{name:"arrow left"})),"Products"),r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement("h2",null,h,r.a.createElement(p,null," #",y)),r.a.createElement(f,null,E)),r.a.createElement(m.a,Object.assign({},x,{large:!0}))),r.a.createElement("br",null),r.a.createElement("h3",null,"Related"),r.a.createElement("div",null,o.map(function(e){return r.a.createElement(u.a,Object.assign({key:e.id},e))})))}},160:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});var a={HEADER_BAR:"#24292e",WHITE:"#ffffff",BLACK:"#000000",REBECCA_PURPLE:"#663399",BLUE:"#1a58cc",TEXT_WEAK:"rgba(0,0,0,.4)",TEXT:"rgba(0,0,0,.87)"},r={MAX_WIDTH:"64rem"}},167:function(e,n,t){"use strict";t.d(n,"b",function(){return m});var a=t(0),r=t.n(a),o=t(4),i=t.n(o),c=t(34),l=t.n(c);t.d(n,"a",function(){return l.a});t(168);var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},168:function(e,n,t){var a;e.exports=(a=t(181))&&a.default||a},181:function(e,n,t){"use strict";t.r(n);var a=t(12),r=t.n(a),o=t(0),i=t.n(o),c=t(4),l=t.n(c),u=t(59),m=t(2),s=function(e){var n=e.location,t=m.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(u.a,r()({location:n,pageResources:t},t.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},n.default=s},186:function(e){e.exports={data:{site:{siteMetadata:{title:"XYZ Clothing"}}}}},188:function(e,n,t){"use strict";var a=t(186),r=t(0),o=t.n(r),i=t(4),c=t.n(i),l=t(231),u=t.n(l),m=t(167),s=t(155),d=t(160),p=t(55),f=t(457),b=t(232),g=Object(b.a)(function(e){return e.map(function(e){return{text:e.base,value:e.base}})}),y=function(e){var n=e.currency,t=e.onChange,a=e.exchangeRates;return o.a.createElement(f.a,{inline:!0,options:g(a),value:n,onChange:function(e,n){var a=n.value;return t(a)}})},h=s.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1ym6w85-0"})(["background-color:",";color:white;padding:0.75em;"],d.a.HEADER_BAR),E=s.b.div.withConfig({displayName:"Header__HeaderInner",componentId:"sc-1ym6w85-1"})(["max-width:",";margin:auto;display:flex;flex-flow:nowrap row;justify-content:space-between;"],d.b.MAX_WIDTH),x=function(){var e=Object(r.useContext)(p.b),n=e.currency,t=e.setCurrency,a=e.exchangeRates;return o.a.createElement(h,null,o.a.createElement(E,null,o.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",o.a.createElement(y,{currency:n,exchangeRates:a,onChange:t})))},w=t(81),v=t.n(w),z=s.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-1dse63j-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(e){return e.isDebug&&"background-color: orange;"}),_=function(e){var n=e.children,t=v()(e,["children"]);return o.a.createElement(z,t,n)};_.defaultProps={isDebug:!1},_.propTypes={isDebug:c.a.bool};t(236);var C=t(237),k=t.n(C),I=t(238);function T(){var e=k()(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ",";\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n"]);return T=function(){return e},e}var N="\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n",j=Object(s.a)(T(),"\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",d.a.BLACK,d.a.WHITE,N,N,N,N,N,N,d.a.BLUE,Object(I.a)(.2,d.a.BLUE),Object(I.b)(d.a.BLACK,.15),Object(I.b)(d.a.BLACK,.15),Object(I.b)(d.a.BLACK,.075),Object(I.b)(d.a.BLACK,.075)),R=function(e){var n=e.children;return o.a.createElement(m.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(x,null),o.a.createElement(_,null,n))},data:a})};R.propTypes={children:c.a.node.isRequired},t.d(n,"a",function(){return R})},191:function(e,n,t){"use strict";t(210),t(80);var a=t(0),r=t.n(a),o=t(155),i=t(55),c=t(160),l=o.b.span.withConfig({displayName:"Price__PriceWrapper",componentId:"sc-16u4ioe-0"})(["color:",";font-size:",";& sup{font-size:0.6em;}"],c.a.TEXT,function(e){return e.large?"2.5em":"1.2em"});n.a=function(e){var n=e.base,t=e.amount,o=e.large,c=Object(a.useContext)(i.b),u=c.currency,m=c.exchangeRates;return r.a.createElement(l,{large:o},r.a.createElement("sup",null,u),function(e,n,t,a){if(t===a)return e.toFixed(2);var r=n.find(function(e){return e.base===t}).rates;return Number(e*r[a]).toFixed(2)}(t,m,n,u))}},209:function(e,n,t){"use strict";t(190);var a=t(0),r=t.n(a),o=t(155),i=t(167),c=t(451),l=t(191),u=t(160),m=o.b.div.withConfig({displayName:"ProductSummary__ProductName",componentId:"sc-8fczaz-0"})(["font-size:1.2em;font-weight:bold;color:",";"],u.a.TEXT),s=o.b.div.withConfig({displayName:"ProductSummary__ProductId",componentId:"sc-8fczaz-1"})(["font-size:0.8em;color:",";"],u.a.TEXT_WEAK),d=o.b.div.withConfig({displayName:"ProductSummary__FlexWrapper",componentId:"sc-8fczaz-2"})(["display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;"]),p=o.b.div.withConfig({displayName:"ProductSummary__NameIdWrapper",componentId:"sc-8fczaz-3"})(["flex:2 0 260px;"]),f=o.b.div.withConfig({displayName:"ProductSummary__FlexPrice",componentId:"sc-8fczaz-4"})(["display:flex;justify-content:flex-end;flex:1;"]),b=Object(o.b)(i.a).withConfig({displayName:"ProductSummary__SummaryLink",componentId:"sc-8fczaz-5"})(["display:block;&:not(:last-child){margin-bottom:1rem;}&:hover{text-decoration:none;}"]);n.a=function(e){var n=e.id,t=e.name,a=e.price;return r.a.createElement(b,{to:"/p/"+n},r.a.createElement(c.a,null,r.a.createElement(d,null,r.a.createElement(p,null,r.a.createElement(m,null,t),r.a.createElement(s,null,"#",n)),r.a.createElement(f,null,r.a.createElement(l.a,a)))))}}}]);
//# sourceMappingURL=component---src-templates-product-js-d7c989fe64af3dca8b9f.js.map