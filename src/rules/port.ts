import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isPort } from 'validator';

@rule('port')
export default class PortRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isPort(value);
	}
}
