import { SELECT_HOME_TAB } from './actionTypes';

export function selectHomeTab (index) {
	return {
		type: SELECT_HOME_TAB,
		payload: index
	};
}