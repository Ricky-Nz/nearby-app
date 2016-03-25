import asyncGet from './asyncGet';

export const ORDERED_COLLECTION_REFRESH = 'ORDERED_COLLECTION_REFRESH';

export function refreshOrdered(token, params) {
	return asyncGet({
		token,
		params,
		actionName: ORDERED_COLLECTION_REFRESH,
		urlPath: 'users/orders'
	});
}