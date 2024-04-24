import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('boolean')
export default class BooleanRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		if (typeof value === 'boolean') {
			return true;
		}
		if (typeof value === 'number') {
			return value === 0 || value === 1;
		}
		return ['yes', 'no', 'on', 'off'].includes(value);
	}
}
