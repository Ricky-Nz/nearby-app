import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import OrderDetailPage from '../components/OrderDetailPage';

const orderSelector = state => state.order.data;

const mapStateToProps = createSelector(
	orderSelector,
	(order) => ({...order})
);

export default connect(mapStateToProps)(OrderDetailPage);