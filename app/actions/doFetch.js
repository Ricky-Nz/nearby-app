const API_ROOT = 'http://dev.api.togoapp.link/v1';

export default function ({method, urlPath, token, params, body}) {
	return new Promise((resolve, reject) => {
			let url = `${API_ROOT}/${urlPath}`;
			if (params) {
				url += '?';
				Object.keys(params).forEach(key => url=`${url}${key}=${params[key]}&`);
				url = url.slice(0, url.length - 1);
			}

			let options = {
				method,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': `Token ${token}`
				}
			};

			if (body) {
				let wwwfrom = '';
				Object.keys(body).forEach(key => wwwfrom=`${wwwfrom}${encodeURIComponent(key)}=${encodeURIComponent(body[key])}&`);
				wwwfrom = wwwfrom.slice(0, wwwfrom.length - 1);
				options.body = wwwfrom;
			}

			fetch(url, options).then(response => {
				resolve(response.json());
			}).catch(error => {
				reject(error);
			});
		});
}