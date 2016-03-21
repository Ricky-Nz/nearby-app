import React, { StyleSheet, PropTypes, View } from 'react-native';
import Icon from './Icon';
import MainText from './MainText';

let IconContent = ({icon, iconColor, children}) => (
	<View style={styles.container}>
		<Icon src={icon} color={iconColor}/>
		<View style={styles.textContent}>
			<MainText>{children}</MainText>
		</View>
	</View>
);

IconContent.propTypes = {
	icon: PropTypes.string.isRequired,
	iconColor: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		flexDirection: 'row' ,
		alignItems: 'center'
	},
	textContent: {
		paddingLeft: 16,
		flex: 1
	}
});

export default IconContent;