import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectHomeTab } from '../actions'; 
import App from '../components/App';

const appStateSelector = state => state.appState;

const mapStateToProps = createSelector(
	appStateSelector,
	(appState) => ({appState})
);

const mapDispatchToProps = dispatch => ({
	selectTab: (selectTab) => {
		selectHomeTab(dispatch, selectTab);
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);