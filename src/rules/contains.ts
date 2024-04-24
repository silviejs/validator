import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('contains')
export default class ContainsRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, key: string): boolean {
		return value.includes(key);
	}
}
