import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isAfter } from 'validator';

@rule('after')
export default class AfterRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, key: string): boolean {
		return isAfter(value, key);
	}
}
