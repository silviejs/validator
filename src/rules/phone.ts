import IValidationRule, { rule } from '../rule';
import Validator from '../index';

const validPhonePrefixes = [
	'41',
	'44',
	'45',
	'31',
	'84',
	'77',
	'21',
	'38',
	'51',
	'56',
	'58',
	'61',
	'24',
	'23',
	'54',
	'71',
	'26',
	'25',
	'28',
	'87',
	'34',
	'83',
	'74',
	'17',
	'13',
	'66',
	'11',
	'86',
	'76',
	'81',
	'35',
];

@rule('phone')
export default class PhoneRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, locale: any): boolean {
		if (locale === 'fa-IR') {
			return new RegExp(`^((\\+|00)?98|0)?(${validPhonePrefixes.join('|')})[1-9]\\d{2,7}$`).test(value);
		}

		return true;
	}
}
