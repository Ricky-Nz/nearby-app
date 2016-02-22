import React, { Component, StyleSheet, PropTypes, View, Image } from 'react-native';
import Clickable from './Clickable';

let IconTabItem = (props) => (
	<Clickable style={[styles.container, props.style]} onPress={props.onPress}>
		<Image style={styles.icon} source={props.source}/>
	</Clickable>
);

IconTabItem.propTypes = {
	source: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 30,
		height: 30
	}
});

export default IconTabItem;