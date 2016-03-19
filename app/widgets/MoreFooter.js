import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { Icon, Clickable } from '../widgets';

let MoreFooter = ({color, children, style, onPress}) => (
	<Clickable onPress={onPress} style={style}>
		<View style={styles.container}>
			<Text style={{fontSize: 14, color: color}}>{children}</Text>
			<Icon size='tiny' src='chevron-right' color={color}/>
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