import { SELECT_SHOP, GET_SHOP_DETAIL } from '../actions';

export default function (shop = {}, action) {
	switch(action.type) {
		case SELECT_SHOP:
			return { shopId: action.data };
		case GET_SHOP_DETAIL:
			if (action.running) {
				return {loading: true, shopId: shop.shopId};
			} else if (action.error) {
				return {loading: false, shopId: shop.shopId, error: action.error.message};
			} else {
				return {loading: false, shopId: shop.shopId, data: action.data};
			}
		default:
			return shop;
	}
}