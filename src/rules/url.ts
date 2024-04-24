import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isURL } from 'validator';

@rule('url')
export default class URLRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isURL(value);
	}
}
