import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isHexadecimal } from 'validator';

@rule('hex')
export default class HexadecimalRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isHexadecimal(value);
	}
}
