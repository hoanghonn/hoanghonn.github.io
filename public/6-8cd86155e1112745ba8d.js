(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,r){"use strict";var i=r(8);t.__esModule=!0,t.default=void 0;var a,n=i(r(7)),o=i(r(39)),s=i(r(86)),l=i(r(87)),d=i(r(0)),u=i(r(4)),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,i=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),g=function(e){var t=c(e),r=f(t);return p[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,v=m&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map(function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:n}),d.default.createElement("source",{media:a,srcSet:r,sizes:n}))})}function S(e){var t=[],r=[];return e.forEach(function(e){return(e.media?t:r).push(e)}),t.concat(r)}function _(e){return e.map(function(e){var t=e.src,r=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:i})})}function E(e){return e.map(function(e){var t=e.src,r=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:i})})}function w(e,t){var r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+o+s+r+i+t+n+a+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,i=e.generateSources,a=e.spreadProps,n=d.default.createElement(z,(0,l.default)({src:t},a));return r.length>1?d.default.createElement("picture",null,i(r),n):n},z=d.default.forwardRef(function(e,t){var r=e.sizes,i=e.srcSet,a=e.src,n=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:r,srcSet:i,src:a},p,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&g(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!h&&v&&!t.critical&&!r.seenBefore;var i=t.critical||m&&(h||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,n.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,i=e.className,a=e.style,n=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:k?1:0,transition:R?"opacity "+v+"ms":"none"},s),x="boolean"==typeof m?"lightgray":m,j={transitionDelay:v+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&j,s,f),N={title:t,alt:this.state.isVisible?"":r,style:T,className:p};if(g){var C=g,P=C[0];return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&j)}),P.base64&&d.default.createElement(I,{src:P.base64,spreadProps:N,imageVariants:C,generateSources:E}),P.tracedSVG&&d.default.createElement(I,{src:P.tracedSVG,spreadProps:N,imageVariants:C,generateSources:_}),this.state.isVisible&&d.default.createElement("picture",null,b(C),d.default.createElement(z,{alt:r,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:r,title:t,loading:w},P,{imageVariants:C}))}}))}if(h){var F=h,W=F[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&j)}),W.base64&&d.default.createElement(I,{src:W.base64,spreadProps:N,imageVariants:F,generateSources:E}),W.tracedSVG&&d.default.createElement(I,{src:W.tracedSVG,spreadProps:N,imageVariants:F,generateSources:_}),this.state.isVisible&&d.default.createElement("picture",null,b(F),d.default.createElement(z,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:r,title:t,loading:w},W,{imageVariants:F}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});k.propTypes={resolutions:R,sizes:V,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([V,u.default.arrayOf(V)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var x=k;t.default=x},151:function(e,t,r){"use strict";var i=r(161),a=r(153);e.exports=r(162)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return i.def(a(this,"Set"),e=0===e?0:e,e)}},i)},152:function(e,t,r){var i=r(36)("meta"),a=r(11),n=r(26),o=r(25).f,s=0,l=Object.isExtensible||function(){return!0},d=!r(19)(function(){return l(Object.preventExtensions({}))}),u=function(e){o(e,i,{value:{i:"O"+ ++s,w:{}}})},c=e.exports={KEY:i,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,i)){if(!l(e))return"F";if(!t)return"E";u(e)}return e[i].i},getWeak:function(e,t){if(!n(e,i)){if(!l(e))return!0;if(!t)return!1;u(e)}return e[i].w},onFreeze:function(e){return d&&c.NEED&&l(e)&&!n(e,i)&&u(e),e}}},153:function(e,t,r){var i=r(11);e.exports=function(e,t){if(!i(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},161:function(e,t,r){"use strict";var i=r(25).f,a=r(85),n=r(76),o=r(20),s=r(74),l=r(75),d=r(57),u=r(84),c=r(82),f=r(18),p=r(152).fastKey,g=r(153),h=f?"_s":"size",m=function(e,t){var r,i=p(t);if("F"!==i)return e._i[i];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,d){var u=e(function(e,i){s(e,u,t,"_i"),e._t=t,e._i=a(null),e._f=void 0,e._l=void 0,e[h]=0,null!=i&&l(i,r,e[d],e)});return n(u.prototype,{clear:function(){for(var e=g(this,t),r=e._i,i=e._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete r[i.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var r=g(this,t),i=m(r,e);if(i){var a=i.n,n=i.p;delete r._i[i.i],i.r=!0,n&&(n.n=a),a&&(a.p=n),r._f==i&&(r._f=a),r._l==i&&(r._l=n),r[h]--}return!!i},forEach:function(e){g(this,t);for(var r,i=o(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(i(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!m(g(this,t),e)}}),f&&i(u.prototype,"size",{get:function(){return g(this,t)[h]}}),u},def:function(e,t,r){var i,a,n=m(e,t);return n?n.v=r:(e._l=n={i:a=p(t,!0),k:t,v:r,p:i=e._l,n:void 0,r:!1},e._f||(e._f=n),i&&(i.n=n),e[h]++,"F"!==a&&(e._i[a]=n)),e},getEntry:m,setStrong:function(e,t,r){d(e,t,function(e,r){this._t=g(e,t),this._k=r,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))},r?"entries":"values",!r,!0),c(t)}}},162:function(e,t,r){"use strict";var i=r(6),a=r(12),n=r(14),o=r(76),s=r(152),l=r(75),d=r(74),u=r(11),c=r(19),f=r(83),p=r(38),g=r(163);e.exports=function(e,t,r,h,m,v){var y=i[e],b=y,S=m?"set":"add",_=b&&b.prototype,E={},w=function(e){var t=_[e];n(_,e,"delete"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,r){return t.call(this,0===e?0:e,r),this})};if("function"==typeof b&&(v||_.forEach&&!c(function(){(new b).entries().next()}))){var L=new b,O=L[S](v?{}:-0,1)!=L,I=c(function(){L.has(1)}),z=f(function(e){new b(e)}),k=!v&&c(function(){for(var e=new b,t=5;t--;)e[S](t,t);return!e.has(-0)});z||((b=t(function(t,r){d(t,b,e);var i=g(new y,t,b);return null!=r&&l(r,m,i[S],i),i})).prototype=_,_.constructor=b),(I||k)&&(w("delete"),w("has"),m&&w("get")),(k||O)&&w(S),v&&_.clear&&delete _.clear}else b=h.getConstructor(t,e,m,S),o(b.prototype,r),s.NEED=!0;return p(b,e),E[e]=b,a(a.G+a.W+a.F*(b!=y),E),v||h.setStrong(b,e,m),b}},163:function(e,t,r){var i=r(11),a=r(164).set;e.exports=function(e,t,r){var n,o=t.constructor;return o!==r&&"function"==typeof o&&(n=o.prototype)!==r.prototype&&i(n)&&a&&a(e,n),e}},164:function(e,t,r){var i=r(11),a=r(5),n=function(e,t){if(a(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{(i=r(20)(Function.call,r(165).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return n(e,r),t?e.__proto__=r:i(e,r),e}}({},!1):void 0),check:n}},165:function(e,t,r){var i=r(81),a=r(56),n=r(37),o=r(80),s=r(26),l=r(79),d=Object.getOwnPropertyDescriptor;t.f=r(18)?d:function(e,t){if(e=n(e),t=o(t,!0),l)try{return d(e,t)}catch(r){}if(s(e,t))return a(!i.f.call(e,t),e[t])}}}]);
//# sourceMappingURL=6-8cd86155e1112745ba8d.js.map