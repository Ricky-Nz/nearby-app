import runAction from './runAction';

export const NOTIFICATION_COLLECTION_REFRESH = 'NOTIFICATION_COLLECTION_REFRESH';

export function refreshNotifications(size) {
	return (dispatch, getState) => {
		const { appState, notifications } = getState();
	
		runAction({
			dispatch,
			actionName: NOTIFICATIONS_COLLECTION_REFRESH,
			method: 'GET',
			urlPath: 'users/notifications',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: 0
			}
		});
	};
}