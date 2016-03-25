import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate } from '../actions';
import HomePage from '../components/HomePage';

const appStateSelector = state => state.appState.select;

const mapStateToProps = createSelector(
	appStateSelector,
	(select) => ({ select })
);

const mapActionToProps = (dispatch) => ({
	navigate: (index) => dispatch(navigate(index))
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(HomePage);