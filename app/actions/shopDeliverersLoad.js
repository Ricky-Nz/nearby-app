import runAction from './runAction';

export const SHOP_DELIVERERS_LOAD = 'SHOP_DELIVERERS_LOAD';

export function shopDeliverersLoad({token, shopId, offset, size}) {
	return (dispatch) => {
		runAction({
			urlPath: `shops/${shopId}/deliverers`,
			params: {
				offset,
				size
			},
			actionName: SHOP_DELIVERERS_LOAD,
			token,
			dispatch
		});
	};
}