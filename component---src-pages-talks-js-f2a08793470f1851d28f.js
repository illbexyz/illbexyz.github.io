(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});var a=n(0),r=n.n(a),o=n(143),i=n(172),u=o.a.section.withConfig({displayName:"talks__Container",componentId:"sc-1t9k8cq-0"})(["margin-left:auto;margin-right:auto;@media (max-width:900px){width:100%;padding:0px 8px;}@media (min-width:901px){width:900px;}"]);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(u,null,r.a.createElement(i.a,{talks:t}))};var c="33908606"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(142),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(145),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(170),r=n.n(a),o=n(171),i=n.n(o);i.a.overrideThemeStyles=function(){return{body:{color:"white",backgroundColor:"#000515"},"h1, h2, h3, h4, h5, h6, h7":{color:"#EA8859"},a:{color:"#EA8859",textShadow:"none",textDecoration:"none",backgroundImage:"none"}}};var u=new r.a(i.a);var c=u.rhythm;u.scale},147:function(e,t,n){"use strict";n(0);var a=n(143).a.span.withConfig({displayName:"ProjectTag",componentId:"s8fw77-0"})(["border-bottom:1px solid #f0ebdf;margin-right:16px;font-size:12px;color:#f0ebdf;"]);t.a=a},148:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(49),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},172:function(e,t,n){"use strict";n(48);var a=n(0),r=n.n(a),o=n(149),i=n.n(o),u=n(144),c=n(147),l=n(146);t.a=function(e){var t=e.talks;return r.a.createElement("div",null,r.a.createElement(u.Link,{to:"/talks"},r.a.createElement("h1",null,"Talks")),t.map(function(e){var t=e.node,n=i()(t,"frontmatter.title")||t.fields.slug;return console.log(t.html),r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},r.a.createElement("a",{href:t.frontmatter.path},n)),r.a.createElement("p",null,t.frontmatter.tags.map(function(e,t){return r.a.createElement(c.a,{key:t},e)})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("p",null,t.frontmatter.description))}))}}}]);
//# sourceMappingURL=component---src-pages-talks-js-f2a08793470f1851d28f.js.map