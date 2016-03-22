export default function (REFRESH_ACTION, LAOD_ACTION, defaultData, resultKey) {
	return function (list = {data: [], offset: 0, ...defaultData}, action) {
		switch(action.type) {
			case REFRESH_ACTION:
				if (action.running) {
					return {...list, refreshing: true, error: null};
				} else if (action.error) {
					return {...list, refreshing: false, error: action.error};
				} else if (action.data && action.data[resultKey]) {
					return {...list, refreshing: false, error: null,
						data: action.data[resultKey], offset: action.data[resultKey].length};
				} else {
					return list;
				}
			case LAOD_ACTION:
				if (action.running) {
					return {...list, loading: true, error: null};
				} else if (action.error) {
					return {...list, loading: false, error: action.error};
				} else if (action.data && action.data[resultKey]) {
					return {...list, loading: false, error: null,
						data: [...list.data, ...action.data[resultKey]], offset: list.offset + action.data[resultKey].length};
				}
			default:
				return list;
		}
	};
}