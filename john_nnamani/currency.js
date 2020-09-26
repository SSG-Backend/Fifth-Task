currency = function (value, type) {
    value = value / 100;
    value = value.toFixed(2);
    return type + value;
};

console.log(currency("2000", "$"));
console.log(currency(69080, "$"));