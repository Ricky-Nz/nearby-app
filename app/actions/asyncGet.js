import fetchMock from './fetchMock';
import fetchGet from './fetchGet';

export default function ({urlPath, token, params, actionName}) {
	return (dispatch) => {
		dispatch({
			type: actionName,
			running: true
		});

		const doFetch = ['SHOP_COLLECTION_REFRESH', 'SHOP_COLLECTION_LOAD', 'GET_ACCOUNT_INFO']
			.indexOf(actionName) >= 0 ? fetchGet : fetchMock;

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