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

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	(datas, loading, refreshing) => ({datas, loading, refreshing, running: refreshing&&!datas})
);

const mapActionToProps = (dispatch, {stateKey}) => ({
	onLoadMore: () => {
		switch(stateKey) {
			case 'shops':
				return dispatch(loadShops());
			case 'orders':
				return dispatch(loadOrders());
			case 'delivers':
				return dispatch(loadDelivers());
			case 'deliverers':
				return dispatch(loadDeliverers());
			case 'ratings':
				return dispatch(loadRatings());
			case 'watchings':
				return dispatch(loadWatchings());
			case 'notifications':
				return dispatch(loadNotifications());
		}
	},
	onRefresh: () => {
		switch(stateKey) {
			case 'shops':
				return dispatch(refreshShops());
			case 'orders':
				return dispatch(refreshOrders());
			case 'delivers':
				return dispatch(refreshDelivers());
			case 'deliverers':
				return dispatch(refreshDeliverers());
			case 'ratings':
				return dispatch(refreshRatings());
			case 'watchings':
				return dispatch(refreshWatchings());
			case 'notifications':
				return dispatch(refreshNotifications());
		}
	}
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(AsyncActionWrapper);