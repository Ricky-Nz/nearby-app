import { combineReducers } from 'redux';
import appState from './appState';
import orderList from './orderList';
import order from './order';
import merchantList from './merchantList';
import merchant from './merchant';

const rootReducer = combineReducers({
	appState,
	orderList,
	order,
	merchantList,
	merchant
});

export default rootReducer;