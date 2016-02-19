import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import OrderList from '../components/OrderList';

const ordersSelector = state => state.orders;

const mapStateToProps = createSelector(
	ordersSelector,
	(orders) => ({orders})
);

const mapDispatchToProps = dispatch => ({
	onTest: () => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderList);