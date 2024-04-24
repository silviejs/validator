import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isDivisibleBy } from 'validator';

@rule('divisibleBy')
export default class DivisibleByRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, divider: string): boolean {
		return isDivisibleBy(value, divider);
	}
}
