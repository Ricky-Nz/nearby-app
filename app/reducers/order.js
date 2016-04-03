import { SELECT_ORDER, CREATE_REVIEW } from '../actions';

export default function (order = {}, action) {
	switch(action.type) {
		case SELECT_ORDER:
			return { data: action.data };
		case CREATE_REVIEW:
			if (action.running) {
				return { ...order, reviewCreating: true, error: null };
			} else {
				return { ...order, reviewCreating: false, error: action.error ? action.error.message : null };
			}
		default:
			return order;
	}
}