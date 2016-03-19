import { combineReducers } from 'redux';
import navigator from './navigator';
import orderList from './orderList';
import order from './order';
import shopList from './shopList';
import merchant from './merchant';

const rootReducer = combineReducers({
	navigator,
	orderList,
	order,
	shopList,
	merchant
});

export default rootReducer;