<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# tanh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hyperbolic tangent][hyperbolic-tangent] of a number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-tanh
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var tanh = require( '@stdlib/math-base-special-tanh' );
```

#### tanh( x )

Computes the [hyperbolic tangent][hyperbolic-tangent] of a `number` (in radians).

```javascript
var v = tanh( 0.0 );
// returns 0.0

v = tanh( -0.0 );
// returns -0.0

v = tanh( 2.0 );
// returns ~0.964

v = tanh( -2.0 );
// returns ~-0.964

v = tanh( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var tanh = require( '@stdlib/math-base-special-tanh' );

var x = linspace( -4.0, 4.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( tanh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cosh`][@stdlib/math/base/special/cosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinh`][@stdlib/math/base/special/sinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic sine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/tan`][@stdlib/math/base/special/tan]</span><span class="delimiter">: </span><span class="description">evaluate the tangent of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-tanh.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-tanh

[test-image]: https://github.com/stdlib-js/math-base-special-tanh/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-tanh/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-tanh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-tanh?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-tanh.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-tanh/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-tanh/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-tanh/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-tanh/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-tanh/main/LICENSE

[hyperbolic-tangent]: http://mathworld.wolfram.com/HyperbolicTangent.html

<!-- <related-links> -->

[@stdlib/math/base/special/cosh]: https://github.com/stdlib-js/math-base-special-cosh

[@stdlib/math/base/special/sinh]: https://github.com/stdlib-js/math-base-special-sinh

[@stdlib/math/base/special/tan]: https://github.com/stdlib-js/math-base-special-tan

<!-- </related-links> -->

</section>

<!-- /.links -->
