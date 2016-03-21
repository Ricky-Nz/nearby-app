import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import OrderList from '../components/OrderList';
import { orderCollectionLoad, orderCollectionRefresh } from '../actions';

const ordersSelector = state => state.orderList;

const mapStateToProps = createSelector(
	ordersSelector,
	(orderList) => ({orders: orderList.array, error: orderList.error, loading: orderList.loading})
);

const mapDispatchToProps = (dispatch, props) => ({
	onRefresh: () => {
		dispatch(orderCollectionRefresh())
	},
	onLoad: () => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderList);