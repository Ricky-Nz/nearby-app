import { LOAD_MERCHANT_LIST } from './actionTypes';
import asyncLoad from './asyncLoad';

export function loadMerchantList (index) {
	return asyncLoad(LOAD_MERCHANT_LIST, `TODO?index=${index}`);
}