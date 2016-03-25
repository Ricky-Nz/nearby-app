import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { refreshRatings, loadRatings } from '../actions';
import RatingPage from '../components/RatingPage';

const tokenSelector = (state) => state.appState.token;

const sizeSelector = (state) => state.ratings.size;

const offsetSelector = (state) => state.ratings.offset;

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
		dispatch(loadRatings(token, params));
	},
	onRefresh: (token, params) => {
		dispatch(refreshRatings(token, params));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RatingPage);