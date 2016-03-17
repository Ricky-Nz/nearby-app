import React, { PropTypes, StyleSheet } from 'react-native';
import Clickable from './Clickable';

const RoundClickable = ({onPress, children, size, style}) => (
	<Clickable style={[styles.base, styles[size], style]} onPress={onPress}>
		{children}
	</Clickable>
);

const styles = StyleSheet.create({
	base: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	small: {
		height: 46,
		width: 46,
		borderRadius: 23
	},
	normal: {
		height: 56,
		width: 56,
		borderRadius: 28
	},
	large: {
		height: 66,
		width: 66,
		borderRadius: 33
	}
});

export default RoundClickable;