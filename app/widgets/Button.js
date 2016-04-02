import React, { StyleSheet, PropTypes, ProgressBarAndroid } from 'react-native';
import Clickable from './Clickable';
import Text from './Text';
import { THEME_COLOR } from './theme';

let Button = ({wMode, block, running, wSize, disabled, onPress, children, style}) => (
	<Clickable style={[styles.base, styles[wSize], styles[wMode],
			block&&styles.block, disabled&&styles.disabled, style]} onPress={!disabled&&onPress}>
		{running&&<ProgressBarAndroid style={styles.progress} styleAttr='Small' indeterminate={true} color={wMode==='primary'?'white':THEME_COLOR}/>}
		<Text align='center' wMode={wMode==='primary'?'lite':wMode} wSize={wSize} numberOfLines={1}>{children}</Text>
	</Clickable>
);

Button.propTypes = {
	wSize: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
	wMode: PropTypes.string,
	block: PropTypes.bool,
	running: PropTypes.bool,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	wSize: 'md',
	wMode: 'default'
};

const styles = StyleSheet.create({
	base: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 4
	},
	progress: {
		marginRight: 4
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
		elevation: 3
	},
	default: {
		backgroundColor: 'white',
		elevation: 3
	},
	disabled: {
		backgroundColor: 'gray',
		elevation: 3
	},
	block: {
		flex: 1
	}
});

export default Button;