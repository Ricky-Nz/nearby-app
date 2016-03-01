import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import OrderList from '../components/OrderList';

const ordersSelector = state => state.orderList;

const mapStateToProps = createSelector(
	ordersSelector,
	(orderList) => ({orders: orderList.array, error: orderList.error, loading: orderList.loading})
);

const mapDispatchToProps = dispatch => ({
	onTest: () => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderList);