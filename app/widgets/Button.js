import React, { StyleSheet, PropTypes } from 'react-native';
import Clickable from './Clickable';
import Text from './Text';
import { THEME_COLOR } from './theme';

let Button = ({wMode, block, wSize, onPress, children, style}) => (
	<Clickable style={[styles.base, styles[wSize], styles[wMode], block&&styles.block, style]} onPress={onPress}>
		<Text align='center' wMode={wMode==='primary'?'lite':wMode} wSize={wSize} numberOfLines={1}>{children}</Text>
	</Clickable>
);

Button.propTypes = {
	wSize: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
	wMode: PropTypes.string,
	block: PropTypes.bool
};

Button.defaultProps = {
	wSize: 'md',
	wMode: 'default'
};

const styles = StyleSheet.create({
	base: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 4,
		elevation: 4
	},
	lg: {
		paddingVertical: 12,
		paddingHorizontal: 40,
	},
	md: {
		paddingVertical: 9,
		paddingHorizontal: 32,
	},
	sm: {
		paddingVertical: 6,
		paddingHorizontal: 24,
	},
	xs: {
		paddingVertical: 3,
		paddingHorizontal: 16,
	},
	primary: {
		backgroundColor: THEME_COLOR,
	},
	default: {
		backgroundColor: 'white'
	},
	block: {
		flex: 1
	}
});

export default Button;