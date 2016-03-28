import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAccountInfo } from '../actions';
import AccountDialog from '../components/AccountDialog';

const accountSelector = state => state.account;

const mapSateToProps = createSelector(
	accountSelector,
	(account) => ({...account})
);

const mapActionToProps = (dispatch, {userId}) => ({
	loadAccount: () => {
		dispatch(getAccountInfo(userId));
	}
});

export default connect(mapSateToProps, mapActionToProps)(AccountDialog);