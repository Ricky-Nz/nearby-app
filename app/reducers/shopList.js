import { LOAD_MERCHANT_LIST } from '../actions/actionTypes';

export default function (shopList = {data: [], offset: 0, size: 10, distance: 1000, loading: false, error: null}, action) {
	switch(action.type) {
		case LOAD_MERCHANT_LIST:
			if (action.loading) {
				return {...shopList, loading: true, error: null};
			} else if (action.error) {
				return {...shopList, loading: false, error: action.error};
			} else {
				return {...shopList, loading: false, error: null, data: [...shopList.data, ...action.payload]}
			}
		default:
			return shopList;
	}
}