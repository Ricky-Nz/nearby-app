import runAction from './runAction';

export const SHOP_COLLECTION_LOAD = 'SHOP_COLLECTION_LOAD';

export function loadShops() {
	return (dispatch, getState) => {
		const { appState, shops } = getState();

		return runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				longitude: appState.longitude,
				latitude: appState.latitude,
				offset: shops.size,
				distance: shops.distance
			},
			actionName: SHOP_COLLECTION_LOAD,
			urlPath: 'shops'
		});
	};
}