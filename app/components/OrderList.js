import React, { Component, View } from 'react-native';
import { ListDataContainer } from '../containers';
import OrderListItem from './OrderListItem';

const OrderList = (props) => (
	<ListDataContainer stateKey='orders'
		renderRow={(order) => <OrderListItem {...order} onPress={() => console.log(order)}/>}/>
);

export default OrderList;