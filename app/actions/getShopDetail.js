import runAction from './runAction';

export const GET_SHOP_DETAIL = 'GET_SHOP_DETAIL';

export function getShopDetail() {
	return (dispatch, getState) => {
		const { appState, shop } = getState();

		runAction({
			dispatch,
			actionName: GET_SHOP_DETAIL,
			method: 'GET',
			urlPath: `shops/${shop.shopId}/details`,
			token: appState.token
		});
	};
}