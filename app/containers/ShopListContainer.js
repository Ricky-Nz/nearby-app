import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { shopCollectionLoad, shopCollectionRefresh, TOKEN } from '../actions';
import ShopList from '../components/ShopList';

const shopListSelector = state => state.shopList;

const mapStateToProps = createSelector(
	shopListSelector,
	(shopList) => ({shopList})
);

const mapDispatchToProps = dispatch => ({
	onRefreshShops: (size, distance) => {
		dispatch(shopCollectionRefresh({
			token: TOKEN,
			longitude: '103.868601',
			latitude: '1.3202973',
			size,
			distance
		}))
	},
	onLoadMoreShops: (offset, size, distance) => {
		dispatch(shopCollectionLoad({
			token: TOKEN,
			longitude: '103.868601',
			latitude: '1.3202973',
			size,
			distance,
			offset
		}));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList);