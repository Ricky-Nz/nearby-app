import React, { StyleSheet, Text } from 'react-native';

const TitleText = ({style, children}) => (
	<Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontSize: 18
	}
});

export default TitleText;