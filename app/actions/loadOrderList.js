import { LOAD_ORDER_LIST } from './actionTypes';
import asyncLoad from './asyncLoad';

export function loadOrderList (index) {
	return asyncLoad(LOAD_ORDER_LIST, `TODO?index=${index}`);
}