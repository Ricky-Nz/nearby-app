import { LOAD_MERCHANT_DETAIL } from '../actions/actionTypes';

export default function (merchant = {banners: ['https://facebook.github.io/react/img/logo_og.png', 'https://facebook.github.io/react/img/logo_og.png', 'https://facebook.github.io/react/img/logo_og.png']}, action) {
	switch(action.type) {
		case LOAD_MERCHANT_DETAIL:
			return action.error ? {...merchant, error: action.error} : {loading: action.loading, ...action.payload};
		default:
			return merchant;
	}
}