import React, { PropTypes, StyleSheet } from 'react-native';
import Clickable from './Clickable';

const RoundClickable = ({onPress, children, wSize, style}) => (
	<Clickable style={[styles.base, styles[wSize], style]} onPress={onPress}>
		{children}
	</Clickable>
);

const styles = StyleSheet.create({
	base: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	xs: {
		height: 36,
		width: 36,
		borderRadius: 18
	},
	sm: {
		height: 46,
		width: 46,
		borderRadius: 23
	},
	md: {
		height: 56,
		width: 56,
		borderRadius: 28
	},
	lg: {
		height: 66,
		width: 66,
		borderRadius: 33
	}
});

export default RoundClickable;