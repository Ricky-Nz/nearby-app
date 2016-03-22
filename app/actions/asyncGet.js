import doFetch from './doFetch';

export const SHOP_COLLECTION_LOAD = 'SHOP_COLLECTION_LOAD';
export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';
export const DELIVER_COLLECTION_LOAD = 'DELIVER_COLLECTION_LOAD';
export const DELIVER_COLLECTION_REFRESH = 'DELIVER_COLLECTION_REFRESH';
export const ORDER_COLLECTION_LOAD = 'ORDER_COLLECTION_LOAD';
export const ORDER_COLLECTION_REFRESH = 'ORDER_COLLECTION_REFRESH';

export function asyncGet({urlPath, token, params, actionName}) {
	return (dispatch) => {
		dispatch({
			type: actionName,
			running: true
		});

		doFetch(urlPath, token, params)
			.then(result => {
				dispatch({
					type: actionName,
					running: false,
					data: result.data
				});
			})
			.catch(error => {
				dispatch({
					type: actionName,
					running: false,
					error
				});
			});
	};
}