const API_ROOT = 'http://dev.api.togoapp.link/v1';

export default function (urlPath, token, params) {
	return new Promise((resolve, reject) => {
			var url = `${API_ROOT}/${urlPath}`;
			if (params) {
				url += '?';
				Object.keys(params).forEach(key => url=`${url}${key}=${params[key]}&`);
				url = url.slice(0, url.length - 1);
			}

			fetch(url, {
					method: 'GET',
					headers: {
						'Accept': 'application/json',
						'Authorization': `Token ${token}`
					}
			}).then(response => {
					resolve(response.json());
			}).catch(error => reject(error));
		});
}