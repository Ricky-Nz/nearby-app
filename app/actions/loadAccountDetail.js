import { LOAD_ACCOUNT_DETAIL } from './actionTypes';
import asyncLoad from './asyncLoad';

export function loadAccountDetail (accountId) {
	return asyncLoad(LOAD_ACCOUNT_DETAIL, `TODO?id=${accountId}`);
}