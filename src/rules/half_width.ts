import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isHalfWidth } from 'validator';

@rule('halfWidth')
export default class HalfWidthRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isHalfWidth(value);
	}
}
