import runAction from './runAction';

export const REVIEW_COLLECTION_REFRESH = 'REVIEW_COLLECTION_REFRESH';

export function refreshReviews(size, userId) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: REVIEWS_COLLECTION_REFRESH,
			method: 'GET',
			urlPath: `users/${userId||appState.userId}/reviews`,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: 0
			}
		});
	};
}