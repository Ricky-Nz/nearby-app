import React, { PropTypes, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Clickable } from '../widgets';

let ShopListItem = ({id, name, address, category, description, location,
		photos, popularity, postal_code, price_tier, ...props}) => (
	<View style={styles.container}>
		<Clickable {...props}>
			<View style={styles.clickableContainer}>
				<View>
					{photos&&<Image style={styles.bannerImage} source={{uri: photos[0].url}}/>}
				</View>
				<View style={styles.textBar}>
					<View style={styles.merchantInfoContainer}>
						<Text style={styles.nameText}>{name}</Text>
						<View style={styles.merchantDetailContainer}>
							<Text style={styles.detailText}>100m</Text>
							<Text style={styles.middlePoint}>·</Text>
							<Text style={styles.detailText}>{category}</Text>
							<Text style={styles.middlePoint}>·</Text>
							<Text style={styles.detailText}>{price_tier}</Text>
						</View>
					</View>
					<Text>{false ? 'Watching' : 'Watch'}</Text>
				</View>
			</View>
		</Clickable>
	</View>
);

ShopListItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string,
	category: PropTypes.string,
	description: PropTypes.string,
	location: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number
	}),
	photos: PropTypes.arrayOf(PropTypes.shape({
		url: PropTypes.string.isRequired
	})),
	popularity: PropTypes.number,
	postal_code: PropTypes.string,
	price_tier: PropTypes.number
};

const styles = StyleSheet.create({
	container: {
		paddingBottom: 10
	},
	clickableContainer: {
		backgroundColor: 'white'
	},
	bannerImage: {
		height: 120
	},
	textBar: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10
	},
	merchantInfoContainer: {
		flex: 1
	},
	merchantDetailContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	middlePoint: {
		color: 'lightseagreen',
		marginHorizontal: 5,
		fontSize: 22
	},
	nameText: {
		fontSize: 14,
		color: 'black'
	},
	detailText: {
		fontSize: 14,
		color: 'darkgrey'
	},
});

export default ShopListItem;