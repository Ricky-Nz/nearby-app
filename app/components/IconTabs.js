import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import IconTabItem from './IconTabItem';

let IconTabs = (props) => (
	<View style={styles.container}>
		{props.tabs.map((tab, index) =>
			<IconTabItem key={index} style={styles.tabItem} source={tab}
				active={index === props.selectIndex} onPress={() => props.onSelect(index)}/>)}
	</View>
);

IconTabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectIndex: PropTypes.number.isRequired,
	onSelect: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderTopColor: 'lightgray',
		borderTopWidth: 1
	},
	tabItem: {
		flex: 1
	}
});

export default IconTabs;