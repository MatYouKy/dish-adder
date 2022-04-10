import { Dispatch } from 'redux';
import { Action, DiameterType, DishType, Value } from './action-interface';
import { StateDish } from './state-interface';
import { DishAction } from './action-type';

export const addDish = (dish: StateDish) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.DISH,
			name: dish.name,
			preparation_time: dish.preparation_time,
			dishType: dish.dishType
		});
	};
};

export const selectDish = (dishType: DishType, dishTypeIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_DISH,
			dishType,
			dishTypeIsValid
		});
	};
};
export const resetDish = (isReset: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.RESET_DISH,
			isReset
		});
	};
};

export const selectName = (name: Value, nameIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_NAME,
			name: `${name}`,
			nameIsValid
		});
	};
};

export const selectTime = (preparation_time: Value, timeIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_TIME,
			preparation_time: `${preparation_time}`,
			timeIsValid
		});
	};
};

export const selectDiameter = (diameter: DiameterType, diameterIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_DIAMETER,
			diameter,
			diameterIsValid
		});
	};
};

export const selectPizzaSlices = (no_of_slices: Value, slicesIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_PIZZA_SLICES,
			no_of_slices: +no_of_slices,
			slicesIsValid
		});
	};
};

export const selectSandwitchSlices = (slices_of_bread: Value, breadIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_SANDWITCH_SLICES,
			slices_of_bread: +slices_of_bread,
			breadIsValid
		});
	};
};

export const selectSpicinessScale = (spiciness_scale: Value, soupIsValid: boolean) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: DishAction.SELECT_SPICINESS_SCALE,
			spiciness_scale: +spiciness_scale,
			soupIsValid
		});
	};
};
