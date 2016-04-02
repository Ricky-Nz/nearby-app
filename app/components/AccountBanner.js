import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import { Avatar, StarMarkingBar, Text, Button, THEME_COLOR } from '../widgets';

let AccountBanner = ({ style, name, photo, marking, onRatingClicked }) => (
	<View style={[styles.container, style]}>
		<Avatar src={photo.url} size='normal'/>
		<View style={styles.centerContent}>
			<Text style={styles.nameText}>{name}</Text>
			<StarMarkingBar mark={marking}/>
		</View>
		<Button wMode='link' wSize='xs' onPress={onRatingClicked}>Reviews</Button>
	</View>
);

AccountBanner.propTypes = {
	photo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	marking: PropTypes.number.isRequired,
	ratingCount: PropTypes.number.isRequired,
	onRatingClicked: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#20b2aa33',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20
	},
	centerContent: {
		flex: 1,
		paddingHorizontal: 20
	},
	nameText: {
		paddingBottom: 20
	},
	reivew: {
		alignSelf: 'flex-end'
	}
});

export default AccountBanner;