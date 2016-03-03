import { LOAD_MERCHANT_LIST } from './actionTypes';
import asyncLoad from './asyncLoad';

export function loadMerchantList (offset, size, distance) {
	return asyncLoad(LOAD_MERCHANT_LIST, `shops`, {
		longitude: 103.868601, latitude: 1.3202973, distance, offset, size});
}