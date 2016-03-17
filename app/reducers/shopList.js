import { SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD } from '../actions';

const configData = {
	size: 5,
	distance: 1000
};

export default function (shopList = {data: [], offset: 0, ...configData}, action) {
	switch(action.type) {
		case SHOP_COLLECTION_REFRESH:
			if (action.refreshing) {
				return {...shopList, refreshing: true, error: null};
			} else if (action.error) {
				return {...shopList, refreshing: false, error: action.error};
			} else {
				return {data: action.payload, offset: action.payload.length, ...configData};
			}
		case SHOP_COLLECTION_LOAD:
			if (action.loading) {
				return {...shopList, loading: true, error: null};
			} else if (action.error) {
				return {...shopList, loading: false, error: action.error};
			} else {
				return {...shopList, loading: false, error: null,
					data: [...shopList.data, ...action.payload], offset: shopList.offset + action.payload.length}
			}
		default:
			return shopList;
	}
}