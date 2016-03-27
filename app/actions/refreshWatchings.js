import runAction from './runAction';

export const WATCHINGS_COLLECTION_REFRESH = 'WATCHINGS_COLLECTION_REFRESH';

export function refreshWatchings() {
	return (dispatch, getState) => {
		const { appState, watchings } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: watchings.offset
			},
			actionName: WATCHINGS_COLLECTION_REFRESH,
			urlPath: 'users/watchings'
		});
	};
}