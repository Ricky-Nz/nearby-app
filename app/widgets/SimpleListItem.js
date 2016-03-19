import React, { PropTypes, StyleSheet, View } from 'react-native';
import MainText from './MainText';
import SubText from './SubText';

let SimpleListItem = ({title, description, rightNode}) => (
	<View style={styles.container}>
		<View style={styles.textContainer}>
			<MainText style={styles.title}>{title}</MainText>
			{description&&<SubText>{description}</SubText>}
		</View>
		{rightNode}
	</View>
);

SimpleListItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	rightNode: PropTypes.element
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 20
	},
	textContainer: {
		flex: 1,
		paddingRight: 20
	},
	title: {
		marginBottom: 10
	}
})

export default SimpleListItem;