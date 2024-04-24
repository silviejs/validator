import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isUUID } from 'validator';

@rule('uuid')
export default class UUIDRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any, version?: string): boolean {
		return isUUID(value, version);
	}
}
