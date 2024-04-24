import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isISO8601 } from 'validator';

@rule('iso8601')
export default class ISO8601Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, isStrict = 'true'): boolean {
		return isISO8601(value, {
			strict: isStrict && ['yes', 'true', '1'].includes(isStrict),
		});
	}
}
