import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getShopDetail } from '../actions';
import { AsyncActionWrapper } from '../widgets';

const shopSelector = state => state.shop.data;

const mapStateToProps = createSelector(
	shopSelector,
	(result) => {
		return {finished: result?true:false, result};
	}
);

const mapActionToProps = (dispatch) => ({
	onLoad: () => {
		dispatch(getShopDetail());
	}
});

export default connect(mapStateToProps, mapActionToProps)(AsyncActionWrapper);