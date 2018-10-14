"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSum_1 = require("./getSum");
var getProduct_1 = require("./getProduct");
var getAverage_1 = require("./getAverage");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = getSum_1.getSum(nums);
console.log(sum); // 55
var product = getProduct_1.getProduct(nums);
console.log(product); // 3628800
var avg = getAverage_1.getAverage(nums);
console.log(avg); // 5.5
nums = [10];
console.log(getSum_1.getSum(nums));
console.log(getProduct_1.getProduct(nums));
console.log(getAverage_1.getAverage(nums));
nums = [-10];
console.log(getSum_1.getSum(nums));
console.log(getProduct_1.getProduct(nums));
console.log(getAverage_1.getAverage(nums));
nums = [0];
console.log(getSum_1.getSum(nums));
console.log(getProduct_1.getProduct(nums));
console.log(getAverage_1.getAverage(nums));
