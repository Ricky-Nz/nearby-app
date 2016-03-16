import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import HomePage from '../components/HomePage';

const appStateSelector = state => null;

const mapStateToProps = createSelector(
	appStateSelector,
	() => ({
		pages: [
			{icon: 'local-shipping', title: 'Order List'},
			{icon: 'store-mall-directory', title: 'Shop List'},
			{icon: 'person', title: 'My Account'}
		]
	})
);

export default connect(
	mapStateToProps
)(HomePage);