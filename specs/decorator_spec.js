const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('Decorator', function () {
  let decorator1;
  let paintCan1;
  let paintCan2;
  let room1;

  beforeEach(function () {
    decorator1 = new Decorator();
    paintCan1 = new PaintCan(20);
    paintCan2 = new PaintCan(10);
    room1 = new Room(25);
    room2 = new Room(100);
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

  it('should be able to paint a small room', function () {
    decorator1.addCan(paintCan1);
    decorator1.addCan(paintCan2);
    const actual = decorator1.canPaint(room1);
    assert.strictEqual(actual, true);
  });

  it('should have enough stock to paint room', function () {
    decorator1.addCan(paintCan1);
    decorator1.addCan(paintCan2);
    const actual = decorator1.canPaint(room2);
    assert.strictEqual(actual, false);
  });

  it('should be able to paint a room if enough paint in stock', function () {
    decorator1.addCan(paintCan1);
    decorator1.addCan(paintCan2);
    decorator1.paintRoom(room1);
    const actual = room1.painted;
    assert.strictEqual(actual, true);
  });
});
