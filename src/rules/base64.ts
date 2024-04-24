import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isBase64 } from 'validator';

@rule('base64')
export default class Base64Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isBase64(value);
	}
}
