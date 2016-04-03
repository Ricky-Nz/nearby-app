import runAction from './runAction';

export const CREATE_REVIEW = 'CREATE_REVIEW';

export function createReview({rating, comment}) {
	return (dispatch, getState) => {
		const { appState, order } = getState();

		runAction({
			dispatch,
			actionName: CREATE_REVIEW,
			method: 'POST',
			urlPath: `orders/${order.data.id}/review`,
			token: appState.token,
			body: {
				rating: 2,
				comment
			}
		});
	};
}