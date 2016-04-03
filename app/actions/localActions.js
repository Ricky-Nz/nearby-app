export const TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION';
export const TOGGLE_LOCATION = 'TOGGLE_LOCATION';
export const SELECT_SHOP = 'SELECT_SHOP';
export const SELECT_ORDER = 'SELECT_ORDER';

export function toggleNotification() {
	return {
		type: TOGGLE_NOTIFICATION
	};
}

export function toggleLocation() {
	return {
		type: TOGGLE_LOCATION
	};
}

export function selectShop(shopId) {
	return {
		type: SELECT_SHOP,
		data: shopId
	};
}

export function selectOrder(order) {
	return {
		type: SELECT_ORDER,
		data: order
	};
}