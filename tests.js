import { getAverage, getProduct, getSum } from 'index.js';
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = getSum(nums);
if (sum === 55)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
let product = getProduct(nums);
if (product === 3628800)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
let avg = getAverage(nums);
if (avg === 5.5)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
nums = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -1];
sum = getSum(nums);
if (sum === -56)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
product = getProduct(nums);
if (product === -3628800)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
avg = getAverage(nums);
if (avg === -5.090909090909091)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
nums = [-10];
console.log(getSum(nums));
console.log(getProduct(nums));
console.log(getAverage(nums));
nums = [0];
console.log(getSum(nums));
console.log(getProduct(nums));
console.log(getAverage(nums));
