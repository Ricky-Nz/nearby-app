import React, { StyleSheet, PropTypes } from 'react-native';
import Icon from './Icon';

let Star = ({fill, size}) => (
	<Icon size={size} src={fill === 'empty' ? 'star-border' : (fill === 'full' ? 'star' : 'star-half')}
		color={fill === 'empty' ? 'gray' : 'goldenrod'}/>
);

Star.propTypes = {
	fill: PropTypes.oneOf(['full', 'half', 'empty'])
};

Star.defaultProps = {
	size: 'tiny',
	fill: 'empty'
}

export default Star;