import { NAVIGATE } from '../actions';

export default function (navigator = {select: 0}, action) {
	switch(action.type) {
		case NAVIGATE:
			return { select: action.data };
		default:
			return navigator;
	}
}