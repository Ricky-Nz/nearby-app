import runAction from './runAction';

export const DELIVERED_COLLECTION_REFRESH = 'DELIVERED_COLLECTION_REFRESH';

export function refreshDelivers() {
	return (dispatch, getState) => {
		const { appState, delivers } = getState();
	
		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: delivers.offset
			},
			actionName: DELIVERED_COLLECTION_REFRESH,
			urlPath: 'users/orders/delivered'
		});
	};
}