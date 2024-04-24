import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isIP } from 'validator';

@rule('ip')
export default class IPRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, version = '4'): boolean {
		return isIP(value, version);
	}
}
