(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,n,t){"use strict";t.r(n);t(58);var o=t(78),r=t.n(o),a=t(7),i=t.n(a),c=t(0),u=t.n(c),l=t(193),s=t(161),m=t(158),p=t(162),d=t(159),f=m.b.button.withConfig({displayName:"styled__ButtonWrapper",componentId:"c2vyi7-0"})(["padding:0.4rem 0.8rem;border-radius:3px;border:0.1rem solid ",";background:",";color:",";"],Object(p.a)(.2,d.a.REBECCA_PURPLE),d.a.REBECCA_PURPLE,d.a.WHITE),b=function(e){var n=e.children,t=r()(e,["children"]);return u.a.createElement(f,Object.assign({type:"button"},t),n)};t.d(n,"default",function(){return h}),t.d(n,"_frontmatter",function(){return y});var g={},h=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=s.b,t}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=r()(e,["components"]);return u.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},g,t),components:n},u.a.createElement(l.MDXTag,{name:"h1",components:n},"Markdown Example"),u.a.createElement(l.MDXTag,{name:"p",components:n},"This is a markdown (",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".mdx"),") file that is being transformed with ",u.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://gatsby-mdx.netlify.com/"}},u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"gatsby-mdx")),"."),u.a.createElement(l.MDXTag,{name:"p",components:n},"What's cool about it is you can mix markdown with React components:"),u.a.createElement("p",null,u.a.createElement(b,{onClick:function(){return alert("You clicked the button! 🍪")}},"I'm a React Button Component 🙌")),u.a.createElement(l.MDXTag,{name:"p",components:n},"and the ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ResetStyle />")," component in the ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Layout />")," is providing a consistent style for all the pages with minimal effort"),u.a.createElement(l.MDXTag,{name:"p",components:n},"You can also mix ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".js")," and ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",u.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".mdx")," files in your pages folder as needed"))},n}(u.a.Component),y={}},155:function(e,n,t){var o;e.exports=(o=t(157))&&o.default||o},156:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=t(34),u=t.n(c);t.d(n,"a",function(){return u.a});t(155);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,n,t){"use strict";t.r(n);var o=t(13),r=t.n(o),a=t(0),i=t.n(a),c=t(4),u=t.n(c),l=t(56),s=t(2),m=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,r()({location:n,pageResources:t},t.json))};m.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=m},159:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o={WHITE:"#ffffff",BLACK:"#000000",REBECCA_PURPLE:"#663399",BLUE:"#1a58cc"}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"XYZ Clothing"}}}}},161:function(e,n,t){"use strict";var o=t(160),r=t(0),a=t.n(r),i=t(4),c=t.n(i),u=t(163),l=t.n(u),s=t(156),m=t(55),p=function(){var e=Object(r.useContext)(m.b),n=e.currency,t=e.setCurrency,o=e.exchangeRates;return a.a.createElement("header",null,a.a.createElement("span",{className:"logo"},"XYZ Clothing")," ",a.a.createElement("select",{value:n,onChange:function(e){t(e.target.value)}},o.map(function(e){return a.a.createElement("option",{key:e.base},e.base)})))},d=t(78),f=t.n(d),b=t(158),g=b.b.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-99vn9v-0"})(["margin:0 auto;max-width:960px;padding:1.5rem 1rem;",""],function(e){return e.isDebug&&"background-color: orange;"}),h=function(e){var n=e.children,t=f()(e,["children"]);return a.a.createElement(g,t,n)};h.defaultProps={isDebug:!1},h.propTypes={isDebug:c.a.bool};var y=t(164),v=t.n(y),E=t(162),w=t(159);function x(){var e=v()(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  body {\n    background: ",";\n  }\n\n  h1 {\n    ","\n    font-size: 2.441rem;\n  }\n\n  h2 {\n    ","\n    font-size: 1.953rem;\n  }\n\n  h3 {\n    ","\n    font-size: 1.563rem;\n  }\n\n  h4 {\n    ","\n    font-size: 1.25rem;\n  }\n\n  h5 {\n    ","\n    font-size: 1rem;\n  }\n\n  h6 {\n    ","\n    font-size: 0.8rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    background-color: transparent;\n    color: ",";\n    text-decoration: none;\n\n    &:focus,\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  }\n\n  ul, ol {\n    margin-bottom: 1rem;\n    padding-left: 2rem;\n\n    ul, ol {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  hr {\n    margin: 1rem 0;\n    height: 0.2rem;\n    background: ",";\n    border: none;\n  }\n\n  blockquote {\n    margin: 0 0 1rem 1rem;\n    padding: 0.25rem 0 0.25rem 1rem;\n    border-left: 0.2rem solid ",";\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  code {\n    padding: 0.05rem 0.4rem;\n    background-color: ",";\n  }\n\n  pre {\n    margin: 0;\n    margin-bottom: 1rem;\n    padding: 1rem;\n    background-color: ",";\n    font-size: 0.8rem;\n\n    code {\n      padding: 0;\n      background-color: transparent;\n    }\n  }\n"]);return x=function(){return e},e}var C="\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: 700;\n",k=Object(b.a)(x(),"\n  html{line-height:1.15;-webkit-text-size-adjust:100%}\n  body{margin:0}\n  main{display:block}\n  h1{font-size:2em;margin:.67em 0}\n  hr{box-sizing:content-box;height:0;overflow:visible}\n  pre{font-family:monospace,monospace;font-size:1em}\n  a{background-color:transparent}\n  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}\n  b,strong{font-weight:bolder}\n  code,kbd,samp{font-family:monospace,monospace;font-size:1em}\n  small{font-size:80%}\n  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n  sub{bottom:-.25em}\n  sup{top:-.5em}\n  img{border-style:none}\n  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}\n  button,input{overflow:visible}\n  button,select{text-transform:none}\n  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}\n  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}\n  fieldset{padding:.35em .75em .625em}\n  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\n  progress{vertical-align:baseline}\n  textarea{overflow:auto}\n  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}\n  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n  [type=search]::-webkit-search-decoration{-webkit-appearance:none}\n  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\n  details{display:block}\n  summary{display:list-item}\n  template{display:none}\n  [hidden]{display:none}\n",w.a.BLACK,w.a.WHITE,C,C,C,C,C,C,w.a.BLUE,Object(E.a)(.2,w.a.BLUE),Object(E.b)(w.a.BLACK,.15),Object(E.b)(w.a.BLACK,.15),Object(E.b)(w.a.BLACK,.075),Object(E.b)(w.a.BLACK,.075)),O=function(e){var n=e.children;return a.a.createElement(s.b,{query:"755544856",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,null),a.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement(p,null),a.a.createElement(h,null,n))},data:o})};O.propTypes={children:c.a.node.isRequired},t.d(n,"a",function(){return O});n.b=O},178:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(0),i=(o=a)&&o.__esModule?o:{default:o};var c=i.default.createContext({}),u=c.Provider,l=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,o=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(n,["components"]);return i.default.createElement(l,null,function(n){return i.default.createElement(e,r({components:t||n},o))})}};n.default=function(e){var n=e.components,t=e.children;return i.default.createElement(u,{value:n},t)}},193:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(194);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=t(178);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},194:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=t(0),c=(o=i)&&o.__esModule?o:{default:o},u=t(178);var l={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.Component),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,u=e.components,s=void 0===u?{}:u,m=e.Layout,p=e.layoutProps,d=s[t+"."+n]||s[n]||l[n]||n;return m?c.default.createElement(m,r({components:s},p),c.default.createElement(d,a,i)):c.default.createElement(d,a,i)}}]),n}();n.default=(0,u.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-mdx-example-md-44fd9b889eabe52b251a.js.map