import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../services/store/action-creators';
import { RootState } from '../../services/store/reducers';
import { breadValidator, pizzaValidator, soupValidator } from '../../services/validators/validators';
import CheckboxInput from '../UI/Input/CheckboxInput';
import TextInput from '../UI/Input/TextInput';

const SelectInputs = () => {
	const select = useSelector((state: RootState) => state.dishReducer.dishType);

	const dispatch = useDispatch();
	const { selectPizzaSlices, selectSpicinessScale, selectSandwitchSlices } = bindActionCreators(
		ActionCreators,
		dispatch
	);
	switch (select) {
		case 'pizza':
			return (
				<>
					<TextInput
						input={{
							type: 'number',
							min: '1',
							max: '8',
							name: 'pizza-slices'
						}}
						id='no-of-slices'
						label='No of slices'
						initialValue={0}
						reducer={selectPizzaSlices}
						validator={pizzaValidator}
					/>

					<CheckboxInput diameters={[30, 42, 50, 60]} />
				</>
			);
		case 'soup':
			return (
				<TextInput
					input={{ type: 'number', min: '0', max: '10', name: 'scale' }}
					id='spiciness-scale'
					label='Spiciness Scale'
					initialValue={0}
					reducer={selectSpicinessScale}
					validator={soupValidator}
				/>
			);
		case 'sandwitch':
			return (
				<TextInput
					input={{ type: 'number', min: '0', max: '5', name: 'bread-slices' }}
					id='slices-of-bread'
					label='Slices of bread'
					initialValue={0}
					reducer={selectSandwitchSlices}
					validator={breadValidator}
				/>
			);
		default:
			return null;
	}
};

export default SelectInputs;
