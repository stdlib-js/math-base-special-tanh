"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(m,s){
function f(r){var e,a,t;return r===0?-.3333333333333332:(r<0?e=-r:e=r,e<=1?(a=-1614.6876844170845+r*(-99.28772310019185+r*(-.9643991794250523+r*0)),t=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+r*1))):(r=1/r,a=0+r*(-.9643991794250523+r*(-99.28772310019185+r*-1614.6876844170845)),t=1+r*(112.81167849163293+r*(2235.4883906010045+r*4844.063053251255))),a/t)}s.exports=f
});var v=i(function(z,n){
var l=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/math-base-special-exp/dist'),c=u(),p=88.02969193111305;function q(r){var e,a;if(a=l(r),a>.5*p)return r<0?-1:1;if(a>=.625)e=o(2*a),a=1-2/(e+1),r<0&&(a=-a);else{if(r===0)return r;e=r*r,a=r+r*e*c(e)}return a}n.exports=q
});var b=v();module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
