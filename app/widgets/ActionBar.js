import React, { PropTypes, StyleSheet } from 'react-native';
import IconMenu from './IconMenu';
import TitleText from './TitleText';
import Card from './Card';
import { THEME_COLOR } from './theme';

let ActionBar = ({title, leftNode, rightNode, primary, style}) => (
	<Card style={[styles.container, primary&&styles.primary, style]}>
		{leftNode}
		<TitleText style={styles.title}>{title}</TitleText>
		{rightNode}
	</Card>
);

ActionBar.propTypes = {
	primary: PropTypes.bool,
	title: PropTypes.string,
	leftNode: PropTypes.element,
	rightNode: PropTypes.element,
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 56,
		padding: 10,
		backgroundColor: 'white'
	},
	primary: {
		backgroundColor: THEME_COLOR
	},
	title: {
		color: 'white',
		marginHorizontal: 5,
		flex: 1
	}
});

export default ActionBar;

