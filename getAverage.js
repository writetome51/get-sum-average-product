"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSum_1 = require("./getSum");
function getAverage(numbers) {
    var sum = getSum_1.getSum(numbers);
    return (sum / numbers.length);
}
exports.getAverage = getAverage;
