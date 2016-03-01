import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectHomeTab } from '../actions'; 
import App from '../components/App';

const appStateSelector = state => state.appState;

const mapStateToProps = createSelector(
	appStateSelector,
	(appState) => ({...appState, mainStack: [{type: 'order'}, {type: 'merchant'}, {type: 'account'}]})
);

const mapDispatchToProps = dispatch => ({
	selectTab: (selectIndex) => {
		dispatch(selectHomeTab(selectIndex));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);