const API_ROOT = 'http://www.apiroot.com';

export function asyncLoad (actionType, urlPath) {
	return dispatch => {
		dispatch({
			type: actionType,
			loading: true
		});
		return fetch(`${API_ROOT}/${urlPath}`)
			.then(response => response.json())
			.then(json => dispatch({
				type: actionType,
				payload: json	
			}))
			.catch(error => dispatch({
				type: actionType,
				error
			}));
	};
}