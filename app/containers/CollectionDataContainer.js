import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { AsyncActionWrapper } from '../widgets';
import {
	loadShops, refreshShops,
	loadOrdered, refreshOrdered,
	loadDelivered, refreshDelivered,
	loadReviews, refreshReviews,
	loadNotifications, refreshNotifications
} from '../actions';

const datasSelector = (state, {stateKey}) => state[stateKey].data;

const loadingStatusSelector = (state, {stateKey}) => state[stateKey].loading;

const refreshingStatusSelector = (state, {stateKey}) => state[stateKey].refreshing;

const completeStatusSelector = (state, {stateKey}) => state[stateKey].complete;

const converterFuncSelector = (state, {stateKey, initFuncName, size, converter}) => converter;

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	completeStatusSelector,
	converterFuncSelector,
	(datas, loading, refreshing, complete, converter) => {
		const finished = (!refreshing&&datas)?true:false;
		if (finished&&converter) {
			return {finished, result: { ...converter(datas), loading, refreshing, complete }};
		} else {
			return {finished, result: { datas, loading, refreshing, complete }};
		}
	}
);

const mapActionToProps = (dispatch, {stateKey, userId, size}) => ({
	onLoad: (loadMore) => {
		switch(stateKey) {
			case 'shops':
				return dispatch(loadMore ? loadShops(size) : refreshShops(size));
			case 'ordered':
				return dispatch(loadMore ? loadOrdered(size) : refreshOrdered(size));
			case 'delivered':
				return dispatch(loadMore ? loadDelivered(size) : refreshDelivered(size));
			case 'reviews':
				return dispatch(loadMore ? loadReviews(size, userId) : refreshReviews(size, userId));
			case 'notifications':
				return dispatch(loadMore ? loadNotifications(size) : refreshNotifications(size));
		}
	}
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(AsyncActionWrapper);

