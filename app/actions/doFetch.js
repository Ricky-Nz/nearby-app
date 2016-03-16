const API_ROOT = 'http://dev.api.togoapp.link/v1';
const HARDCODE_TOKEN = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiYTBiNjkxNGUtYWE5My00ZTY4LThhZjQtNDU4NzJiOGUwNjJlIiwidGltZSI6MTQ1NjkyNDkwOC4yODU3MzIzLCJ1c2VyX2lkIjoiNTZkNmUzYTI1Y2UzOTk1Y2UwYzlhMjAwIn0.tUwPZYK7DiclqdftxktgEMXskcmDfIbR8dk0zhgTr-U';

export default function ({urlPath, token, params, dispatch, actionName}) {
	new Promise((resolve, reject) => {
		dispatch({
			type: actionName,
			running: true
		});

		var url = `${API_ROOT}/${urlPath}`;
		if (params) {
			url += '?';
			Object.keys(params).forEach(key => url=`${url}${key}=${params[key]}&`);
			url = url.slice(0, url.length - 1);
		}

		resolve(url);
	})
	.then(url => fetch(url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Authorization': `Token ${token}`
		}
	}))
	.then(response => response.json())
	.then(result => dispatch({
		type: actionName,
		running: false,
		payload: result.data
	}))
	.catch(error => dispatch({
		type: actionName,
		running: false,
		error
	}));
}