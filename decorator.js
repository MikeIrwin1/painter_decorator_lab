const Decorator = function () {
  this.paintStock = [];
};

Decorator.prototype.addCan = function (can) {
  this.paintStock.push(can);
};
module.exports = Decorator;
