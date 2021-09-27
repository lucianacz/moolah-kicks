System.register(["./theme-9ea8e7d7.nomodule.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.g,n=e.n,r=e.a}],execute:function(){e("default",(function(e,t){void 0===t&&(t={});var o,i=t.id,a=t.playerEl,u=t.type;if(i&&u){var l=r(),s=l.on,c=l.emit;return"youtube"===u?((o=P(a)).loadVideoById({videoId:i,suggestedQuality:"large"}),o.stopVideo(),o.on("stateChange",(function(e){1===e.data?c("play"):2===e.data&&c("pause")})),o.on("ready",(function(){c("ready"),f()}))):"vimeo"===u&&((o=new K(a,{id:i})).on("play",(function(){return c("play")})),o.on("pause",(function(){return c("pause")})),o.ready().then((function(){c("ready"),f()}))),{destroy:function(){},on:s,pause:function(){"youtube"===u?o.pauseVideo():"vimeo"===u&&o.pause()},play:function(){"youtube"===u?o.playVideo():"vimeo"===u&&o.play()}}}function f(){var t=n("iframe",e),r=t.height/t.width*100,o=t.parentNode;t.height="100%",t.width="100%","youtube"===u?o.style.paddingTop=r+"%":"vimeo"===u&&(o.parentNode.style.paddingTop=r+"%"),c("resized")}}));var o={exports:{}},i=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},a={exports:{}},u=function(e,t,n){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof t&&(n=t,t={}),t=t||{},n=n||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async=!("async"in t)||!!t.async,o.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(o,t.attrs),t.text&&(o.text=""+t.text),("onload"in o?l:s)(o,n),o.onload||l(o,n),r.appendChild(o)};function l(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function s(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}!function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=u)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,r.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),t(window.YT)}}}))},e.exports=t.default}(a,a.exports);var c={exports:{}},f={exports:{}},d={exports:{}},h=1e3,p=60*h,v=60*p,y=24*v,m=365.25*y,g=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*m;case"days":case"day":case"d":return n*y;case"hours":case"hour":case"hrs":case"hr":case"h":return n*v;case"minutes":case"minute":case"mins":case"min":case"m":return n*p;case"seconds":case"second":case"secs":case"sec":case"s":return n*h;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(e);if("number"===n&&!1===isNaN(e))return t.long?function(e){return w(e,y,"day")||w(e,v,"hour")||w(e,p,"minute")||w(e,h,"second")||e+" ms"}(e):function(e){if(e>=y)return Math.round(e/y)+"d";if(e>=v)return Math.round(e/v)+"h";if(e>=p)return Math.round(e/p)+"m";if(e>=h)return Math.round(e/h)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function w(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}!function(e,t){var n;function r(e){function r(){if(r.enabled){var e=r,o=+new Date,i=o-(n||o);e.diff=i,e.prev=n,e.curr=o,n=o;for(var a=new Array(arguments.length),u=0;u<a.length;u++)a[u]=arguments[u];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var l=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"==typeof o){var i=a[l];n=o.call(e,i),a.splice(l,1),l--}return n})),t.formatArgs.call(e,a);var s=r.log||t.log||console.log.bind(console);s.apply(e,a)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=g,t.names=[],t.skips=[],t.formatters={}}(d,d.exports),function(e,t){function n(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=d.exports).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))})),e.splice(i,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(n())}(f,f.exports);var b={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default}(b,b.exports);var E={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default}(E,E.exports);var k={exports:{}},x={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default}(x,x.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=x.exports)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default}(k,k.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=a(f.exports),r=a(b.exports),o=a(E.exports),i=a(k.exports);function a(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.default)("youtube-player"),l={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u('event "%s"',r,t),e.trigger(n,t)}},r=!0,i=!1,a=void 0;try{for(var l,s=o.default[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){n(l.value)}}catch(e){i=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw a}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},o=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),i=void 0;"number"==typeof t.timeout&&(i=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(i),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,u=!1,l=void 0;try{for(var s,c=r.default[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var f=s.value;o(f)}}catch(e){u=!0,l=e}finally{try{!a&&c.return&&c.return()}finally{if(u)throw l}}return n}};t.default=l,e.exports=t.default}(c,c.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=l(i),o=l(a.exports),u=l(c.exports);function l(e){return e&&e.__esModule?e:{default:e}}var s=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(0,r.default)();if(s||(s=(0,o.default)(a)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=u.default.proxyEvents(a);var l=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):s.then((function(n){var o=new n.Player(e,t);return a.on("ready",(function(){r(o)})),null}))})),c=u.default.promisifyPlayer(l,i);return c.on=a.on,c.off=a.off,c},e.exports=t.default}(o,o.exports);var P=t(o.exports);
/*! @vimeo/player v2.15.3 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function M(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function N(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function S(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function A(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(S(r))return"https://vimeo.com/".concat(r);if(A(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var j=void 0!==Array.prototype.indexOf,V="undefined"!=typeof window&&void 0!==window.postMessage;if(!(C||j&&V))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*!
             * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
             * https://github.com/polygonplanet/weakmap-polyfill
             * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
             * @license MIT
             */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:I);var O,R=(function(e){
/*! Native Promise Only
                v0.8.1 (c) Kyle Simpson
                MIT License: http://getify.mit-license.org
            */
var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function s(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new d(n);try{t.call(e,(function(){s.apply(r,arguments)}),(function(){c.apply(r,arguments)}))}catch(e){c.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(e){c.call(new d(n),e)}}}function c(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){s.call(t,e)}),(function(e){c.call(t,e)}))}catch(e){c.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var v=e({},"constructor",p,!1);return p.prototype=v,e(v,"__NPO__",0,!1),e(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),p},(n=I)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(O={exports:{}},O.exports),O.exports),q=new WeakMap;function L(e,t,n){var r=q.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),q.set(e.element,r)}function D(e,t){return(q.get(e.element)||{})[t]||[]}function z(e,t,n){var r=q.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],q.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),q.set(e.element,r),r[t]&&0===r[t].length}function U(e,t){var n=q.get(e);q.set(t,n),q.delete(e)}var W=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function Y(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!A(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return Y(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}function $(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function G(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function J(e,t){var n,r=[];if((t=$(t)).event){if("error"===t.event)D(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),z(e,t.data.method,n)}));r=D(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=D(e,t);if(n.length<1)return!1;var r=n.shift();return z(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var H=new WeakMap,X=new WeakMap,Z={},K=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(T(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!N(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!A(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(H.has(t))return H.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new R((function(e,o){if(n._onMessage=function(t){if(A(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=$(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();J(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=B(t,r);Q(F(i),i,t).then((function(e){var r=Y(e,t);return n.element=r,n._originalElement=t,U(t,r),H.set(n.element,n),e})).catch(o)}}));if(X.set(this,i),H.set(this.element,this),"IFRAME"===this.element.nodeName&&G(this,"ping"),Z.isEnabled){var a=function(){return Z.exit()};Z.on("fullscreenchange",(function(){Z.isFullscreen?L(n,"event:exitFullscreen",a):z(n,"event:exitFullscreen",a),n.ready().then((function(){G(n,"fullscreenchange",Z.isFullscreen)}))}))}return this}var t,n,r;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new R((function(r,o){return t.ready().then((function(){L(t,e,{resolve:r,reject:o}),G(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new R((function(n,r){return e=M(e,"get"),t.ready().then((function(){L(t,e,{resolve:n,reject:r}),G(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new R((function(r,o){if(e=M(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){L(n,e,{resolve:r,reject:o}),G(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===D(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),L(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");z(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=X.get(this)||new R((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return R.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return Z.isEnabled?Z.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return Z.isEnabled?Z.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return Z.isEnabled?R.resolve(Z.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new R((function(t){if(X.delete(e),H.delete(e.element),e._originalElement&&(H.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&_(t.prototype,n),r&&_(t,r),e}();C||(Z=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=B(e);Q(F(t),t,e).then((function(t){return Y(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(A(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}())}}}));
//# sourceMappingURL=fluorescent-video.es-62b0383e.nomodule.js.map
