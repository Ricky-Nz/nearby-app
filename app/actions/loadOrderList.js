import { LOAD_ORDER_LIST } from './actionTypes';
import asyncLoad from './asyncLoad';

export default function (index) {
	return asyncLoad(LOAD_ORDER_LIST, `TODO?index=${index}`);
}