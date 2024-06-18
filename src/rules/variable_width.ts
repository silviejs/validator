import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isVariableWidth } from 'validator';

@rule('variableWidth')
export default class VariableWidthRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isVariableWidth(value);
	}
}
