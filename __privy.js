import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {errorIfLengthIsZero} from 'error-if-length-is-zero';
import reduce from '@arr/reduce';


export function getNumbersReduced(numbers, fn, initialValue) {
	errorIfLengthIsZero(numbers);
	return reduce(
		numbers,
		(accumulator, value) => {
			errorIfNotFiniteNumber(value);
			return fn(accumulator, value);
		},
		initialValue
	);
}
