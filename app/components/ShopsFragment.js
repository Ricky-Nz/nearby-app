import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { ShopListContainer } from '../containers';

let ShopsFragment = (props) => (
	<View style={styles.container}>
		<ShopListContainer/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default ShopsFragment;