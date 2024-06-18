import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isBefore } from 'validator';

@rule('before')
export default class BeforeRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, key: string): boolean {
		return isBefore(value, key);
	}
}
