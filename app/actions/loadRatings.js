import runAction from './runAction';

export const RATINGS_COLLECTION_LOAD = 'RATINGS_COLLECTION_LOAD';

export function loadRatings() {
	return (dispatch, getState) => {
		const { appState, ratings } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: ratings.offset
			},
			actionName: RATINGS_COLLECTION_LOAD,
			urlPath: 'users/ratings'
		});
	};
}