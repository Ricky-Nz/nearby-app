import React, { StyleSheet, PropTypes, View, StatusBar } from 'react-native';
import { THEME_COLOR } from './theme';

let StatusBarWrapper = ({translucent, backgroundColor}) => (
	translucent ? (<StatusBar translucent={true} backgroundColor='transparent'/>)
		: (
		<View style={[styles.container, {backgroundColor}]}>
			<StatusBar translucent={true} backgroundColor={backgroundColor}/>
		</View>
	)
);

StatusBarWrapper.propTypes = {
	backgroundColor: PropTypes.string,
	translucent: PropTypes.bool
};

StatusBarWrapper.defaultProps = {
	backgroundColor: THEME_COLOR,
	translucent: false
};

const styles = StyleSheet.create({
	container: {
		height: 24
	}
});

export default StatusBarWrapper;