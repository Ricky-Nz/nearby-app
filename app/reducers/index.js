import { combineReducers } from 'redux';
import { SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD,
	ORDER_COLLECTION_REFRESH, ORDER_COLLECTION_LOAD,
	DELIVER_COLLECTION_REFRESH, DELIVER_COLLECTION_LOAD } from '../actions';
import arrayDataReducer from './arrayDataReducer';
import navigator from './navigator';

const configData = {
	size: 10,
	distance: 1000,
	longitude: '103.868601',
	latitude: '1.3202973'
};

const rootReducer = combineReducers({
	navigator,
	shops: arrayDataReducer(SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD, configData, 'shops'),
	orders: arrayDataReducer(ORDER_COLLECTION_REFRESH, ORDER_COLLECTION_LOAD, configData, 'orders'),
	delivers: arrayDataReducer(DELIVER_COLLECTION_REFRESH, DELIVER_COLLECTION_LOAD, configData, 'delivers')
});

export default rootReducer;