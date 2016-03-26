import { combineReducers } from 'redux';
import { SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD,
	ORDERED_COLLECTION_REFRESH, ORDERED_COLLECTION_LOAD,
	DELIVERED_COLLECTION_REFRESH, DELIVERED_COLLECTION_LOAD,
	RATINGS_COLLECTION_REFRESH, RATINGS_COLLECTION_LOAD,
	NOTIFICATIONS_COLLECTION_REFRESH, NOTIFICATIONS_COLLECTION_LOAD,
	WATCHINGS_COLLECTION_REFRESH, WATCHINGS_COLLECTION_LOAD } from '../actions';
import arrayDataReducer from './arrayDataReducer';
import appState from './appState';
import account from './account';

const configData = {
	size: 10,
	distance: 1000,
	longitude: '103.868601',
	latitude: '1.3202973'
};

const rootReducer = combineReducers({
	appState,
	account,
	shops: arrayDataReducer(SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD, configData, 'shops'),
	orders: arrayDataReducer(ORDERED_COLLECTION_REFRESH, ORDERED_COLLECTION_LOAD, {size: 10}),
	delivers: arrayDataReducer(DELIVERED_COLLECTION_REFRESH, DELIVERED_COLLECTION_LOAD, {size: 10}),
	ratings: arrayDataReducer(RATINGS_COLLECTION_REFRESH, RATINGS_COLLECTION_LOAD, {size: 10}),
	notifications: arrayDataReducer(NOTIFICATIONS_COLLECTION_REFRESH, NOTIFICATIONS_COLLECTION_LOAD, {size: 10}),
	watchings: arrayDataReducer(WATCHINGS_COLLECTION_REFRESH, WATCHINGS_COLLECTION_LOAD, {size: 10})
});

export default rootReducer;