import React, { StyleSheet, View } from 'react-native';

const HorizontalLine = ({padding, style}) => (
	<View style={[padding? styles.delimiterPadding : styles.delimiter, style]}/>
);

const styles = StyleSheet.create({
	delimiter: {
		height: 1,
		backgroundColor: '#00000022'
	},
	delimiterPadding: {
		height: 1,
		backgroundColor: '#00000022',
		marginHorizontal: 20
	}
});

export default HorizontalLine;