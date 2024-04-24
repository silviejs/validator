import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isCreditCard } from 'validator';

@rule('creditCard')
export default class CreditCardRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, locale?: string): boolean {
		if (locale === 'fa-IR') {
			return /^[0-9]{16}$/.test(value);
		}

		return isCreditCard(value);
	}
}
