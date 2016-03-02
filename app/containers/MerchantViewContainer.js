import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MerchantView from '../components/MerchantView';

const merchantDetailSelector = state => state.merchant;

const mapStateToProps = createSelector(
	merchantDetailSelector,
	(merchant) => ({merchant})
);

const mapDispatchToProps = dispatch => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantView);