import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createOrder } from '../actions';
import OrderCreatePanel from '../components/OrderCreatePanel';

const actionStateSelector = state => state.appState.running;

const actionResultSelector = state => state.appState.error;

const mapStateToProps = createSelector(
	actionStateSelector,
	actionResultSelector,
	(running, error) => ({
		running,
		error: error ? error : null,
		steps: ['Add Items', 'Add Address', 'Delivery Fee']
	})
);

const mapActionToProps = (dispatch) => ({
	makeOrder: ({items, address, fees}) => {
		dispatch(createOrder({items, address, fees}));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderCreatePanel);