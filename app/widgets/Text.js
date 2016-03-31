import React, { PropTypes, StyleSheet, Text } from 'react-native';
import { SIZES, S_COLORS } from './theme';

let TextWrapper = ({children, size, color}) => (
	<Text style={[styles[size], S_COLORS[color]]}>{children}</Text>
);

TextWrapper.propTypes = {
	size: PropTypes.oneOf(SIZES),
	color: PropTypes.string
};

TextWrapper.defaultProps = {
	size: SIZES[2]
};

const styles = StyleSheet.create({
	lg: {
		fontSize: 22
	},
	md: {
		fontSize: 18
	},
	sm: {
		fontSize: 14
	},
	xs: {
		fontSize: 10
	}
});

export default TextWrapper;

