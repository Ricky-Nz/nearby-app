import React, { StyleSheet, PropTypes } from 'react-native';
import Icon from './Icon';

let Star = ({fill, wSize}) => (
	<Icon wSize={wSize} src={fill === 'empty' ? 'star-border' : (fill === 'full' ? 'star' : 'star-half')}
		color={fill === 'empty' ? 'gray' : 'goldenrod'}/>
);

Star.propTypes = {
	fill: PropTypes.oneOf(['full', 'half', 'empty'])
};

Star.defaultProps = {
	wSize: 'xs',
	fill: 'empty'
}

export default Star;