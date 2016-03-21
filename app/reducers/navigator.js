import { NAVIGATE } from '../actions';

export default function (navigator = {select: 1,
		token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiYTBiNjkxNGUtYWE5My00ZTY4LThhZjQtNDU4NzJiOGUwNjJlIiwidGltZSI6MTQ1NjkyNDkwOC4yODU3MzIzLCJ1c2VyX2lkIjoiNTZkNmUzYTI1Y2UzOTk1Y2UwYzlhMjAwIn0.tUwPZYK7DiclqdftxktgEMXskcmDfIbR8dk0zhgTr-U', userId: '56d6e3a25ce3995ce0c9a200'}, action) {
	switch(action.type) {
		case NAVIGATE:
			return { ...navigator, select: action.data };
		default:
			return navigator;
	}
}