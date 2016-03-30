import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAccountInfo } from '../actions';
import { AsyncActionWrapper } from '../widgets';

const accountSelector = state => state.account;

const mapStateToProps = createSelector(
	accountSelector,
	(account) => ({...account, running: account.loading})
);

const mapActionToProps = (dispatch) => ({
	load: () => {
		dispatch(getAccountInfo());
	}
});

export default connect(mapStateToProps, mapActionToProps)(AsyncActionWrapper);