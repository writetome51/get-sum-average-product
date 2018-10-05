"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfArrayItemIsNotNumber_1 = require("error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getProduct(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var product = 1;
    for (var i = 0; i < numbers.length; ++i) {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(numbers[i]);
        product *= numbers[i];
    }
    return product;
}
exports.getProduct = getProduct;
