import runAction from './runAction';

export const DELIVERED_COLLECTION_LOAD = 'DELIVERED_COLLECTION_LOAD';

export function loadDelivered(size) {
	return (dispatch, getState) => {
		const { appState, delivered } = getState();

		runAction({
			dispatch,
			actionName: DELIVERED_COLLECTION_LOAD,
			method: 'GET',
			urlPath: 'users/orders/delivered',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: delivered.offset
			}
		});
	};
}