import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isHash } from 'validator';

@rule('hash')
export default class HashRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, algorithm: string): boolean {
		return isHash(value, algorithm);
	}
}
