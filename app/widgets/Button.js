import React, { StyleSheet, PropTypes, Text, Image, View } from 'react-native';
import Clickable from './Clickable';
import { THEME_COLOR } from './theme';

let Button = ({children, onPress}) => (
	<Clickable style={styles.container} onPress={onPress}>
		<Text style={styles.text}>{children}</Text>	
	</Clickable>
);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 4,
		paddingHorizontal: 16,
		backgroundColor: THEME_COLOR,
		elevation: 4
	},
	text: {
		color: 'white',
		fontSize: 14
	}
});

export default Button;