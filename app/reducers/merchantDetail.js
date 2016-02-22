import { LOAD_MERCHANT_DETAIL } from '../actions/actionTypes';

export default function (merchantDetail = {}, action) {
	switch(action.type) {
		case LOAD_MERCHANT_DETAIL:
			return action.error ? {...merchantDetail, error: action.error} : {loading: action.loading, ...action.payload};
		default:
			return merchantDetail;
	}
}