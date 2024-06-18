import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('present')
export default class PresentRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return value !== undefined || null;
	}
}
