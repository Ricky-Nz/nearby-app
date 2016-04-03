import runAction from './runAction';

export const REVIEW_COLLECTION_LOAD = 'REVIEW_COLLECTION_LOAD';

export function loadReviews(size, userId) {
	return (dispatch, getState) => {
		const { appState, reviews } = getState();

		runAction({
			dispatch,
			actionName: REVIEWS_COLLECTION_LOAD,
			method: 'GET',
			urlPath: `users/${userId||appState.userId}/reviews`,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: reviews.offset
			}
		});
	};
}