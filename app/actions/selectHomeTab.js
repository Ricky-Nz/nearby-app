import { SELECT_HOME_TAB } from './actionTypes';

export default function (tabName) {
	return {
		type: SELECT_HOME_TAB,
		payload: tabName
	};
}