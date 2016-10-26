import test from 'ava';
import toObjectBy from '../src/toObjectBy';

test('should return a function', (t) => {
  t.is(typeof toObjectBy, 'function');
});

test('should return correct object', (t) => {
  t.deepEqual(
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
});
