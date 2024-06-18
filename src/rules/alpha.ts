import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isAlpha } from 'validator';

@rule('alpha')
export default class AlphaRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isAlpha(value);
	}
}
