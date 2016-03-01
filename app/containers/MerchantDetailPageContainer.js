import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MerchantDetailBoard from '../components/MerchantDetailBoard';

const merchantDetailSelector = state => state.merchantDetail;

const mapStateToProps = createSelector(
	merchantDetailSelector,
	(merchantDetail) => ({merchantDetail})
);

const mapDispatchToProps = dispatch => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantDetailBoard);