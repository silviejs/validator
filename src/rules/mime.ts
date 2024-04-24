import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMimeType } from 'validator';

@rule('mime')
export default class MimeTypeRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isMimeType(value);
	}
}
