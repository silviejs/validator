import IValidationRule, { rule } from '../rule';
import Validator from '../index';
import { isMongoId } from 'validator';

@rule('mongoId')
export default class MongoIdRule implements IValidationRule {
	validate(validator: Validator, name: string, value: any): boolean {
		return isMongoId(value);
	}
}
