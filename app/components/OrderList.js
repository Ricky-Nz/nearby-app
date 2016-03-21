import React, { PropTypes } from 'react-native';
import { RefreshMoreList } from '../widgets';
import OrderListItem from './OrderListItem';

let ShopList = ({shopList, onRefreshShops, onLoadMoreShops, onItemClicked, ...otherProps}) => (
	<RefreshMoreList {...otherProps}
		datas={shopList.data}
		size={shopList.size}
		offset={shopList.offset}
		loading={shopList.loading}
		refreshing={shopList.refreshing}
		renderRow={shop => <OrderListItem {...shop} onPress={() => onItemClicked(shop)}/>}
		onRefreshData={() => onRefreshShops(shopList.size, shopList.distance)}
		onLoadMoreData={() => onLoadMoreShops(shopList.offset, shopList.size, shopList.distance)}/>
);

ShopList.propTypes = {
	shopList: PropTypes.object.isRequired,
	onRefreshShops: PropTypes.func.isRequired,
	onLoadMoreShops: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func.isRequired
};

export default ShopList;

