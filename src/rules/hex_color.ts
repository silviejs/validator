import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isHexColor } from 'validator';

@rule('hexColor')
export default class HexColorRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isHexColor(value);
	}
}
