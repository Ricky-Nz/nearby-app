import { combineReducers } from 'redux';
import { SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD,
	ORDERED_COLLECTION_REFRESH, ORDERED_COLLECTION_LOAD,
	DELIVERED_COLLECTION_REFRESH, DELIVERED_COLLECTION_LOAD } from '../actions';
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
	orders: arrayDataReducer(ORDERED_COLLECTION_REFRESH, ORDERED_COLLECTION_LOAD, {size: 10}),
	delivers: arrayDataReducer(DELIVERED_COLLECTION_REFRESH, DELIVERED_COLLECTION_LOAD, {size: 10})
});

export default rootReducer;