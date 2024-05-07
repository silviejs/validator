import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import {IPVersion, isIP} from 'validator';

@rule('ip')
export default class IPRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, version: any = '4'): boolean {
		return isIP(value, version);
	}
}
