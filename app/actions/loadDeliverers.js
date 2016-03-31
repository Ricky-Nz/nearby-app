import runAction from './runAction';

export const DELIVERER_COLLECTION_LOAD = 'DELIVERER_COLLECTION_LOAD';

export function loadDeliverers(size) {
	return (dispatch, getState) => {
		const { appState, deliverers } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: deliverers.offset
			},
			actionName: DELIVERER_COLLECTION_LOAD,
			urlPath: 'users/orders/delivered'
		});
	};
}