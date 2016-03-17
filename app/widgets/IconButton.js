import React, { PropTypes, StyleSheet } from 'react-native';
import Clickable from './Clickable';
import Icon from './Icon';

let IconButton = ({onPress, ...props}) => (
	<Clickable style={[styles.base, styles[props.size]]} onPress={onPress}>
		<Icon {...props}/>
	</Clickable>
);

IconButton.propTypes = {
	size: PropTypes.string
};

IconButton.defaultProps = {
	size: 'small'
};

const styles = StyleSheet.create({
	base: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	small: {
		height: 40,
		width: 40,
		borderRadius: 20
	},
	normal: {
		height: 50,
		width: 50,
		borderRadius: 25
	},
	large: {
		height: 60,
		width: 60,
		borderRadius: 30
	}
});

export default IconButton;