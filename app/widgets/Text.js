import React, { PropTypes, StyleSheet, Text as ReactText } from 'react-native';
import { THEME_COLOR } from './theme';

let Text = ({children, wSize, wMode, align, style, ...props}) => (
	<ReactText style={[styles[wSize], styles[wMode], styles[align], style]} {...props}>
		{children}
	</ReactText>
);

Text.propTypes = {
	wSize: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
	wMode: PropTypes.string
};

Text.defaultProps = {
	wSize: 'md'
};

const styles = StyleSheet.create({
	center: {
		textAlign: 'center'
	},
	primary: {
		color: THEME_COLOR
	},
	sub: {
		color: 'gray'
	},
	lite: {
		color: 'white'
	},
	lg: {
		fontSize: 22
	},
	md: {
		fontSize: 18
	},
	sm: {
		fontSize: 16
	},
	xs: {
		fontSize: 14
	}
});

export default Text;

