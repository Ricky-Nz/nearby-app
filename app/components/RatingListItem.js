import React, { PropTypes, StyleSheet, View } from 'react-native';
import { Avatar, MainText, SubText, StarMarkingBar } from '../widgets';
import moment from 'moment';

let RatingListItem = ({name, avatarUrl, rating, time}) => (
	<View style={styles.container}>
		<Avatar src={avatarUrl}/>
		<View style={styles.verticalConteinr}>
			<MainText>{name}</MainText>
			<View style={styles.horizontal}>
				<SubText>Rated </SubText>
				<StarMarkingBar mark={rating}/>
			</View>
		</View>
		<SubText>{moment(time).format('MMMM Do')}</SubText>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20
	},
	horizontal: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	verticalConteinr: {
		flex: 1,
		paddingHorizontal: 20
	}
});

export default RatingListItem;