import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isUppercase } from 'validator';

@rule('uppercase')
export default class UppercaseRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isUppercase(value);
	}
}
