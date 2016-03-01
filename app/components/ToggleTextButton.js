import React, { Component, PropTypes, Text, StyleSheet } from 'react-native';
import Clickable from './Clickable';

let ToggleTextButton = ({active, onText, offText}) => (
	return (
		<Clickable style={[styles.baseStyle, active ? styles.styleOn : styles.styleOff]}>
			<Text style={active ? styles.textOn : styles.textOff}>{active ? onText : offText}</Text>
		</Clickable>
	);
);

ToggleTextButton.propTypes = {
	onText: PropTypes.string.isRequired,
	offText: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	baseStyle: {
		height: 40,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10
	},
	styleOn: {
		backgroundColor: 'darkturquoise'
	},
	styleOff: {
		borderWidth: 2,
		borderColor: 'darkturquoise'
	},
	textOn: {
		fontSize: 16,
		color: 'white'
	},
	textOff: {
		fontSize: 16,
		color: 'darkturquoise'
	}
});

export default ToggleTextButton;