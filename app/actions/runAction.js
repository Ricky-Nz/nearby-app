import mockFetch from './mockFetch';
import doFetch from './doFetch';

export default function ({dispatch, method, urlPath, token, params, body, actionName}) {
	dispatch({
		type: actionName,
		running: true
	});

	const runFetch = [
		''
	].indexOf(actionName) >= 0 ? mockFetch : doFetch;

	runFetch({method, urlPath, token, params, body})
		.then(result => {
			dispatch({
				type: actionName,
				running: false,
				data: result.data
			});
		}, error => {
			dispatch({
				type: actionName,
				running: false,
				error
			});
		});
}