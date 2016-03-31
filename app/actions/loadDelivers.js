import runAction from './runAction';

export const DELIVERED_COLLECTION_LOAD = 'DELIVERED_COLLECTION_LOAD';

export function loadDelivers(size) {
	return (dispatch, getState) => {
		const { appState, delivers } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: delivers.offset
			},
			actionName: DELIVERED_COLLECTION_LOAD,
			urlPath: 'users/orders/delivered'
		});
	};
}