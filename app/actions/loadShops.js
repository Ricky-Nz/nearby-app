import asyncGet from './asyncGet';

export const SHOP_COLLECTION_LOAD = 'SHOP_COLLECTION_LOAD';

export function loadShops(token, params) {
	return asyncGet({
		token,
		params,
		actionName: SHOP_COLLECTION_LOAD,
		urlPath: 'shops'
	});
}