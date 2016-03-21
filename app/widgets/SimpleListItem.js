import React, { PropTypes, StyleSheet, View } from 'react-native';
import MainText from './MainText';
import SubText from './SubText';

let SimpleListItem = ({title, description, rightNode}) => (
	<View style={styles.container}>
		<View style={styles.textContainer}>
			{typeof title === 'object' ? title : <MainText style={styles.title}>{title}</MainText>}
			{typeof description === 'object' ? description : <SubText>{description}</SubText>}
		</View>
		{rightNode}
	</View>
);

SimpleListItem.propTypes = {
	title: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	description: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	rightNode: PropTypes.element
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16
	},
	textContainer: {
		flex: 1,
		paddingRight: 16
	},
	title: {
		marginBottom: 4
	}
})

export default SimpleListItem;