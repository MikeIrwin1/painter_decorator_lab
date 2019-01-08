const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addCan = function (can) {
  this.paintStock.push(can);
};

Decorator.prototype.totalVolume = function () {
  let totalVolume = 0;
  for (can of this.paintStock){
    totalVolume += can.volume;
  }
  return totalVolume;
};
module.exports = Decorator;
