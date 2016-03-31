import runAction from './runAction';

export const DELIVERER_COLLECTION_REFRESH = 'DELIVERER_COLLECTION_REFRESH';

export function refreshDeliverers(size) {
	return (dispatch, getState) => {
		const { appState, deliverers } = getState();
	
		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: deliverers.offset
			},
			actionName: DELIVERER_COLLECTION_REFRESH,
			urlPath: 'users/orders/delivered'
		});
	};
}