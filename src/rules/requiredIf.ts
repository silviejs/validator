import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import checkExistence from '../helpers/checkExistence';

@rule('requiredIf')
export default class RequiredIfRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, path: string, key: string): boolean {
		const results = Validator.findData(validator.data, path.split('.'));

		if (results.length === 0) {
			return checkExistence(value) || undefined;
		}

		for (let index = 0; index < results.length; index++) {
			const { value: matchingValue } = results[index];

			if ((typeof matchingValue === 'string' ? matchingValue : JSON.stringify(matchingValue)) !== key) {
				return checkExistence(value) || undefined;
			}
		}

		return checkExistence(value) || null;
	}
}
