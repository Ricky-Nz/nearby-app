import React, { Component, PropTypes, View } from 'react-native';
import { ListDataContainer } from '../containers';
import ShopListItem from './ShopListItem';

let ShopList = (props) => (
	<ListDataContainer stateKey='shops'
		renderRow={shop => <ShopListItem {...shop} onPress={() => this.props.onItemClicked(shop)}/>}/>
);

ShopList.propTypes = {
	onItemClicked: PropTypes.func.isRequired
};

export default ShopList;