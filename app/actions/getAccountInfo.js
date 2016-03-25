import asyncGet from './asyncGet';

export const GET_ACCOUNT_INFO = 'GET_ACCOUNT_INFO';

export function getAccountInfo(token, params, userId) {
	return asyncGet({
		token,
		params,
		actionName: GET_ACCOUNT_INFO,
		urlPath: `users/${userId}`
	});
}