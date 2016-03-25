import asyncGet from './asyncGet';

export const NOTIFICATION_COLLECTION_LOAD = 'NOTIFICATION_COLLECTION_LOAD';

export function loadNotifications(token, params) {
	return asyncGet({
		token,
		params,
		actionName: NOTIFICATION_COLLECTION_LOAD,
		urlPath: 'users/notifications'
	});
}