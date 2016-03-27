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
				offset: shops.size,
				distance: shops.distance,
				longitude: shops.longitude,
				latitude: shops.latitude
			},
			actionName: SHOP_COLLECTION_LOAD,
			urlPath: 'shops'
		});
	};
}