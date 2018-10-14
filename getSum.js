"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_array_item_is_not_number_1 = require("error-if-array-item-is-not-number");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getSum(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var total = 0;
    for (var i = 0; i < numbers.length; ++i) {
        error_if_array_item_is_not_number_1.errorIfArrayItemIsNotNumber(numbers[i]);
        total += numbers[i];
    }
    return total;
}
exports.getSum = getSum;
