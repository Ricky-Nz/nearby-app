import React, { StyleSheet, Text } from 'react-native';

const MainText = ({style, children}) => (
	<Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
	text: {
		color: 'black',
		fontSize: 16
	}
});

export default MainText;