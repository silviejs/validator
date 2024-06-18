import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isBase32 } from 'validator';

@rule('base32')
export default class Base32Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isBase32(value);
	}
}
