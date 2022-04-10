import { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector } from 'react-redux';
import { Action, Value } from '../../../services/store/action-interface';
import { useInputValidate, ValidatorType } from '../../../services/hooks/useInputValidate';

import classes from './Input.module.scss';
import { RootState } from '../../../services/store/reducers';

type InputType = {
	type: string;
	name: string;
	placeholder?: string;
	min?: string;
	max?: string;
	step?: string;
	checked?: boolean;
};

interface InputInterface {
	id: string;
	initialValue: Value;
	label: string;
	input: InputType;
	reducer: (value: Value, slicesIsValid: boolean) => (dispatch: Dispatch<Action>) => void;
	validator: ValidatorType;
}

const TextInput: FC<InputInterface> = ({ id, label, input, initialValue, reducer, validator }) => {
	const { reset, value, hasError, changeHandler, blurHandler } = useInputValidate(validator, reducer, initialValue);

	const isReset = useSelector((state: RootState) => state.dishReducer.isReset);

	useEffect(() => {
		if (isReset) reset();
	}, [isReset]);

	return (
		<div className={classes.container}>
			<label className={classes.label} htmlFor={id}>
				{label}
			</label>
			<input
				onChange={changeHandler}
				onBlur={blurHandler}
				value={value}
				className={`${classes.input} ${hasError && classes.error}`}
				id={`input_id_${id}`}
				{...input}
			/>
		</div>
	);
};

export default TextInput;
