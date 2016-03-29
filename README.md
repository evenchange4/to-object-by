# to-object-by

> Reduce an Array into Object for indexing purpose.

[![Travis][build-badge]][build] [![Coverage Status][coveralls-badge]][coveralls] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[build-badge]: https://img.shields.io/travis/evenchange4/to-object-by/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/to-object-by

[npm-badge]: https://img.shields.io/npm/v/to-object-by.svg?style=flat-square
[npm]: https://www.npmjs.org/package/to-object-by

[coveralls-badge]: https://img.shields.io/coveralls/evenchange4/to-object-by/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/evenchange4/to-object-by

[npm-downloads]: https://img.shields.io/npm/dt/to-object-by.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/to-object-by.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

## Installation

```console
$ npm install to-object-by --save
```

[Quick DEMO on tonicdev](https://tonicdev.com/evenchange4/to-object-by)

## Usage

```js
import toObjectBy from 'to-object-by';

t.same(
  toObjectBy(
    [
      { foo: 'foo1', bar: 'bar1' },
      { foo: 'foo2', bar: 'bar1' },
    ],
    e => ({ [e.foo]: e }),
  ),
  {
    foo1: { foo: 'foo1', bar: 'bar1' },
    foo2: { foo: 'foo2', bar: 'bar1' },
  }
);
```

## API

```js
type Element = Object;

toObjectBy(
  array: Array<Element>,
  propertyMapper: (e: Element) => Object,
): Object
```

## Test

```
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
