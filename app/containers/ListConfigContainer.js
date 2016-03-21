import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ShopsFragment from '../components/ShopsFragment';

const tokenSelector = state => state.navigator.token;

const paramsSelector = (state, {arrayName}) => {
	const { datas, loading, refreshing, error, ...configData} = state[arrayName];
	return configData;
};

const mapStateToProps = createSelector(
	tokenSelector,
	paramsSelector,
	(token, params) => ({
		token,
		params
	})
);

export default connect(
	mapStateToProps	
)(ShopsFragment);