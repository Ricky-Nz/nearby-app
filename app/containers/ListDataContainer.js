import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { shopCollectionLoad, shopCollectionRefresh, orderCollectionLoad, orderCollectionRefresh } from '../actions';
import { RefreshMoreList } from '../widgets';

const datasSelector = (state, {listName}) => state[listName].datas;

const loadingStatusSelector = (state, {listName}) => state[listName].loading;

const refreshingStatusSelector = (state, {listName}) => state[listName].refreshing;

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	(datas, loading, refreshing) => ({datas, loading, refreshing})
);

const mapDispatchToProps = (dispatch, {listName, token, longitude, latitude, size, distance, offset}) => ({
	onRefresh: () => {
		const params = {
			token,
			longitude,
			latitude,
			size,
			distance
		};
		if (listName === 'shopList') {
			dispatch(shopCollectionRefresh(params))
		} else if (listName === 'orderList') {
			dispatch(orderCollectionRefresh(params))
		}
	},
	onLoadMore: () => {
		const params = {
			token,
			longitude,
			latitude,
			size,
			distance,
			offset
		};
		if (listName === 'shopList') {
			dispatch(shopCollectionLoad(params))
		} else if (listName === 'orderList') {
			dispatch(orderCollectionLoad(params))
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RefreshMoreList);