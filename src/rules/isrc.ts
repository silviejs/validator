import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isISRC } from 'validator';

@rule('isrc')
export default class ISRCRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isISRC(value);
	}
}
