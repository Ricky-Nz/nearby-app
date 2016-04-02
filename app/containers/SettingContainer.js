import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { toggleNotification, toggleLocation } from '../actions';
import SettingPage from '../components/SettingPage';

const notificationSelector = state => state.appState.notification;

const locationSelector = state => state.appState.location;

const mapStateToProps = createSelector(
	notificationSelector,
	locationSelector,
	(notification, location) => ({ notification, location })
);

const mapActionToProps = (dispatch) => ({
	toggleNotification: (notification) => {
		dispatch(toggleNotification());
	},
	toggleLocation: (location) => {
		dispatch(toggleLocation());
	}
});

export default connect(mapStateToProps, mapActionToProps)(SettingPage);