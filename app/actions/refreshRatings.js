import runAction from './runAction';

export const RATINGS_COLLECTION_REFRESH = 'RATINGS_COLLECTION_REFRESH';

export function refreshRatings() {
	return (dispatch, getState) => {
		const { appState, ratings } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: ratings.offset
			},
			actionName: RATINGS_COLLECTION_REFRESH,
			urlPath: 'users/ratings'
		});
	};
}