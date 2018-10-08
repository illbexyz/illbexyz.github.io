(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.r(t);n(75);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=(n(144),n(149)),c=n.n(l),s=n(226),u=n.n(s),d=n(143),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},this.props.children)},t}(o.a.Component),m=d.a.section.withConfig({displayName:"Column",componentId:"sc-14qbzku-0"})(["display:flex;flex-direction:column;padding:8px 16px;flex:1;@media (max-width:850px){flex:auto;margin:0px 8px;}"]),f=n(243),h=n.n(f),g=n(244),x=d.a.div.withConfig({displayName:"Icon__Container",componentId:"sc-1cwr3al-0"})(["width:40px;height:40px;margin:0px 12px;border-radius:25px;transition:background-color 0.2s,transform 0.2s;&:hover{background-color:#f0ebdf;transform:scale(1.05);}"]),y=Object(d.a)(g.SocialIcon).withConfig({displayName:"Icon__Prova",componentId:"sc-1cwr3al-1"})(["margin:-5px;"]),w=function(e){var t=e.url;return o.a.createElement(x,null,o.a.createElement(y,{url:t}))},E=d.a.div.withConfig({displayName:"Contacts__Container",componentId:"sc-1c5n9oh-0"})(["display:flex;flex-direction:row;flex-shrink:0;height:50px;margin-top:12px;"]),v=function(){return o.a.createElement(E,null,o.a.createElement(w,{url:"https://twitter.com/illbexyz"}),o.a.createElement(w,{url:"https://github.com/illbexyz"}),o.a.createElement(w,{url:"https://linkedin.com/in/albertonicoletti/"}))},b=d.a.div.withConfig({displayName:"Bio__Container",componentId:"sc-1xze3le-0"})(["display:flex;flex-direction:column;align-items:center;background-color:#252c3f;justify-content:space-around;box-shadow:#1d1d1d 0px 0px 16px;margin:0px 16px;@media (max-width:850px){align-self:center;height:97vh;padding:16px 24%;}@media (max-width:520px){align-self:center;padding:16px 60px;width:90%;height:97vh;}@media (min-width:851px){align-self:auto;position:sticky;padding:0px 24px;top:0;min-width:276px;width:276px;height:100vh;}@media (min-width:981px){min-width:350px;width:350px;height:100vh;}"]),k=d.a.div.withConfig({displayName:"Bio__Description",componentId:"sc-1xze3le-1"})(["@media (max-height:670px){overflow-y:scroll;}"]),C=function(){return o.a.createElement(b,null,o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement("img",{src:h.a,alt:"Alberto Nicoletti",style:{width:"150px",height:"150px",borderRadius:"150px",border:"2px solid #F0EBDF",marginBottom:"0px"}}),o.a.createElement("h2",{style:{marginTop:"1.3rem",marginBottom:"1rem"}},"Alberto Nicoletti"),o.a.createElement(k,null,o.a.createElement("p",null,"Hi! I don't really know why I made this website!"),o.a.createElement("p",null,"But since you're here, take a look at my projects!"),o.a.createElement("p",null,"I am currently pursuing a CS Master's Degree at the"," ",o.a.createElement("a",{href:"https://www.unibo.it/it"},"University of Bologna")," and I work as a fullstack developer for"," ",o.a.createElement("a",{href:"https://braimage.it"},"Braimage"),".")),o.a.createElement(v,null)))},I=n(167),_=n(172);n(146);n.d(t,"pageQuery",function(){return N});var j=d.a.div.withConfig({displayName:"pages__Container",componentId:"sc-1nbib7n-0"})(["display:flex;flex:1;@media (max-width:850px){flex-direction:column;}"]),q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.site.siteMetadata.description"),n=c()(this,"props.data.allMarkdownRemark.edges").filter(function(e){return"project"===e.node.frontmatter.type}),a=c()(this,"props.data.allMarkdownRemark.edges").filter(function(e){return"talk"===e.node.frontmatter.type});return o.a.createElement(p,{location:this.props.location},o.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e},o.a.createElement("style",{type:"text/css"},"\n            html, body, ___gatsby {\n              height: 100%;\n            }\n        ")),o.a.createElement(j,null,o.a.createElement(C,null),o.a.createElement(m,null,o.a.createElement(I.a,{projects:n})),o.a.createElement(m,null,a?o.a.createElement(_.a,{talks:a}):o.a.createElement("p",null,"Nothing to see here... yet!"))))},t}(o.a.Component),N=(t.default=q,"2545800660")},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(142),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(145),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(170),r=n.n(a),i=n(171),o=n.n(i);o.a.overrideThemeStyles=function(){return{body:{color:"white",backgroundColor:"#000515"},"h1, h2, h3, h4, h5, h6, h7":{color:"#EA8859"},a:{color:"#EA8859",textShadow:"none",textDecoration:"none",backgroundImage:"none"}}};var l=new r.a(o.a);var c=l.rhythm;l.scale},147:function(e,t,n){"use strict";n(0);var a=n(143).a.span.withConfig({displayName:"ProjectTag",componentId:"s8fw77-0"})(["border-bottom:1px solid #f0ebdf;margin-right:16px;font-size:12px;color:#f0ebdf;"]);t.a=a},148:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},167:function(e,t,n){"use strict";n(168),n(48);var a=n(0),r=n.n(a),i=n(149),o=n.n(i),l=n(144),c=n(147),s=n(146);t.a=function(e){var t=e.projects;return r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/projects"},r.a.createElement("h1",null,"Projects")),t.map(function(e){var t=e.node,n=o()(t,"frontmatter.title")||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},r.a.createElement("a",{style:{boxShadow:"none"},href:t.frontmatter.link},n)),r.a.createElement("p",null,t.frontmatter.tags.map(function(e,t){return r.a.createElement(c.a,{key:t},e)})),r.a.createElement("p",null,t.frontmatter.description),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}))}},172:function(e,t,n){"use strict";n(48);var a=n(0),r=n.n(a),i=n(149),o=n.n(i),l=n(144),c=n(147),s=n(146);t.a=function(e){var t=e.talks;return r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/talks"},r.a.createElement("h1",null,"Talks")),t.map(function(e){var t=e.node,n=o()(t,"frontmatter.title")||t.fields.slug;return console.log(t.html),r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},r.a.createElement("a",{href:t.frontmatter.path},n)),r.a.createElement("p",null,t.frontmatter.tags.map(function(e,t){return r.a.createElement(c.a,{key:t},e)})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("p",null,t.frontmatter.description))}))}},243:function(e,t,n){e.exports=n.p+"static/profile-30cac60b46e867ed8998ffc7030f8b1f.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-361f62b1f46d50e8bb44.js.map