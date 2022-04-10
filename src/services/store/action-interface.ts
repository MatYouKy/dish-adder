import { DishAction } from './action-type';

export type Value = string | number;

export type DishType = 'pizza' | 'soup' | 'sandwitch' | 'default';

export type DiameterType = 30 | 42 | 50 | 60 | null;

interface AddDish {
	type: DishAction.DISH;
	name: string;
	preparation_time: string;
	dishType: DishType;
	no_of_slices?: number;
	diameter?: DiameterType;
	slices_of_bread?: number;
	spiciness_scale?: number;
}

interface SelectDish {
	type: DishAction.SELECT_DISH;
	dishType: DishType;
	dishTypeIsValid: boolean;
}
interface ResetDish {
	type: DishAction.RESET_DISH;
	isReset: boolean;
}

interface SelectDiameter {
	type: DishAction.SELECT_DIAMETER;
	diameter: DiameterType;
	diameterIsValid: boolean;
}

interface SelectPizzaSlices {
	type: DishAction.SELECT_PIZZA_SLICES;
	no_of_slices: number;
	slicesIsValid: boolean;
}

interface SelectSandwitchSlices {
	type: DishAction.SELECT_SANDWITCH_SLICES;
	slices_of_bread: number;
	breadIsValid: boolean;
}

interface SelectSpicinessScale {
	type: DishAction.SELECT_SPICINESS_SCALE;
	spiciness_scale: number;
	soupIsValid: boolean;
}

interface SelectName {
	type: DishAction.SELECT_NAME;
	name: string;
	nameIsValid: boolean;
}

interface SelectTime {
	type: DishAction.SELECT_TIME;
	preparation_time: string;
	timeIsValid: boolean;
}

export type Action =
	| AddDish
	| ResetDish
	| SelectName
	| SelectTime
	| SelectDish
	| SelectDiameter
	| SelectPizzaSlices
	| SelectSpicinessScale
	| SelectSandwitchSlices;
