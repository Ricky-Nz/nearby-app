import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadMerchantList } from '../actions';
import ShopList from '../components/ShopList';

const shopListSelector = state => state.shopList;

const mapStateToProps = createSelector(
	shopListSelector,
	(shopList) => ({shopList})
);

const mapDispatchToProps = dispatch => ({
	onLoadShops: (offset, size, distance) => {
		dispatch(loadMerchantList(offset, size, distance));
	},
	onShopClicked: (merchantId) => {
		
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList);