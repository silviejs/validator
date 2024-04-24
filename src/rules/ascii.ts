import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isAscii } from 'validator';

@rule('ascii')
export default class ASCIIRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isAscii(value);
	}
}
