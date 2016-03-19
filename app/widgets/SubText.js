import React, { StyleSheet, Text } from 'react-native';

const SubText = ({style, children}) => (
	<Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
	text: {
		color: 'darkgray',
		fontSize: 14
	}
});

export default SubText;