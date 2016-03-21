import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadCollectionData } from '../actions';
import { RefreshMoreList } from '../widgets';

const datasSelector = (state, {arrayName}) => state[arrayName].datas;

const loadingStatusSelector = (state, {arrayName}) => state[arrayName].loading;

const refreshingStatusSelector = (state, {arrayName}) => state[arrayName].refreshing;

const mapStateToProps = createSelector(
	datasSelector,
	loadingStatusSelector,
	refreshingStatusSelector,
	(datas, loading, refreshing) => ({datas, loading, refreshing})
);

const mapDispatchToProps = (dispatch, {arrayName, token, params}) => ({
	onRefresh: () => {
		dispatch(loadCollectionData(arrayName, token, params, true));
	},
	onLoadMore: () => {
		dispatch(loadCollectionData(arrayName, token, params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RefreshMoreList);