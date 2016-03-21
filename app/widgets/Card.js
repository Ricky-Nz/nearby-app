import React, { View, StyleSheet, PropTypes } from 'react-native';

let Card = ({children, style, elevation, backgroundColor, ...props}) => (
	<View style={[style, {elevation, backgroundColor}]} {...props}>
		{children}
	</View>
);

Card.propTypes = {
	backgroundColor: PropTypes.string,
	elevation: PropTypes.number
};

Card.defaultProps = {
	backgroundColor: 'white',
	elevation: 1
}

export default Card;