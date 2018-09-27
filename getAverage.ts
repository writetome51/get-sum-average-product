import { getSum } from './getSum';


export function getAverage(numbers) {
	let sum = getSum(numbers);
	return (sum / numbers.length);
}
