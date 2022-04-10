import { combineReducers } from 'redux';
import { dishReducer } from './dishReducer';

const reducers = combineReducers({
	dishReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
