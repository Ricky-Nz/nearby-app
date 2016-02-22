import { combineReducers } from 'redux';
import appState from './appState';
import orderList from './orderList';
import orderDetail from './orderDetail';
import merchantList from './merchantList';
import merchantDetail from './merchantDetail';

const rootReducer = combineReducers({
	appState,
	orderList,
	orderDetail,
	merchantList,
	merchantDetail
});

export default rootReducer;