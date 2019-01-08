const assert = require('assert');
const Room = require('../room');

describe('Room', function () {
  let room;

  it('it should have an area', function () {
    const room1 = new Room(20);
    const actual = room1.area;
    assert.strictEqual(actual, 20);
  });

});
