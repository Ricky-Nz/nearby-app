import React, { View, Text, PropTypes, StyleSheet, ProgressBarAndroid } from 'react-native';

let ListLoadingItem = ({active, style}) => (
	<View style={[styles.container, style]}>
		<ProgressBarAndroid styleAttr='Small' indeterminate/>
		<Text style={styles.text}>Loading...</Text>
	</View>
);

ListLoadingItem.propTypes = {
	active: PropTypes.bool
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	text: {
		fontSize: 16,
		color: 'darkgray',
		marginLeft: 5
	}
});

export default ListLoadingItem;