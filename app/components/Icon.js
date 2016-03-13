import React, { PropTypes, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MaterialIcon = ({name, size, color, ...otherProps}) => (
	<Icon name={name} size={size} color={color} {...otherProps}/>
);

MaterialIcon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string
};

MaterialIcon.defaultProps = {
	size: 40,
	color: 'white'
};

export default MaterialIcon;