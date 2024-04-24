import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isIPRange } from 'validator';

@rule('ipRange')
export default class IPRangeRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isIPRange(value);
	}
}
