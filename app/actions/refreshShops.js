import asyncGet from './asyncGet';

export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';

export function refreshShops(token, params) {
	return asyncGet({
		token,
		params,
		actionName: SHOP_COLLECTION_REFRESH,
		urlPath: 'shops'
	});
}