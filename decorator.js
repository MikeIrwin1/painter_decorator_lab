const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addCan = function (can) {
  this.paintStock.push(can);
};

Decorator.prototype.totalVolume = function () {
  let totalVolume = 0;
  for (const can of this.paintStock){
    totalVolume += can.volume;
  }
  return totalVolume;
};

Decorator.prototype.canPaint = function (room) {
  if (this.totalVolume() >= room.area){
    return true;
  }
  else {
    return false;
  }
};

Decorator.prototype.paintRoom = function (room) {
  if (this.canPaint(room) === true) {
    room.paint();
  }
  else {
    console.log('You don\'t have enough paint!');
  }
};
module.exports = Decorator;
