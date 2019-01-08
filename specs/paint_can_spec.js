const assert = require('assert');
const PaintCan = require('../paint_can');

describe('PaintCan', function () {
  let paintCan1;

  beforeEach(function() {
    paintCan1 = new PaintCan(20);

  });

  it('it has a number of ltrs of paint', function () {
    const actual = paintCan1.volume;
    assert.strictEqual(actual, 20);
  });

  it('be able to check if it is empty', function () {
    const actual = paintCan1.isEmpty();
    assert.strictEqual(actual, false);
  });

  it('be able to remove paint', function () {
    paintCan1.removePaint(3);
    const actual = paintCan1.volume;
    assert.strictEqual(actual, 17);
  });
});
