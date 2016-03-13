import React, { PropTypes, StyleSheet, View } from 'react-native';
import Icon from './Icon';
import Clickable from './Clickable';

const IconButton = ({name, size, color, style, ...otherProps}) => (
	<Clickable style={[style, styles.container]} {...otherProps}>
		<View>
			<Icon name={name} size={size} color={color}/>
		</View>
	</Clickable>
);

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default IconButton;