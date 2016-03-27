import runAction from './runAction';

export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';

export function refreshShops() {
	return (dispatch, getState) => {
		const { appState, shops } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: shops.listFetchSize,
				offset: shops.offset
			},
			actionName: SHOP_COLLECTION_REFRESH,
			urlPath: 'shops'
		});
	};
}