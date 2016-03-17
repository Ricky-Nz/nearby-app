import React, { PropTypes, StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import IconButton from './IconButton';

let AvatarSelectBar = ({avatars, onSelect}) => (
	<View style={styles.conatiner}>
		<View style={styles.avatarContainer}>
			{
				avatars.map((avatar, index) => (
					<Avatar style={styles.avatar} src={avatar.src} size='small' onPress={() => onSelect(avatar.id)}/>
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
		marginRight: 6
	}
});

export default AvatarSelectBar;