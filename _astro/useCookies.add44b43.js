import{r as c}from"./index.0b2a3d34.js";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var C=w,l=k,m=decodeURIComponent,y=encodeURIComponent,d=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function w(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},i=t||{},r=e.split(";"),o=i.decode||m,s=0;s<r.length;s++){var a=r[s],u=a.indexOf("=");if(!(u<0)){var c=a.substring(0,u).trim();if(null==n[c]){var f=a.substring(u+1,a.length).trim();'"'===f[0]&&(f=f.slice(1,-1)),n[c]=S(f,o)}}}return n}function k(e,t,n){var i=n||{},r=i.encode||y;if("function"!=typeof r)throw new TypeError("option encode is invalid");if(!d.test(e))throw new TypeError("argument name is invalid");var o=r(t);if(o&&!d.test(o))throw new TypeError("argument val is invalid");var s=e+"="+o;if(null!=i.maxAge){var a=i.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(i.domain){if(!d.test(i.domain))throw new TypeError("option domain is invalid");s+="; Domain="+i.domain}if(i.path){if(!d.test(i.path))throw new TypeError("option path is invalid");s+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function S(e,t){try{return t(e)}catch{return e}}function E(){return"object"==typeof document&&"string"==typeof document.cookie}function O(e,t){return"string"==typeof e?C(e,t):"object"==typeof e&&null!==e?e:{}}function _(e,t){return typeof t>"u"&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}function v(e,t){void 0===t&&(t={});var n=x(e);if(_(n,t.doNotParse))try{return JSON.parse(n)}catch{}return e}function x(e){return e&&"j"===e[0]&&":"===e[1]?e.substr(2):e}var h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)},b=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=O(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE=E()})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=C(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),v(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var i in this.cookies)n[i]=v(this.cookies[i],e);return n},e.prototype.set=function(e,t,n){var i;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=h(h({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=l(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=h(h({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=h({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=l(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();const T=b;var g=c.createContext(new T);g.Provider,g.Consumer;const L=g;function A(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function D(e){var t=c.useContext(L);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),i=c.useState(n),r=i[0],o=i[1],s=c.useRef(r);return A()&&c.useLayoutEffect((function(){function n(){var n=t.getAll();M(e||null,n,s.current)&&o(n),s.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[r,c.useMemo((function(){return t.set.bind(t)}),[t]),c.useMemo((function(){return t.remove.bind(t)}),[t])]}function M(e,t,n){if(!e)return!0;for(var i=0,r=e;i<r.length;i++){var o=r[i];if(t[o]!==n[o])return!0}return!1}export{D as u};