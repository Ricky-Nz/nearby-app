import React, { StyleSheet, PropTypes, View, StatusBar } from 'react-native';
import { THEME_COLOR } from './theme';

let StatusBarWrapper = ({backgroundColor}) => (
	<View style={styles.container}>
		<StatusBar translucent={true} backgroundColor={backgroundColor}/>
	</View>
);

StatusBarWrapper.propTypes = {
	backgroundColor: PropTypes.string
};

StatusBarWrapper.defaultProps = {
	backgroundColor: THEME_COLOR
};

const styles = StyleSheet.create({
	container: {
		height: 24
	}
});

export default StatusBarWrapper;