"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_array_item_is_not_number_1 = require("error-if-array-item-is-not-number");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getProduct(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var product = 1;
    for (var i = 0; i < numbers.length; ++i) {
        error_if_array_item_is_not_number_1.errorIfArrayItemIsNotNumber(numbers[i]);
        product *= numbers[i];
    }
    return product;
}
exports.getProduct = getProduct;
