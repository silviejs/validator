import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('array')
export default class ArrayRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return value instanceof Array;
	}
}
