import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import reducers from './reducers/index';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
