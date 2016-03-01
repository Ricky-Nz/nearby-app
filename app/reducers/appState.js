import { SELECT_HOME_TAB } from '../actions/actionTypes';

export default function (appState = {stackIndex: 0}, action) {
	switch(action.type) {
		case SELECT_HOME_TAB:
			return {...appState, stackIndex: action.payload};
		default:
			return appState;
	}
}