import IValidationRule, { rule } from '../rule';
import Validator from '../index';

@rule('in')
export default class InRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, ...keys: string[]): boolean {
		return keys.includes(`${value}`);
	}
}
