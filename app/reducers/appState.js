import { TOGGLE_NOTIFICATION, TOGGLE_LOCATION,
	CREATE_ORDER } from '../actions';

export default function (appState = {
		listFetchSize: 10,
		token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiYTBiNjkxNGUtYWE5My00ZTY4LThhZjQtNDU4NzJiOGUwNjJlIiwidGltZSI6MTQ1NjkyNDkwOC4yODU3MzIzLCJ1c2VyX2lkIjoiNTZkNmUzYTI1Y2UzOTk1Y2UwYzlhMjAwIn0.tUwPZYK7DiclqdftxktgEMXskcmDfIbR8dk0zhgTr-U',
		userId: '56d6e3a25ce3995ce0c9a200',
		longitude: '103.868601',
		latitude: '1.3202973',
		location: true,
		notification: true }, action) {
	switch(action.type) {
		case TOGGLE_NOTIFICATION:
			return { ...appState, notification: !appState.notification };
		case TOGGLE_LOCATION:
			return { ...appState, location: !appState.location };
		case CREATE_ORDER:
			return { ...appState, running: action.running };
		default:
			return appState;
	}
}