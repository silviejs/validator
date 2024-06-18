import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('nullable')
export default class NullableRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		if (value !== null && value !== undefined) {
			if (typeof value === 'string') {
				return value.trim().length > 0 || undefined;
			}

			if (value instanceof Array) {
				return value.length > 0 || undefined;
			}

			return true;
		}

		return undefined;
	}
}
