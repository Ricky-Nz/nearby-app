export default function (REFRESH_ACTION, LAOD_ACTION, defaultData, resultKey) {
	return function (list = {offset: 0, ...defaultData}, action) {
		switch(action.type) {
			case REFRESH_ACTION:
				if (action.running) {
					return {...list, refreshing: true, error: null};
				} else if (action.error) {
					return {...list, refreshing: false, error: action.error.message};
				} else if (action.data) {
					const data = resultKey ? action.data[resultKey] : action.data;
					return {refreshing: false, error: null,
						data, offset: data.length, complete: false};
				} else {
					return list;
				}
			case LAOD_ACTION:
				if (action.running) {
					return {...list, loading: true, error: null};
				} else if (action.error) {
					return {...list, loading: false, error: action.error.message};
				} else if (action.data) {
					const data = resultKey ? action.data[resultKey] : action.data;
					return {...list, loading: false, error: null,
						data: [...list.data, ...data], offset: list.offset + data.length, complete: data.length === 0};
				}
			default:
				return list;
		}
	};
}