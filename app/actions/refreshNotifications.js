import asyncGet from './asyncGet';

export const NOTIFICATIONS_COLLECTION_REFRESH = 'NOTIFICATIONS_COLLECTION_REFRESH';

export function refreshNotifications(token, params) {
	return asyncGet({
		token,
		params,
		actionName: NOTIFICATIONS_COLLECTION_REFRESH,
		urlPath: 'users/notifications'
	});
}