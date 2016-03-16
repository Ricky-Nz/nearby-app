import doFetch from './doFetch';

export const SHOP_COLLECTION_REFRESH = 'SHOP_COLLECTION_REFRESH';

export function shopCollectionRefresh({token, longitude, latitude, distance, size}) {
	return (dispatch) => {
		doFetch({
			urlPath: 'shops',
			params: {
				offset: 0,
				longitude,
				latitude,
				distance,
				size
			},
			actionName: SHOP_COLLECTION_REFRESH,
			token,
			dispatch
		});
	};
}
