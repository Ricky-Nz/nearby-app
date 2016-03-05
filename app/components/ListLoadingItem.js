import React, { View, Text, PropTypes, StyleSheet, ProgressBarAndroid } from 'react-native';

let ListLoadingItem = ({active, style}) => (
	<View style={[styles.container, style]}>
		{active&&<ProgressBarAndroid styleAttr='Small' Indeterminate/>}
		<Text style={styles.text}>{active ? 'Loading...' : 'Load'}</Text>
	</View>
);

ListLoadingItem.propTypes = {
	active: PropTypes.bool
};

const styles = StyleSheet.create({
	container: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 14,
		color: 'darkgray',
		padding: 5
	}
});

export default ListLoadingItem;