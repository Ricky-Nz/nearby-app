import asyncGet from './asyncGet';

export const WATCHINGS_COLLECTION_REFRESH = 'WATCHINGS_COLLECTION_REFRESH';

export function refreshWatchings(token, params) {
	return asyncGet({
		token,
		params,
		actionName: WATCHINGS_COLLECTION_REFRESH,
		urlPath: 'users/watchings'
	});
}