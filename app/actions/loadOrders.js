import runAction from './runAction';

export const ORDERED_COLLECTION_LOAD = 'ORDERED_COLLECTION_LOAD';

export function loadOrders(size) {
	return (dispatch, getState) => {
		const { appState, orders } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: orders.offset
			},
			actionName: ORDERED_COLLECTION_LOAD,
			urlPath: 'users/orders'
		});
	};
}