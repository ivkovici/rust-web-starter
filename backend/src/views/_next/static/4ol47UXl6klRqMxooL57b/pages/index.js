(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4v7x":function(e,n,t){e.exports={loading:"nav_loading__1HVCg",loaded:"nav_loaded__3hMZN",signedIn:"nav_signedIn__3KKcN",notSignedIn:"nav_notSignedIn__3l14p",avatar:"nav_avatar__JhWsF",signinButton:"nav_signinButton__3Vf9C",signoutButton:"nav_signoutButton__2LsMu"}},"8oxB":function(e,n){var t,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!l){var e=c(d);l=!0;for(var n=s.length;n;){for(u=s,s=[];++f<n;)u&&u[f].run();f=-1,n=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function v(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new h(e,n)),1!==s.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},ODaL:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={error:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];console&&(t?console.error("[next-auth][error][".concat(e,"]"),t,"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase())):console.error(e))},debug:function(n){if(e&&e.env&&e.env._NEXTAUTH_DEBUG){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];console.log("[next-auth][debug][".concat(n,"]"),r)}}};n.default=t}).call(this,t("8oxB"))},Qetd:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t("nGE6"),u=t("4v7x"),s=t.n(u),l=o.a.createElement,f=function(){var e=i(Object(c.useSession)(),2),n=e[0],t=e[1];return l("nav",null,l("noscript",null,l("style",null,".nojs-show { opacity: 1; top: 0; }")),l("p",{className:"nojs-show ".concat(!n&&t?s.a.loading:s.a.loaded)},!n&&l(o.a.Fragment,null,l("span",{className:s.a.notSignedIn},"Not signed in"),l("a",{href:"/api/auth/signin",onClick:function(e){e.preventDefault(),Object(c.signin)()}},l("button",{className:s.a.signinButton},"Sign in"))),n&&l(o.a.Fragment,null,l("span",{style:{backgroundImage:"url(".concat(n.user.image,")")},className:s.a.avatar}),l("span",{className:s.a.signedIn},"Signed in as ",l("strong",null,n.user.email)),l("a",{href:"/api/auth/signout",onClick:function(e){e.preventDefault(),Object(c.signout)()}},l("button",{className:s.a.signoutButton},"Sign out")))))},d=t("ykX2"),p=t.n(d),h=o.a.createElement,v=function(){return h("div",{className:p.a.footer},h("hr",null),h("ul",{className:p.a.navigation},h("li",{className:p.a.navigationItem},h("a",{href:"https://github.com/iaincollins/next-auth-example"},"Source")),h("li",{className:p.a.navigationItem},h("a",{href:"https://next-auth.js.org"},"Documentation"))))},g=o.a.createElement;n.default=function(){return g(o.a.Fragment,null,g(f,null),g("main",null,g("h1",null,"NextAuth.js Demo"),g("p",null,"This is an example project that uses"," ",g("a",{href:"https://www.npmjs.com/package/next-auth"},"next-auth"),"."),g("p",null,"See ",g("a",{href:"https://next-auth.js.org"},"next-auth.js.org")," for more information and documentation. A more full fledged example can be found at"," ",g("a",{href:"https://next-auth-example.now.sh"},"next-auth-example.now.sh")),g("p",null,"This live demo uses an in-memory database which is automatically erased after ~2 hours. More permanent user databases, etc. can be easily created by defining a db connector your .env file, see"," ",g("a",{href:"https://next-auth.js.org/configuration/database"},"docs"))),g(v,null))}},XJ4Q:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,o=t("q1tI"),a=(r=t("ODaL"))&&r.__esModule?r:{default:r};function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}var f={site:"",basePath:"/api/auth",clientMaxAge:0},d=!1,p=function(){var{site:e,basePath:n,clientMaxAge:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&(f.site=e),n&&(f.basePath=n),t&&(f.clientMaxAge=t)},h=function(){var e=l((function*(){var{req:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=O(),t=e?{headers:{cookie:e.headers.cookie}}:{},r=yield x("".concat(n,"/session"),t);return T({event:"session",data:{trigger:"getSession"}}),r}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=l((function*(){var e=O();return x("".concat(e,"/providers"))}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=l((function*(){var e=O(),n=yield x("".concat(e,"/csrf"));return n&&n.csrfToken?n.csrfToken:null}));return function(){return e.apply(this,arguments)}}(),m=(0,o.createContext)(),y=e=>{var n=(0,o.useContext)(m);return void 0===n?b(e):n},b=e=>{var n=1e3*f.clientMaxAge,[t,r]=(0,o.useState)(e),[i,c]=(0,o.useState)(!0),u=function(){var e=l((function*(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];try{r(yield h()),c(!1),e&&T({event:"session",data:{trigger:"useSessionData"}}),"undefined"!==typeof window&&!1===d&&(d=!0,window.addEventListener("storage",function(){var e=l((function*(e){if("nextauth.message"===e.key){var n=JSON.parse(e.newValue);n.event&&"session"===n.event&&n.data&&(yield u(!1))}}));return function(n){return e.apply(this,arguments)}}())),n>0&&setTimeout(function(){var e=l((function*(e){yield u()}));return function(n){return e.apply(this,arguments)}}(),n)}catch(t){a.default.error("CLIENT_USE_SESSION_ERROR",t)}}));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)(()=>{u()},[]),[t,i]},w=function(){var e=l((function*(e,n){var t=n&&n.callbackUrl?n.callbackUrl:window.location;if(e){var r=yield v();if(r[e])if("oauth"===r[e].type)window.location="".concat(r[e].signinUrl,"?callbackUrl=").concat(encodeURIComponent(t));else{var o={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j(c({csrfToken:yield g(),callbackUrl:t},n))},a=yield fetch(r[e].signinUrl,o);window.location=a.url?a.url:t}else{var i=O();window.location="".concat(i,"/signin?callbackUrl=").concat(encodeURIComponent(t))}}else{var u=O();window.location="".concat(u,"/signin?callbackUrl=").concat(encodeURIComponent(t))}}));return function(n,t){return e.apply(this,arguments)}}(),_=function(){var e=l((function*(e){var n=e&&e.callbackUrl?e.callbackUrl:window.location,t=O(),r={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j({csrfToken:yield g(),callbackUrl:n})},o=yield fetch("".concat(t,"/signout"),r);T({event:"session",data:{trigger:"signout"}}),window.location=o.url?o.url:n}));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=l((function*(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var t=yield fetch(e,n),r=yield t.json();return Promise.resolve(Object.keys(r).length>0?r:null)}catch(o){return a.default.error("CLIENT_FETCH_ERROR",e,o),Promise.resolve(null)}}));return function(n){return e.apply(this,arguments)}}(),O=()=>"".concat(f.site).concat(f.basePath),j=e=>Object.keys(e).map(n=>encodeURIComponent(n)+"="+encodeURIComponent(e[n])).join("&"),T=e=>{"undefined"!==typeof localStorage&&localStorage.setItem("nextauth.message",JSON.stringify(e))},k={options:p,setOptions:p,session:h,providers:v,csrfToken:g,getSession:h,getProviders:v,getCsrfToken:g,useSession:y,Provider:e=>{var{children:n,session:t,options:r}=e;return p(r),(0,o.createElement)(m.Provider,{value:y(t)},n)},signin:w,signout:_};n.default=k},nGE6:function(e,n,t){e.exports=t("XJ4Q").default},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},ykX2:function(e,n,t){e.exports={footer:"footer_footer__1tNtI",navigation:"footer_navigation__1wyYy",navigationItem:"footer_navigationItem__1Lry_"}}},[["vlRD",0,1]]]);