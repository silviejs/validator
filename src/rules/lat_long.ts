import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isLatLong } from 'validator';

@rule('latlng')
export default class LatLngRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, checkDMS = 'false'): boolean {
		return isLatLong(value, {
			checkDMS: checkDMS && ['yes', 'true', '1'].includes(checkDMS),
		});
	}
}
