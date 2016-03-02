const API_ROOT = 'http://dev.api.togoapp.link/v1';

export function asyncLoad (actionType, urlPath, params, options) {
	return dispatch => {
		dispatch({
			type: actionType,
			loading: true
		});

		var url = new URL(`${API_ROOT}/${urlPath}`);
		if (params) {
			Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
		}

		return fetch(url, options)
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