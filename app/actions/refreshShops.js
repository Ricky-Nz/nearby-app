import runAction from './runAction';

export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';

export function refreshShops(size) {
	return (dispatch, getState) => {
		const { appState, shops } = getState();

		runAction({
			dispatch,
			actionName: SHOP_COLLECTION_REFRESH,
			method: 'GET',
			urlPath: 'shops',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				longitude: appState.longitude,
				latitude: appState.latitude,
				offset: 0,
				distance: shops.distance
			}
		});
	};
}