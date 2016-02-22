import { SELECT_HOME_TAB } from '../actions/actionTypes';

export default function (appState = { selectTab: 'merchant' }, action) {
	switch(action.type) {
		case SELECT_HOME_TAB:
			return {...appState, selectTab: action.payload};
		default:
			return appState;
	}
}