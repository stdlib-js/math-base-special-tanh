// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}function e(r){return r!=r}var t=Math.floor,n=Math.ceil;function i(r){return r<0?n(r):t(r)}var a=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;function c(r){return r===o||r===a}var u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function p(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var y=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function d(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=p(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=p(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):y.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function v(r){return"string"==typeof r}var h=Math.abs,w=String.prototype.toLowerCase,b=String.prototype.toUpperCase,m=String.prototype.replace,A=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,U=/^(\d+)e/,I=/\.0$/,S=/\.0*e/,k=/(\..*[^0])0*e/;function x(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":h(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=m.call(t,k,"$1e"),t=m.call(t,S,"e"),t=m.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=m.call(t,A,"e+0$1"),t=m.call(t,_,"e-0$1"),r.alternate&&(t=m.call(t,E,"$1."),t=m.call(t,U,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===b.call(r.specifier)?b.call(t):w.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var T=String.fromCharCode,O=isNaN,V=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,t,n,i,a,o,c,u,f;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(v(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,O(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=d(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,t,n,i;for(t=[],i=0,n=G.exec(r);n;)(e=r.slice(i,G.lastIndex-n[0].length)).length&&t.push(e),t.push(H(n)),i=G.lastIndex,n=G.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){return"string"==typeof r}function L(r){var e,t,n;if(!C(r))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=W(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return $.apply(null,t)}var P=Object.prototype,R=P.toString,Z=P.__defineGetter__,M=P.__defineSetter__,X=P.__lookupGetter__,Y=P.__lookupSetter__;var z=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?f:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||Y.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&M&&M.call(r,e,t.set),r};function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return D.call(r);t=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[Q]=t:delete r[Q],n}:function(r){return D.call(r)},er="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,ir="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===rr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=nr,or="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var ur,fr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===rr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=ur,lr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var yr,gr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),t=e,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===rr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr=yr,vr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var wr,br="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(vr&&t instanceof Uint16Array||"[object Uint16Array]"===rr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar={uint16:wr,uint8:dr};(mr=new Ar.uint16(1))[0]=4660;var _r,Er,Ur=52===new Ar.uint8(mr.buffer)[0];!0===Ur?(_r=1,Er=0):(_r=0,Er=1);var Ir={HIGH:_r,LOW:Er},Sr=new sr(1),kr=new ar(Sr.buffer),xr=Ir.HIGH,Fr=Ir.LOW;function jr(r,e,t,n){return Sr[0]=r,e[n]=kr[xr],e[n+t]=kr[Fr],e}function Tr(r){return jr(r,[0,0],1,0)}q(Tr,"assign",jr);var Or,Vr,Nr=!0===Ur?1:0,$r=new sr(1),Gr=new ar($r.buffer);function Hr(r){return $r[0]=r,Gr[Nr]}!0===Ur?(Or=1,Vr=0):(Or=0,Vr=1);var Wr={HIGH:Or,LOW:Vr},Cr=new sr(1),Lr=new ar(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Zr(r,e){return Lr[Pr]=r,Lr[Rr]=e,Cr[0]}var Mr=[0,0];function Xr(t,n,i,a){return e(t)||c(t)?(n[a]=t,n[a+i]=0,n):0!==t&&r(t)<22250738585072014e-324?(n[a]=4503599627370496*t,n[a+i]=-52,n):(n[a]=t,n[a+i]=0,n)}q((function(r){return Xr(r,[0,0],1,0)}),"assign",Xr);var Yr=[0,0],zr=[0,0];function qr(r,t){var n,i,u,f,s,l;return 0===t||0===r||e(r)||c(r)?r:(Xr(r,Yr,1,0),t+=Yr[1],t+=function(r){var e=Hr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Yr[0]),t<-1074?(u=0,f=r,Tr.assign(u,Mr,1,0),s=Mr[0],s&=2147483647,l=Hr(f),Zr(s|=l&=2147483648,Mr[1])):t>1023?r<0?a:o:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,Tr.assign(r,zr,1,0),n=zr[0],n&=2148532223,i*Zr(n|=t+1023<<20,zr[1])))}function Br(r){var t;return e(r)||r===o?r:r===a?0:r>709.782712893384?o:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,t){var n,i,a,o;return qr(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(t=i(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Dr(e){var t,n;if((n=r(e))>44.014845965556525)return e<0?-1:1;if(n>=.625)n=1-2/((t=Br(2*n))+1),e<0&&(n=-n);else{if(0===e)return e;n=e+e*(t=e*e)*function(r){var e,t;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(e=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,t=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(e=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),t=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),e/t)}(t)}return n}export{Dr as default};
//# sourceMappingURL=mod.js.map
