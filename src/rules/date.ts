import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isDate } from 'validator';

@rule('date')
export default class DateRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, format: string): boolean {
		return isDate(value, { format });
	}
}
