import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nameValidator, selectValidator, timeValidator } from '../services/validators/validators';
import { RootState } from '../services/store/reducers';
import { usePostDish } from '../services/hooks/usePostDish';
import * as ActionCreators from '../services/store/action-creators';
import Card from '../components/UI/Card/Card';
import SelectInputs from '../components/SelectInputs/SelectInputs';
import SelectInput from '../components/UI/Input/SelectInput';
import TextInput from '../components/UI/Input/TextInput';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import classes from './AddDish.module.scss';

const AddDish = () => {
	let formIsValid = false;
	let addDish = {};
	const dish = useSelector((state: RootState) => state.dishReducer);
	const type = useSelector((state: RootState) => state.dishReducer.dishType);
	const nameIsValid = useSelector((state: RootState) => state.dishReducer.nameIsValid);
	const timeIsValid = useSelector((state: RootState) => state.dishReducer.timeIsValid);
	const dishTypeIsValid = useSelector((state: RootState) => state.dishReducer.dishTypeIsValid);
	const diameterIsValid = useSelector((state: RootState) => state.dishReducer.diameterIsValid);
	const diameter = useSelector((state: RootState) => state.dishReducer.diameter);
	const slicesIsValid = useSelector((state: RootState) => state.dishReducer.slicesIsValid);
	const no_of_slices = useSelector((state: RootState) => state.dishReducer.no_of_slices);
	const soupIsValid = useSelector((state: RootState) => state.dishReducer.soupIsValid);
	const spiciness_scale = useSelector((state: RootState) => state.dishReducer.spiciness_scale);
	const breadIsValid = useSelector((state: RootState) => state.dishReducer.breadIsValid);
	const slices_of_bread = useSelector((state: RootState) => state.dishReducer.slices_of_bread);

	const dispatch = useDispatch();
	const { selectName, selectTime, selectDish, resetDish } = bindActionCreators(ActionCreators, dispatch);

	const { postRequest, isLoading, isError } = usePostDish();

	switch (type) {
		case 'pizza':
			if (nameIsValid && timeIsValid && !diameterIsValid && slicesIsValid) formIsValid = true;
			addDish = {
				type,
				name: dish.name,
				preparation_time: dish.preparation_time,
				diameter,
				no_of_slices
			};
			break;
		case 'soup':
			if (nameIsValid && timeIsValid && dishTypeIsValid && soupIsValid) formIsValid = true;
			addDish = {
				type,
				name: dish.name,
				preparation_time: dish.preparation_time,
				spiciness_scale
			};
			break;
		case 'sandwitch':
			if (nameIsValid && timeIsValid && dishTypeIsValid && breadIsValid) formIsValid = true;
			addDish = {
				type,
				name: dish.name,
				preparation_time: dish.preparation_time,
				slices_of_bread
			};
			break;
		default:
			break;
	}

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		if (!formIsValid) return;
		postRequest(addDish);
		resetDish(true);
	};

	useEffect(() => {
		if (!formIsValid) resetDish(false);
	}, [formIsValid]);

	return (
		<section className={classes.add}>
			<Card>
				<h1 className={classes.heading}>Add Dish</h1>
				<form autoComplete='off' className={classes.form} onSubmit={submitHandler}>
					<TextInput
						input={{ type: 'text', placeholder: 'type dish name', name: 'name' }}
						id='name'
						label='Name'
						initialValue=''
						reducer={selectName}
						validator={nameValidator}
					/>
					<TextInput
						input={{
							type: 'time',
							max: '01:59:59',
							min: '00:00:01',
							step: '1',
							name: 'time'
						}}
						id='preparation_time'
						label='Preparation Time'
						initialValue='00:00:00'
						reducer={selectTime}
						validator={timeValidator}
					/>
					<SelectInput
						id='select-dish'
						label='Select Dish'
						title='Dish'
						initialValue='default'
						reducer={selectDish}
						validator={selectValidator}
					/>
					<SelectInputs />
					{!isLoading && <input className={classes.button} type='submit' value='add' disabled={!formIsValid} />}
					{isLoading && <LoadingSpinner />}
					{isError && <h3 className={classes.error}>{isError}</h3>}
				</form>
			</Card>
		</section>
	);
};

export default AddDish;
