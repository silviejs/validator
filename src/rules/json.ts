import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isJSON } from 'validator';

@rule('json')
export default class JSONRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isJSON(value);
	}
}
