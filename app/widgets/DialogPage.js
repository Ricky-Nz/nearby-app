import React, { StyleSheet, View } from 'react-native';
import StatusBar from './StatusBar';

const DialogPage = ({style, translucent, children}) => (
	<View style={[styles.container, style]}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#00000099',
		justifyContent: 'center'
	}
});

export default DialogPage;