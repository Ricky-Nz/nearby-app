import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { refreshNotifications, loadNotifications } from '../actions';
import NotificationPage from '../components/NotificationPage';

const tokenSelector = (state) => state.appState.token;

const sizeSelector = (state) => state.notifications.size;

const offsetSelector = (state) => state.notifications.offset;

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
		dispatch(loadNotifications(token, params));
	},
	onRefresh: (token, params) => {
		dispatch(refreshNotifications(token, params));
	}
});

export default connect(mapStateToProps, mapActionToProps)(NotificationPage);