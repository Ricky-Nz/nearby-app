import runAction from './runAction';

export const NOTIFICATIONS_COLLECTION_REFRESH = 'NOTIFICATIONS_COLLECTION_REFRESH';

export function refreshNotifications(size) {
	return (dispatch, getState) => {
		const { appState, notifications } = getState();
	
		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: notifications.offset
			},
			actionName: NOTIFICATIONS_COLLECTION_REFRESH,
			urlPath: 'users/notifications'
		});
	};
}