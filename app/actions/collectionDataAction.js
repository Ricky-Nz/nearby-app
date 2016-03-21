import runAction from './runAction';

export const SHOPS = 'shops';
export const SHOP_COLLECTION_LOAD = 'SHOP_COLLECTION_LOAD';
export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';

export const DELIVERS = 'delivers';
export const DELIVER_COLLECTION_LOAD = 'DELIVER_COLLECTION_LOAD';
export const DELIVER_COLLECTION_REFRESH = 'DELIVER_COLLECTION_REFRESH';

export const ORDERS = 'orders';
export const ORDER_COLLECTION_LOAD = 'ORDER_COLLECTION_LOAD';
export const ORDER_COLLECTION_REFRESH = 'ORDER_COLLECTION_REFRESH';

export function loadCollectionData(arrayName, token, params, refresh) {
	let urlPath, actionName;

	switch(arrayName) {
		case SHOPS:
			urlPath = 'shops';
			actionName = refresh ? SHOP_COLLECTION_REFRESH : SHOP_COLLECTION_LOAD;
			break;
		case ORDERS:
			urlPath = 'orders';
			actionName = refresh ? ORDER_COLLECTION_REFRESH : ORDER_COLLECTION_LOAD;
			break;
		case DELIVERS:
			urlPath = 'delivers';
			actionName = refresh ? DELIVER_COLLECTION_REFRESH : DELIVER_COLLECTION_LOAD;
			break;
	}

	return (dispatch) => {
		runAction({
			urlPath,
			params,
			actionName,
			token,
			dispatch
		});
	};
}