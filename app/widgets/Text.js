import React, { PropTypes, StyleSheet, Text as ReactText } from 'react-native';
import { THEME_COLOR } from './theme';

let Text = ({children, wSize, wMode, align, paragraph, style, ...props}) => (
	<ReactText style={[styles[wSize], styles[wMode], styles[align], paragraph&&styles.paragraph, style]} {...props}>
		{children}
	</ReactText>
);

Text.propTypes = {
	wSize: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
	wMode: PropTypes.string,
	paragraph: PropTypes.bool
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
	link: {
		color: THEME_COLOR
	},
	sub: {
		color: 'gray'
	},
	lite: {
		color: 'white'
	},
	paragraph: {
		padding: 12
	},
	lg: {
		fontSize: 24
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

