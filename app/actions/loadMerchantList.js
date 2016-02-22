import { LOAD_MERCHANT_LIST } from './actionTypes';
import asyncLoad from './asyncLoad';

export default function (index) {
	return asyncLoad(LOAD_MERCHANT_LIST, `TODO?index=${index}`);
}