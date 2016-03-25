export const NAVIGATE = 'NAVIGATE';
export const TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION';
export const TOGGLE_LOCATION = 'TOGGLE_LOCATION';

export function navigate(key) {
	return {
		type: NAVIGATE,
		data: key
	};
}

export function toggleNotification() {
	return {
		type: TOGGLE_NOTIFICATION
	};
}

export function toggleLocation() {
	return {
		type: TOGGLE_LOCATION
	};
}