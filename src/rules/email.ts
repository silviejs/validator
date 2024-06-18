import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isEmail } from 'validator';

@rule('email')
export default class EmailRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isEmail(value);
	}
}
