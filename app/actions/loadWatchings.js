import asyncGet from './asyncGet';

export const WATCHINGS_COLLECTION_LOAD = 'WATCHINGS_COLLECTION_LOAD';

export function loadWatchings(token, params) {
	return asyncGet({
		token,
		params,
		actionName: WATCHINGS_COLLECTION_LOAD,
		urlPath: 'users/watchings'
	});
}