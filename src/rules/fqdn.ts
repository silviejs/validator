import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isFQDN } from 'validator';

@rule('fqdn')
export default class FQDNRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isFQDN(value);
	}
}
