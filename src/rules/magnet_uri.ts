import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMagnetURI } from 'validator';

@rule('magnetUri')
export default class MagnetURIRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isMagnetURI(value);
	}
}
