// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}function e(r){return r!=r}var t=Math.floor,n=Math.ceil;function i(r){return r<0?n(r):t(r)}var a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,c=1023,u=1023,f=-1023,s=-1074;function l(r){return r===o||r===a}var p=2147483648,g=2147483647,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function v(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function w(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(i):h(i)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function A(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=w(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=w(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===m.call(r.specifier)?m.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var _=Math.abs,E=String.prototype.toLowerCase,U=String.prototype.toUpperCase,S=String.prototype.replace,I=/e\+(\d)$/,k=/e-(\d)$/,x=/^(\d+)$/,F=/^(\d+)e/,j=/\.0$/,T=/\.0*e/,O=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":_(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=S.call(t,O,"$1e"),t=S.call(t,T,"e"),t=S.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=S.call(t,I,"e+0$1"),t=S.call(t,k,"e-0$1"),r.alternate&&(t=S.call(t,x,"$1."),t=S.call(t,F,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===U.call(r.specifier)?U.call(t):E.call(t)}function $(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var G=String.fromCharCode,N=Array.isArray;function H(r){return r!=r}function W(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function C(r){var e,t,n,i,a,o,c,u,f,s,l,p,g;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,H(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,H(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=A(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!H(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=H(a)?String(n.arg):G(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=w(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,g=void 0,(g=l-s.length)<0?s:s=p?s+$(g):$(g)+s)),o+=n.arg||"",c+=1}return o}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=L.exec(r);n;)(e=r.slice(i,L.lastIndex-n[0].length)).length&&t.push(e),t.push(P(n)),i=L.lastIndex,n=L.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Z(r){var e,t;if("string"!=typeof r)throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[R(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return C.apply(null,e)}var M=Object.prototype,X=M.toString,Y=M.__defineGetter__,z=M.__defineSetter__,q=M.__lookupGetter__,B=M.__lookupSetter__;var D=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?d:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===X.call(r))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=M,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Y&&Y.call(r,e,t.get),o&&z&&z.call(r,e,t.set),r};function J(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Q.call(r);t=r[tr],a=tr,e=null!=(i=r)&&rr.call(i,a);try{r[tr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var or,cr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur=or,fr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var gr=lr,yr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var vr,hr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),t=e,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=vr,br="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:Ar,uint8:wr};(Er=new Ur.uint16(1))[0]=4660;var Sr,Ir,kr=52===new Ur.uint8(Er.buffer)[0];!0===kr?(Sr=1,Ir=0):(Sr=0,Ir=1);var xr={HIGH:Sr,LOW:Ir},Fr=new gr(1),jr=new ur(Fr.buffer),Tr=xr.HIGH,Or=xr.LOW;function Vr(r,e,t,n){return Fr[0]=r,e[n]=jr[Tr],e[n+t]=jr[Or],e}function $r(r){return Vr(r,[0,0],1,0)}J($r,"assign",Vr);var Gr,Nr,Hr=!0===kr?1:0,Wr=new gr(1),Cr=new ur(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}!0===kr?(Gr=1,Nr=0):(Gr=0,Nr=1);var Pr={HIGH:Gr,LOW:Nr},Rr=new gr(1),Zr=new ur(Rr.buffer),Mr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Zr[Mr]=r,Zr[Xr]=e,Rr[0]}var zr=[0,0];var qr=22250738585072014e-324,Br=4503599627370496;function Dr(t,n,i,a){return e(t)||l(t)?(n[a]=t,n[a+i]=0,n):0!==t&&r(t)<qr?(n[a]=t*Br,n[a+i]=-52,n):(n[a]=t,n[a+i]=0,n)}J((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=2146435072;var Kr=2220446049250313e-31,Qr=2148532223,re=[0,0],ee=[0,0];function te(r,t){var n,i,y,d,v,h;return 0===t||0===r||e(r)||l(r)?r:(Dr(r,re,1,0),r=re[0],t+=re[1],t+=function(r){var e=Lr(r);return(e=(e&Jr)>>>20)-c|0}(r),t<s?(y=0,d=r,$r.assign(y,zr,1,0),v=zr[0],v&=g,h=Lr(d),Yr(v|=h&=p,zr[1])):t>u?r<0?a:o:(t<=f?(t+=52,i=Kr):i=1,$r.assign(r,ee,1,0),n=ee[0],n&=Qr,i*Yr(n|=t+c<<20,ee[1])))}var ne=.6931471803691238,ie=1.9082149292705877e-10,ae=1.4426950408889634,oe=709.782712893384,ce=-745.1332191019411,ue=1/(1<<28),fe=-ue;function se(r){var t;return e(r)||r===o?r:r===a?0:r>oe?o:r<ce?0:r>fe&&r<ue?1+r:function(r,e,t){var n,i,a,o;return te(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(t=i(r<0?ae*r-.5:ae*r+.5))*ne,t*ie,t)}function le(e){var t,n;if((n=r(e))>44.014845965556525)return e<0?-1:1;if(n>=.625)n=1-2/((t=se(2*n))+1),e<0&&(n=-n);else{if(0===e)return e;n=e+e*(t=e*e)*function(r){var e,t;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(e=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,t=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(e=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),t=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),e/t)}(t)}return n}export{le as default};
//# sourceMappingURL=mod.js.map
