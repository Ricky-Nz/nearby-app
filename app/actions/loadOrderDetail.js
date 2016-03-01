import { LOAD_ORDER_DETAIL } from './actionTypes';
import asyncLoad from './asyncLoad';

export function loadOrderDetail (orderId) {
	return asyncLoad(LOAD_ORDER_DETAIL, `TODO?id=${orderId}`);
}