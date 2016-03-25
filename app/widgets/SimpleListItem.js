import React, { PropTypes, StyleSheet, View } from 'react-native';
import MainText from './MainText';
import SubText from './SubText';
import Clickable from './Clickable';

let SimpleListItem = ({title, description, leftNode, rightNode, onPress}) => (
	<Clickable onPress={() => onPress&&onPress()}>
		<View style={styles.container}>
			{leftNode&&
				<View style={styles.leftNodeContainer}>
					{leftNode}
				</View>
			}
			<View style={styles.textContainer}>
				{typeof title === 'object' ? title : <MainText style={styles.title}>{title}</MainText>}
				{typeof description === 'object' ? description : <SubText>{description}</SubText>}
			</View>
			{rightNode&&
				<View style={styles.rightNodeContainer}>
					{rightNode}
				</View>
			}
		</View>
	</Clickable>
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
	leftNode: PropTypes.element,
	rightNode: PropTypes.element
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 20
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	leftNodeContainer: {
		paddingRight: 20
	},
	rightNodeContainer: {
		paddingLeft: 20
	},
	title: {
		marginBottom: 4
	}
})

export default SimpleListItem;