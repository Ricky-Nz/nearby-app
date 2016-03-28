import React, { PropTypes, StyleSheet } from 'react-native';
import IconMenu from './IconMenu';
import TitleText from './TitleText';
import Card from './Card';
import { THEME_COLOR, BAR_HEIGHT, PADDING, HALF_PADDING } from './theme';

let ActionBar = ({title, leftNode, rightNode, style}) => (
	<Card elevation={6} style={[styles.container, style]}>
		{leftNode}
		<TitleText style={styles.title}>{title}</TitleText>
		{rightNode}
	</Card>
);

ActionBar.propTypes = {
	title: PropTypes.string,
	leftNode: PropTypes.element,
	rightNode: PropTypes.element,
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: BAR_HEIGHT,
		padding: PADDING,
		backgroundColor: THEME_COLOR
	},
	title: {
		color: 'white',
		marginHorizontal: HALF_PADDING,
		flex: 1
	}
});

export default ActionBar;

