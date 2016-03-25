import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import AccountCard from '../components/AccountCard';

const accountSelector = state => state.account;

const mapStateToProps = createSelector(
	accountSelector,
	() => ({
		avatar: 'http://facebook.github.io/react/img/logo_og.png',
		name: 'Ricky Lee',
		mark: '9',
		reviewCount: 25
	})
);

const mapActionToProps = (dispatch) => ({
	getAccount: () => {
		
	}
});

export default connect(mapStateToProps)(AccountCard);