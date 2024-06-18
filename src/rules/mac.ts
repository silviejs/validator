import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMACAddress } from 'validator';

@rule('mac')
export default class MACAddressRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, noColons = 'false'): boolean {
		return isMACAddress(value, {
			no_colons: noColons && ['yes', 'true', '1'].includes(noColons),
		});
	}
}
