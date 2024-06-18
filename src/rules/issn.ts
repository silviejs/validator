import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isISSN } from 'validator';

@rule('issn')
export default class ISSNRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, caseSensitive = 'false', requireHyphen = 'false'): boolean {
		return isISSN(value, {
			case_sensitive: caseSensitive && ['yes', 'true', '1'].includes(caseSensitive),
			require_hyphen: requireHyphen && ['yes', 'true', '1'].includes(requireHyphen),
		});
	}
}
