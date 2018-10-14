import { getSum } from './getSum';
import { getProduct } from './getProduct';
import { getAverage } from './getAverage';


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = getSum(nums);
console.log(sum); // 55

let product = getProduct(nums);
console.log(product); // 3628800

let avg = getAverage(nums);
console.log(avg); // 5.5


nums = [10];

console.log(getSum(nums));

console.log(getProduct(nums));

console.log(getAverage(nums));

nums = [-10];

console.log(getSum(nums));

console.log(getProduct(nums));

console.log(getAverage(nums));

nums = [0];

console.log(getSum(nums));

console.log(getProduct(nums));

console.log(getAverage(nums));