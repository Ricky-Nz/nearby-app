import { LOAD_ORDER_DETAIL } from '../actions/actionTypes';

export default function (orderDetail = {}, action) {
	switch(action.type) {
		case LOAD_ORDER_DETAIL:
			return action.error ? {...orderDetail, error: action.error} : {loading: action.loading, ...action.payload};
		default:
			return orderDetail;
	}
}