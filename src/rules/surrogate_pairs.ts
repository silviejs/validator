import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isSurrogatePair } from 'validator';

@rule('surrogate')
export default class SurrogatePairRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isSurrogatePair(value);
	}
}
