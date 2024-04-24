import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isInt } from 'validator';

@rule('int')
export default class IntRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return typeof value === 'number' || (typeof value === 'string' && isInt(`${value}`));
	}
}
