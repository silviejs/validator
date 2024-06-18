import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isISIN } from 'validator';

@rule('isin')
export default class ISINRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isISIN(value);
	}
}
