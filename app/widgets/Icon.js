import React, { PropTypes } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const sizes = {
	xs: 15,
	sm: 30,
	md: 40,
	lg: 50
};

let Icon = ({src, wSize, color, ...otherProps}) => (
	<MaterialIcon name={src} size={sizes[wSize]} color={color} {...otherProps}/>
);

Icon.propTypes = {
	src: PropTypes.string.isRequired,
	wSize: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
	color: PropTypes.string
};

Icon.defaultProps = {
	wSize: 'sm',
	color: 'white'
};

export default Icon;