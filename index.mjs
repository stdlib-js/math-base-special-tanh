// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";function s(s){var r,i;if((i=e(s))>44.014845965556525)return s<0?-1:1;if(i>=.625)i=1-2/((r=t(2*i))+1),s<0&&(i=-i);else{if(0===s)return s;i=s+s*(r=s*s)*function(e){var t,s;return 0===e?-.3333333333333332:((e<0?-e:e)<=1?(t=e*(e*(0*e-.9643991794250523)-99.28772310019185)-1614.6876844170845,s=4844.063053251255+e*(2235.4883906010045+e*(112.81167849163293+1*e))):(t=0+(e=1/e)*(e*(-1614.6876844170845*e-99.28772310019185)-.9643991794250523),s=1+e*(112.81167849163293+e*(2235.4883906010045+4844.063053251255*e))),t/s)}(r)}return i}export{s as default};
//# sourceMappingURL=index.mjs.map
