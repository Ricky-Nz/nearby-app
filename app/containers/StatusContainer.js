import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import StatusView from '../components/StatusView';

const statusSelector = state => state.status;

const storeStateSelector = createSelector(
	statusSelector,
	(status) => {
		return {
			status
		};
	}
);

const mapDispatchToProps = dispatch => {
	return {
		onTest: () => {
			console.log('test worked');
		}
	}
};

export default connect(
	storeStateSelector,
	mapDispatchToProps
)(StatusView);