import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import {ISBNVersion, isISBN} from 'validator';

@rule('isbn')
export default class ISBNRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, version: any = '10'): boolean {
		return isISBN(value, version);
	}
}
