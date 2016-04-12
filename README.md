# to-object-by

> Reduce an Array into Object for indexing purpose.

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/to-object-by/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/to-object-by

[npm-badge]: https://img.shields.io/npm/v/to-object-by.svg?style=flat-square
[npm]: https://www.npmjs.org/package/to-object-by

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/to-object-by.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/to-object-by?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/to-object-by.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/to-object-by.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/to-object-by.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/to-object-by
[devDependency-badge]: https://david-dm.org/evenchange4/to-object-by/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/to-object-by#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/to-object-by/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/to-object-by#info=peerDependencies

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
