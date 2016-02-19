import React, { Component, PropTypes, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

let UnderlineTabItem = (props) => (
	<TouchableHighlight underlayColor='aliceblue' style={props.style}>
		<View style={props.active&&styles.activeContainer}>
			<Text style={props.active ? styles.activeText : styles.idleText}>{props.name}</Text>
		</View>
	</TouchableHighlight>
);

UnderlineTabItem.propTypes = {
	name: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	idleText: {
		color: 'darkgrey',
		textAlign: 'center',
		padding: 5
	},
	activeText: {
		color: 'lightseagreen',
		textAlign: 'center',
		padding: 5,
	},
	activeContainer: {
		borderBottomColor: 'lightseagreen',
		borderBottomWidth: 3
	}
});

export default UnderlineTabItem;