import { LOAD_MERCHANT_LIST } from '../actions/actionTypes';

export default function (merchantList = {array: []}, action) {
	switch(action.type) {
		case LOAD_MERCHANT_LIST:
			return action.error ? {...merchantList, error: action.error}
				: (action.loading ? {array: merchantList.array, loading: true} : {array: [...merchantList.array, ...action.paylaod]});
		default:
			return merchantList;
	}
}