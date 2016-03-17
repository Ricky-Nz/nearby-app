import React, { PropTypes, StyleSheet } from 'react-native';
import RoundClickable from './RoundClickable';
import Icon from './Icon';

let IconMenu = ({onPress, active, style, ...props}) => (
	<RoundClickable style={style} onPress={onPress} size={props.size}>
		<Icon {...props} color={active ? 'white' : 'gainsboro'}/>
	</RoundClickable>
);

IconMenu.propTypes = {
	size: PropTypes.string,
	active: PropTypes.bool
};

IconMenu.defaultProps = {
	size: 'small',
	active: false
};

export default IconMenu;