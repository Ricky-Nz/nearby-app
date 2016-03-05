import React, { Component, PropTypes, View, ListView, ProgressBarAndroid } from 'react-native';
import RefreshMoreList from './RefreshMoreList';
import ShopListItem from './ShopListItem';

let ShopList = ({shopList, onLoadShops}) => (
	<RefreshMoreList datas={shopList.data} loading={shopList.loading}
		renderRow={shop => <ShopListItem {...shop}/>}
		onLoadListData={refersh => onLoadShops(shopList.offset, shopList.size, shopList.distance)}/>
);

ShopList.propTypes = {
	shopList: PropTypes.object.isRequired,
	onLoadShops: PropTypes.func.isRequired,
	onShopClicked: PropTypes.func.isRequired
};

export default ShopList;

