import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ORDERS } from '../actions';
import OrdersFragment from '../components/OrdersFragment';

const tokenSelector = state => state.navigator.token;

const dataLengthSelector = state => state.orderList.datas.length;

const refreshingStateSelector = state => state.orderList.refreshing;

const loadSizeSelector = state => state.orderList.size;

const loadOffsetSelector = state => state.orderList.offset;

const mapStateToProps = createSelector(
	tokenSelector,
	dataLengthSelector,
	refreshingStateSelector,
	loadSizeSelector,
	loadOffsetSelector,
	(token, dataLength, refreshing, size, offset) => ({
		loading: dataLength === 0 && refreshing,
		token,
		size,
		offset
	})
);

export default connect(
	mapStateToProps	
)(OrdersFragment);