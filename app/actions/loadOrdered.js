import asyncGet from './asyncGet';

export const ORDERED_COLLECTION_LOAD = 'ORDERED_COLLECTION_LOAD';

export function loadOrdered(token, params) {
	return asyncGet({
		token,
		params,
		actionName: ORDERED_COLLECTION_LOAD,
		urlPath: 'users/orders'
	});
}