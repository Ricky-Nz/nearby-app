import React, { StyleSheet, Text } from 'react-native';
import { THEME_COLOR } from './theme';

const ThemeText = ({style, children}) => (
	<Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
	text: {
		color: THEME_COLOR,
		fontSize: 14
	}
});

export default ThemeText;