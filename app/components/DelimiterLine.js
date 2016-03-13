import React, { StyleSheet, View } from 'react-native';

const DelimiterLine = (props) => (
	<View style={styles.delimiter}/>
);

const styles = StyleSheet.create({
	delimiter: {
		height: 1,
		backgroundColor: 'lightgrey'
	}
});

export default DelimiterLine;