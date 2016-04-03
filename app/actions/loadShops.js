import runAction from './runAction';

export const SHOP_COLLECTION_LOAD = 'SHOP_COLLECTION_LOAD';

export function loadShops(size) {
	return (dispatch, getState) => {
		const { appState, shops } = getState();

		runAction({
			dispatch,
			actionName: SHOP_COLLECTION_LOAD,
			method: 'GET',
			urlPath: 'shops',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				longitude: appState.longitude,
				latitude: appState.latitude,
				offset: shops.size,
				distance: shops.distance
			}
		});
	};
}