import React, { PropTypes, StyleSheet } from 'react-native';
import RoundClickable from './RoundClickable';
import Icon from './Icon';

let IconButton = ({onPress, style, ...props}) => (
	<RoundClickable style={style} size={props.size} onPress={onPress}>
		<Icon {...props}/>
	</RoundClickable>
);

IconButton.propTypes = {
	size: PropTypes.string
};

IconButton.defaultProps = {
	size: 'small'
};

export default IconButton;