import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isAlphanumeric } from 'validator';

@rule('alphanumeric')
export default class AlphaNumericRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isAlphanumeric(value);
	}
}
