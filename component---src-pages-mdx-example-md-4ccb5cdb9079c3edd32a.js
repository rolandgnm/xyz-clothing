(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,n,t){"use strict";t.r(n);t(57);var r=t(79),a=t.n(r),o=t(7),i=t.n(o),c=t(0),u=t.n(c),l=t(457),s=t(169),m=t(157),p=t(181),d=t(158),f=m.b.button.withConfig({displayName:"styled__ButtonWrapper",componentId:"sc-1rl234v-0"})(["padding:0.4rem 0.8rem;border-radius:3px;border:0.1rem solid ",";background:",";color:",";"],Object(p.a)(.2,d.a.REBECCA_PURPLE),d.a.REBECCA_PURPLE,d.a.WHITE),b=function(e){var n=e.children,t=a()(e,["children"]);return u.a.createElement(f,Object.assign({type:"button"},t),n)};t.d(n,"default",function(){return h}),t.d(n,"_frontmatter",function(){return y});var g={},h=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=s.b,t}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return u.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},g,t),components:n},u.a.createElement(l.MDXTag,{name:"h1",components:n},"Markdown Example"),u.a.createElement(l.MDXTag,{name:"p",components:n},"This is a markdown (",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".mdx"),") file that is being transformed with ",u.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/"}},u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"gatsby-mdx")),"."),u.a.createElement(l.MDXTag,{name:"p",components:n},"What's cool about it is you can mix markdown with React components:"),u.a.createElement("p",null,u.a.createElement(b,{onClick:function(){return alert("You clicked the button! 🍪")}},"I'm a React Button Component 🙌")),u.a.createElement(l.MDXTag,{name:"p",components:n},"and the ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ResetStyle />")," component in the ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Layout />")," is providing a consistent style for all the pages with minimal effort"),u.a.createElement(l.MDXTag,{name:"p",components:n},"You can also mix ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".js")," and ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".mdx")," files in your pages folder as needed"))},n}(u.a.Component),y={}},158:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a});var r={HEADER_BAR:"#24292e",WHITE:"#ffffff",BLACK:"#000000",REBECCA_PURPLE:"#663399",BLUE:"#1a58cc",TEXT_WEAK:"rgba(0,0,0,.4)",TEXT:"rgba(0,0,0,.87)"},a={MAX_WIDTH:"64rem"}},159:function(e,n,t){var r;e.exports=(r=t(167))&&r.default||r},160:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),o=t(4),i=t.n(o),c=t(34),u=t.n(c);t.d(n,"a",function(){return u.a});t(159);var l=a.a.createContext({}),s=function(e){return a.a.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,n,t){"use strict";t.r(n);var r=t(11),a=t.n(r),o=t(0),i=t.n(o),c=t(4),u=t.n(c),l=t(56),s=t(2),m=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,a()({location:n,pageResources:t},t.json))};m.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=m},168:function(e){e.exports={data:{site:{siteMetadata:{title:"XYZ Clothing"}}}}},169:function(e,n,t){"use strict";var r=t(168),a=t(0),o=t.n(a),i=t(4),c=t.n(i),u=t(188),l=t.n(u),s=t(160),m=t(157),p=t(158),d=t(55),f=t(466),b=t(189),g=Object(b.a)(function(e){return e.map(function(e){return{text:e.base,value:e.base}})}),h=function(e){var n=e.currency,t=e.onChange,r=e.exchangeRates;return o.a.createElement(f.a,{inline:!0,options:g(r),value:n,onChange:function(e,n){var r=n.value;return t(r)}})},y=m.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1ym6w85-0"})(["background-color:",";color:white;padding:0.75em;"],p.a.HEADER_BAR),v=m.b.div.withConfig({displayName:"Header__HeaderInner",componentId:"sc-1ym6w85-1"})(["max-width:",";margin:auto;display:flex;flex-flow:nowrap row;justify-content:space-between;"],p.b.MAX_WIDTH),E=function(){var e=Object(a.useContext)(d.b),n=e.currency,t=e.setCurrency,r=e.exchangeRates;return o.a.createElement(y,null,o.a.createElement(v,null,o.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",o.a.createElement(h,{currency:n,exchangeRates:r,onChange:t})))},w=t(79),x=t.n(w),C=m.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-1dse63j-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(e){return e.isDebug&&"background-color: orange;"}),_=function(e){var n=e.children,t=x()(e,["children"]);return o.a.createElement(C,t,n)};_.defaultProps={isDebug:!1},_.propTypes={isDebug:c.a.bool};t(191);var k=t(192),O=t.n(k),j=t(181);function T(){var e=O()(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ",";\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n"]);return T=function(){return e},e}var M="\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n",D=Object(m.a)(T(),"\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",p.a.BLACK,p.a.WHITE,M,M,M,M,M,M,p.a.BLUE,Object(j.a)(.2,p.a.BLUE),Object(j.b)(p.a.BLACK,.15),Object(j.b)(p.a.BLACK,.15),Object(j.b)(p.a.BLACK,.075),Object(j.b)(p.a.BLACK,.075)),z=function(e){var n=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,null),o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(E,null),o.a.createElement(_,null,n))},data:r})};z.propTypes={children:c.a.node.isRequired},t.d(n,"a",function(){return z});n.b=z},298:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r,a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=t(0),i=(r=o)&&r.__esModule?r:{default:r};var c=i.default.createContext({}),u=c.Provider,l=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["components"]);return i.default.createElement(l,null,function(n){return i.default.createElement(e,a({components:t||n},r))})}};n.default=function(e){var n=e.components,t=e.children;return i.default.createElement(u,{value:n},t)}},457:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(458);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=t(298);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},458:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(0),c=(r=i)&&r.__esModule?r:{default:r},u=t(298);var l={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,r=e.props,o=void 0===r?{}:r,i=e.children,u=e.components,s=void 0===u?{}:u,m=e.Layout,p=e.layoutProps,d=s[t+"."+n]||s[n]||l[n]||n;return m?c.default.createElement(m,a({components:s},p),c.default.createElement(d,o,i)):c.default.createElement(d,o,i)}}]),n}();n.default=(0,u.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-mdx-example-md-4ccb5cdb9079c3edd32a.js.map