import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { LoadingView } from '../widgets';

const dataSelector = (state, {stateKey}) => state[stateKey].data;

const loadingStateSelector = (state, {stateKey, loadingKey}) => state[stateKey][loadingKey];

const mapStateToProps = createSelector(
	dataSelector,
	loadingStateSelector,
	(data, loading) => ({ loading: !data&&loading })
);

export default connect(mapStateToProps)(LoadingView);