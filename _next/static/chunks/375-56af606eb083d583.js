(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var u=o.apply(null,n);u&&e.push(u)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),i=n(4957),l=n(7995),s=n(647),f=n(1992),c=n(639),d=n(4019),p=n(227),v="undefined"!==typeof u.default.useTransition,y={};function m(e,t,n,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;y[t+"%"+n+(o?"%"+o:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,b=e.children,x=e.prefetch,g=e.passHref,C=e.replace,_=e.shallow,M=e.scroll,j=e.locale,E=e.onClick,P=e.onMouseEnter,w=e.onTouchStart,k=e.legacyBehavior,O=void 0===k?!0!==Boolean(!1):k,S=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!O||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var R=!1!==x,$=v?u.default.useTransition():[],L=r($,2)[1],N=u.default.useContext(s.RouterContext),A=u.default.useContext(f.AppRouterContext);A&&(N=A);var I,U=u.default.useMemo((function(){var e=i.resolveHref(N,o,!0),t=r(e,2),n=t[0],a=t[1];return{href:n,as:h?i.resolveHref(N,h):a||n}}),[N,o,h]),H=U.href,T=U.as,Z=u.default.useRef(H),B=u.default.useRef(T);O&&(I=u.default.Children.only(n));var z=O?I&&"object"===typeof I&&I.ref:t,G=c.useIntersection({rootMargin:"200px"}),D=r(G,3),K=D[0],q=D[1],F=D[2],Q=u.default.useCallback((function(e){B.current===T&&Z.current===H||(F(),B.current=T,Z.current=H),K(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[T,z,H,F,K]);u.default.useEffect((function(){var e=q&&R&&i.isLocalURL(H),t="undefined"!==typeof j?j:N&&N.locale,n=y[H+"%"+T+(t?"%"+t:"")];e&&!n&&m(N,H,T,{locale:t})}),[T,H,q,j,R,N]);var V={ref:Q,onClick:function(e){O||"function"!==typeof E||E(e),O&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,l,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var c=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?s(c):c()}}(e,N,H,T,C,_,M,j,A?L:void 0,R)},onMouseEnter:function(e){O||"function"!==typeof P||P(e),O&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!R&&A||i.isLocalURL(H)&&m(N,H,T,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof w||w(e),O&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!R&&A||i.isLocalURL(H)&&m(N,H,T,{priority:!0})}};if(!O||g||"a"===I.type&&!("href"in I.props)){var W="undefined"!==typeof j?j:N&&N.locale,J=N&&N.isLocaleDomain&&d.getDomainLocale(T,W,N.locales,N.domainLocales);V.href=J||p.addBasePath(l.addLocale(T,W,N&&N.defaultLocale))}return O?u.default.cloneElement(I,V):u.default.createElement("a",Object.assign({},S,V),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!u,f=o.useState(!1),c=r(f,2),d=c[0],p=c[1],v=o.useState(null),y=r(v,2),m=y[0],h=y[1];o.useEffect((function(){if(u){if(s||d)return;if(m&&m.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[m,s,n,t,d]);var b=o.useCallback((function(){p(!1)}),[]);return[h,d,b]};var o=n(7294),a=n(6286),u="function"===typeof IntersectionObserver,i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(7294)),u=o(n(1585)),i=n(8e3),l=n(5850),s=n(9470);n(9475);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(c,[]).reverse().concat(f(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,s=d.length;l<s;l++){var f=d[l];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var c=o.props[f],p=r[f]||new Set;"name"===f&&u||!p.has(c)?(p.add(c),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var o=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=r({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(e,u)}return a.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=a.useContext(i.AmpStateContext),r=a.useContext(l.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:s.isInAmpMode(n)},t)};t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),i()}return a((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),a((function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}})),u((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var o=!1,a=o?function(){}:r.useLayoutEffect,u=o?function(){}:r.useEffect},9008:function(e,t,n){e.exports=n(2717)},1664:function(e,t,n){e.exports=n(7942)},1555:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),u=n(6792),i=n(5893);const l=a.forwardRef(((e,t)=>{const[{className:n,...r},{as:a="div",bsPrefix:l,spans:s}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,u.vE)(t,"col");const a=(0,u.pi)(),i=(0,u.zG)(),l=[],s=[];return a.forEach((e=>{const n=r[e];let o,a,u;delete r[e],"object"===typeof n&&null!=n?({span:o,offset:a,order:u}=n):o=n;const f=e!==i?`-${e}`:"";o&&l.push(!0===o?`${t}${f}`:`${t}${f}-${o}`),null!=u&&s.push(`order${f}-${u}`),null!=a&&s.push(`offset${f}-${a}`)})),[{...r,className:o()(n,...l,...s)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,i.jsx)(a,{...r,ref:t,className:o()(n,!s.length&&l)})}));l.displayName="Col",t.Z=l},2050:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(4184),o=n.n(r),a=n(7294),u=n(6792);function i(e,t){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,n++):e))}var l=n(5893);function s(e,t,n){const r=(e-t)/(n-t)*100;return Math.round(1e3*r)/1e3}function f({min:e,now:t,max:n,label:r,visuallyHidden:a,striped:u,animated:i,className:f,style:c,variant:d,bsPrefix:p,...v},y){return(0,l.jsx)("div",{ref:y,...v,role:"progressbar",className:o()(f,`${p}-bar`,{[`bg-${d}`]:d,[`${p}-bar-animated`]:i,[`${p}-bar-striped`]:i||u}),style:{width:`${s(t,e,n)}%`,...c},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":n,children:a?(0,l.jsx)("span",{className:"visually-hidden",children:r}):r})}const c=a.forwardRef((({isChild:e,...t},n)=>{if(t.bsPrefix=(0,u.vE)(t.bsPrefix,"progress"),e)return f(t,n);const{min:r,now:s,max:c,label:d,visuallyHidden:p,striped:v,animated:y,bsPrefix:m,variant:h,className:b,children:x,...g}=t;return(0,l.jsx)("div",{ref:n,...g,className:o()(b,m),children:x?i(x,(e=>(0,a.cloneElement)(e,{isChild:!0}))):f({min:r,now:s,max:c,label:d,visuallyHidden:p,striped:v,animated:y,bsPrefix:m,variant:h},n)})}));c.displayName="ProgressBar",c.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var d=c},1608:function(e,t,n){"use strict";var r=n(4184),o=n.n(r),a=n(7294),u=n(6792),i=n(5893);const l=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},a)=>{const l=(0,u.vE)(e,"row"),s=(0,u.pi)(),f=(0,u.zG)(),c=`${l}-cols`,d=[];return s.forEach((e=>{const t=r[e];let n;delete r[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const o=e!==f?`-${e}`:"";null!=n&&d.push(`${c}${o}-${n}`)})),(0,i.jsx)(n,{ref:a,...r,className:o()(t,l,...d)})}));l.displayName="Row",t.Z=l},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return s},vE:function(){return l},zG:function(){return f}});var r=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:u,Provider:i}=a;function l(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function s(){const{breakpoints:e}=(0,r.useContext)(a);return e}function f(){const{minBreakpoint:e}=(0,r.useContext)(a);return e}}}]);