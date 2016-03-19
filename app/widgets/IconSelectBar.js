import React, { PropTypes, StyleSheet, View } from 'react-native';
import IconMenu from './IconMenu';
import { HALF_PADDING } from './theme';

let IconSelectBar = ({icons, select, onSelect, style, ...props}) => (
	<View style={[styles.container, style]}>
		{
			icons.map((icon, index) => (<IconMenu key={index} src={icon} active={select === index}
				onPress={() => onSelect(index)} style={styles.item} {...props}/>))
		}
	</View>
);

IconSelectBar.propTypes = {
	icons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	select: PropTypes.number,
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