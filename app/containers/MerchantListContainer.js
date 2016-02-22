import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MerchantList from '../components/MerchantList';

const merchantsSelector = state => state.merchants;

const mapStateToProps = createSelector(
	merchantsSelector,
	(merchants) => ({merchants})
);

const mapDispatchToProps = dispatch => ({
	onMerchantClicked: (merchantId) => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantList);