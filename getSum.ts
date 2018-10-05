import { errorIfArrayItemIsNotNumber } 
	from 'error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber';
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
