import { DishAction } from '../action-type';
import { Action } from '../action-interface';
import { StateDish } from '../state-interface';

const initaialState: StateDish = {
	name: '',
	preparation_time: '00:00:00',
	dishType: 'default',
	dishTypeIsValid: false,
	diameterIsValid: false,
	slicesIsValid: false,
	breadIsValid: false,
	soupIsValid: false,
	nameIsValid: false,
	timeIsValid: false,
	isReset: false
};

export const dishReducer = (state = initaialState, action: Action) => {
	switch (action.type) {
		case DishAction.DISH:
			return {
				...state,
				name: action.name,
				preparation_time: action.preparation_time,
				dishType: action.dishType
			};
		case DishAction.RESET_DISH:
			return {
				...state,
				isReset: action.isReset
			};
		case DishAction.SELECT_DISH:
			return {
				...state,
				name: state.name,
				preparation_time: state.preparation_time,
				dishType: action.dishType,
				dishTypeIsValid: action.dishTypeIsValid
			};
		case DishAction.SELECT_NAME:
			return {
				...state,
				name: action.name,
				nameIsValid: action.nameIsValid
			};
		case DishAction.SELECT_TIME:
			return {
				...state,
				preparation_time: action.preparation_time,
				timeIsValid: action.timeIsValid
			};
		case DishAction.SELECT_PIZZA_SLICES:
			return {
				...state,
				no_of_slices: action.no_of_slices,
				slicesIsValid: action.slicesIsValid
			};
		case DishAction.SELECT_SANDWITCH_SLICES:
			return {
				...state,
				slices_of_bread: action.slices_of_bread,
				breadIsValid: action.breadIsValid
			};
		case DishAction.SELECT_DIAMETER:
			return {
				...state,
				diameter: action.diameter,
				diameterIsValid: action.diameterIsValid
			};
		case DishAction.SELECT_SPICINESS_SCALE:
			return {
				...state,
				spiciness_scale: action.spiciness_scale,
				soupIsValid: action.soupIsValid
			};
		default:
			return state;
	}
};
