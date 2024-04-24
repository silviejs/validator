import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('endsWith')
export default class EndsWithRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, key: string): boolean {
		if (typeof value === 'string') {
			return value.endsWith(key);
		}

		return false;
	}
}
