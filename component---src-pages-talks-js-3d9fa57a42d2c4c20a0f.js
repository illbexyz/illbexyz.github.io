(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(0),r=n.n(a),i=n(143),o=n(146),c=n.n(o),l=n(175),u=n(151),s=i.a.section.withConfig({displayName:"talks__Container",componentId:"sc-1t9k8cq-0"})(["margin-left:auto;margin-right:auto;@media (max-width:900px){width:100%;padding:0px 8px;}@media (min-width:901px){width:900px;}"]);t.default=function(e){var t=e.data.allMarkdownRemark&&e.data.allMarkdownRemark.edges||[];return r.a.createElement(u.a,null,r.a.createElement(c.a,{title:"Alberto Nicoletti | Talks"}),r.a.createElement(s,null,r.a.createElement(l.a,{talks:t})))};var m="33908606"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(145),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},147:function(e,t,n){"use strict";n(0);var a=n(143).a.span.withConfig({displayName:"ProjectTag",componentId:"s8fw77-0"})(["border-bottom:1px solid #f0ebdf;margin-right:16px;font-size:12px;color:#f0ebdf;"]);t.a=a},148:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(173),r=n.n(a),i=n(174),o=n.n(i);o.a.overrideThemeStyles=function(){return{body:{color:"white",backgroundColor:"#000515"},"h1, h2, h3, h4, h5, h6, h7":{color:"#EA8859"},a:{color:"#EA8859",textShadow:"none",textDecoration:"none",backgroundImage:"none"}}};var c=new r.a(o.a);var l=c.rhythm;c.scale},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(49),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(146),l=n.n(c),u=n(152),s=n.n(u),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:"My website"}),o.a.createElement("meta",{name:"author",content:"Alberto Nicoletti"}),o.a.createElement("meta",{name:"keywords",content:"alberto, nicoletti, illbe, illbexyz, albyx, albyxyz, web, programmer, bologna, italy, javascript, typescript, reason, reasonml, computer science"}),o.a.createElement("meta",{name:"twitter:site",content:"https://illbe.xyz"}),o.a.createElement("meta",{name:"twitter:creator",content:"@illbexyz"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:"Alberto Nicoletti"}),o.a.createElement("meta",{name:"twitter:description",content:"My website"}),o.a.createElement("meta",{name:"twitter:image",content:s.a}),o.a.createElement("meta",{name:"og:type",content:"article"}),o.a.createElement("meta",{name:"og:title",content:"Alberto Nicoletti"}),o.a.createElement("meta",{name:"og:description",content:"My website"}),o.a.createElement("html",{lang:"en"}),o.a.createElement("style",{type:"text/css"},"\n            html, body, ___gatsby {\n              height: 100%;\n            }\n        ")),this.props.children)},t}(o.a.Component);t.a=m},152:function(e,t,n){e.exports=n.p+"static/doge-icon-fddb37135a8e0d8d2ff97e447080bafc.png"},175:function(e,t,n){"use strict";n(48);var a=n(0),r=n.n(a),i=n(150),o=n.n(i),c=n(144),l=n(147),u=n(148);t.a=function(e){var t=e.talks,n=void 0===t?[]:t;return r.a.createElement("div",null,r.a.createElement(c.Link,{to:"/talks"},r.a.createElement("h1",null,"Talks")),n.length?n.map(function(e){var t=e.node,n=o()(t,"frontmatter.title")||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},r.a.createElement("a",{href:t.frontmatter.path},n)),r.a.createElement("p",null,t.frontmatter.tags.map(function(e,t){return r.a.createElement(l.a,{key:t},e)})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("p",null,t.frontmatter.description))}):r.a.createElement("p",null,"Nothing to see here... yet!"))}}}]);
//# sourceMappingURL=component---src-pages-talks-js-3d9fa57a42d2c4c20a0f.js.map