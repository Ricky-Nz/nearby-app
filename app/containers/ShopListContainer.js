import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadMoreShops, refreshShops } from '../actions';
import ShopList from '../components/ShopList';

const shopListSelector = state => state.shopList;

const mapStateToProps = createSelector(
	shopListSelector,
	(shopList) => ({shopList})
);

const mapDispatchToProps = dispatch => ({
	onRefreshShops: (size, distance) => {
		dispatch(refreshShops(size, distance))
	},
	onLoadMoreShops: (offset, size, distance) => {
		dispatch(loadMoreShops(offset, size, distance));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList);