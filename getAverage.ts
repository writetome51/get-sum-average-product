import { getSum } from './getSum';


export function getAverage(numbers): number {
	let sum = getSum(numbers);
	return (sum / numbers.length);
}
