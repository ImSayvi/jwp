function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

const GB_PLN = 4.787;

exports.zlNaFunty = function(zl){
    return roundTwoDecimals(zl / GB_PLN);
}

exports.funtyNaZl = function(funt){
    return roundTwoDecimals(funt * GB_PLN);
}