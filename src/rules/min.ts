import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isNumeric } from 'validator';

@rule('min')
export default class MinRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, minValue: string): boolean {
		const min = Number(minValue);

		if (value instanceof Array || typeof value === 'string') {
			return value.length >= min;
		}

		if (typeof value === 'number' || isNumeric(`${value}`)) {
			return value >= min;
		}

		return false;
	}
}
