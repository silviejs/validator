import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('empty')
export default class EmptyRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, trim = 'true'): boolean {
		return (trim && ['yes', 'true', '1'].includes(trim) ? `${value}`.trim() : `${value}`).length === 0;
	}
}
