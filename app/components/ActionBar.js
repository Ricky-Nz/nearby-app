import React, { PropTypes, StyleSheet, View, Text } from 'react-native';

let ActionBar = ({title, style}) => (
	<View style={[styles.container, style]}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

ActionBar.propTypes = {
	title: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'darkturquoise'
	},
	title: {
		color: 'white',
		fontSize: 22
	}
});

export default ActionBar;