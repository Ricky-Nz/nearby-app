import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { refreshOrdered, refreshDelivered, loadOrdered, loadDelivered } from '../actions';
import OrderList from '../components/OrderList';

const tokenSelector = state => state.navigator.token;

const sizeSelector = (state, {stateKey}) => state[stateKey].size;

const offsetSelector = (state, {stateKey}) => state[stateKey].offset;

const mapStateToProps = createSelector(
	tokenSelector,
	sizeSelector,
	offsetSelector,
	(token, size, offset) => ({
		token,
		params: {
			size,
			offset
		}
	})
);

const mapActionToProps = (dispatch, {stateKey}) => ({
	onLoadMore: (token, params) => {
		if (stateKey === 'orders') {
			dispatch(loadOrdered(token, params));
		} else {
			dispatch(loadDelivered(token, params));
		}
	},
	onRefresh: (token, params) => {
		if (stateKey === 'orders') {
			dispatch(refreshOrdered(token, params));
		} else {
			dispatch(refreshDelivered(token, params));
		}
	}
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(OrderList);