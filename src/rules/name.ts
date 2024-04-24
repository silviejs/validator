import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('name')
export default class NameRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return /^[^0-9\\/'"[\]{}()_\-=+*&^%$#@!~`,.<>?:;]+$/.test(value);
	}
}
