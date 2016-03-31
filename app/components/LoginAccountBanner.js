import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import { Avatar, StarMarkingBar, TitleText, MoreFooter, THEME_COLOR } from '../widgets';

let LoginAccountBanner = ({ style, name, photo, marking, onRatingClicked }) => (
	<View style={[styles.container, style]}>
		<Avatar src={photo.url} size='normal'/>
		<View style={styles.centerContent}>
			<TitleText style={styles.nameText}>{name}</TitleText>
			<StarMarkingBar mark={marking}/>
		</View>
		<MoreFooter style={styles.reivew} onPress={onRatingClicked}>Reviews</MoreFooter>
	</View>
);

LoginAccountBanner.propTypes = {
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
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		flex: 1,
		paddingHorizontal: 20
	},
	nameText: {
		fontSize: 18,
		color: 'black'
	},
	reivew: {
		alignSelf: 'flex-end'
	}
});

export default LoginAccountBanner;