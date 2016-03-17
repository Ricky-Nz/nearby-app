import React, { StyleSheet, View } from 'react-native';

const HorizontalLine = ({style}) => (
	<View style={[styles.delimiter, style]}/>
);

const styles = StyleSheet.create({
	delimiter: {
		height: 1,
		backgroundColor: 'lightgrey'
	}
});

export default HorizontalLine;