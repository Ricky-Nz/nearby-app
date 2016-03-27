import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import HomePage from '../components/HomePage';

const mapStateToProps = createSelector(
	() => {
		const initialRouteStack = [
			{ name: 'orders' },
			{ name: 'shops' },
			{ name: 'account' }
		];

		return {
			tabIcons: ['assignment', 'shopping-basket', 'account-circle'],
			initialRouteStack,
			initialRoute: initialRouteStack[1]
		};
	}
);

export default connect(mapStateToProps)(HomePage);