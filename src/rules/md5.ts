import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMD5 } from 'validator';

@rule('md5')
export default class MD5Rule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isMD5(value);
	}
}
