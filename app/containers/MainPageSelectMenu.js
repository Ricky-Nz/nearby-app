import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IconSelectBar } from '../widgets';

const mapStateToProps = createSelector(
	() => ({
		items: [
			{ key: 'orders', icon: 'assignment' },
			{ key: 'shops', icon: 'shopping-basket' },
			{ key: 'account', icon: 'account-circle' }
		]
	})
);

export default connect(mapStateToProps)(IconSelectBar);