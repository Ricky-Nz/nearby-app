import React, { Component, View } from 'react-native';
import { ListDataContainer } from '../containers';
import OrderListItem from './OrderListItem';

const DeliverList = (props) => (
	<ListDataContainer stateKey='delivers'
		renderRow={(order) => <OrderListItem {...order} onPress={() => console.log(order)}/>}/>
);

export default DeliverList;