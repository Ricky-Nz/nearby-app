import React, { StyleSheet, View, PropTypes } from 'react-native';
import Icon from './Icon';
import MainText from './MainText';

let IconContent = ({icon, iconColor, children}) => (
	<View style={styles.container}>
		<Icon src={icon} color={iconColor}/>
		<MainText style={styles.text}>{children}</MainText>
	</View>
);

IconContent.propTypes = {
	icon: PropTypes.string.isRequired,
	iconColor: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		flexDirection: 'row' 
	},
	text: {
		marginLeft: 12
	}
});

export default IconContent;