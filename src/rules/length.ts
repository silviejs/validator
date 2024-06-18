import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('length')
export default class LengthRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, length: string): boolean {
		if (value instanceof Array || typeof value === 'string') {
			return value.length === parseInt(length, 10);
		}

		return `${value}`.length === parseInt(length, 10);
	}
}
