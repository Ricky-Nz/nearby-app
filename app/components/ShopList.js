import React, { Component, PropTypes, View, ListView, ProgressBarAndroid } from 'react-native';
import { RefreshMoreList } from '../widgets';
import ShopListItem from './ShopListItem';

let ShopList = ({shopList, onRefreshShops, onLoadMoreShops, onItemClicked, ...otherProps}) => (
	<RefreshMoreList {...otherProps}
		datas={shopList.data}
		size={shopList.size}
		offset={shopList.offset}
		loading={shopList.loading}
		refreshing={shopList.refreshing}
		renderRow={shop => <ShopListItem {...shop} onPress={() => onItemClicked(shop)}/>}
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

