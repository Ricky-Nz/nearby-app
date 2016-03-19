import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate } from '../actions';
import HomePage from '../components/HomePage';

const appStateSelector = state => state.navigator;

const mapStateToProps = createSelector(
	appStateSelector,
	(navigator) => ({
		select: navigator.select
	})
);

const mapActionToProps = (dispatch) => ({
	navigate: (index) => dispatch(navigate(index))
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(HomePage);