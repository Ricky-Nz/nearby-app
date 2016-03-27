import React, { StyleSheet } from 'react-native';
import Clickable from './Clickable';
import ThemeText from './ThemeText';
import { THEME_COLOR } from './theme';

let Link = ({children, onPress}) => (
	<Clickable style={styles.container} onPress={onPress}>
		<ThemeText>{children}</ThemeText>	
	</Clickable>
);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 4,
		paddingHorizontal: 16
	}
});

export default Link;