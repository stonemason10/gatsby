(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t);a(201),a(58);var n=a(0),r=a.n(n),l=a(174),c=a(454),i=a(455),o=a(456),s=a(460),u=a(281),d=a(177),m=a(157),p=a.n(m),h=a(160),f=a.n(h),v=a(161),b=a.n(v),g=a(162),E=a.n(g),O=a(163),j=a.n(O),N=a(164),k=a.n(N),y=a(57),C=a.n(y),x=a(56),A=a.n(x),I=a(180),w=a.n(I),T=a(166),P=a.n(T),S=a(158),L=a.n(S),D=(a(4),a(173)),G=a(246),z=a(247),K=a(156),R=a(266);function V(e){var t=e.children,a=e.className,n=e.content,l=L()(a,"description"),c=Object(G.a)(V,e),i=Object(z.a)(V,e);return r.a.createElement(i,p()({},c,{className:l}),K.a.isNil(t)?n:t)}V.handledProps=["as","children","className","content"],V.propTypes={},V.create=Object(R.c)(V,function(e){return{content:e}});var W=V;function H(e){var t=e.children,a=e.className,n=e.content,l=L()("header",a),c=Object(G.a)(H,e),i=Object(z.a)(H,e);return r.a.createElement(i,p()({},c,{className:l}),K.a.isNil(t)?n:t)}H.handledProps=["as","children","className","content"],H.propTypes={},H.create=Object(R.c)(H,function(e){return{content:e}});var J=H;function M(e){var t=e.children,a=e.className,n=e.content,l=e.description,c=e.floated,i=e.header,o=e.verticalAlign,s=L()(Object(D.e)(c,"floated"),Object(D.f)(o),"content",a),u=Object(G.a)(M,e),d=Object(z.a)(M,e);return K.a.isNil(t)?r.a.createElement(d,p()({},u,{className:s}),J.create(i),W.create(l),n):r.a.createElement(d,p()({},u,{className:s}),t)}M.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],M.propTypes={},M.create=Object(R.c)(M,function(e){return{content:e}});var B=M,Q=a(200);function q(e){var t=e.className,a=e.verticalAlign,n=L()(Object(D.f)(a),t),l=Object(G.a)(q,e);return r.a.createElement(Q.a,p()({},l,{className:n}))}q.handledProps=["className","verticalAlign"],q.propTypes={},q.create=Object(R.c)(q,function(e){return{name:e}});var F=q,U=a(214),X=a.n(U),Y=a(450),Z=function(e){function t(){var e,a;f()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=E()(this,(e=j()(t)).call.apply(e,[this].concat(r))),A()(C()(C()(a)),"handleClick",function(e){a.props.disabled||P()(a.props,"onClick",e,a.props)}),a}return k()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,a=e.active,l=e.children,c=e.className,i=e.content,o=e.description,s=e.disabled,u=e.header,d=e.icon,m=e.image,h=e.value,f=Object(z.a)(t,this.props),v=L()(Object(D.a)(a,"active"),Object(D.a)(s,"disabled"),Object(D.a)("li"!==f,"item"),c),b=Object(G.a)(t,this.props),g="li"===f?{value:h}:{"data-value":h};if(!K.a.isNil(l))return r.a.createElement(f,p()({},g,{role:"listitem",className:v,onClick:this.handleClick},b),l);var E=F.create(d,{autoGenerateKey:!1}),O=Y.a.create(m,{autoGenerateKey:!1});if(!Object(n.isValidElement)(i)&&X()(i))return r.a.createElement(f,p()({},g,{role:"listitem",className:v,onClick:this.handleClick},b),E||O,B.create(i,{autoGenerateKey:!1,defaultProps:{header:u,description:o}}));var j=J.create(u,{autoGenerateKey:!1}),N=W.create(o,{autoGenerateKey:!1});return E||O?r.a.createElement(f,p()({},g,{role:"listitem",className:v,onClick:this.handleClick},b),E||O,(i||j||N)&&r.a.createElement(B,null,j,N,i)):r.a.createElement(f,p()({},g,{role:"listitem",className:v,onClick:this.handleClick},b),j,N,i)}}]),t}(n.Component);A()(Z,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),Z.propTypes={},Z.create=Object(R.c)(Z,function(e){return{content:e}});var $=Z;function _(e){var t=e.children,a=e.className,n=e.content,l=Object(G.a)(_,e),c=Object(z.a)(_,e),i=L()(Object(D.a)("ul"!==c&&"ol"!==c,"list"),a);return r.a.createElement(c,p()({},l,{className:i}),K.a.isNil(t)?n:t)}_.handledProps=["as","children","className","content"],_.propTypes={};var ee=_,te=function(e){function t(){var e,a;f()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=E()(this,(e=j()(t)).call.apply(e,[this].concat(r))),A()(C()(C()(a)),"handleItemOverrides",function(e){return{onClick:function(t,n){P()(e,"onClick",t,n),P()(a.props,"onItemClick",t,n)}}}),a}return k()(t,e),b()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,l=a.bulleted,c=a.celled,i=a.children,o=a.className,s=a.content,u=a.divided,d=a.floated,m=a.horizontal,h=a.inverted,f=a.items,v=a.link,b=a.ordered,g=a.relaxed,E=a.selection,O=a.size,j=a.verticalAlign,N=L()("ui",O,Object(D.a)(n,"animated"),Object(D.a)(l,"bulleted"),Object(D.a)(c,"celled"),Object(D.a)(u,"divided"),Object(D.a)(m,"horizontal"),Object(D.a)(h,"inverted"),Object(D.a)(v,"link"),Object(D.a)(b,"ordered"),Object(D.a)(E,"selection"),Object(D.b)(g,"relaxed"),Object(D.e)(d,"floated"),Object(D.f)(j),"list",o),k=Object(G.a)(t,this.props),y=Object(z.a)(t,this.props);return K.a.isNil(i)?K.a.isNil(s)?r.a.createElement(y,p()({role:"list",className:N},k),w()(f,function(t){return $.create(t,{overrideProps:e.handleItemOverrides})})):r.a.createElement(y,p()({role:"list",className:N},k),s):r.a.createElement(y,p()({role:"list",className:N},k),i)}}]),t}(n.Component);A()(te,"Content",B),A()(te,"Description",W),A()(te,"Header",J),A()(te,"Icon",F),A()(te,"Item",$),A()(te,"List",ee),A()(te,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]),te.propTypes={};var ae=te,ne=function(e){return n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Header,null,"Tags")),n.createElement(o.a.Content,null,n.createElement(ae,null,e.tags.map(function(t){var a=t.fieldValue===e.tag,r=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(ae.Item,{as:"span",key:t.fieldValue},n.createElement(ae.Icon,{name:"tag",color:a?"blue":null}),n.createElement(ae.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:r},t.fieldValue," (",t.totalCount,")")))}))))},re=(a(197),a(199),a(86),a(193),a(457)),le=a(176),ce=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(re.a,{pagination:!0},Object(le.times)(e.pageCount,function(a){var r=(a+1).toString(),l=e.pageCount<10?5:3,c=+r-l<+t&&+r+l>+t,i=+r===e.pageCount;return c||1==+r||i?n.createElement(re.a.Item,{key:r,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+r+"/",name:r,active:t===r}):+r==e.pageCount-1||2==+r?n.createElement(re.a.Item,{key:r,disabled:!0},"..."):null}))},ie=a(181);a.d(t,"pageQuery",function(){return oe});t.default=Object(ie.b)(function(e){var t=e.data.tags.group,a=e.data.posts.edges,r=e.location.pathname,m=Math.ceil(e.data.posts.totalCount/10),p=n.createElement(c.a,null,a.map(function(e){var t=e.node,a=t.frontmatter,r=t.timeToRead,c=t.fields.slug,s=t.excerpt,u=a.author.avatar.children[0],d=Object(le.get)(a,"image.children.0.fixed",{}),m=n.createElement(i.a.Group,null,n.createElement(i.a,null,n.createElement(i.a.Avatar,{src:u.fixed.src,srcSet:u.fixed.srcSet}),n.createElement(i.a.Content,null,n.createElement(i.a.Author,{style:{fontWeight:400}},a.author.id),n.createElement(i.a.Metadata,{style:{margin:0}},a.updatedDate," - ",r," min read")))),p=n.createElement(o.a.Description,null,s,n.createElement("br",null),n.createElement(l.Link,{to:c},"Read more…"));return n.createElement(o.a,{key:c,fluid:!0,image:d,header:a.title,extra:m,description:p})}));return n.createElement(c.a,null,n.createElement(d.a,null),n.createElement(s.a,{vertical:!0},n.createElement(u.a,{padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{style:{maxWidth:600}},p,n.createElement(s.a,{vertical:!0,textAlign:"center"},n.createElement(ce,{Link:l.Link,pathname:r,pageCount:m}))),n.createElement("div",null,n.createElement(ne,{Link:l.Link,tags:t,tag:e.pageContext.tag})))))});var oe="30877247"},177:function(e,t,a){"use strict";var n=a(0),r=a(460),l=a(458),c=a(200);t.a=function(){return n.createElement(r.a,{vertical:!0},n.createElement(l.a,{as:"h2"},n.createElement(c.a,{name:"newspaper"}),n.createElement(l.a.Content,null,"Blog",n.createElement(l.a.Subheader,null,"All about this starter kit"))))}},197:function(e,t,a){"use strict";a(198);var n=a(5),r=a(84),l=a(19),c=/./.toString,i=function(e){a(20)(RegExp.prototype,"toString",e,!0)};a(21)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=c.name&&i(function(){return c.call(this)})},198:function(e,t,a){a(19)&&"g"!=/./g.flags&&a(29).f(RegExp.prototype,"flags",{configurable:!0,get:a(84)})},199:function(e,t,a){var n=Date.prototype,r=n.toString,l=n.getTime;new Date(NaN)+""!="Invalid Date"&&a(20)(n,"toString",function(){var e=l.call(this);return e==e?r.call(this):"Invalid Date"})}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-43fca557e6957174bbee.js.map