import React, { PropTypes, StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { THEME_COLOR } from './theme';

let LoadingView = ({style, children, loading}) => (
	<View style={[loading ? styles.centerContainer : styles.container, style]}>
		{loading ? <ProgressBarAndroid styleAttr='Normal' indeterminate={true} color={THEME_COLOR}/>
			: children}
	</View>
);

LoadingView.propTypes = {
	loading: PropTypes.bool
};

LoadingView.defaultProps = {
	loading: false
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centerContainer: {
		flex: 1,
		paddingTop: 30,
		alignItems: 'center'
	}
});

export default LoadingView;