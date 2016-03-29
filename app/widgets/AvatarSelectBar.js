import React, { PropTypes, StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import IconButton from './IconButton';

let AvatarSelectBar = ({avatars, size, style, onSelect}) => (
	<View style={[styles.conatiner, style]}>
		<View style={styles.avatarContainer}>
			{
				avatars.map((avatar, index) => (
					<Avatar style={styles.avatar} src={avatar.src} size={size} onPress={() => onSelect(avatar.id)}/>
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
	size: PropTypes.string,
	onSelect: PropTypes.func.isRequired
};

AvatarSelectBar.defaultProps = {
	size: 'small'
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