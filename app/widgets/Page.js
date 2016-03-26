import React, { StyleSheet, View } from 'react-native';
import StatusBar from './StatusBar';

const Page = ({style, translucent, children}) => (
	<View style={[styles.container, style]}>
		<StatusBar translucent={translucent}/>
		{children}
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default Page;