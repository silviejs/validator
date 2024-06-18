import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isISO31661Alpha3 } from 'validator';

@rule('iso31661Alpha3')
export default class ISO31661Alpha3Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isISO31661Alpha3(value);
	}
}
