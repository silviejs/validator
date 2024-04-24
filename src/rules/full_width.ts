import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isFullWidth } from 'validator';

@rule('fullWidth')
export default class FullWidthRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isFullWidth(value);
	}
}
