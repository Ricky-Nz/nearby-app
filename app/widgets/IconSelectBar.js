import React, { PropTypes, StyleSheet, View } from 'react-native';
import IconMenu from './IconMenu';
import { HALF_PADDING } from './theme';

let IconSelectBar = ({items, selectKey, onSelect, style, ...props}) => (
	<View style={[styles.container, style]} {...props}>
		{
			items.map((item, index) => (<IconMenu key={index} src={item.icon} active={item.key === selectKey}
				onPress={() => onSelect(item.key)} style={styles.item}/>))
		}
	</View>
);

IconSelectBar.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		icon: PropTypes.string.isRequired,
		key: PropTypes.string.isRequired
	})).isRequired,
	selectKey: PropTypes.number,
	onSelect: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	item: {
		marginHorizontal: 2
	}
});

export default IconSelectBar;