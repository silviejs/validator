import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import checkExistence from '../helpers/checkExistence';

@rule('required')
export default class RequiredRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return checkExistence(value) || null;
	}
}
