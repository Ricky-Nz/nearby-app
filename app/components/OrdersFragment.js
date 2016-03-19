import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { SlideTabViewPager } from '../widgets';

let OrdersFragment = (props) => (
	<View style={styles.container}>
		<SlideTabViewPager mode='text' tabs={['ORDERED', 'DELIVERED']}
			onBindPager={(index) => <Text>{index}</Text>}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default OrdersFragment;