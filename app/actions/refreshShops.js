import runAction from './runAction';

export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';

export function refreshShops(size) {
	return (dispatch, getState) => {
		const { appState, shops } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				longitude: appState.longitude,
				latitude: appState.latitude,
				offset: shops.offset,
				distance: shops.distance
			},
			actionName: SHOP_COLLECTION_REFRESH,
			urlPath: 'shops'
		});
	};
}