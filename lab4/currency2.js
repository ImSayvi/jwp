let Currency = function(funt) {
this.funt = funt; //czyli ile zł warty jest funt
}

Currency.prototype.roundTwoDecimals = function(amount) {
return Math.round(amount * 100) / 100;
}

Currency.prototype.funtNaZl = function(funt) {
return this.roundTwoDecimals(funt * this.funt);
}

Currency.prototype.zlNaFunt = function(zl) {
return this.roundTwoDecimals(this.funt / zl);
}

module.exports = exports = Currency;
