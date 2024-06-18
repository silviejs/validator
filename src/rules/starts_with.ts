import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('startsWith')
export default class StartsWithRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, key: string): boolean {
		if (typeof value === 'string') {
			return value.startsWith(key);
		}

		return false;
	}
}
