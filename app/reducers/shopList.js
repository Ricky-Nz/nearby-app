import { SHOP_COLLECTION_REFRESH, SHOP_COLLECTION_LOAD } from '../actions';

const configData = {
	size: 5,
	distance: 1000,
	longitude: '103.868601',
	latitude: '1.3202973'
};

export default function (shopList = {datas: [], offset: 0, ...configData}, action) {
	switch(action.type) {
		case SHOP_COLLECTION_REFRESH:
			if (action.running) {
				return {...shopList, refreshing: true, error: null};
			} else if (action.error) {
				return {...shopList, refreshing: false, error: action.error};
			} else {
				return {datas: action.data.shops, offset: action.data.shops.length, ...configData};
			}
		case SHOP_COLLECTION_LOAD:
			if (action.running) {
				return {...shopList, loading: true, error: null};
			} else if (action.error) {
				return {...shopList, loading: false, error: action.error};
			} else {
				return {...shopList, loading: false, error: null,
					datas: [...shopList.datas, ...action.data.shops], offset: shopList.offset + action.data.shops.length}
			}
		default:
			return shopList;
	}
}