import React, { PropTypes, StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import Clickable from './Clickable';
import IconButton from './IconButton';

let DeliverersBar = ({deliverers, onSelect, onMore}) => (
	<View style={styles.container}>
		<View style={styles.avatarContainer}>
			{
				deliverers.map((deliver, index) => (
					<Clickable onPress={() => onSelect(deliver.id)}>
						<Avatar key={index} style={styles.avatar} size='small' src={deliver.avatar}/>
					</Clickable>
				))
			}
		</View>
		<IconButton name='navigate-next' color='darkgrey' onPress={onMore}/>
	</View>
);

DeliverersBar.propTypes = {
	deliverers: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired
		avatar: PropTypes.string.isRequired
	})).isRequired,
	onSelect: PropTypes.func.isRequired,
	onMore: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15
	},
	avatarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1
	},
	avatar: {
		paddingRight: 15
	}
});

export default DeliverersBar;