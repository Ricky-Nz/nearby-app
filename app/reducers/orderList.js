import { LOAD_ORDER_LIST } from '../actions/actionTypes';

export default function (orderList = {array: []}, action) {
	switch(action.type) {
		case LOAD_ORDER_LIST:
			return action.error ? {...orderList, error: action.error}
				: (action.loading ? {array: orderList.array, loading: true} : {array: [...orderList.array, ...action.paylaod]});
		default:
			return orderList;
	}
}