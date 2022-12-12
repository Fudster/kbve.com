import{r as gt,c as bt,b as _t,R as I}from"./chunks/index.0d03162d.js";import{j as Q}from"./chunks/jsx-runtime.44949ced.js";var ct={exports:{}};!function(e,t){var r;typeof self<"u"&&self,r=e=>(()=>{var t={7403:(e,t,r)=>{r.d(t,{default:()=>O});var n=r(4087),o=r.n(n);const a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},s=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},i=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",v="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",b="CHANGE_CURSOR",m="PASTE_STRING",g="HTML_TAG";function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if(typeof Symbol<"u"&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=function(){function e(t,r){var _=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),E(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),E(this,"setupWrapperElement",(function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))})),E(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),E(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),E(this,"stop",(function(){return _.state.eventLoop&&((0,n.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),E(this,"pauseFor",(function(e){return _.addEventToQueue(f,{ms:e}),_})),E(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach((function(e){_.typeString(e).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)})),_)})),E(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return _.typeOutHTMLString(e,t);if(e){var r=_.options||{},n=r.stringSplitter,o="function"==typeof n?n(e):e.split("");_.typeCharacters(o,t)}return _})),E(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?_.typeOutHTMLString(e,t,!0):(e&&_.addEventToQueue(m,{character:e,node:t}),_)})),E(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,n=s(e);if(n.length>0)for(var o=0;o<n.length;o++){var a=n[o],i=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",_.addEventToQueue(d,{node:a,parentNode:t}),r?_.pasteString(i,a):_.typeString(i,a)):a.textContent&&(r?_.pasteString(a.textContent,t):_.typeString(a.textContent,t))}return _})),E(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(p,{speed:e}),_})),E(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return _.addEventToQueue(h,{speed:e}),_})),E(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return _.addEventToQueue(y,{delay:e}),_})),E(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return _.addEventToQueue(b,{cursor:e}),_})),E(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)_.addEventToQueue(c);return _})),E(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return _.addEventToQueue(v,{cb:e,thisArg:t}),_})),E(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){_.addEventToQueue(u,{character:e,node:t})})),_})),E(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){_.addEventToQueue(c)})),_})),E(this,"addEventToQueue",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(e,t,r,"eventQueue")})),E(this,"addReverseCalledEvent",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=_.options.loop;return n?_.addEventToStateProperty(e,t,r,"reverseCalledEvents"):_})),E(this,"addEventToStateProperty",(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return _.state[n]=r?[o].concat(w(_.state[n])):[].concat(w(_.state[n]),[o]),_})),E(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var e=Date.now(),t=e-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=w(_.state.calledEvents),_.state.calledEvents=[],_.options=x({},_.state.initialOptions)}if(_.state.eventLoop=o()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(e<_.state.pauseUntil)return;_.state.pauseUntil=null}var r,n=w(_.state.eventQueue),a=n.shift();if(!(t<=(r=a.eventName===l||a.eventName===c?"natural"===_.options.deleteSpeed?i(40,80):_.options.deleteSpeed:"natural"===_.options.delay?i(120,160):_.options.delay))){var s=a.eventName,j=a.eventArgs;switch(_.logInDevMode({currentEvent:a,state:_.state,delay:r}),s){case m:case u:var E=j.character,O=j.node,T=document.createTextNode(E),A=T;_.options.onCreateTextNode&&"function"==typeof _.options.onCreateTextNode&&(A=_.options.onCreateTextNode(E,T)),A&&(O?O.appendChild(A):_.state.elements.wrapper.appendChild(A)),_.state.visibleNodes=[].concat(w(_.state.visibleNodes),[{type:"TEXT_NODE",character:E,node:A}]);break;case c:n.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case f:var S=a.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(S);break;case v:var N=a.eventArgs,C=N.cb,P=N.thisArg;C.call(P,{elements:_.state.elements});break;case d:var k=a.eventArgs,L=k.node,D=k.parentNode;D?D.appendChild(L):_.state.elements.wrapper.appendChild(L),_.state.visibleNodes=[].concat(w(_.state.visibleNodes),[{type:g,node:L,parentNode:D||_.state.elements.wrapper}]);break;case p:var R=_.state.visibleNodes,M=j.speed,F=[];M&&F.push({eventName:h,eventArgs:{speed:M,temp:!0}});for(var I=0,Q=R.length;I<Q;I++)F.push({eventName:l,eventArgs:{removingCharacterNode:!1}});M&&F.push({eventName:h,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,F);break;case l:var z=a.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var U=_.state.visibleNodes.pop(),H=U.type,B=U.node,q=U.character;_.options.onRemoveNode&&"function"==typeof _.options.onRemoveNode&&_.options.onRemoveNode({node:B,character:q}),B&&B.parentNode.removeChild(B),H===g&&z&&n.unshift({eventName:l,eventArgs:{}})}break;case h:_.options.deleteSpeed=a.eventArgs.speed;break;case y:_.options.delay=a.eventArgs.delay;break;case b:_.options.cursor=a.eventArgs.cursor,_.state.elements.cursor.innerHTML=a.eventArgs.cursor}_.options.loop&&(a.eventName===l||a.eventArgs&&a.eventArgs.temp||(_.state.calledEvents=[].concat(w(_.state.calledEvents),[a]))),_.state.eventQueue=n,_.state.lastFrameTime=e}}})),t)if("string"==typeof t){var j=document.querySelector(t);if(!j)throw new Error("Could not find container element");this.state.elements.container=j}else this.state.elements.container=t;r&&(this.options=x(x({},this.options),r)),this.state.initialOptions=x({},this.options),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},8552:(e,t,r)=>{var n=r(852)(r(5639),"DataView");e.exports=n},1989:(e,t,r)=>{var n=r(1789),o=r(401),a=r(7667),s=r(1327),i=r(1866);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=s,u.prototype.set=i,e.exports=u},8407:(e,t,r)=>{var n=r(7040),o=r(4125),a=r(2117),s=r(7518),i=r(4705);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=s,u.prototype.set=i,e.exports=u},7071:(e,t,r)=>{var n=r(852)(r(5639),"Map");e.exports=n},3369:(e,t,r)=>{var n=r(4785),o=r(1285),a=r(6e3),s=r(9916),i=r(5265);function u(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}u.prototype.clear=n,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=s,u.prototype.set=i,e.exports=u},3818:(e,t,r)=>{var n=r(852)(r(5639),"Promise");e.exports=n},8525:(e,t,r)=>{var n=r(852)(r(5639),"Set");e.exports=n},8668:(e,t,r)=>{var n=r(3369),o=r(619),a=r(2385);function s(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}s.prototype.add=s.prototype.push=o,s.prototype.has=a,e.exports=s},6384:(e,t,r)=>{var n=r(8407),o=r(7465),a=r(3779),s=r(7599),i=r(4758),u=r(4309);function c(e){var t=this.__data__=new n(e);this.size=t.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=s,c.prototype.has=i,c.prototype.set=u,e.exports=c},2705:(e,t,r)=>{var n=r(5639).Symbol;e.exports=n},1149:(e,t,r)=>{var n=r(5639).Uint8Array;e.exports=n},577:(e,t,r)=>{var n=r(852)(r(5639),"WeakMap");e.exports=n},4963:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,a=[];++r<n;){var s=e[r];t(s,r,e)&&(a[o++]=s)}return a}},4636:(e,t,r)=>{var n=r(2545),o=r(5694),a=r(1469),s=r(4144),i=r(5776),u=r(6719),c=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=a(e),p=!r&&o(e),l=!r&&!p&&s(e),f=!r&&!p&&!l&&u(e),v=r||p||l||f,d=v?n(e.length,String):[],h=d.length;for(var y in e)!t&&!c.call(e,y)||v&&("length"==y||l&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||i(y,h))||d.push(y);return d}},2488:e=>{e.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},2908:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},8470:(e,t,r)=>{var n=r(7813);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},8866:(e,t,r)=>{var n=r(2488),o=r(1469);e.exports=function(e,t,r){var a=t(e);return o(e)?a:n(a,r(e))}},4239:(e,t,r)=>{var n=r(2705),o=r(9607),a=r(2333),s=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):a(e)}},9454:(e,t,r)=>{var n=r(4239),o=r(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},939:(e,t,r)=>{var n=r(2492),o=r(7005);e.exports=function e(t,r,a,s,i){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:n(t,r,a,s,e,i))}},2492:(e,t,r)=>{var n=r(6384),o=r(7114),a=r(8351),s=r(6096),i=r(4160),u=r(1469),c=r(4144),p=r(6719),l="[object Arguments]",f="[object Array]",v="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,h,y,b){var m=u(e),g=u(t),_=m?f:i(e),x=g?f:i(t),w=(_=_==l?v:_)==v,j=(x=x==l?v:x)==v,E=_==x;if(E&&c(e)){if(!c(t))return!1;m=!0,w=!1}if(E&&!w)return b||(b=new n),m||p(e)?o(e,t,r,h,y,b):a(e,t,_,r,h,y,b);if(!(1&r)){var O=w&&d.call(e,"__wrapped__"),T=j&&d.call(t,"__wrapped__");if(O||T){var A=O?e.value():e,S=T?t.value():t;return b||(b=new n),y(A,S,r,h,b)}}return!!E&&(b||(b=new n),s(e,t,r,h,y,b))}},8458:(e,t,r)=>{var n=r(3560),o=r(5346),a=r(3218),s=r(346),i=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,p=u.toString,l=c.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(n(e)?f:i).test(s(e))}},8749:(e,t,r)=>{var n=r(4239),o=r(1780),a=r(7005),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!s[n(e)]}},280:(e,t,r)=>{var n=r(5726),o=r(6916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},2545:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},1717:e=>{e.exports=function(e){return function(t){return e(t)}}},4757:e=>{e.exports=function(e,t){return e.has(t)}},4429:(e,t,r)=>{var n=r(5639)["__core-js_shared__"];e.exports=n},7114:(e,t,r)=>{var n=r(8668),o=r(2908),a=r(4757);e.exports=function(e,t,r,s,i,u){var c=1&r,p=e.length,l=t.length;if(p!=l&&!(c&&l>p))return!1;var f=u.get(e),v=u.get(t);if(f&&v)return f==t&&v==e;var d=-1,h=!0,y=2&r?new n:void 0;for(u.set(e,t),u.set(t,e);++d<p;){var b=e[d],m=t[d];if(s)var g=c?s(m,b,d,t,e,u):s(b,m,d,e,t,u);if(void 0!==g){if(g)continue;h=!1;break}if(y){if(!o(t,(function(e,t){if(!a(y,t)&&(b===e||i(b,e,r,s,u)))return y.push(t)}))){h=!1;break}}else if(b!==m&&!i(b,m,r,s,u)){h=!1;break}}return u.delete(e),u.delete(t),h}},8351:(e,t,r)=>{var n=r(2705),o=r(1149),a=r(7813),s=r(7114),i=r(8776),u=r(1814),c=n?n.prototype:void 0,p=c?c.valueOf:void 0;e.exports=function(e,t,r,n,c,l,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!l(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var v=i;case"[object Set]":var d=1&n;if(v||(v=u),e.size!=t.size&&!d)return!1;var h=f.get(e);if(h)return h==t;n|=2,f.set(e,t);var y=s(v(e),v(t),n,c,l,f);return f.delete(e),y;case"[object Symbol]":if(p)return p.call(e)==p.call(t)}return!1}},6096:(e,t,r)=>{var n=r(8234),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,a,s,i){var u=1&r,c=n(e),p=c.length;if(p!=n(t).length&&!u)return!1;for(var l=p;l--;){var f=c[l];if(!(u?f in t:o.call(t,f)))return!1}var v=i.get(e),d=i.get(t);if(v&&d)return v==t&&d==e;var h=!0;i.set(e,t),i.set(t,e);for(var y=u;++l<p;){var b=e[f=c[l]],m=t[f];if(a)var g=u?a(m,b,f,t,e,i):a(b,m,f,e,t,i);if(!(void 0===g?b===m||s(b,m,r,a,i):g)){h=!1;break}y||(y="constructor"==f)}if(h&&!y){var _=e.constructor,x=t.constructor;_==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof x&&x instanceof x||(h=!1)}return i.delete(e),i.delete(t),h}},1957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},8234:(e,t,r)=>{var n=r(8866),o=r(9551),a=r(3674);e.exports=function(e){return n(e,a,o)}},5050:(e,t,r)=>{var n=r(7019);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},852:(e,t,r)=>{var n=r(8458),o=r(7801);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},9607:(e,t,r)=>{var n=r(2705),o=Object.prototype,a=o.hasOwnProperty,s=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch{}var o=s.call(e);return n&&(t?e[i]=r:delete e[i]),o}},9551:(e,t,r)=>{var n=r(4963),o=r(479),a=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,i=s?function(e){return null==e?[]:(e=Object(e),n(s(e),(function(t){return a.call(e,t)})))}:o;e.exports=i},4160:(e,t,r)=>{var n=r(8552),o=r(7071),a=r(3818),s=r(8525),i=r(577),u=r(4239),c=r(346),p="[object Map]",l="[object Promise]",f="[object Set]",v="[object WeakMap]",d="[object DataView]",h=c(n),y=c(o),b=c(a),m=c(s),g=c(i),_=u;(n&&_(new n(new ArrayBuffer(1)))!=d||o&&_(new o)!=p||a&&_(a.resolve())!=l||s&&_(new s)!=f||i&&_(new i)!=v)&&(_=function(e){var t=u(e),r="[object Object]"==t?e.constructor:void 0,n=r?c(r):"";if(n)switch(n){case h:return d;case y:return p;case b:return l;case m:return f;case g:return v}return t}),e.exports=_},7801:e=>{e.exports=function(e,t){return e?.[t]}},1789:(e,t,r)=>{var n=r(4536);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:(e,t,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},1327:(e,t,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},1866:(e,t,r)=>{var n=r(4536);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=r??9007199254740991)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},7019:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:(e,t,r)=>{var n,o=r(4429),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!a&&a in e}},5726:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,t,r)=>{var n=r(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():o.call(t,r,1),--this.size,0))}},2117:(e,t,r)=>{var n=r(8470);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},7518:(e,t,r)=>{var n=r(8470);e.exports=function(e){return n(this.__data__,e)>-1}},4705:(e,t,r)=>{var n=r(8470);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},4785:(e,t,r)=>{var n=r(1989),o=r(8407),a=r(7071);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},1285:(e,t,r)=>{var n=r(5050);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},6e3:(e,t,r)=>{var n=r(5050);e.exports=function(e){return n(this,e).get(e)}},9916:(e,t,r)=>{var n=r(5050);e.exports=function(e){return n(this,e).has(e)}},5265:(e,t,r)=>{var n=r(5050);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},8776:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}},4536:(e,t,r)=>{var n=r(852)(Object,"create");e.exports=n},6916:(e,t,r)=>{var n=r(5569)(Object.keys,Object);e.exports=n},1167:(e,t,r)=>{e=r.nmd(e);var n=r(1957),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,s=a&&a.exports===o&&n.process,i=function(){try{return a&&a.require&&a.require("util").types||s&&s.binding&&s.binding("util")}catch{}}();e.exports=i},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:e=>{e.exports=function(e,t){return function(r){return e(t(r))}}},5639:(e,t,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},619:e=>{e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(e){return this.__data__.has(e)}},1814:e=>{e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}},7465:(e,t,r)=>{var n=r(8407);e.exports=function(){this.__data__=new n,this.size=0}},3779:e=>{e.exports=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}},7599:e=>{e.exports=function(e){return this.__data__.get(e)}},4758:e=>{e.exports=function(e){return this.__data__.has(e)}},4309:(e,t,r)=>{var n=r(8407),o=r(7071),a=r(3369);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var s=r.__data__;if(!o||s.length<199)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new a(s)}return r.set(e,t),this.size=r.size,this}},346:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch{}try{return e+""}catch{}}return""}},7813:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},5694:(e,t,r)=>{var n=r(9454),o=r(7005),a=Object.prototype,s=a.hasOwnProperty,i=a.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&s.call(e,"callee")&&!i.call(e,"callee")};e.exports=u},1469:e=>{var t=Array.isArray;e.exports=t},8612:(e,t,r)=>{var n=r(3560),o=r(1780);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},4144:(e,t,r)=>{e=r.nmd(e);var n=r(5639),o=r(5062),a=t&&!t.nodeType&&t,s=a&&e&&!e.nodeType&&e,i=s&&s.exports===a?n.Buffer:void 0,u=(i?i.isBuffer:void 0)||o;e.exports=u},8446:(e,t,r)=>{var n=r(939);e.exports=function(e,t){return n(e,t)}},3560:(e,t,r)=>{var n=r(4239),o=r(3218);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},6719:(e,t,r)=>{var n=r(8749),o=r(1717),a=r(1167),s=a&&a.isTypedArray,i=s?o(s):n;e.exports=i},3674:(e,t,r)=>{var n=r(4636),o=r(280),a=r(8612);e.exports=function(e){return a(e)?n(e):o(e)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var t,r,n,o,a,s;typeof performance<"u"&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},r=process.hrtime,o=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*process.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},4087:(e,t,r)=>{for(var n=r(75),o=typeof window>"u"?r.g:window,a=["moz","webkit"],s="AnimationFrame",i=o["request"+s],u=o["cancel"+s]||o["cancelRequest"+s],c=0;!i&&c<a.length;c++)i=o[a[c]+"Request"+s],u=o[a[c]+"Cancel"+s]||o[a[c]+"CancelRequest"+s];if(!i||!u){var p=0,l=0,f=[];i=function(e){if(0===f.length){var t=n(),r=Math.max(0,16.666666666666668-(t-p));p=r+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(p)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return f.push({handle:++l,callback:e,cancelled:!1}),l},u=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return i.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=i,e.cancelAnimationFrame=u}},8156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch{if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var o={};return(()=>{n.d(o,{default:()=>h});var e=n(8156),t=n.n(e),r=n(7403),a=n(8446),s=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(h,e);var n,o,a,i,d=(a=h,i=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch{return!1}}(),function(){var e,t=f(a);if(i){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function h(){var e;u(this,h);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(l(e=d.call.apply(d,[this].concat(r))),"state",{instance:null}),e}return n=h,(o=[{key:"componentDidMount",value:function(){var e=this,t=new r.default(this.typewriter,this.props.options);this.setState({instance:t},(function(){var r=e.props.onInit;r&&r(t)}))}},{key:"componentDidUpdate",value:function(e){s()(this.props.options,e.options)||this.setState({instance:new r.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var e=this,r=this.props.component;return t().createElement(r,{ref:function(t){return e.typewriter=t},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),h}(e.Component);d.defaultProps={component:"div"};const h=d})(),o.default})(),ct.exports=r(gt.exports)}();const xt=_t(ct.exports);//!     [Migrate]       ->  @c/Action/Typewriter
function Et({text:e,typewriterClassName:t,buttonClassName:r}){const[n,o]=I.useState(e),[a,s]=I.useState(r),[i,u]=I.useState(t),[c,p]=I.useState(!1),l=I.useRef(null),f=I.useRef(!0);I.useEffect((()=>()=>{f.current=!1}),[]);const v=I.useCallback((async()=>{c||(p(!0),await this.sendRequest(),//!     THROWS ERROR
f.current&&p(!1))}),[c]);return!1===c?Q.exports.jsx(Q.exports.Fragment,{children:Q.exports.jsxs("button",{type:"button",className:a,disabled:c,onClick:v,children:["Greet",Q.exports.jsx("span",{className:"absolute top-0 right-0 px-5 py-1 text-xs gradient-text tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-orange-400",children:"New"})]})}):Q.exports.jsx(Q.exports.Fragment,{children:Q.exports.jsx("div",{ref:l,children:Q.exports.jsx(xt,{options:{wrapperClassName:i},onInit:e=>{e.typeString(n).callFunction((()=>{console.log("Typing String")})).pauseFor(5e3).start()}})})})}export{Et as default};