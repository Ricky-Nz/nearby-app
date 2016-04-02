import runAction from './runAction';

export const CREATE_ORDER = 'CREATE_ORDER';

export function createOrder(items, address, fees) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				items,
				address,
				fees
			},
			actionName: CREATE_ORDER,
			urlPath: 'users/orders'
		});
	};
}