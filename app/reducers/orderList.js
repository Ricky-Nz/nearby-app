import { ORDER_COLLECTION_LOAD, ORDER_COLLECTION_REFRESH } from '../actions';

export default function (orderList = {array: []}, action) {
	switch(action.type) {
		case ORDER_COLLECTION_LOAD:
			return action.error ? {...orderList, error: action.error}
				: (action.loading ? {array: orderList.array, loading: true} : {array: [...orderList.array, ...action.paylaod]});
		default:
			return orderList;
	}
}