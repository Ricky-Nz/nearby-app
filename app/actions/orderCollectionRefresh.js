import doFetch from './doFetch';

export const ORDER_COLLECTION_REFRESH = 'ORDER_COLLECTION_REFRESH';

export function orderCollectionRefresh({token, size}) {
	return (dispatch) => {
		doFetch({
			urlPath: 'users/orders',
			params: {
				offset: 0,
				size
			},
			actionName: ORDER_COLLECTION_REFRESH,
			token,
			dispatch
		});
	};
}