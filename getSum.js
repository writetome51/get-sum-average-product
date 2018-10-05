"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfArrayItemIsNotNumber_1 = require("error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getSum(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var total = 0;
    for (var i = 0; i < numbers.length; ++i) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(numbers[i]);
        total += numbers[i];
    }
    return total;
}
exports.getSum = getSum;
