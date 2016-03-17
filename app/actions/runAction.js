import doFetch from './doFetch';

export default function ({urlPath, token, params, dispatch, actionName}) {
	dispatch({
		type: actionName,
		running: true
	});

	doFetch(urlPath, token, params)
		.then(result => dispatch({
			type: actionName,
			running: false,
			data: result.data
		}))
		.catch(error => dispatch({
			type: actionName,
			running: false,
			error
		}));
}