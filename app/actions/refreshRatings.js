import asyncGet from './asyncGet';

export const RATINGS_COLLECTION_REFRESH = 'RATINGS_COLLECTION_REFRESH';

export function refreshRatings(token, params) {
	return asyncGet({
		token,
		params,
		actionName: RATINGS_COLLECTION_REFRESH,
		urlPath: 'users/ratings'
	});
}