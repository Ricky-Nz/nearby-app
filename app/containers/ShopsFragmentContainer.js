import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { SHOPS } from '../actions';
import ShopsFragment from '../components/ShopsFragment';

const tokenSelector = state => state.navigator.token;

const shopListLengthSelector = state => state[SHOPS].datas.length;

const refreshingStateSelector = state => state[SHOPS].refreshing;

const loadSizeSelector = state => state[SHOPS].size;

const loadDistanceSelector = state => state[SHOPS].distance;

const loadOffsetSelector = state => state[SHOPS].offset;

const loadLongitudeSelector = state => state[SHOPS].longitude;

const loadLatitudeSelector = state => state[SHOPS].latitude;

const mapStateToProps = createSelector(
	tokenSelector,
	shopListLengthSelector,
	refreshingStateSelector,
	loadSizeSelector,
	loadDistanceSelector,
	loadOffsetSelector,
	loadLongitudeSelector,
	loadLatitudeSelector,
	(token, dataLength, refreshing, size, distance, offset, longitude, latitude) => ({
		loading: dataLength === 0 && refreshing,
		token,
		size,
		distance,
		offset,
		longitude,
		latitude
	})
);

export default connect(
	mapStateToProps	
)(ShopsFragment);