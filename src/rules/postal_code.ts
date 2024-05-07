import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isPostalCode } from 'validator';

@rule('postalCode')
export default class PostalCodeRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, locale: any): boolean {
		return isPostalCode(value, locale);
	}
}
