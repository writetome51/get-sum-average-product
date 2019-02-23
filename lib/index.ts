import { errorIfArrayItemIsNotNumber } from 'error-if-array-item-is-not-number';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


export function getSum(numbers: number[]): number {
	errorIfNotPopulatedArray(numbers);
	let total = 0;
	for (let i = 0; i < numbers.length; ++i) {

		errorIfArrayItemIsNotNumber(numbers[i]);
		total += numbers[i];
	}
	return total;
}


export function getProduct(numbers: number[]): number {
	errorIfNotPopulatedArray(numbers);
	let product = 1;
	for (let i = 0; i < numbers.length; ++i) {

		errorIfArrayItemIsNotNumber(numbers[i]);
		product *= numbers[i];
	}
	return product;
}


export function getAverage(numbers: number[]): number {
	let sum = getSum(numbers);
	return (sum / numbers.length);
}
