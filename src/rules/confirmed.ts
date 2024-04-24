import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import checkExistence from '../helpers/checkExistence';

@rule('confirmed')
export default class ConfirmedRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, confirmationName?: string): boolean {
		let results;
		if (confirmationName) {
			results = Validator.findData(validator.data, confirmationName.split('.'));
		} else {
			results = Validator.findData(validator.data, `${name}Confirmation`.split('.'));
		}

		if (results.length === 0) {
			return false;
		}

		const [{ value: confirmedValue }] = results;

		return checkExistence(confirmedValue) && confirmedValue === value;
	}
}
