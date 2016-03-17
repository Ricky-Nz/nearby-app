import React, { PropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const sizes = {
	tiny: 15,
	small: 30,
	normal: 40,
	large: 50
};

let MaterialIcon = ({src, size, color, ...otherProps}) => (
	<Icon name={src} size={sizes[size]} color={color} {...otherProps}/>
);

MaterialIcon.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	color: PropTypes.string
};

MaterialIcon.defaultProps = {
	size: 'small',
	color: 'white'
};

export default MaterialIcon;