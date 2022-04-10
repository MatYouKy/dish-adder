import { ChangeEvent, useEffect, useState } from 'react';
import { DishType, Value } from '../store/action-interface';

export type ValidatorType = (value: Value | DishType) => boolean;
type ChangeEventType = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;

export const useInputValidate = (validator: ValidatorType, reducer: any, defaultValue: Value) => {
	const [value, setValue] = useState(defaultValue);
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validator(value);
	const hasError = !valueIsValid && isTouched;

	const changeHandler = (event: ChangeEventType) => setValue(event.target.value);

	const checkHandler = (event: ChangeEventType) => setValue(parseInt(event.target.value, 10));

	const blurHandler = () => setIsTouched(true);

	const reset = () => {
		setValue(defaultValue);
		setIsTouched(false);
	};

	useEffect(() => {
		reducer(value, valueIsValid);
	}, [value]);

	return {
		value,
		hasError,
		valueIsValid,
		changeHandler,
		blurHandler,
		checkHandler,
		reset
	};
};
