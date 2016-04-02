import React, { StyleSheet, View } from 'react-native';
import StatusBar from './StatusBar';

const TransparentPage = ({style, children}) => (
	<View style={[styles.container, style]}>
		<StatusBar translucent={true}/>
		<View style={styles.childContainer}>
			{children}
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	childContainer: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 80,
		backgroundColor: '#00000099'
	}
});

export default TransparentPage;