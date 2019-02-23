"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = index_1.getSum(nums);
if (sum === 55)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
var product = index_1.getProduct(nums);
if (product === 3628800)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
var avg = index_1.getAverage(nums);
if (avg === 5.5)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
nums = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1];
sum = index_1.getSum(nums);
if (sum === -56)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
product = index_1.getProduct(nums);
if (product === -3628800)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
avg = index_1.getAverage(nums);
if (avg === -5.090909090909091)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
nums = [-10];
console.log(index_1.getSum(nums));
console.log(index_1.getProduct(nums));
console.log(index_1.getAverage(nums));
nums = [0];
console.log(index_1.getSum(nums));
console.log(index_1.getProduct(nums));
console.log(index_1.getAverage(nums));
