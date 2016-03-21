import React, { PropTypes, StyleSheet, View, ProgressBarAndroid } from 'react-native';
import { THEME_COLOR } from './theme';

let Fragment = ({style, children, loading}) => (
	<View style={[loading ? styles.centerContainer : styles.container, style]}>
		{loading ? <ProgressBarAndroid styleAttr='Normal' indeterminate={true} color={THEME_COLOR}/> : children}
	</View>
);

Fragment.propTypes = {
	loading: PropTypes.bool
};

Fragment.defaultProps = {
	loading: false
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'whitesmoke'
	},
	centerContainer: {
		flex: 1,
		paddingTop: 30,
		alignItems: 'center',
		backgroundColor: 'whitesmoke'
	}
});

export default Fragment;