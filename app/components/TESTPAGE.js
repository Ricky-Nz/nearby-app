import React, { StyleSheet, Component } from 'react-native';
import { Card, AvatarSelectBar, Layout, Button, Text } from '../widgets';
import { CollectionDataContainer } from '../containers';
import OrderDetailPage from '../components/OrderDetailPage';

const TESTPAGE = (props) => (
		<OrderDetailPage/>
);

const styles = StyleSheet.create({
  bottomBar: {
    marginTop: 100,
    height: 180
  }
});

export default TESTPAGE;