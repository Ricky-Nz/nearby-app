import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate } from '../actions';
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
			initialRoute: initialRouteStack[2]
		};
	}
);

const mapActionToProps = (dispatch) => ({
	navigate: (index) => dispatch(navigate(index))
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(HomePage);