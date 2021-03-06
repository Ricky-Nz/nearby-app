import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAccountInfo } from '../actions';
import { AsyncActionWrapper } from '../widgets';

const accountSelector = state => state.account.data;

const mapStateToProps = createSelector(
	accountSelector,
	(result) => {
		return {finished: result?true:false, result};
	}
);

const mapActionToProps = (dispatch) => ({
	onLoad: () => {
		dispatch(getAccountInfo());
	}
});

export default connect(mapStateToProps, mapActionToProps)(AsyncActionWrapper);