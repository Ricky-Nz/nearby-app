import { combineReducers } from 'redux';
import {
	DELIVERED_COLLECTION_REFRESH, DELIVERED_COLLECTION_LOAD,
	ORDERED_COLLECTION_REFRESH, ORDERED_COLLECTION_LOAD,
	NOTIFICATION_COLLECTION_REFRESH, NOTIFICATION_COLLECTION_LOAD,
	REVIEW_COLLECTION_REFRESH, REVIEW_COLLECTION_LOAD,
	SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD
} from '../actions';
import arrayDataReducer from './arrayDataReducer';
import appState from './appState';
import account from './account';
import shop from './shop';
import order from './order';

const rootReducer = combineReducers({
	appState,
	account,
	shop,
	order,
	delivered: arrayDataReducer(DELIVERED_COLLECTION_REFRESH, DELIVERED_COLLECTION_LOAD),
	ordered: arrayDataReducer(ORDERED_COLLECTION_REFRESH, ORDERED_COLLECTION_LOAD),
	notifications: arrayDataReducer(NOTIFICATION_COLLECTION_REFRESH, NOTIFICATION_COLLECTION_LOAD),
	reviews: arrayDataReducer(REVIEW_COLLECTION_REFRESH, REVIEW_COLLECTION_LOAD),
	shops: arrayDataReducer(SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD, {distance: 1000}, 'shops')
});

export default rootReducer;