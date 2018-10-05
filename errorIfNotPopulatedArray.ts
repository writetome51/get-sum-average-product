import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { isEmpty } from 'basic-data-handling/isEmpty_notEmpty';


export function errorIfNotPopulatedArray(array): void {
	errorIfNotArray(array);
	if (isEmpty(array)) {
		throw new Error('The passed array is empty.');
	}
}