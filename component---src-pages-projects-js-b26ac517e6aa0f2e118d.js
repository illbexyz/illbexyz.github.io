(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});var r=n(0),a=n.n(r),o=n(143),i=n(167),u=o.a.section.withConfig({displayName:"projects__Container",componentId:"gspz3c-0"})(["margin-left:auto;margin-right:auto;@media (max-width:900px){width:100%;padding:0px 8px;}@media (min-width:901px){width:900px;}"]);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return a.a.createElement(u,null,a.a.createElement(i.a,{projects:t}))};var c="3603436148"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(142),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(145),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),p=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},146:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(170),a=n.n(r),o=n(171),i=n.n(o);i.a.overrideThemeStyles=function(){return{body:{color:"white",backgroundColor:"#000515"},"h1, h2, h3, h4, h5, h6, h7":{color:"#EA8859"},a:{color:"#EA8859",textShadow:"none",textDecoration:"none",backgroundImage:"none"}}};var u=new a.a(i.a);var c=u.rhythm;u.scale},147:function(e,t,n){"use strict";n(0);var r=n(143).a.span.withConfig({displayName:"ProjectTag",componentId:"s8fw77-0"})(["border-bottom:1px solid #f0ebdf;margin-right:16px;font-size:12px;color:#f0ebdf;"]);t.a=r},148:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(49),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,n){"use strict";n(168),n(48);var r=n(0),a=n.n(r),o=n(149),i=n.n(o),u=n(144),c=n(147),l=n(146);t.a=function(e){var t=e.projects;return a.a.createElement("div",null,a.a.createElement(u.Link,{to:"/projects"},a.a.createElement("h1",null,"Projects")),t.map(function(e){var t=e.node,n=i()(t,"frontmatter.title")||t.fields.slug;return a.a.createElement("div",{key:t.fields.slug},a.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},a.a.createElement("a",{style:{boxShadow:"none"},href:t.frontmatter.link},n)),a.a.createElement("p",null,t.frontmatter.tags.map(function(e,t){return a.a.createElement(c.a,{key:t},e)})),a.a.createElement("p",null,t.frontmatter.description),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.html}}))}))}},168:function(e,t,n){"use strict";n(169)("link",function(e){return function(t){return e(this,"a","href",t)}})},169:function(e,t,n){var r=n(6),a=n(16),o=n(25),i=/"/g,u=function(e,t,n,r){var a=String(o(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),u+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-b26ac517e6aa0f2e118d.js.map