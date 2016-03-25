import asyncGet from './asyncGet';

export const DELIVERED_COLLECTION_LOAD = 'DELIVERED_COLLECTION_LOAD';

export function loadDelivered(token, params) {
	return asyncGet({
		token,
		params,
		actionName: DELIVERED_COLLECTION_LOAD,
		urlPath: 'users/orders/delivered'
	});
}