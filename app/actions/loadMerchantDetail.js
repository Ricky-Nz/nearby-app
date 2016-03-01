import { LOAD_MERCHANT_DETAIL } from './actionTypes';
import asyncLoad from './asyncLoad';

export function loadMerchantDetail (orderId) {
	return asyncLoad(LOAD_MERCHANT_DETAIL, `TODO?id=${orderId}`);
}