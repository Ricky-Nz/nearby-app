import fetchMock from './fetchMock';
import fetchGet from './fetchGet';

export default function ({dispatch, urlPath, token, params, actionName}) {
	dispatch({
		type: actionName,
		running: true
	});

	const doFetch = ['SHOP_COLLECTION_REFRESH', 'SHOP_COLLECTION_LOAD']
		.indexOf(actionName) >= 0 ? fetchGet : fetchMock;

	doFetch(urlPath, token, params, actionName)
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
}