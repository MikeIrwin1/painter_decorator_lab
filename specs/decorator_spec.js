const assert = require('assert');
const Decorator = require('../decorator');

describe('Decorator', function () {
  it('should start with empty paint stock', function () {
    const decorator1 = new Decorator();
    const actual = decorator1.paintStock;
    assert.deepStrictEqual(actual, []);
  });
});
