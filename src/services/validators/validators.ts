import { Value } from '../store/action-interface';

export const nameValidator = (value: Value) => typeof value === 'string' && value.trim().length > 3;
export const timeValidator = (value: Value) => typeof value === 'string' && value !== '00:00:00';
export const selectValidator = (value: Value) => typeof value === 'string' && value !== 'default';
export const pizzaValidator = (value: Value) => value > 0 && value <= 8;
export const soupValidator = (value: Value) => value >= 1 && value <= 10;
export const breadValidator = (value: Value) => value > 0 && value <= 5;
export const checkboxValidator = (value: Value) => {
	if (value === 30) return false;
	if (value === 42) return false;
	if (value === 50) return false;
	if (value === 60) return false;
	return true;
};
