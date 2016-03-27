import runAction from './runAction';

export const NOTIFICATION_COLLECTION_LOAD = 'NOTIFICATION_COLLECTION_LOAD';

export function loadNotifications() {
	return (dispatch, getState) => {
		const { appState, notifications } = getState();

		runAction({
			dispatch,
			token: appState.token,
			params: {
				size: appState.listFetchSize,
				offset: notifications.offset
			},
			actionName: NOTIFICATION_COLLECTION_LOAD,
			urlPath: 'users/notifications'
		});
	};
}