import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ShopsFragment from '../components/ShopsFragment';

const tokenSelector = state => state.navigator.token;

const shopListLengthSelector = state => state.shopList.datas.length;

const refreshingStateSelector = state => state.shopList.refreshing;

const loadSizeSelector = state => state.shopList.size;

const loadDistanceSelector = state => state.shopList.distance;

const loadOffsetSelector = state => state.shopList.offset;

const loadLongitudeSelector = state => state.shopList.longitude;

const loadLatitudeSelector = state => state.shopList.latitude;

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