import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isISO31661Alpha2 } from 'validator';

@rule('iso31661Alpha2')
export default class ISO31661Alpha2Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isISO31661Alpha2(value);
	}
}
