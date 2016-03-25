import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { refreshShops, loadShops } from '../actions';
import ShopList from '../components/ShopList';

const tokenSelector = state => state.navigator.token;

const sizeSelector = state => state.shops.size;

const offsetSelector = state => state.shops.offset;

const distanceSelector = state => state.shops.distance;

const longitudeSelector = state => state.shops.longitude;

const latitudeSelector = state => state.shops.latitude;

const mapStateToProps = createSelector(
	tokenSelector,
	sizeSelector,
	offsetSelector,
	distanceSelector,
	longitudeSelector,
	latitudeSelector,
	(token, size, offset, distance, longitude, latitude) => ({
		token,
		params: {
			size,
			offset,
			distance,
			longitude,
			latitude
		}
	})
);

const mapActionToProps = (dispatch) => ({
	onLoadMore: (token, params) => {
		dispatch(loadShops(token, params));
	},
	onRefresh: (token, params) => {
		dispatch(refreshShops(token, params));
	}
});

export default connect(
	mapStateToProps,
	mapActionToProps
)(ShopList);