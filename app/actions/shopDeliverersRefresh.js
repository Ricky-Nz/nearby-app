import runAction from './runAction';

export const SHOP_DELIVERERS_REFRESH = 'SHOP_DELIVERERS_REFRESH';

export function shopDeliverersRefresh({token, shopId, size}) {
	return (dispatch) => {
		runAction({
			urlPath: `shops/${shopId}/deliverers`,
			params: {
				offset: 0,
				size
			},
			actionName: SHOP_DELIVERERS_REFRESH,
			token,
			dispatch
		});
	};
}