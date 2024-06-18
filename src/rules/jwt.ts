import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isJWT } from 'validator';

@rule('jwt')
export default class JWTRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isJWT(value);
	}
}
