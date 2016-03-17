import React, { PropTypes, StyleSheet, View } from 'react-native';
import Clickable from './Clickable';
import Avatar from './Avatar';
import IconButton from './IconButton';

let AvatarSelectBar = ({avatars, onSelect}) => (
	<View style={styles.conatiner}>
		<View style={styles.avatarContainer}>
			{
				avatars.map((avatar, index) => (
					<Clickable key={index} onPress={() => onSelect(avatar.id)} style={styles.avatar}>
						<Avatar src={avatar.src} size='small'/>
					</Clickable>
				))
			}
		</View>
		<IconButton src='arrow-forward' color='grey' onPress={() => onSelect()}/>
	</View>
);

AvatarSelectBar.propTypes = {
	avatars: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	})).isRequired,
	onSelect: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	conatiner: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10
	},
	avatarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1
	},
	avatar: {
		marginRight: 10
	}
});

export default AvatarSelectBar;