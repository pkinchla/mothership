!function(){function e(t,n,o){function r(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){return r(t[a][1][e]||e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}return e}()({1:[function(e,t,n){!function(){"use strict";function e(e,t){var n,o,r,i,a=T;for(i=arguments.length;i-- >2;)U.push(arguments[i]);for(t&&null!=t.children&&(U.length||U.push(t.children),delete t.children);U.length;)if((o=U.pop())&&void 0!==o.pop)for(i=o.length;i--;)U.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(r=!1)),r&&n?a[a.length-1]+=o:a===T?a=[o]:a.push(o),n=r;var u=new L;return u.nodeName=e,u.children=a,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==A.vnode&&A.vnode(u),u}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}function r(t,o){return e(t.nodeName,n(n({},t.attributes),o),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(e){!e.__d&&(e.__d=!0)&&1==W.push(e)&&(A.debounceRendering||P)(a)}function a(){for(var e;e=W.pop();)e.__d&&N(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&l(e,t.nodeName):n||e._componentConstructor===t.nodeName}function l(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function c(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n,r,i){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)o(n,null),o(r,e);else if("class"!==t||i)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===j.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,d,u):e.removeEventListener(t,d,u),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!i&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var l=i&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e){return this.__l[e.type](A.event&&A.event(e)||e)}function h(){for(var e;e=D.shift();)A.afterMount&&A.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,o,r,i){I++||(q=null!=r&&void 0!==r.ownerSVGElement,z=null!=e&&!("__preactattr_"in e));var a=m(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--I||(z=!1,i||h()),a}function m(e,t,n,o,r){var i=e,a=q;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0))),i.__preactattr_=!0,i;var u=t.nodeName;if("function"==typeof u)return k(e,t,n,o);if(q="svg"===u||"foreignObject"!==u&&q,u=String(u),(!e||!l(e,u))&&(i=c(u,q),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0)}var s=i.firstChild,f=i.__preactattr_,p=t.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!z&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&v(i,p,n,o,z||null!=f.dangerouslySetInnerHTML),g(i,t.attributes,f),q=a,i}function v(e,t,n,o,r){var i,a,l,s,c,p=e.childNodes,d=[],h={},_=0,v=0,b=p.length,g=0,w=t?t.length:0;if(0!==b)for(var C=0;C<b;C++){var x=p[C],N=x.__preactattr_,k=w&&N?x._component?x._component.__k:N.key:null;null!=k?(_++,h[k]=x):(N||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(d[g++]=x)}if(0!==w)for(var C=0;C<w;C++){s=t[C],c=null;var k=s.key;if(null!=k)_&&void 0!==h[k]&&(c=h[k],h[k]=void 0,_--);else if(v<g)for(i=v;i<g;i++)if(void 0!==d[i]&&u(a=d[i],s,r)){c=a,d[i]=void 0,i===g-1&&g--,i===v&&v++;break}c=m(c,s,n,o),l=p[C],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?f(l):e.insertBefore(c,l))}if(_)for(var C in h)void 0!==h[C]&&y(h[C],!1);for(;v<=g;)void 0!==(c=d[g--])&&y(c,!1)}function y(e,t){var n=e._component;n?S(n):(null!=e.__preactattr_&&o(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||f(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;y(e,!0),e=t}}function g(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||p(e,o,n[o],n[o]=void 0,q);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||p(e,o,n[o],n[o]=t[o],q)}function w(e,t,n){var o,r=B.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):(o=new E(t,n),o.constructor=e,o.render=C);r--;)if(B[r].constructor===e)return o.__b=B[r].__b,B.splice(r,1),o;return o}function C(e,t,n){return this.constructor(e,n)}function x(e,t,n,r,a){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===A.syncComponentUpdates&&e.base?i(e):N(e,1,a)),o(e.__r,e))}function N(e,t,o,r){if(!e.__x){var i,a,u,l=e.props,c=e.state,f=e.context,p=e.__p||l,d=e.__s||c,m=e.__c||f,v=e.base,b=e.__b,g=v||b,C=e._component,k=!1,E=m;if(e.constructor.getDerivedStateFromProps&&(c=n(n({},c),e.constructor.getDerivedStateFromProps(l,c)),e.state=c),v&&(e.props=p,e.state=d,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,c,f)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(l,c,f),e.props=l,e.state=c,e.context=f),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!k){i=e.render(l,c,f),e.getChildContext&&(f=n(n({},f),e.getChildContext())),v&&e.getSnapshotBeforeUpdate&&(E=e.getSnapshotBeforeUpdate(p,d));var O,M,L=i&&i.nodeName;if("function"==typeof L){var U=s(i);a=C,a&&a.constructor===L&&U.key==a.__k?x(a,U,1,f,!1):(O=a,e._component=a=w(L,U,f),a.__b=a.__b||b,a.__u=e,x(a,U,0,f,!1),N(a,1,o,!0)),M=a.base}else u=g,O=C,O&&(u=e._component=null),(g||1===t)&&(u&&(u._component=null),M=_(u,i,f,o||!v,g&&g.parentNode,!0));if(g&&M!==g&&a!==C){var T=g.parentNode;T&&M!==T&&(T.replaceChild(M,g),O||(g._component=null,y(g,!1)))}if(O&&S(O),e.base=M,M&&!r){for(var P=e,j=e;j=j.__u;)(P=j).base=M;M._component=P,M._componentConstructor=P.constructor}}for(!v||o?D.push(e):k||(e.componentDidUpdate&&e.componentDidUpdate(p,d,E),A.afterUpdate&&A.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);I||r||h()}}function k(e,t,n,o){for(var r=e&&e._component,i=r,a=e,u=r&&e._componentConstructor===t.nodeName,l=u,c=s(t);r&&!l&&(r=r.__u);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(x(r,c,3,n,o),e=r.base):(i&&!u&&(S(i),e=a=null),r=w(t.nodeName,c,n),e&&!r.__b&&(r.__b=e,a=null),x(r,c,1,n,o),e=r.base,a&&e!==a&&(a._component=null,y(a,!1))),e}function S(e){A.beforeUnmount&&A.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?S(n):t&&(null!=t.__preactattr_&&o(t.__preactattr_.ref,null),e.__b=t,f(t),B.push(e),b(t)),o(e.__r,null)}function E(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function O(e,t,n){return _(n,e,{},!1,t,!1)}function M(){return{}}var L=function(){},A={},U=[],T=[],P="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,j=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],D=[],I=0,q=!1,z=!1,B=[];n(E.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),i(this)},forceUpdate:function(e){e&&this.__h.push(e),N(this,2)},render:function(){}});var V={h:e,createElement:e,cloneElement:r,createRef:M,Component:E,render:O,rerender:a,options:A};void 0!==t?t.exports=V:self.preact=V}()},{}],2:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(){function e(){o(this,e),this.options={selector:document.querySelectorAll("img"),loaded:!1}}return i(e,[{key:"setup",value:function(){for(var e=document.getElementsByTagName("img"),t=0;t<e.length;t++){var n=function(){if(!e[t].hasAttribute("data-thumb"))return{v:void 0};var n=document.createElement("img"),o=document.createElement("img"),r=e[t].parentNode,i=e[t],a=!1,u=void 0;o.src=e[t].getAttribute("data-thumb"),o.className="lazy",n.src=e[t].src,n.className="fadeIn",n.setAttribute("srcSet",e[t].getAttribute("srcSet")),n.setAttribute("sizes",e[t].getAttribute("sizes")),n.setAttribute("alt",e[t].getAttribute("alt")),r.removeChild(i),u=setInterval(function(){a?(clearInterval(u),r.removeChild(r.lastChild),r.appendChild(n)):r.appendChild(o)}),n.addEventListener("load",function(){setTimeout(function(){return a=!0},250)},!0)}();if("object"===(void 0===n?"undefined":r(n)))return n.v}}},{key:"init",value:function(){this.setup()}}]),e}();n.default=a},{}],3:[function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=e("preact"),l=function(){function e(){i(this,e),this.options={selector:document.querySelector(".js-main-navigation"),target:document.querySelector(".js-site-header")}}return a(e,[{key:"setupComponent",value:function(){var e=this,t=this,n=function(){for(var t=[],n=0;n<e.options.selector.firstElementChild.children.length;n++){var o=e.options.selector.firstElementChild.children[n],r={class:o.className.trim(),link:o.firstElementChild.href,text:o.firstElementChild.textContent};t.push(r)}return t},l=function(e){function l(){i(this,l);var e=o(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));return e.state={menuOpen:!1,menuData:n()},e}return r(l,e),a(l,[{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"componentWillMount",value:function(){t.options.selector.parentNode.removeChild(t.options.selector)}},{key:"render",value:function(){var e=this;return(0,u.h)("nav",{id:"site-navigation"},(0,u.h)("button",{className:"main-nav-toggle "+(this.state.menuOpen?" close-state":""),onClick:function(){return e.toggleMenu()}},(0,u.h)("svg",{class:"main-nav-button",viewBox:"0 0 225 164.7",width:"22.5",height:"16.47"},(0,u.h)("rect",{class:"one",y:"0",width:"225",height:"23.7"}),(0,u.h)("rect",{class:"two",y:"70.5",width:"225",height:"23.7"}),(0,u.h)("rect",{class:"three",y:"141",width:"225",height:"23.7"})),(0,u.h)("span",{className:"label"},this.state.menuOpen?"Close":"Menu")),(0,u.h)("ul",{id:"primary-menu",className:"menu "+(this.state.menuOpen?"open":"closed")},this.state.menuData.map(function(e,t){return(0,u.h)("li",{key:t,className:e.class},(0,u.h)("a",{href:e.link},e.text))})))}}]),l}(u.Component);(0,u.render)((0,u.h)(l,null),this.options.target)}},{key:"init",value:function(){this.setupComponent()}}]),e}();n.default=l},{preact:1}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=e("./MobileMenu"),i=o(r),a=e("./LazyImages"),u=o(a);!function(e){(new i.default).init(),(new u.default).init();var t="localhost"===window.location.hostname;"serviceWorker"in navigator&&!t&&navigator.serviceWorker.register("/sw.js").then(function(){return navigator.serviceWorker.ready}),function(){var t=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,n=navigator.userAgent.toLowerCase().indexOf("opera")>-1,o=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(t||n||o)&&e.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,n=location.hash.substring(1);/^[A-z0-9_-]+$/.test(n)&&(t=e.getElementById(n))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1)}()}(document)},{"./LazyImages":2,"./MobileMenu":3}]},{},[4]);