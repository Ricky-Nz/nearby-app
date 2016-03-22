import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { DragableList } from '../widgets';

const datasSelector = (state, {stateKey}) => state[stateKey].data;

const loadingStatusSelector = (state, {stateKey}) => state[stateKey].loading;

const refreshingStatusSelector = (state, {stateKey}) => state[stateKey].refreshing;

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	(datas, loading, refreshing) => ({datas, loading, refreshing})
);

export default connect(
	mapStateToProps
)(DragableList);