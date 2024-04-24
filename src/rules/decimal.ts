import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isDecimal } from 'validator';

@rule('decimal')
export default class DecimalRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, locale = 'en-US'): boolean {
		return isDecimal(`${value}`, { locale });
	}
}
