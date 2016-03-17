import React, { PropTypes, StyleSheet } from 'react-native';
import Clickable from './Clickable';
import Icon from 'react-native-vector-icons/MaterialIcons';

let PageBackButton = (props) => (
	<Clickable style={styles.container}>
		<Icon name='keyboard-arrow-left' size={40} color='white'/>
	</Clickable>
);

const styles = StyleSheet.create({
	container: {
			width: 50,
			height: 50,
			borderRadius: 25,
			alignItems: 'center',
			justifyContent: 'center'
	}
});

export default PageBackButton;