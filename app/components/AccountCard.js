import React, { PropTypes, StyleSheet, View } from 'react-native';
import { Card, Avatar, StarMarkingBar, TitleText, MoreFooter, THEME_COLOR } from '../widgets';

let AccountCard = ({avatar, name, mark, reviewCount}) => (
	<Card style={styles.container}>
		<Avatar src={avatar} size='normal'/>
		<View style={styles.centerContent}>
			<TitleText>{name}</TitleText>
			<StarMarkingBar mark={mark}/>
		</View>
		<MoreFooter style={styles.reivew}>{reviewCount > 0 ? `${reviewCount} Reviews` : 'Reviews'}</MoreFooter>
	</Card>
);

AccountCard.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	mark: PropTypes.number.isRequired,
	reviewCount: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: THEME_COLOR,
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
	reivew: {
		alignSelf: 'flex-end'
	}
});

export default AccountCard;