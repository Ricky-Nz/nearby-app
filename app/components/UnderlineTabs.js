import React, { Component, StyleSheet, PropTypes, View, Text } from 'react-native';
import UnderlineTabItem from './UnderlineTabItem';

let UnderlineTabs = (props) => (
	<View style={styles.container}>
		{props.tabs.map((tab, index) =>
			<UnderlineTabItem style={styles.item} key={index} name={tab} active={index === props.selectIndex}/>)}
	</View>
);

UnderlineTabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectIndex: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'white',
		borderBottomColor: 'lightgray',
		borderBottomWidth: 1
	},
	item: {
		flex: 1
	}
});

export default UnderlineTabs;