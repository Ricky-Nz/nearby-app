import { LOAD_MORE_SHOPS, REFRESH_SHOPS } from './actionTypes';
import doFetch from './doFetch';

export function refreshShops (size, distance) {
	return (dispatch) => {
		dispatch({
			type: REFRESH_SHOPS,
			refershing: true
		});

		doFetch('shops', {
			longitude: 103.868601,
			latitude: 1.3202973,
			distance,
			offset: 0,
			size
		}).then(result => dispatch({
				type: REFRESH_SHOPS,
				payload: result.data.shops
		})).catch(error => dispatch({
				type: REFRESH_SHOPS,
				error
		}));
	};
}

export function loadMoreShops (offset, size, distance) {
	return (dispatch) => {
		dispatch({
			type: LOAD_MORE_SHOPS,
			loading: true
		});

		doFetch('shops', {
			longitude: 103.868601,
			latitude: 1.3202973,
			distance,
			offset,
			size
		}).then(result => dispatch({
				type: LOAD_MORE_SHOPS,
				payload: result.data.shops
		})).catch(error => dispatch({
				type: LOAD_MORE_SHOPS,
				error
		}));
	};
}