import runAction from './runAction';

export const GET_ACCOUNT_INFO = 'GET_ACCOUNT_INFO';

export function getAccountInfo(userId) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: GET_ACCOUNT_INFO,
			method: 'GET',
			urlPath: `users/${userId||appState.userId}`,
			token: appState.token
		});
	};
}