import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isNumeric } from 'validator';

@rule('numeric')
export default class NumericRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, locale?: string, noSymbols = 'false'): boolean {
		return (
			typeof value === 'number' ||
			isNumeric(value, {
				locale,
				no_symbols: noSymbols && ['yes', 'true', '1'].includes(noSymbols),
			})
		);
	}
}
