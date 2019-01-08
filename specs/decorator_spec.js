const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can')

describe('Decorator', function () {
  let decorator1;
  let paintCan1;

  beforeEach(function () {
    decorator1 = new Decorator();
    paintCan1 = new PaintCan(20);
    paintCan2 = new PaintCan(10);
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

  it('should be able to calculate total volume of paint', function () {
    decorator1.addCan(paintCan1);
    decorator1.addCan(paintCan2);
    const actual = decorator1.totalVolume();
    assert.strictEqual(actual, 30);
  });
});
