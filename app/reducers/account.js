import { GET_ACCOUNT_INFO } from '../actions';

export default function (account = {}, action) {
	switch(action.type) {
		case GET_ACCOUNT_INFO:
			if (action.running) {
				return {loading: true};
			} else if (action.error) {
				return {loading: false, error: action.error};
			} else {
				return {loading: false, data: action.data};
			}
		default:
			return account;
	}
}