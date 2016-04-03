import { connect } from 'react-redux';
import { selectOrder } from '../actions';
import OrderList from '../components/OrderList';

const mapActionToProps = (dispatch) => ({
	onSelectOrder: (order) => {
		dispatch(selectOrder(order));
	}
});

export default connect(null, mapActionToProps)(OrderList);