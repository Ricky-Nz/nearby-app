import doFetch from './doFetch';

export const SHOP_COLLECTION_LOAD = 'SHOP_COLLECTION_LOAD';

export function shopCollectionLoad({token, longitude, latitude, distance, offset, size}) {
	return (dispatch) => {
		doFetch({
			urlPath: 'shops',
			params: {
				offset,
				longitude,
				latitude,
				distance,
				size
			},
			actionName: SHOP_COLLECTION_LOAD,
			token,
			dispatch
		});
	};
}