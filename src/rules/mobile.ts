import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMobilePhone } from 'validator';

@rule('mobile')
export default class MobileRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, locale: any): boolean {
		if (locale === 'fa-IR') {
			return /^(?:98|\+98|0098|0)?9[0-9]{9}$/.test(value);
		}

		return isMobilePhone(value, locale);
	}
}
