import runAction from './runAction';

export const CREATE_ORDER = 'CREATE_ORDER';

export function createOrder({items, address, fees}) {
	return (dispatch, getState) => {
		const { appState, shop } = getState();

		runAction({
			dispatch,
			actionName: CREATE_ORDER,
			method: 'POST',
			urlPath: `shops/${shop.shopId}/orders`,
			token: appState.token,
			body: {
				items_ordered: items,
				deliver_to: address,
				delivery_fee: fees,
				currency: 'SGD'
			}
		});
	};
}