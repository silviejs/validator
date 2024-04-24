import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isOctal } from 'validator';

@rule('octal')
export default class OctalRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isOctal(value);
	}
}
