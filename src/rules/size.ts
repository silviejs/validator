import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('size')
export default class SizeRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, key: string): boolean {
		if (value instanceof Array || typeof value === 'string') {
			const size = parseInt(key, 10);

			return value.length === size;
		}

		return false;
	}
}
