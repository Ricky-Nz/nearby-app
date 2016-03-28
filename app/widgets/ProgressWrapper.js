import React, { PropTypes, StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { THEME_COLOR } from './theme';

let ProgressWrapper = ({style, children, loading}) => (
	loading ?
		<View style={[styles.centerContainer, style]}>
			<ProgressBarAndroid styleAttr='Normal' indeterminate={true} color={THEME_COLOR}/>
		</View> : children
);

ProgressWrapper.propTypes = {
	loading: PropTypes.bool
};

ProgressWrapper.defaultProps = {
	loading: false
};

const styles = StyleSheet.create({
	centerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default ProgressWrapper;