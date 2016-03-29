import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { refreshDeliverers } from '../actions';
import ShopDeliverersBar from '../components/ShopDeliverersBar';

const deliverersSelector = state => state.deliverers;

const mapStateToProps = createSelector(
	deliverersSelector,
	(deliverers) => ({deliverers})
);

const mapActionToProps = (dispatch) => ({
	onLoad: (shopId) => {
		dispatch(refreshDeliverers(shopId));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ShopDeliverersBar);