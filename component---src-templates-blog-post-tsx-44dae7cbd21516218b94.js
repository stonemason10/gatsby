(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{154:function(e,t,n){"use strict";n.r(t);n(40),n(201),n(58);var r=n(0),a=n.n(r),o=n(174),i=n(176),c=n(280),s=n(455),l=n(456),u=n(454),d=n(460),m=n(157),p=n.n(m),f=n(158),h=n.n(f),b=(n(4),n(246)),y=n(247),v=n(156),w=n(173),E=n(266);function g(e){var t=e.children,n=e.className,r=e.content,o=h()("header",n),i=Object(b.a)(g,e),c=Object(y.a)(g,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}g.handledProps=["as","children","className","content"],g.propTypes={},g.create=Object(E.c)(g,function(e){return{content:e}});var O=g;function j(e){var t=e.children,n=e.className,r=e.content,o=h()("description",n),i=Object(b.a)(j,e),c=Object(y.a)(j,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}j.handledProps=["as","children","className","content"],j.propTypes={},j.create=Object(E.c)(j,function(e){return{content:e}});var _=j;function C(e){var t=e.children,n=e.className,r=e.content,o=h()("extra",n),i=Object(b.a)(C,e),c=Object(y.a)(C,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}C.handledProps=["as","children","className","content"],C.propTypes={},C.create=Object(E.c)(C,function(e){return{content:e}});var S=C;function N(e){var t=e.children,n=e.className,r=e.content,o=h()("meta",n),i=Object(b.a)(N,e),c=Object(y.a)(N,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}N.handledProps=["as","children","className","content"],N.propTypes={},N.create=Object(E.c)(N,function(e){return{content:e}});var k=N;function I(e){var t=e.children,n=e.className,r=e.content,o=e.description,i=e.extra,c=e.header,s=e.meta,l=e.verticalAlign,u=h()(Object(w.f)(l),"content",n),d=Object(b.a)(I,e),m=Object(y.a)(I,e);return v.a.isNil(t)?a.a.createElement(m,p()({},d,{className:u}),O.create(c,{autoGenerateKey:!1}),k.create(s,{autoGenerateKey:!1}),_.create(o,{autoGenerateKey:!1}),S.create(i,{autoGenerateKey:!1}),r):a.a.createElement(m,p()({},d,{className:u}),t)}I.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"],I.propTypes={};var D=I,P=n(449),q=n.n(P),x=n(180),T=n.n(x);function M(e){var t=e.children,n=e.className,r=e.content,o=e.divided,i=e.items,c=e.link,s=e.relaxed,l=e.unstackable,u=h()("ui",Object(w.a)(o,"divided"),Object(w.a)(c,"link"),Object(w.a)(l,"unstackable"),Object(w.b)(s,"relaxed"),"items",n),d=Object(b.a)(M,e),m=Object(y.a)(M,e);if(!v.a.isNil(t))return a.a.createElement(m,p()({},d,{className:u}),t);if(!v.a.isNil(r))return a.a.createElement(m,p()({},d,{className:u}),r);var f=T()(i,function(e){var t=e.childKey,n=q()(e,["childKey"]),r=t||[n.content,n.description,n.header,n.meta].join("-");return a.a.createElement(W,p()({},n,{key:r}))});return a.a.createElement(m,p()({},d,{className:u}),f)}M.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"],M.propTypes={};var U=M,G=n(450);function Q(e){var t=e.size,n=Object(b.a)(Q,e);return a.a.createElement(G.a,p()({},n,{size:t,ui:!!t,wrapped:!0}))}Q.handledProps=["size"],Q.propTypes={},Q.create=Object(E.c)(Q,function(e){return{src:e}});var B=Q;function K(e){var t=e.children,n=e.className,r=e.content,o=e.description,i=e.extra,c=e.header,s=e.image,l=e.meta,u=h()("item",n),d=Object(b.a)(K,e),m=Object(y.a)(K,e);return v.a.isNil(t)?a.a.createElement(m,p()({},d,{className:u}),B.create(s,{autoGenerateKey:!1}),a.a.createElement(D,{content:r,description:o,extra:i,header:c,meta:l})):a.a.createElement(m,p()({},d,{className:u}),t)}K.handledProps=["as","children","className","content","description","extra","header","image","meta"],K.Content=D,K.Description=_,K.Extra=S,K.Group=U,K.Header=O,K.Image=B,K.Meta=k,K.propTypes={};var W=K,A=n(458),R=n(281),z=n(177),L=n(414),H=n(181);n.d(t,"pageQuery",function(){return J});t.default=Object(H.b)(function(e){var t=e.data.post,n=t.frontmatter,a=t.html,m=t.timeToRead,p=n.author.avatar.children[0],f=e.data.post.frontmatter.tags.map(function(e){return r.createElement(c.a,{key:e},r.createElement(o.Link,{to:"/blog/tags/"+e+"/"},e))}),h=e.data.recents.edges.map(function(e){var t=e.node,n=t.frontmatter.author.avatar.children[0],a=Object(i.get)(t,"frontmatter.image.children.0.fixed",{}),c=r.createElement(s.a.Group,null,r.createElement(s.a,null,r.createElement(s.a.Avatar,{src:n.fixed.src,srcSet:n.fixed.srcSet}),r.createElement(s.a.Content,null,r.createElement(s.a.Author,{style:{fontWeight:400}},t.frontmatter.author.id),r.createElement(s.a.Metadata,{style:{margin:0}},t.timeToRead," min read"))));return r.createElement("div",{key:t.fields.slug,style:{paddingBottom:"1em"}},r.createElement(l.a,{as:o.Link,to:t.fields.slug,image:a,header:t.frontmatter.title,extra:c}))}),b=Object(i.get)(n,"image.children.0.fixed",{});return r.createElement(u.a,null,r.createElement(z.a,null),r.createElement(d.a,{vertical:!0,style:{border:"none"}},r.createElement(W.Group,null,r.createElement(W,null,r.createElement(W.Image,{size:"tiny",src:p.fixed.src,srcSet:p.fixed.srcSet,circular:!0}),r.createElement(W.Content,null,r.createElement(W.Description,null,n.author.id),r.createElement(W.Meta,null,n.author.bio),r.createElement(W.Extra,null,n.updatedDate," - ",m," min read")))),r.createElement(A.a,{as:"h1"},n.title)),r.createElement(G.a,Object.assign({},b,{fluid:!0})),r.createElement(d.a,{vertical:!0,style:{border:"none"},dangerouslySetInnerHTML:{__html:a}}),r.createElement(d.a,{vertical:!0},f),e.data.site&&e.data.site.siteMetadata&&e.data.site.siteMetadata.disqus&&r.createElement(d.a,{vertical:!0},r.createElement(L.DiscussionEmbed,{shortname:e.data.site.siteMetadata.disqus,config:{}})),r.createElement(d.a,{vertical:!0},r.createElement(R.a,{padded:!0,centered:!0},h)))});var J="1959793157"},177:function(e,t,n){"use strict";var r=n(0),a=n(460),o=n(458),i=n(200);t.a=function(){return r.createElement(a.a,{vertical:!0},r.createElement(o.a,{as:"h2"},r.createElement(i.a,{name:"newspaper"}),r.createElement(o.a.Content,null,"Blog",r.createElement(o.a.Subheader,null,"All about this starter kit"))))}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var a=this,o=arguments,i=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(a,o)},t),i&&e.apply(a,o)}}},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(415),a=n(416),o=n(417);t.CommentCount=r.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},415:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(275);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},416:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(275);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},449:function(e,t,n){var r=n(238);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-44dae7cbd21516218b94.js.map