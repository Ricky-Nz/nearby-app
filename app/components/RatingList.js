import React, { Component, View } from 'react-native';
import { ListDataContainer } from '../containers';
import RatingListItem from './RatingListItem';

const RatingList = (props) => (
	<ListDataContainer stateKey='ratings'
		renderRow={(order) => <RatingListItem {...order} onPress={() => console.log(order)}/>}/>
);

export default RatingList;