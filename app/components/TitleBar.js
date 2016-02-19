import React, { Component, PropTypes, StyleSheet, View, Image, Text } from 'react-native';

let TitleBar = (props) => (
	<View style={styles.container}>
		<Image style={styles.icon} onClick={props.leftIcon&&props.onLeftIconClicked}
			source={props.leftIcon}/>
		<Text style={styles.title}>{props.title}</Text>
		<Image style={styles.icon} onClick={props.rightIcon&&props.onRightIconClicked}
			source={props.rightIcon}/>
	</View>
);

TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	leftIcon: PropTypes.string,
	rightIcon: PropTypes.string,
	onLeftIconClicked: PropTypes.func,
	onRightIconClicked: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		height: 55,
		paddingTop: 15,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		width: 30,
		height: 30,
		marginHorizontal: 10
	},
	title: {
		flex: 1,
		textAlign: 'center',
		color: 'lightseagreen'
	}
});

export default TitleBar