import {getNumbersReduced} from './__privy.js';


export function getSum(numbers) {
	return getNumbersReduced(numbers, (sum, value) => sum + value, 0);
}


export function getProduct(numbers) {
	return getNumbersReduced(numbers, (product, value) => product * value, 1);
}


export function getAverage(numbers) {
	let sum = getSum(numbers);
	return (sum / numbers.length);
}
