import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { AsyncActionWrapper } from '../widgets';
import { loadShops, refreshShops,
	loadOrders, refreshOrders,
	loadRatings, refreshRatings,
	loadNotifications, refreshNotifications,
	loadDelivers, refreshDelivers,
	loadDeliverers, refreshDeliverers,
	loadWatchings, refreshWatchings } from '../actions';

const datasSelector = (state, {stateKey}) => state[stateKey].data;

const loadingStatusSelector = (state, {stateKey}) => state[stateKey].loading;

const refreshingStatusSelector = (state, {stateKey}) => state[stateKey].refreshing;

const converterFuncSelector = (state, {stateKey, initFuncName, size, converter}) => converter;

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	converterFuncSelector,
	(datas, loading, refreshing, converter) => {
		const running = refreshing&&!datas;
		if (!running&&converter&&datas) {
			return {...converter(datas), loading, refreshing, running};
		} else {
			return {datas, loading, refreshing, running};
		}
	}
);

const mapActionToProps = (dispatch, {stateKey, size}) => ({
	onLoadMore: () => {
		switch(stateKey) {
			case 'shops':
				return dispatch(loadShops(size));
			case 'orders':
				return dispatch(loadOrders(size));
			case 'delivers':
				return dispatch(loadDelivers(size));
			case 'deliverers':
				return dispatch(loadDeliverers(size));
			case 'ratings':
				return dispatch(loadRatings(size));
			case 'watchings':
				return dispatch(loadWatchings(size));
			case 'notifications':
				return dispatch(loadNotifications(size));
		}
	},
	onRefresh: () => {
		switch(stateKey) {
			case 'shops':
				return dispatch(refreshShops(size));
			case 'orders':
				return dispatch(refreshOrders(size));
			case 'delivers':
				return dispatch(refreshDelivers(size));
			case 'deliverers':
				return dispatch(refreshDeliverers(size));
			case 'ratings':
				return dispatch(refreshRatings(size));
			case 'watchings':
				return dispatch(refreshWatchings(size));
			case 'notifications':
				return dispatch(refreshNotifications(size));
		}
	}
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(AsyncActionWrapper);