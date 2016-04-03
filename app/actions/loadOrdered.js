import runAction from './runAction';

export const ORDERED_COLLECTION_LOAD = 'ORDERED_COLLECTION_LOAD';

export function loadOrdered(size) {
	return (dispatch, getState) => {
		const { appState, ordered } = getState();

		runAction({
			dispatch,
			actionName: ORDERED_COLLECTION_LOAD,
			method: 'GET',
			urlPath: 'users/orders',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: ordered.offset
			}
		});
	};
}