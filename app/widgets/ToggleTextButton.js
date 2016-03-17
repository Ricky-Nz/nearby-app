import React, { Component, PropTypes, Text, StyleSheet } from 'react-native';
import Clickable from './Clickable';

let ToggleTextButton = ({active, onText, offText, mode, style, ...props}) => (
	<Clickable style={[styles[`${mode}Style`], active ? styles.styleOn : styles.styleOff, style]} {...props}>
		<Text numberOfLines={1} style={active ? styles.textOn : styles.textOff}>{active ? onText : offText}</Text>
	</Clickable>
);

ToggleTextButton.propTypes = {
	onText: PropTypes.string.isRequired,
	offText: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	mode: PropTypes.oneOf(['block', 'default'])
};

ToggleTextButton.defaultProps = {
	mode: 'default'
};

const styles = StyleSheet.create({
	blockStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 50
	},
	defaultStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		paddingVertical: 6,
		paddingHorizontal: 20
	},
	styleOn: {
		backgroundColor: 'darkturquoise'
	},
	styleOff: {
		borderWidth: 2,
		borderColor: 'darkturquoise'
	},
	textOn: {
		fontSize: 14,
		color: 'white'
	},
	textOff: {
		fontSize: 14,
		color: 'darkturquoise'
	}
});

export default ToggleTextButton;