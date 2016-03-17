import React, { View, StyleSheet } from 'react-native';

const Card = ({children, style, ...props}) => (
	<View style={[styles.container, style]} {...props}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	container: {
		elevation: 4
	}
});

export default Card;