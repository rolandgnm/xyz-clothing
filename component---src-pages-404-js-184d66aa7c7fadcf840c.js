(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(169);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},158:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r});var a={HEADER_BAR:"#24292e",WHITE:"#ffffff",BLACK:"#000000",REBECCA_PURPLE:"#663399",BLUE:"#1a58cc",TEXT_WEAK:"rgba(0,0,0,.4)",TEXT:"rgba(0,0,0,.87)"},r={MAX_WIDTH:"64rem"}},159:function(n,e,t){var a;n.exports=(a=t(167))&&a.default||a},160:function(n,e,t){"use strict";t.d(e,"b",function(){return l});var a=t(0),r=t.n(a),o=t(4),i=t.n(o),c=t(34),u=t.n(c);t.d(e,"a",function(){return u.a});t(159);var s=r.a.createContext({}),l=function(n){return r.a.createElement(s.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(n,e,t){"use strict";t.r(e);var a=t(11),r=t.n(a),o=t(0),i=t.n(o),c=t(4),u=t.n(c),s=t(56),l=t(2),m=function(n){var e=n.location,t=l.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(s.a,r()({location:e,pageResources:t},t.json))};m.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=m},168:function(n){n.exports={data:{site:{siteMetadata:{title:"XYZ Clothing"}}}}},169:function(n,e,t){"use strict";var a=t(168),r=t(0),o=t.n(r),i=t(4),c=t.n(i),u=t(188),s=t.n(u),l=t(160),m=t(157),d=t(158),p=t(55),b=t(466),f=t(189),g=Object(f.a)(function(n){return n.map(function(n){return{text:n.base,value:n.base}})}),h=function(n){var e=n.currency,t=n.onChange,a=n.exchangeRates;return o.a.createElement(b.a,{inline:!0,options:g(a),value:e,onChange:function(n,e){var a=e.value;return t(a)}})},y=m.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1ym6w85-0"})(["background-color:",";color:white;padding:0.75em;"],d.a.HEADER_BAR),x=m.b.div.withConfig({displayName:"Header__HeaderInner",componentId:"sc-1ym6w85-1"})(["max-width:",";margin:auto;display:flex;flex-flow:nowrap row;justify-content:space-between;"],d.b.MAX_WIDTH),w=function(){var n=Object(r.useContext)(p.b),e=n.currency,t=n.setCurrency,a=n.exchangeRates;return o.a.createElement(y,null,o.a.createElement(x,null,o.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",o.a.createElement(h,{currency:e,exchangeRates:a,onChange:t})))},E=t(79),v=t.n(E),k=m.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-1dse63j-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(n){return n.isDebug&&"background-color: orange;"}),z=function(n){var e=n.children,t=v()(n,["children"]);return o.a.createElement(k,t,e)};z.defaultProps={isDebug:!1},z.propTypes={isDebug:c.a.bool};t(191);var C=t(192),R=t.n(C),j=t(181);function A(){var n=R()(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ",";\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n"]);return A=function(){return n},n}var B="\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n",T=Object(m.a)(A(),"\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",d.a.BLACK,d.a.WHITE,B,B,B,B,B,B,d.a.BLUE,Object(j.a)(.2,d.a.BLUE),Object(j.b)(d.a.BLACK,.15),Object(j.b)(d.a.BLACK,.15),Object(j.b)(d.a.BLACK,.075),Object(j.b)(d.a.BLACK,.075)),_=function(n){var e=n.children;return o.a.createElement(l.b,{query:"755544856",render:function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement(s.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(w,null),o.a.createElement(z,null,e))},data:a})};_.propTypes={children:c.a.node.isRequired},t.d(e,"a",function(){return _});e.b=_}}]);
//# sourceMappingURL=component---src-pages-404-js-184d66aa7c7fadcf840c.js.map