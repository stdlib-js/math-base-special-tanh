// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return Math.abs(t)}function n(t){return t!=t}var r=Math.floor,e=Math.ceil;function o(t){return t<0?e(t):r(t)}var i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;function u(t){return t===a||t===i}var f="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty,l=Object.prototype,y=l.toString,p=l.__defineGetter__,v=l.__defineSetter__,b=l.__lookupGetter__,s=l.__lookupSetter__,d=function(){try{return f({},"x",{}),!0}catch(t){return!1}}()?c:function(t,n,r){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(b.call(t,n)||s.call(t,n)?(e=t.__proto__,t.__proto__=l,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,n,r.get),a&&v&&v.call(t,n,r.set),t};function A(t,n,r){d(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var _,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",g=w&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return m.call(t);r=t[U],i=U,n=null!=(o=t)&&h.call(o,i);try{t[U]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[U]=r:delete t[U],e}:function(t){return m.call(t)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(j&&r instanceof Uint32Array||"[object Uint32Array]"===g(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=_,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),r=n,t=(F&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?N:function(){throw new Error("not implemented")};var H,G=S,P="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var t,n,r;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),r=n,t=(P&&r instanceof Uint8Array||"[object Uint8Array]"===g(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var W,x=H,M="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var t,n,r;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),r=n,t=(M&&r instanceof Uint16Array||"[object Uint16Array]"===g(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:W,uint8:x};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new E(K.buffer),R=J.HIGH,X=J.LOW;function Z(t,n,r,e){return K[0]=t,n[e]=Q[R],n[e+r]=Q[X],n}function $(t){return Z(t,[0,0],1,0)}A($,"assign",Z);var tt,nt,rt=!0===D?1:0,et=new G(1),ot=new E(et.buffer);function it(t){return et[0]=t,ot[rt]}!0===D?(tt=1,nt=0):(tt=0,nt=1);var at={HIGH:tt,LOW:nt},ut=new G(1),ft=new E(ut.buffer),ct=at.HIGH,lt=at.LOW;function yt(t,n){return ft[ct]=t,ft[lt]=n,ut[0]}var pt=[0,0];function vt(r,e,o,i){return n(r)||u(r)?(e[i]=r,e[i+o]=0,e):0!==r&&t(r)<22250738585072014e-324?(e[i]=4503599627370496*r,e[i+o]=-52,e):(e[i]=r,e[i+o]=0,e)}A((function(t){return vt(t,[0,0],1,0)}),"assign",vt);var bt=[0,0],st=[0,0];function dt(t,r){var e,o,f,c,l,y;return 0===r||0===t||n(t)||u(t)?t:(vt(t,bt,1,0),r+=bt[1],r+=function(t){var n=it(t);return(n=(2146435072&n)>>>20)-1023|0}(t=bt[0]),r<-1074?(f=0,c=t,$.assign(f,pt,1,0),l=pt[0],l&=2147483647,y=it(c),yt(l|=y&=2147483648,pt[1])):r>1023?t<0?i:a:(r<=-1023?(r+=52,o=2220446049250313e-31):o=1,$.assign(t,st,1,0),e=st[0],e&=2148532223,o*yt(e|=r+1023<<20,st[1])))}var At=1.4426950408889634,_t=1/(1<<28);function wt(t){var r;return n(t)||t===a?t:t===i?0:t>709.782712893384?a:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<_t?1+t:function(t,n,r){var e,o,i,a;return dt(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(r=o(t<0?At*t-.5:At*t+.5)),1.9082149292705877e-10*r,r)}return function(n){var r,e;if((e=t(n))>44.014845965556525)return n<0?-1:1;if(e>=.625)e=1-2/((r=wt(2*e))+1),n<0&&(e=-e);else{if(0===n)return n;e=n+n*(r=n*n)*function(t){var n,r;return 0===t?-.3333333333333332:((t<0?-t:t)<=1?(n=t*(t*(0*t-.9643991794250523)-99.28772310019185)-1614.6876844170845,r=4844.063053251255+t*(2235.4883906010045+t*(112.81167849163293+1*t))):(n=0+(t=1/t)*(t*(-1614.6876844170845*t-99.28772310019185)-.9643991794250523),r=1+t*(112.81167849163293+t*(2235.4883906010045+4844.063053251255*t))),n/r)}(r)}return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).tanh=n();
//# sourceMappingURL=index.js.map
