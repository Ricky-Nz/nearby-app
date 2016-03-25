import asyncGet from './asyncGet';

export const DELIVERED_COLLECTION_REFRESH = 'DELIVERED_COLLECTION_REFRESH';

export function refreshDelivered(token, params) {
	params.offset = 0;
	
	return asyncGet({
		token,
		params,
		actionName: DELIVERED_COLLECTION_REFRESH,
		urlPath: 'users/orders/delivered'
	});
}