import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isNumeric } from 'validator';

@rule('max')
export default class MaxRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, maxValue: string): boolean {
		const max = Number(maxValue);

		if (value instanceof Array || typeof value === 'string') {
			return value.length <= max;
		}

		if (typeof value === 'number' || isNumeric(`${value}`)) {
			return value <= max;
		}

		return false;
	}
}
