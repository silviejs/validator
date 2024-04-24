import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('distinct')
export default class DistinctRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		if (value instanceof Array) {
			return value.length === new Set(value).size;
		}

		return false;
	}
}
