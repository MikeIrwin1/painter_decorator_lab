const PaintCan = function (volume) {
  this.volume = volume;
};

PaintCan.prototype.isEmpty = function () {
  if (this.volume === 0){
    return true;
  }
  else {
    return false;
  };
};

PaintCan.prototype.removePaint = function (amount) {
  this.volume -= amount;
};

module.exports = PaintCan;
