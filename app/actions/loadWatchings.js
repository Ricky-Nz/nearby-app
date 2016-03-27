import runAction from './runAction';

export const WATCHINGS_COLLECTION_LOAD = 'WATCHINGS_COLLECTION_LOAD';

export function loadWatchings() {
	return (dispatch, getState) => {
		const { appState, watchings } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: watchings.offset
			},
			actionName: WATCHINGS_COLLECTION_LOAD,
			urlPath: 'users/watchings'
		});
	};
}