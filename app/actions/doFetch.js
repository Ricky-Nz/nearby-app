const API_ROOT = 'http://dev.api.togoapp.link/v1';

export default function (urlPath, token, params) {
	return new Promise((resolve, reject) => {
			try {
				var url = `${API_ROOT}/${urlPath}`;
				if (params) {
					url += '?';
					Object.keys(params).forEach(key => url=`${url}${key}=${params[key]}&`);
					url = url.slice(0, url.length - 1);
				}
				resolve(url);
			} catch (error) {
				reject(error);
			}
		})
		.then(url => fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Authorization': `Token ${token}`
			}
		}))
		.then(response => response.json());
}