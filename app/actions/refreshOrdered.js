import runAction from './runAction';

export const ORDERED_COLLECTION_REFRESH = 'ORDERED_COLLECTION_REFRESH';

export function refreshOrdered(size) {
	return (dispatch, getState) => {
		const { appState } = getState();
	
		runAction({
			dispatch,
			actionName: ORDERED_COLLECTION_REFRESH,
			method: 'GET',
			urlPath: 'users/orders',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: 0
			}
		});
	};
}