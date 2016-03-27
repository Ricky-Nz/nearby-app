import runAction from './runAction';

export const ORDERED_COLLECTION_REFRESH = 'ORDERED_COLLECTION_REFRESH';

export function refreshOrders() {
	return (dispatch, getState) => {
		const { appState, orders } = getState();
	
		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: orders.offset
			},
			actionName: ORDERED_COLLECTION_REFRESH,
			urlPath: 'users/orders'
		});
	};
}