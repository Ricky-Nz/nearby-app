import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { DragableList } from '../widgets';
import { loadShops, refreshShops,
	loadOrders, refreshOrders,
	loadRatings, refreshRatings,
	loadNotifications, refreshNotifications,
	loadDelivers, refreshDelivers,
	loadWatchings, refreshWatchings } from '../actions';

const datasSelector = (state, {stateKey}) => state[stateKey].data;

const loadingStatusSelector = (state, {stateKey}) => state[stateKey].loading;

const refreshingStatusSelector = (state, {stateKey}) => state[stateKey].refreshing;

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	(datas, loading, refreshing) => ({datas, loading, refreshing})
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
			case 'ratings':
				return dispatch(loadRatings());
			case 'watchings':
				return dispatch(loadWatchings());
			case 'notifications':
				return dispatch(loadNotifications());
		}
	},
	onRefresh: (token, params) => {
		switch(stateKey) {
			case 'shops':
				return dispatch(refreshShops());
			case 'orders':
				return dispatch(refreshOrders());
			case 'delivers':
				return dispatch(refreshDelivers());
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
)(DragableList);