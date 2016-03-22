import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { asyncGet, ORDER_COLLECTION_LOAD, ORDER_COLLECTION_REFRESH,
	DELIVER_COLLECTION_LOAD, DELIVER_COLLECTION_REFRESH } from '../actions';
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
		dispatch(asyncGet({
			token,
			params,
			actionName: stateKey === 'orders' ? ORDER_COLLECTION_LOAD : DELIVER_COLLECTION_LOAD,
			urlPath: stateKey
		}));
	},
	onRefresh: (token, params) => {
		params.offset = 0;

		dispatch(asyncGet({
			token,
			params,
			actionName: stateKey === 'orders' ? ORDER_COLLECTION_REFRESH : DELIVER_COLLECTION_REFRESH,
			urlPath: stateKey
		}));
	}
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(OrderList);