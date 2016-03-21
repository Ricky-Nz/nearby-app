import { combineReducers } from 'redux';
import { SHOPS, SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD,
	ORDERS, ORDER_COLLECTION_REFRESH, ORDER_COLLECTION_LOAD,
	DELIVERS, DELIVER_COLLECTION_REFRESH, DELIVER_COLLECTION_LOAD } from '../actions';
import arrayDataReducer from './arrayDataReducer';
import navigator from './navigator';

const configData = {
	size: 10,
	distance: 1000
};

	// longitude: '103.868601',
	// latitude: '1.3202973'

const rootReducer = combineReducers({
	navigator,
	[SHOPS]: arrayDataReducer(SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD, configData, SHOPS),
	[ORDERS]: arrayDataReducer(ORDER_COLLECTION_REFRESH, ORDER_COLLECTION_LOAD, configData, ORDERS),
	[DELIVERS]: arrayDataReducer(DELIVER_COLLECTION_REFRESH, DELIVER_COLLECTION_LOAD, configData, DELIVERS)
});

export default rootReducer;