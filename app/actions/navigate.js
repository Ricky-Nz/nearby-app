export const NAVIGATE = 'NAVIGATE';

export function navigate(key) {
	return {
		type: NAVIGATE,
		data: key
	};
}