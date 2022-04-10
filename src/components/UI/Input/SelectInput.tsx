import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useInputValidate, ValidatorType } from '../../../services/hooks/useInputValidate';
import { Action, DishType, Value } from '../../../services/store/action-interface';
import { RootState } from '../../../services/store/reducers';
import classes from './Input.module.scss';

interface SelectInterface {
	id: string;
	initialValue: Value;
	label: string;
	title: string;
	reducer: (value: DishType, slicesIsValid: boolean) => (dispatch: Dispatch<Action>) => void;
	validator: ValidatorType;
}

const SelectInput: FC<SelectInterface> = ({ id, label, title, initialValue, reducer, validator }) => {
	const { value, hasError, changeHandler, blurHandler, reset } = useInputValidate(validator, reducer, initialValue);

	const isReset = useSelector((state: RootState) => state.dishReducer.isReset);

	useEffect(() => {
		if (isReset) reset();
	}, [isReset]);

	return (
		<div className={classes.container}>
			<label htmlFor={id} className={classes.label}>
				{label}
			</label>
			<select
				value={value}
				onChange={changeHandler}
				onFocus={blurHandler}
				className={`${classes.select} ${hasError && classes.error}`}
				id={id}
				name='dish-type'
				title={title}
			>
				<option value='default' disabled>
					Choose here
				</option>
				<option value='pizza'>Pizza</option>
				<option value='soup' className={classes.option}>
					Soup
				</option>
				<option value='sandwitch' className={classes.option}>
					Sandwitch
				</option>
			</select>
		</div>
	);
};

export default SelectInput;
