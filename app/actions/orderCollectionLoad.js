import runAction from './runAction';

export const ORDER_COLLECTION_LOAD = 'ORDER_COLLECTION_LOAD';

export function orderCollectionLoad({token, offset, size}) {
	return (dispatch) => {
		runAction({
			urlPath: 'users/orders',
			params: {
				offset,
				size
			},
			actionName: ORDER_COLLECTION_LOAD,
			token,
			dispatch
		});
	};
}