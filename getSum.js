"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfArrayItemIsNotNumber_1 = require("error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber");
var errorIfNotPopulatedArray_1 = require("./errorIfNotPopulatedArray");
function getSum(numbers) {
    errorIfNotPopulatedArray_1.errorIfNotPopulatedArray(numbers);
    var total = 0;
    for (var i = 0; i < numbers.length; ++i) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(numbers[i]);
        total += numbers[i];
    }
    return total;
}
exports.getSum = getSum;
