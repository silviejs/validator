import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isFloat } from 'validator';

@rule('float')
export default class FloatRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isFloat(`${value}`);
	}
}
