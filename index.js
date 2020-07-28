import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {errorIfLengthIsZero} from 'error-if-length-is-zero';


export function getSum(numbers) {
	errorIfLengthIsZero(numbers);

	for (var i = 0, total = 0; i < numbers.length; ++i) {
		errorIfNotFiniteNumber(numbers[i]);
		total += numbers[i];
	}
	return total;
}


export function getProduct(numbers) {
	errorIfLengthIsZero(numbers);

	for (var i = 0, product = 1; i < numbers.length; ++i) {
		errorIfNotFiniteNumber(numbers[i]);
		product *= numbers[i];
	}
	return product;
}


export function getAverage(numbers) {
	let sum = getSum(numbers);
	return (sum / numbers.length);
}
