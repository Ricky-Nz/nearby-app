import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { refreshWatchings, loadWatchings } from '../actions';
import WatchingPage from '../components/WatchingPage';

const tokenSelector = (state) => state.appState.token;

const sizeSelector = (state) => state.watchings.size;

const offsetSelector = (state) => state.watchings.offset;

const mapStateToProps = createSelector(
	tokenSelector,
	sizeSelector,
	offsetSelector,
	(token, size, offset) => ({
		token,
		params: {
			size,
			offset
		}
	})
);

const mapActionToProps = (dispatch) => ({
	onLoadMore: (token, params) => {
		dispatch(loadWatchings(token, params));
	},
	onRefresh: (token, params) => {
		dispatch(refreshWatchings(token, params));
	}
});

export default connect(mapStateToProps, mapActionToProps)(WatchingPage);