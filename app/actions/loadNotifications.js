import runAction from './runAction';

export const NOTIFICATION_COLLECTION_LOAD = 'NOTIFICATION_COLLECTION_LOAD';

export function loadNotifications(size) {
	return (dispatch, getState) => {
		const { appState, notifications } = getState();

		runAction({
			dispatch,
			actionName: NOTIFICATION_COLLECTION_LOAD,
			method: 'GET',
			urlPath: 'users/notifications',
			token: appState.token,
			params: {
				size: size||appState.listFetchSize,
				offset: notifications.offset
			}
		});
	};
}