!function r(o,i,l){function _(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return _(o[t][1][e]||e)},n,n.exports,r,o,i,l)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)_(l[e]);return _}({1:[function(e,t,n){var b,r,o,i,l,_,S={},k=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(e,t){for(var n in t)e[n]=t[n];return e}function T(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var r,o,i,l=arguments,_={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:_[i]=t[i];if(3<arguments.length)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(_.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===_[i]&&(_[i]=e.defaultProps[i]);return g(e,_,r,o,null)}function g(e,t,n,r,o){o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++b.__v:o};return null!=b.vnode&&b.vnode(o),o}function P(e){return e.children}function C(e,t){this.props=e,this.context=t}function E(e,t){if(null==t)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?E(e):null}function c(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!s.__r++||l!==b.debounceRendering)&&((l=b.debounceRendering)||i)(s)}function s(){for(var e;s.__r=o.length;)e=o.sort(function(e,t){return e.__v.__b-t.__v.__b}),o=[],e.some(function(e){var t,n,r,o,i;e.__d&&(o=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(e=w({},r)).__v=r.__v+1,A(i,r,e,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?E(r):o,r.__h),d(n,r),r.__e!=o&&function e(t){var n,r;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(r=t.__k[n])&&null!=r.__e){t.__e=t.__c.base=r.__e;break}return e(t)}}(r)))})}function x(e,t,n,r,o,i,l,_,u,a){var c,s,f,p,h,d,m,y=r&&r.__k||k,v=y.length;for(n.__k=[],c=0;c<t.length;c++)if(null!=(p=n.__k[c]=null==(p=t[c])||"boolean"==typeof p?null:"string"==typeof p||"number"==typeof p?g(null,p,null,null,p):Array.isArray(p)?g(P,{children:p},null,null,null):0<p.__b?g(p.type,p.props,p.key,null,p.__v):p)){if(p.__=n,p.__b=n.__b+1,null===(f=y[c])||f&&p.key==f.key&&p.type===f.type)y[c]=void 0;else for(s=0;s<v;s++){if((f=y[s])&&p.key==f.key&&p.type===f.type){y[s]=void 0;break}f=null}A(e,p,f=f||S,o,i,l,_,u,a),h=p.__e,(s=p.ref)&&f.ref!=s&&(m=m||[],f.ref&&m.push(f.ref,null,p),m.push(s,p.__c||h,p)),null!=h?(null==d&&(d=h),"function"==typeof p.type&&null!=p.__k&&p.__k===f.__k?p.__d=u=function e(t,n,r){var o,i;for(o=0;o<t.__k.length;o++)(i=t.__k[o])&&(i.__=t,n="function"==typeof i.type?e(i,n,r):O(r,i,i,t.__k,i.__e,n));return n}(p,u,e):u=O(e,p,f,y,h,u),a||"option"!==n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&f.__e==u&&u.parentNode!=e&&(u=E(f))}for(n.__e=d,c=v;c--;)null!=y[c]&&("function"==typeof n.type&&null!=y[c].__e&&y[c].__e==n.__d&&(n.__d=E(r,c+1)),function e(t,n,r){var o,i,l;if(b.unmount&&b.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||H(o,null,n)),r||"function"==typeof t.type||(r=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){b.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&e(o[l],n,r);null!=i&&T(i)}(y[c],y[c]));if(m)for(c=0;c<m.length;c++)H(m[c],m[++c],m[++c])}function O(e,t,n,r,o,i){var l,_,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(_=i,u=0;(_=_.nextSibling)&&u<r.length;u+=2)if(_==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function f(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function N(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||f(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||f(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=(t.toLowerCase()in e?t.toLowerCase():t).slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?h:p,i):e.removeEventListener(t,i?h:p,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function p(e){this.l[e.type+!1](b.event?b.event(e):e)}function h(e){this.l[e.type+!0](b.event?b.event(e):e)}function A(e,t,n,r,o,i,l,_,u){var a,c,s,f,p,h,d,m,y,v,g=t.type;if(void 0===t.constructor){null!=n.__h&&(u=n.__h,_=t.__e=n.__e,t.__h=null,i=[_]),(a=b.__b)&&a(t);try{e:if("function"==typeof g){if(d=t.props,m=(a=g.contextType)&&r[a.__c],y=a?m?m.props.value:a.__:r,n.__c?h=(c=t.__c=n.__c).__=c.__E:("prototype"in g&&g.prototype.render?t.__c=c=new g(d,y):(t.__c=c=new C(d,y),c.constructor=g,c.render=M),m&&m.sub(c),c.props=d,c.state||(c.state={}),c.context=y,c.__n=r,v=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=g.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=w({},c.__s)),w(c.__s,g.getDerivedStateFromProps(d,c.__s))),s=c.props,f=c.state,v)null==g.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==g.getDerivedStateFromProps&&d!==s&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(d,y),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(d,c.__s,y)||t.__v===n.__v){c.props=d,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),(c.__v=t).__e=n.__e,t.__k=n.__k,c.__h.length&&l.push(c);break e}null!=c.componentWillUpdate&&c.componentWillUpdate(d,c.__s,y),null!=c.componentDidUpdate&&c.__h.push(function(){c.componentDidUpdate(s,f,p)})}c.context=y,c.props=d,c.state=c.__s,(a=b.__r)&&a(t),c.__d=!1,c.__v=t,c.__P=e,a=c.render(c.props,c.state,c.context),c.state=c.__s,null!=c.getChildContext&&(r=w(w({},r),c.getChildContext())),v||null==c.getSnapshotBeforeUpdate||(p=c.getSnapshotBeforeUpdate(s,f)),v=null!=a&&a.type===P&&null==a.key?a.props.children:a,x(e,Array.isArray(v)?v:[v],t,n,r,o,i,l,_,u),c.base=t.__e,t.__h=null,c.__h.length&&l.push(c),h&&(c.__E=c.__=null),c.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,o,i,l,_){var u,a,c,s,f=n.props,p=t.props,h=t.type,d=0;if("svg"===h&&(o=!0),null!=i)for(;d<i.length;d++)if((u=i[d])&&(u===e||(h?u.localName==h:3==u.nodeType))){e=u,i[d]=null;break}if(null==e){if(null===h)return document.createTextNode(p);e=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,p.is&&p),i=null,_=!1}if(null===h)f===p||_&&e.data===p||(e.data=p);else{if(i=i&&k.slice.call(e.childNodes),a=(f=n.props||S).dangerouslySetInnerHTML,c=p.dangerouslySetInnerHTML,!_){if(null!=i)for(f={},s=0;s<e.attributes.length;s++)f[e.attributes[s].name]=e.attributes[s].value;(c||a)&&(c&&(a&&c.__html==a.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(function(e,t,n,r,o){for(var i in n)"children"===i||"key"===i||i in t||N(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||N(e,i,t[i],n[i],r)}(e,p,f,o,_),c)t.__k=[];else if(d=t.props.children,x(e,Array.isArray(d)?d:[d],t,n,r,o&&"foreignObject"!==h,i,l,e.firstChild,_),null!=i)for(d=i.length;d--;)null!=i[d]&&T(i[d]);_||("value"in p&&void 0!==(d=p.value)&&(d!==e.value||"progress"===h&&!d)&&N(e,"value",d,f.value,!1),"checked"in p&&void 0!==(d=p.checked)&&d!==e.checked&&N(e,"checked",d,f.checked,!1))}return e}(n.__e,t,n,r,o,i,l,u);(a=b.diffed)&&a(t)}catch(e){t.__v=null,!u&&null==i||(t.__e=_,t.__h=!!u,i[i.indexOf(_)]=null),b.__e(e,t,n)}}}function d(e,t){b.__c&&b.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){b.__e(e,t.__v)}})}function H(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){b.__e(e,n)}}function M(e,t,n){return this.constructor(e,n)}function m(e,t,n){var r,o,i;b.__&&b.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],A(t,e=(!r&&n||t).__k=a(P,null,[e]),o||S,S,void 0!==t.ownerSVGElement,!r&&n?[n]:!o&&t.firstChild?k.slice.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),d(i,e)}b={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e},__v:0},r=function(e){return null!=e&&void 0===e.constructor},C.prototype.setState=function(e,t){var n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w({},this.state);(e="function"==typeof e?e(w({},n),this.props):e)&&w(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),c(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),c(this))},C.prototype.render=P,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s.__r=0,_=0,n.render=m,n.hydrate=function e(t,n){m(t,n,e)},n.createElement=a,n.h=a,n.Fragment=P,n.createRef=function(){return{current:null}},n.isValidElement=r,n.Component=C,n.cloneElement=function(e,t,n){var r,o,i,l=arguments,_=w({},e.props);for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:_[i]=t[i];if(3<arguments.length)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);return null!=n&&(_.children=n),g(e.type,_,r||e.key,o||e.ref,null)},n.createContext=function(e,r){e={__c:r="__cC"+_++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,t;return this.getChildContext||(n=[],((t={})[r]=this).getChildContext=function(){return t},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(c)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return e.Provider.__=e.Consumer.contextType=e},n.toChildArray=function t(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){t(e,n)}):n.push(e)),n},n.options=b},{}],2:[function(e,t,n){var o,i,r,l=e("preact"),_=0,u=[],a=l.options.__b,c=l.options.__r,s=l.options.diffed,f=l.options.__c,p=l.options.unmount;function h(e,t){l.options.__h&&l.options.__h(i,e,_||t),_=0;t=i.__H||(i.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function d(e){return _=1,m(T,e)}function m(e,t,n){var r=h(o++,2);return r.t=e,r.__c||(r.__=[n?n(t):T(void 0,t),function(e){e=r.t(r.__[0],e);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=i),r.__}function y(e,t){var n=h(o++,4);!l.options.__s&&w(n.__H,t)&&(n.__=e,n.__H=t,i.__h.push(n))}function v(e,t){var n=h(o++,7);return w(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function g(){u.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(S),t.__H.__h.forEach(k),t.__H.__h=[]}catch(e){t.__H.__h=[],l.options.__e(e,t.__v)}}),u=[]}l.options.__b=function(e){i=null,a&&a(e)},l.options.__r=function(e){c&&c(e),o=0;e=(i=e.__c).__H;e&&(e.__h.forEach(S),e.__h.forEach(k),e.__h=[])},l.options.diffed=function(e){s&&s(e);e=e.__c;e&&e.__H&&e.__H.__h.length&&(1!==u.push(e)&&r===l.options.requestAnimationFrame||((r=l.options.requestAnimationFrame)||function(e){function t(){clearTimeout(r),b&&cancelAnimationFrame(n),setTimeout(e)}var n,r=setTimeout(t,100);b&&(n=requestAnimationFrame(t))})(g)),i=void 0},l.options.__c=function(e,n){n.some(function(t){try{t.__h.forEach(S),t.__h=t.__h.filter(function(e){return!e.__||k(e)})}catch(e){n.some(function(e){e.__h&&(e.__h=[])}),n=[],l.options.__e(e,t.__v)}}),f&&f(e,n)},l.options.unmount=function(e){p&&p(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(S)}catch(e){l.options.__e(e,t.__v)}};var b="function"==typeof requestAnimationFrame;function S(e){var t=i;"function"==typeof e.__c&&e.__c(),i=t}function k(e){var t=i;e.__c=e.__(),i=t}function w(n,e){return!n||n.length!==e.length||e.some(function(e,t){return e!==n[t]})}function T(e,t){return"function"==typeof t?t(e):t}n.useState=d,n.useReducer=m,n.useEffect=function(e,t){var n=h(o++,3);!l.options.__s&&w(n.__H,t)&&(n.__=e,n.__H=t,i.__H.__h.push(n))},n.useLayoutEffect=y,n.useRef=function(e){return _=5,v(function(){return{current:e}},[])},n.useImperativeHandle=function(e,t,n){_=6,y(function(){"function"==typeof e?e(t()):e&&(e.current=t())},null==n?n:n.concat(e))},n.useMemo=v,n.useCallback=function(e,t){return _=8,v(function(){return e},t)},n.useContext=function(e){var t=i.context[e.__c],n=h(o++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(i)),t.props.value):e.__},n.useDebugValue=function(e,t){l.options.useDebugValue&&l.options.useDebugValue(t?t(e):e)},n.useErrorBoundary=function(e){var t=h(o++,10),n=d();return t.__=e,i.componentDidCatch||(i.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}},{preact:1}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("preact"),i=e("preact/hooks");function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var l,_=e[Symbol.iterator]();!(r=(l=_.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==_.return||_.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e=function(e,t){var r=Array.from(t.firstElementChild.children).map(function(e){return{link:e.firstElementChild.href,text:e.firstElementChild.textContent}});document.querySelector(".menu-link").remove(),document.querySelector(".js-main-navigation-items").remove(),(0,o.render)((0,o.h)(function(){var e=l((0,i.useState)(!1),2),t=e[0],n=e[1];return(0,o.h)(o.Fragment,null,(0,o.h)("button",{className:"main-nav-toggle ".concat(t?" close-state":""),onClick:function(){return n(!t)}},(0,o.h)("svg",{class:"main-nav-button",viewBox:"0 0 225 164.7",width:"22.5",height:"16.47"},(0,o.h)("rect",{class:"one",y:"0",width:"225",height:"23.7"}),(0,o.h)("rect",{class:"two",y:"70.5",width:"225",height:"23.7"}),(0,o.h)("rect",{class:"three",y:"141",width:"225",height:"23.7"})),(0,o.h)("span",{className:"label"},t?"Close":"Menu")),(0,o.h)("ul",{id:"primary-menu",className:"menu ".concat(t?"open":"closed")},r.map(function(e,t){var n=RegExp("".concat(e.text.toLowerCase())).test(window.location.pathname);return(0,o.h)("li",{key:t,className:"menu-item"},(0,o.h)("a",{"aria-current":n&&!0,href:e.link},e.text))})))},null),e)};n.default=e},{preact:1,"preact/hooks":2}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){if(!e)return;var r=e.querySelector("header"),o=e.querySelector(".content"),u=e.querySelector(".categories"),a=e.querySelector("figure").innerHTML;(0,s.removeAllChildNodes)(e),(0,c.render)((0,c.h)(function(){var e=window.POST_SETTINGS.posts_per_page,i=(0,s.handlePosts)(),t=(0,f.useReducer)(i.reducer,i.initialState),n=(n=2,function(e){if(Array.isArray(e))return e}(t=t)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var l,_=e[Symbol.iterator]();!(r=(l=_.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==_.return||_.return()}finally{if(o)throw i}}return n}(t,n)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=n[0],_=n[1];return(0,f.useEffect)(function(){var e=window.location.pathname.split("/")[3]?window.location.pathname.split("/")[3]-1:0;i.fetchPosts(null,e,_,l)},[]),(0,c.h)(c.Fragment,null,(0,c.h)("figure",{dangerouslySetInnerHTML:{__html:a}}),(0,c.h)("header",null,(0,c.h)("h1",{tabindex:"-1"},"Soap Box ",(0,c.h)("span",{class:"assistive-text"},"(Blog)"),0===l.current_page?"":(0,c.h)("span",null,"(Page ",l.current_page,")"),(0,c.h)("div",{className:"post-meta assistive-text",dangerouslySetInnerHTML:{__html:r.firstElementChild.nextElementSibling.innerHTML}}))),(0,c.h)("div",{className:"content",dangerouslySetInnerHTML:{__html:o.innerHTML}}),(0,c.h)("section",{className:"post-list","aria-labelledby":"posts",role:"region",id:"post-list","aria-live":"polite"},(0,c.h)("h2",{id:"posts",className:"assistive-text"},"Blog Posts"),l.error&&(0,c.h)("p",{className:"msg"},"Error Fetching Posts"),l.loading&&!l.error?(0,c.h)("p",{className:"msg gamma"},"loading..."):(0,c.h)(c.Fragment,null,l.list.map(function(e,t){return(0,c.h)("article",{key:t},(0,c.h)("h3",{className:"delta"},(0,c.h)("a",{href:e.link,className:"linked-header"},(0,c.h)("span",{dangerouslySetInnerHTML:{__html:e.title.rendered}}))),(0,c.h)("div",{className:"entry-meta"},(0,c.h)("time",{dateTime:e.date},e.formatted_date)))}),(0,c.h)("div",{className:"pagination"},0!==l.current_page&&(0,c.h)("a",{onClick:function(e){return i.fetchPosts(e,l.current_page-2,_,l)},className:"prev",href:"/page/".concat(l.current_page-1)},"Previous ",(0,c.h)("span",{className:"assistive-text"},"Page")),Array(Math.ceil(l.total/e)).fill().map(function(e,t){var n=t+1,r=n===l.current_page||0===t&&0===l.current_page,o=r?"span":"a";return(0,c.h)(o,{className:"page-number page-numbers","aria-controls":r?null:"post-list",onClick:function(e){return r?null:i.fetchPosts(e,t,_,l)},href:r?null:"/blog/page/".concat(n)},(0,c.h)("span",{className:"assistive-text"},"Page")," ",n)}),!(Math.ceil(l.total/e)===l.current_page)&&(0,c.h)("a",{onClick:function(e){return i.fetchPosts(e,0===l.current_page?1:l.current_page,_,l)},className:"next",href:"/page/".concat(0===l.current_page?2:l.current_page+1)},"Next ",(0,c.h)("span",{className:"assistive-text"},"Page"))))),(0,c.h)("section",{className:"categories","aria-labelledby":"categories",dangerouslySetInnerHTML:{__html:u.innerHTML}}))},null),e)};var c=e("preact"),s=e("./helpers"),f=e("preact/hooks");function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},{"./helpers":5,preact:1,"preact/hooks":2}],5:[function(e,t,n){"use strict";function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function r(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach(function(e){var t,n;t=r,e=o[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}Object.defineProperty(n,"__esModule",{value:!0}),n.removeAllChildNodes=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},n.handlePosts=void 0;n.handlePosts=function(){return{initialState:{current_page:0,loading:!1,error:null,total:null,list:[]},reducer:function(e,t){switch(t.type){case"LOADING":return r(r({},e),{},{loading:t.payload});case"FETCH_POSTS":return r(r({},e),{},{list:t.payload});case"FETCH_POSTS_FAIL":return r(r({},e),{},{error:t.payload});case"SET_TOTAL":return r(r({},e),{},{total:t.payload});case"SET_CURRENT_PAGE":return r(r({},e),{},{current_page:t.payload});default:throw new Error("Unexpected action")}},fetchPosts:function(e,t,n,r){return n({type:"LOADING",payload:!0}),e&&document.querySelector("h1").scrollIntoView(),e&&e.preventDefault(),fetch("".concat(window.POST_SETTINGS.domain,"/wp-json/wp/v2/posts?offset=").concat(t*window.POST_SETTINGS.posts_per_page,"&per_page=").concat(window.POST_SETTINGS.posts_per_page,"&_fields[]=title&_fields[]=date&_fields[]=link&_fields[]=formatted_date")).then(function(e){if(!e.ok)throw Error(e.statusText);return r.total||n({type:"SET_TOTAL",payload:Number(e.headers.get("X-WP-Total"))}),e.json()}).then(function(e){n({type:"FETCH_POSTS",payload:e}),n({type:"LOADING",payload:!1}),n({type:"SET_CURRENT_PAGE",payload:0===t?0:t+1}),history.replaceState(null,null,"".concat(0===t?"/blog/":"/blog/page/".concat(t+1,"/")))}).catch(function(e){n({type:"FETCH_POSTS_FAIL",payload:e.toString()})})}}}},{}],6:[function(e,t,n){"use strict";var r=i(e("./MobileMenu")),o=i(e("./PostsList"));function i(e){return e&&e.__esModule?e:{default:e}}e=document,(0,r.default)(e.querySelector(".js-main-navigation"),e.querySelector(".js-main-navigation-items")),(0,o.default)(e.querySelector(".js-posts")),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(function(){return navigator.serviceWorker.ready})},{"./MobileMenu":3,"./PostsList":4}]},{},[6]);