import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAccountInfo } from '../actions';
import LoginAccountBanner from '../components/LoginAccountBanner';

const tokenSelector = state => state.appState.token;

const userIdSelector = state => state.appState.userId;

const accountSelector = state => state.account;

const mapStateToProps = createSelector(
	tokenSelector,
	userIdSelector,
	accountSelector,
	(token, userId, account) => ({
		token,
		userId,
		account
	})
);

const mapActionToProps = (dispatch) => ({
	getAccount: (token, userId) => {
		dispatch(getAccountInfo(token, null, userId))
	}
});

export default connect(
	mapStateToProps, mapActionToProps)(LoginAccountBanner);