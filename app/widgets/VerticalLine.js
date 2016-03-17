import React, { StyleSheet, View } from 'react-native';

const VerticalLine = ({style}) => (
	<View style={[styles.delimiter, style]}/>
);

const styles = StyleSheet.create({
	delimiter: {
		width: 1,
		backgroundColor: 'lightgrey'
	}
});

export default VerticalLine;