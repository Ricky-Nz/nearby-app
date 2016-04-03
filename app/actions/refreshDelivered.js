import runAction from './runAction';

export const DELIVERED_COLLECTION_REFRESH = 'DELIVERED_COLLECTION_REFRESH';

export function refreshDelivered(size) {
	return (dispatch, getState) => {
		const { appState } = getState();
	
		runAction({
			dispatch,
			actionName: DELIVERED_COLLECTION_REFRESH,
			method: 'GET',
			urlPath: 'users/orders/delivered',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: 0
			}
		});
	};
}