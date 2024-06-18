import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isDataURI } from 'validator';

@rule('dataUri')
export default class DataURIRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isDataURI(value);
	}
}
