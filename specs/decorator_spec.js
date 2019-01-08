const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can')

describe('Decorator', function () {
  let decorator1;
  let paintCan1;

  beforeEach(function () {
    decorator1 = new Decorator();
    paintCan1 = new PaintCan(20);
  });


  it('should start with empty paint stock', function () {
    const actual = decorator1.paintStock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a can of paint to stock', function () {
    decorator1.addCan(paintCan1);
    const actual = decorator1.paintStock.length;
    assert.strictEqual(actual, 1);
  })
});
