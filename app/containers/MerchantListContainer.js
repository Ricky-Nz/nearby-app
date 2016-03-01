import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MerchantList from '../components/MerchantList';

const merchantsSelector = state => state.merchantList;

const mapStateToProps = createSelector(
	merchantsSelector,
	(merchantList) => ({merchants: merchantList.array, error: merchantList.error, loading: merchantList.loading})
);

const mapDispatchToProps = dispatch => ({
	onMerchantClicked: (merchantId) => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantList);