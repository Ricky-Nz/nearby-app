export default function (REFRESH_ACTION, LAOD_ACTION, defaultData, resultKey) {
	return function (list = {offset: 0, ...defaultData}, action) {
		switch(action.type) {
			case REFRESH_ACTION:
				if (action.running) {
					return {...list, refreshing: true, error: null};
				} else if (action.error) {
					return {...list, refreshing: false, error: action.error};
				} else if (action.data) {
					const data = resultKey ? action.data[resultKey] : action.data;
					return {...list, refreshing: false, error: null,
						data, offset: data.length};
				} else {
					return list;
				}
			case LAOD_ACTION:
				if (action.running) {
					return {...list, loading: true, error: null};
				} else if (action.error) {
					return {...list, loading: false, error: action.error};
				} else if (action.data) {
					const data = resultKey ? action.data[resultKey] : action.data;
					return {...list, loading: false, error: null,
						data: [...list.data, ...data], offset: list.offset + data.length};
				}
			default:
				return list;
		}
	};
}