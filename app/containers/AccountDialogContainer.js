import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAccountInfo } from '../actions';
import AccountDialog from '../components/AccountDialog';

const tokenSelector = state => state.appState.token;

const accountSelector = state => state.account;

const mapSateToProps = createSelector(
	tokenSelector,
	accountSelector,
	(token, account) => ({token, ...account})
);

const mapActionToProps = (dispatch) => ({
	loadAccount(token, id) => {
		dispatch(getAccountInfo(token, id));
	}
});

export default connect(mapSateToProps, mapActionToProps)(AccountDialog);