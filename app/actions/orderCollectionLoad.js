import doFetch from './doFetch';

export const ORDER_COLLECTION_LOAD = 'ORDER_COLLECTION_LOAD';

export function orderCollectionLoad({token, offset, size}) {
	return (dispatch) => {
		doFetch({
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