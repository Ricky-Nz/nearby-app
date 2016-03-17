import React, { StyleSheet, PropTypes, View, StatusBar } from 'react-native';

let StatusBarWrapper = ({backgroundColor}) => (
	<View style={styles.container}>
		<StatusBar translucent={true} backgroundColor={backgroundColor}/>
	</View>
);

StatusBarWrapper.propTypes = {
	backgroundColor: PropTypes.string
};

StatusBarWrapper.defaultProps = {
	backgroundColor: 'darkturquoise'
};

const styles = StyleSheet.create({
	container: {
		height: 24
	}
});

export default StatusBarWrapper;