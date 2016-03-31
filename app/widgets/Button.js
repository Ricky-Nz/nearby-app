import React, { StyleSheet, PropTypes, Text, Image, View } from 'react-native';
import Clickable from './Clickable';
import { THEME_COLOR } from './theme';

let Button = ({children, block, style, onPress}) => (
	<Clickable style={[styles.container, block&&styles.block, style]} onPress={onPress}>
		<Text style={styles.text}>{children}</Text>	
	</Clickable>
);

Button.propTypes = {
	block: PropTypes.bool,
	mode: PropTypes.oneOf(['primary', 'default']),
	size: PropTypes.oneOf(['lg', 'md', 'sm'])
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 4,
		paddingHorizontal: 16,
		elevation: 4
	},
	primary: {
		backgroundColor: THEME_COLOR,
	},
	primaryText: {
		color: 'white'
	},
	block: {
		flex: 1
	}
});

export default Button;