import { DiameterType, DishType } from './action-interface';

export interface StateDish {
	name: string;
	preparation_time: string;
	dishType: DishType;
	isReset: boolean;
	no_of_slices?: number;
	diameter?: DiameterType;
	slices_of_bread?: number;
	spiciness_scale?: number;
	dishTypeIsValid?: boolean;
	diameterIsValid?: boolean;
	slicesIsValid?: boolean;
	breadIsValid?: boolean;
	soupIsValid?: boolean;
	nameIsValid?: boolean;
	timeIsValid?: boolean;
}
