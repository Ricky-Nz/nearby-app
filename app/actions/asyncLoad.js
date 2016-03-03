const API_ROOT = 'http://dev.api.togoapp.link/v1';

export default function (actionType, urlPath, params, options) {
	return (dispatch) => {
		dispatch({
			type: actionType,
			loading: true
		});

		var url = `${API_ROOT}/${urlPath}`;
		if (params) {
			url += '?';
			Object.keys(params).forEach(key => url=`${url}${key}=${params[key]}&`);
			url = url.slice(0, url.length - 1);
		}

		return fetch(url, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiYTBiNjkxNGUtYWE5My00ZTY4LThhZjQtNDU4NzJiOGUwNjJlIiwidGltZSI6MTQ1NjkyNDkwOC4yODU3MzIzLCJ1c2VyX2lkIjoiNTZkNmUzYTI1Y2UzOTk1Y2UwYzlhMjAwIn0.tUwPZYK7DiclqdftxktgEMXskcmDfIbR8dk0zhgTr-U'
				}
			})
			.then(response => response.json())
			.then(json => {
				dispatch({
					type: actionType,
					loading: false,
					payload: json.data.shops
				});
			})
			.catch(error => {
				dispatch({
					type: actionType,
					loading: false,
					error
				});
			});
	};
}