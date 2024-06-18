import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isLowercase } from 'validator';

@rule('lowercase')
export default class LowercaseRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isLowercase(value);
	}
}
