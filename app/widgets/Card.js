import React, { View, StyleSheet, PropTypes } from 'react-native';

let Card = ({children, style, elevation, ...props}) => (
	<View style={[styles.container, style, elevation&&{elevation}]} {...props}>
		{children}
	</View>
);

Card.propTypes = {
	elevation: PropTypes.number
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		elevation: 2
	}
});

export default Card;