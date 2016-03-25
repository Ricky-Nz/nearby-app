import asyncGet from './asyncGet';

export const RATINGS_COLLECTION_LOAD = 'RATINGS_COLLECTION_LOAD';

export function loadRatings(token, params) {
	return asyncGet({
		token,
		params,
		actionName: RATINGS_COLLECTION_LOAD,
		urlPath: 'users/ratings'
	});
}