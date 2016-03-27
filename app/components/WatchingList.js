import React, { Component, PropTypes, View } from 'react-native';
import { DataListContainer } from '../containers';
import WatchingListItem from './ShopListItem';

let WatchingList = (props) => (
	<DataListContainer stateKey='shops'
		renderRow={shop => <WatchingListItem {...shop} onPress={() => this.props.onItemClicked(shop)}/>}/>
);

WatchingList.propTypes = {
	onItemClicked: PropTypes.func.isRequired
};

export default WatchingList;