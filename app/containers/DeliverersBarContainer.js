import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import DeliverersBar from './DeliverersBar';

const shopIdSelector = state => state.selectShopId;

const shopDeliverersSelector = state => state.selectShopDeliverers;

const deliverersLoadingStateSelector = state => state.selectShopDeliverersLoading;

const mapStateToProps = createSelector(
	shopIdSelector,
	shopDeliverersSelector,
	deliverersLoadingStateSelector,
	(shopId, deliverers, loading) => ({
		shopId,
		deliverers,
		loading
	})
);

const mapActionToProps = (dispatch, props) => ({
	loadDeliverers: () => {
		
	}
});

export default connect(mapStateToProps, mapActionToProps)(DeliverersBar);