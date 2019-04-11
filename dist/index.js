"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getSum(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var total = 0;
    for (var i = 0; i < numbers.length; ++i) {
        error_if_not_finite_number_1.errorIfNotFiniteNumber(numbers[i]);
        total += numbers[i];
    }
    return total;
}
exports.getSum = getSum;
function getProduct(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var product = 1;
    for (var i = 0; i < numbers.length; ++i) {
        error_if_not_finite_number_1.errorIfNotFiniteNumber(numbers[i]);
        product *= numbers[i];
    }
    return product;
}
exports.getProduct = getProduct;
function getAverage(numbers) {
    var sum = getSum(numbers);
    return (sum / numbers.length);
}
exports.getAverage = getAverage;
