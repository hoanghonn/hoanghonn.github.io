(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(4),u=t.n(i),o=t(149),c=t(144),l=t.n(c),f=t(150),d=t.n(f),s=t(145);function p(){var n=l()(['\n  list-style-type: none;\n  &:before {\n    content: "▹";\n    padding-right: 5px;\n  }\n']);return p=function(){return n},n}function m(){var n=l()(["\n  margin: 20px 10%;\n  padding: 0 20px;\n  line-height: 1.7em;\n"]);return m=function(){return n},n}function v(){var n=l()(["\n  display: inline-block;\n  width: 29%;\n  height: auto;\n  margin: 0 2%;\n"]);return v=function(){return n},n}function g(){var n=l()(["\n  width: 100%;\n"]);return g=function(){return n},n}function h(){var n=l()(["\n  text-align: center;\n  font-size: 18px;\n"]);return h=function(){return n},n}function b(){var n=l()(["\n  margin: 20px 10%;\n  line-height: 1.7em;\n"]);return b=function(){return n},n}function x(){var n=l()(['\n  text-align: center;\n  font-size: 22px;\n  margin: 10px 0 20px 0;\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n']);return x=function(){return n},n}function E(){var n=l()(["\n  padding: 16px 0;\n"]);return E=function(){return n},n}var y=s.b.div(E()),w=s.b.div(x()),A=s.b.div(b()),I=(s.b.div(h()),s.b.div(g())),k=Object(s.b)(d.a)(v()),j=s.b.ul(m()),R=s.b.li(p()),S=function(n){var e=n.data[0].node.frontmatter,t=e.summary,r=(e.quote,e.photo),i=e.details;return a.a.createElement(y,{id:"about"},a.a.createElement(w,null,"about me"),a.a.createElement(A,null,t),a.a.createElement(I,null,a.a.createElement(k,{fluid:r.childImageSharp.fluid}),a.a.createElement(k,{fluid:r.childImageSharp.fluid}),a.a.createElement(k,{fluid:r.childImageSharp.fluid})),a.a.createElement(j,null,i&&i.map(function(n,e){return a.a.createElement(R,null,n)})))},q=(t(77),t(55),t(35),t(78),t(151),t(7)),C=t.n(q);function z(){var n=l()(['\n  list-style-type: none;\n  &:before {\n    content: "▹";\n    padding-right: 5px;\n  }\n']);return z=function(){return n},n}function D(){var n=l()(["\n  padding: 0 20px;\n  text-align: left;\n"]);return D=function(){return n},n}function O(){var n=l()(["\n  text-align: left;\n"]);return O=function(){return n},n}function P(){var n=l()(["\n  text-align: center;\n"]);return P=function(){return n},n}function T(){var n=l()(["\n  text-align: center;\n"]);return T=function(){return n},n}function L(){var n=l()(["\n  text-align: center;\n"]);return L=function(){return n},n}function J(){var n=l()(["\n  padding-bottom: 16px;\n"]);return J=function(){return n},n}function Q(){var n=l()(["\n  margin: 10px 10% 0 10%;\n  line-height: 1.7em;\n"]);return Q=function(){return n},n}var _=s.b.div(Q()),F=s.b.div(J()),M=s.b.div(L()),B=s.b.div(T()),G=s.b.div(P()),H=s.b.div(O()),K=s.b.ul(D()),N=s.b.li(z()),U=function(n){var e=n.content.frontmatter,t=e.location,r=e.range,i=e.url,u=e.companyDescription,o=e.jobDescription;return a.a.createElement(_,null,a.a.createElement(F,null,a.a.createElement(M,null,t),a.a.createElement(B,null,r),a.a.createElement(G,null,a.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},i))),a.a.createElement(H,null,u),a.a.createElement(K,null,o&&o.map(function(n,e){return a.a.createElement(N,null,n)})))};function V(){var n=l()(["\n  text-align: center;\n  padding: 10px 10px;\n  margin: 10px 20%;\n  border: 2px solid black;\n  display: inline-block;\n"]);return V=function(){return n},n}function W(){var n=l()(["\n  text-align: center;\n"]);return W=function(){return n},n}function X(){var n=l()([""]);return X=function(){return n},n}function Y(){var n=l()(['\n  text-align: center;\n  font-size: 24px;\n  margin: 10px 0 20px 0;\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n']);return Y=function(){return n},n}function Z(){var n=l()(["\n  padding: 16px 0;\n"]);return Z=function(){return n},n}var $=s.b.div(Z()),nn=s.b.div(Y()),en=s.b.div(X()),tn=s.b.div(W()),rn=s.b.div(V()),an=function(n){function e(e){var t;return(t=n.call(this,e)||this).toggleActiveId=function(n){t.setState(function(e){return e.isActiveId.has(n)?e.isActiveId.delete(n):e.isActiveId.add(n),{isActiveId:e.isActiveId}})},t.state={isActiveId:new Set([0])},t}return C()(e,n),e.prototype.render=function(){var n=this,e=this.props.data;return a.a.createElement($,{id:"experience"},a.a.createElement(nn,null,"work experience"),a.a.createElement(en,null,e&&e.map(function(e,t){var r=e.node,i=r.frontmatter,u=i.title,o=i.company;return a.a.createElement(tn,null,a.a.createElement(rn,{onClick:function(){return n.toggleActiveId(t)}},u," @ ",o),n.state.isActiveId.has(t)&&a.a.createElement(U,{content:r}))})))},e}(r.Component);function un(){var n=l()(['\n  list-style-type: none;\n  &:before {\n    content: "▹";\n    padding-right: 5px;\n  }\n']);return un=function(){return n},n}function on(){var n=l()(["\n  text-align: left;\n  margin: 20px 10%;\n  padding: 0 20px;\n  line-height: 1.7em;\n"]);return on=function(){return n},n}function cn(){var n=l()(["\n  display: inline-block;\n  width: 46%;\n  height: auto;\n  margin: 0 2%;\n"]);return cn=function(){return n},n}function ln(){var n=l()(["\n  width: 100%;\n"]);return ln=function(){return n},n}function fn(){var n=l()(["\n  margin: 20px 10%;\n  text-align: left;\n"]);return fn=function(){return n},n}function dn(){var n=l()(["\n  text-align: center;\n"]);return dn=function(){return n},n}function sn(){var n=l()(["\n  text-align: center;\n"]);return sn=function(){return n},n}function pn(){var n=l()(["\n  text-align: center;\n"]);return pn=function(){return n},n}function mn(){var n=l()(["\n  margin: 10px 10% 0 10%;\n"]);return mn=function(){return n},n}function vn(){var n=l()(["\n  line-height: 1.7em;\n"]);return vn=function(){return n},n}var gn=s.b.div(vn()),hn=s.b.div(mn()),bn=s.b.div(pn()),xn=s.b.div(sn()),En=s.b.div(dn()),yn=s.b.div(fn()),wn=s.b.div(ln()),An=Object(s.b)(d.a)(cn()),In=s.b.ul(on()),kn=s.b.li(un()),jn=function(n){var e=n.content.frontmatter,t=e.summary,r=e.location,i=e.range,u=(e.url,e.git,e.projectDescription),o=e.photo,c=e.skills;return a.a.createElement(gn,null,a.a.createElement(hn,null,a.a.createElement(xn,null,r),a.a.createElement(En,null,i),a.a.createElement(bn,null,t)),a.a.createElement(yn,null,u),a.a.createElement(wn,null,a.a.createElement(An,{fluid:o.childImageSharp.fluid}),a.a.createElement(An,{fluid:o.childImageSharp.fluid})),a.a.createElement(In,null,c&&c.map(function(n,e){return a.a.createElement(kn,null,n)})))};jn.propTypes={content:u.a.array.isRequired};var Rn=jn;function Sn(){var n=l()(["\n  text-align: center;\n  padding: 10px 10px;\n  margin: 10px 20%;\n  border: 2px solid black;\n  display: inline-block;\n"]);return Sn=function(){return n},n}function qn(){var n=l()(["\n  text-align: center;\n"]);return qn=function(){return n},n}function Cn(){var n=l()([""]);return Cn=function(){return n},n}function zn(){var n=l()(['\n  text-align: center;\n  font-size: 24px;\n  margin: 10px 0 20px 0;\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n']);return zn=function(){return n},n}function Dn(){var n=l()(["\n  padding: 16px 0;\n"]);return Dn=function(){return n},n}var On=s.b.div(Dn()),Pn=s.b.div(zn()),Tn=s.b.div(Cn()),Ln=s.b.div(qn()),Jn=s.b.div(Sn()),Qn=function(n){function e(e){var t;return(t=n.call(this,e)||this).toggleActiveId=function(n){t.setState(function(e){return e.isActiveId.has(n)?e.isActiveId.delete(n):e.isActiveId.add(n),{isActiveId:e.isActiveId}})},t.state={isActiveId:new Set([0,1])},t}return C()(e,n),e.prototype.render=function(){var n=this,e=this.props.data;return a.a.createElement(On,{id:"featured-projects"},a.a.createElement(Pn,null,"featured projects"),a.a.createElement(Tn,null,e&&e.map(function(e,t){var r=e.node,i=r.frontmatter.title;return a.a.createElement(Ln,null,a.a.createElement(Jn,{onClick:function(){return n.toggleActiveId(t)}},i),n.state.isActiveId.has(t)&&a.a.createElement(Rn,{content:r}))})))},e}(r.Component);function _n(){var n=l()(["\n  text-align: left;\n  padding: 10px 10px;\n  line-height: 1.4em;\n"]);return _n=function(){return n},n}function Fn(){var n=l()(["\n  padding: 10px 10px;\n"]);return Fn=function(){return n},n}function Mn(){var n=l()(["\n  text-align: center;\n  border: 2px solid black;\n  text-decoration: none;\n  :visited {\n    text-decoration: none;\n    color: black;\n  }\n"]);return Mn=function(){return n},n}function Bn(){var n=l()(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n"]);return Bn=function(){return n},n}function Gn(){var n=l()(['\n  text-align: center;\n  font-size: 24px;\n  margin: 10px 0 20px 0;\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n']);return Gn=function(){return n},n}function Hn(){var n=l()(["\n  padding: 16px 0;\n"]);return Hn=function(){return n},n}var Kn=s.b.div(Hn()),Nn=s.b.div(Gn()),Un=s.b.div(Bn()),Vn=s.b.a(Mn()),Wn=s.b.div(Fn()),Xn=s.b.div(_n()),Yn=function(n){function e(e){var t;return(t=n.call(this,e)||this).toggleActive=function(){t.setState(function(n){return{isActive:!t.state.isActive}})},t.state={isActive:!0},t}return C()(e,n),e.prototype.render=function(){var n=this,e=this.props.data;return console.log(this.state.isActive),a.a.createElement(Kn,null,a.a.createElement(Nn,{onClick:function(){return n.toggleActive()}},"more projects"),this.state.isActive&&a.a.createElement(Un,null,e&&e.map(function(n,e){var t=n.node.frontmatter,r=t.title,i=t.projectDescription,u=t.url;return a.a.createElement(Vn,{href:u,rel:"noopener noreferrer",target:"_blank"},a.a.createElement(Wn,null,r),a.a.createElement(Xn,null,i))})))},e}(r.Component);t.d(e,"pageQuery",function(){return $n});var Zn=function(n){var e=n.data;return a.a.createElement(o.a,null,a.a.createElement(S,{data:e.about.edges}),a.a.createElement(an,{data:e.experience.edges}),a.a.createElement(Qn,{data:e.featuredProjects.edges}),a.a.createElement(Yn,{data:e.moreProjects.edges}))};Zn.propTypes={data:u.a.object.isRequired};var $n="4237609376";e.default=Zn},146:function(n,e,t){var r;n.exports=(r=t(148))&&r.default||r},147:function(n){n.exports={data:{site:{siteMetadata:{title:"Personal website",author:"@hoanghonn",social:{facebook:"facebook.com/hoanghonnnn"}}}}}},148:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),a=t.n(r),i=t(4),u=t.n(i),o=t(58),c=t(2),l=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(o.a,Object.assign({location:e,pageResources:t},t.json)):null};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=l},149:function(n,e,t){"use strict";var r=t(144),a=t.n(r),i=t(147),u=t(0),o=t.n(u),c=t(4),l=t.n(c),f=(t(33),t(146),o.a.createContext({})),d=function(n){return o.a.createElement(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var s=t(145),p=t(7),m=t.n(p);function v(){var n=a()(['\n  position: relative;\n  text-align: center;\n  margin: 5% auto;\n  font-size: 60px;\n  letter-spacing: 0 px;\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n']);return v=function(){return n},n}function g(){var n=a()(["\n  position: relative;\n  text-align: center;\n  margin-bottom: 20px;\n"]);return g=function(){return n},n}function h(){var n=a()(["\n  margin: 0 10px;\n  position: relative;\n  text-decoration: none;\n  font-size: 17px;\n  font-family: raleway, sans-serif;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 400;\n"]);return h=function(){return n},n}function b(){var n=a()(["\n  position: relative;\n  width: 100%;\n  height: auto;\n"]);return b=function(){return n},n}var x=s.b.div(b()),E=s.b.a(h()),y=s.b.div(g()),w=s.b.div(v()),A=function(n){function e(){return n.apply(this,arguments)||this}return m()(e,n),e.prototype.render=function(){return o.a.createElement(x,null,o.a.createElement(w,null,"hoang nguyen"),o.a.createElement(y,null,o.a.createElement(E,{href:"#about"},"about"),o.a.createElement(E,{href:"#experience"},"experience"),o.a.createElement(E,{href:"#featured-projects"},"projects"),o.a.createElement(E,{href:"#blog"},"blog"),o.a.createElement(E,{href:"#contact"},"contact")))},e}(u.Component);function I(){var n=a()(["\n  text-align: center;\n  padding: 20px 0;\n"]);return I=function(){return n},n}var k=s.b.div(I()),j=function(n){function e(){return n.apply(this,arguments)||this}return m()(e,n),e.prototype.render=function(){return o.a.createElement(k,null,"©2019 Copyright: hoangtnguyen.com")},e}(u.Component);function R(){var n=a()(["\n    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\n\n    @import url('https://fonts.googleapis.com/css?family=Raleway:500&display=swap');\n\n    @import url('https://fonts.googleapis.com/css?family=Raleway:700&display=swap');\n\n    @import url('https://fonts.googleapis.com/css?family=Lusitana:400,700&display=swap');\n\n    @font-face {\n        font-family: 'Athene';\n        src: url('../../public/fonts/Athene.otf') format('opentype');\n    }\n\n    html {\n        overflow-x: hidden;    \n    }\n  \n    body {\n        margin: 0px;\n        background: white;\n        font-size: 15px;\n        font-family: 'Lusitana', serif;\n    }\n"]);return R=function(){return n},n}var S=Object(s.a)(R());function q(){var n=a()(["\n  position: relative;\n  height: 100%;\n  width: 40%%;\n  margin: 0 30%;\n"]);return q=function(){return n},n}function C(){var n=a()(["\n  position: absolute;\n  margin: 0 0;\n  width: 100%;\n"]);return C=function(){return n},n}var z=s.b.div(C()),D=s.b.div(q()),O="3570121027";e.a=function(n){var e=n.children;return o.a.createElement(d,{query:O,render:function(n){return o.a.createElement(z,{id:"root"},o.a.createElement(S,null),o.a.createElement(D,null,o.a.createElement(A,null),e,o.a.createElement(j,null)))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-index-js-4210ead46cbc9e6a4642.js.map