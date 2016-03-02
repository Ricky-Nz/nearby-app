import { LOAD_ORDER_DETAIL } from '../actions/actionTypes';

export default function (order = {}, action) {
	switch(action.type) {
		case LOAD_ORDER_DETAIL:
			return action.error ? {...order, error: action.error} : {loading: action.loading, ...action.payload};
		default:
			return order;
	}
}