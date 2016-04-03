import React, { PropTypes, StyleSheet } from 'react-native';
import RoundClickable from './RoundClickable';
import Icon from './Icon';

let IconMenu = ({onPress, active, style, ...props}) => (
	<RoundClickable style={style} onPress={onPress} wSize={props.wSize}>
		<Icon {...props} color={active ? 'white' : 'gainsboro'}/>
	</RoundClickable>
);

IconMenu.propTypes = {
	wSize: PropTypes.string,
	active: PropTypes.bool
};

IconMenu.defaultProps = {
	wSize: 'sm',
	active: false
};

export default IconMenu;