import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { Icon, Clickable } from '../widgets';
import ThemeText from './ThemeText';
import { THEME_COLOR } from './theme';

let MoreFooter = ({color, children, style, onPress}) => (
	<Clickable onPress={onPress} style={style}>
		<View style={styles.container}>
			<ThemeText>{children}</ThemeText>
			<Icon size='tiny' src='chevron-right' color={THEME_COLOR}/>
		</View>
	</Clickable>
);

MoreFooter.propTypes = {
	color: PropTypes.string
};

MoreFooter.defaultProps = {
	color: 'whitesmoke'
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default MoreFooter;