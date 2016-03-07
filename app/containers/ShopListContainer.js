import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadShopList } from '../actions';
import ShopList from '../components/ShopList';

const shopListSelector = state => state.shopList;

const mapStateToProps = createSelector(
	shopListSelector,
	(shopList) => ({shopList})
);

const mapDispatchToProps = dispatch => ({
	onLoadShops: (offset, size, distance) => {
		dispatch(loadShopList(offset, size, distance));
	},
	onShopClicked: (merchantId) => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList);