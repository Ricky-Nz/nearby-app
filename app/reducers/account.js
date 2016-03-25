import { GET_ACCOUNT_INFO } from '../actions';

export default function (account = {}, action) {
	switch(action.type) {
		case GET_ACCOUNT_INFO:
			if (action.running) {
				return {...account, loading: true, error: null};
			} else if (action.error) {
				return {...account, loading: false, error: account.error};
			} else {
				return {...action.data};
			}
		default:
			return account;
	}
}