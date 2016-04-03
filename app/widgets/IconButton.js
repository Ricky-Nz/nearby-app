import React, { PropTypes, StyleSheet } from 'react-native';
import RoundClickable from './RoundClickable';
import Icon from './Icon';

let IconButton = ({onPress, style, ...props}) => (
	<RoundClickable style={style} size={props.wSize} onPress={onPress}>
		<Icon {...props}/>
	</RoundClickable>
);

IconButton.propTypes = {
	wSize: PropTypes.string
};

IconButton.defaultProps = {
	wSize: 'sm'
};

export default IconButton;