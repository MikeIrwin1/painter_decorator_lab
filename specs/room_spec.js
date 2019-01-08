const assert = require('assert');
const Room = require('../room.js');

describe('room', function () {
  // let room;

  it('it should have an area', function () {
    const room1 = new Room(20);
    const actual = room1.area;
    assert.strictEqual(actual, 20);
  });

  it('it should start unpainted', function() {
    const room1 = new Room(20);
    const actual = room1.painted;
    assert.strictEqual(actual, false);
  });
});
