import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMultibyte } from 'validator';

@rule('multibyte')
export default class MultibyteRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isMultibyte(value);
	}
}
