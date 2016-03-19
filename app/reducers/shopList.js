import { SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD } from '../actions';

const configData = {
	size: 5,
	distance: 1000
};

export default function (shopList = {data: [], offset: 0, ...configData}, action) {
	switch(action.type) {
		case SHOP_COLLECTION_REFRESH:
			if (action.running) {
				return {...shopList, refreshing: true, error: null};
			} else if (action.error) {
				return {...shopList, refreshing: false, error: action.error};
			} else {
				return {data: action.data.shops, offset: action.data.shops.length, ...configData};
			}
		case SHOP_COLLECTION_LOAD:
			if (action.running) {
				return {...shopList, loading: true, error: null};
			} else if (action.error) {
				return {...shopList, loading: false, error: action.error};
			} else {
				return {...shopList, loading: false, error: null,
					data: [...shopList.data, ...action.data.shops], offset: shopList.offset + action.data.shops.length}
			}
		default:
			return shopList;
	}
}