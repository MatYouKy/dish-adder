import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useInputValidate } from '../../../services/hooks/useInputValidate';
import * as ActionCreators from '../../../services/store/action-creators';
import { RootState } from '../../../services/store/reducers';
import { checkboxValidator } from '../../../services/validators/validators';
import classes from './Checkbox.module.scss';

const CheckboxInput: FC<{ diameters: number[] }> = ({ diameters }) => {
	const isReset = useSelector((state: RootState) => state.dishReducer.isReset);

	const dispatch = useDispatch();
	const { selectDiameter } = bindActionCreators(ActionCreators, dispatch);

	const { value, blurHandler, checkHandler, reset } = useInputValidate(checkboxValidator, selectDiameter, 0);

	useEffect(() => {
		if (isReset) reset();
	}, [isReset]);

	const radio = diameters.map(number => (
		<div className={classes.checkbox} key={number}>
			<input
				onChange={checkHandler}
				onFocus={blurHandler}
				checked={value === number}
				className={classes.input}
				value={number}
				type='radio'
				name={`${number}`}
				id={`${number}`}
			/>
			<label className={classes.name} htmlFor={`${number}`}>
				{number} cm
			</label>
		</div>
	));

	return (
		<div className={classes.container}>
			<p className={classes.label}>Diameter</p>
			{radio}
		</div>
	);
};

export default CheckboxInput;
