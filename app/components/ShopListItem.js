import React, { PropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Clickable, Card, SimpleListItem, Image, SubText, MainText } from '../widgets';
import ShopQuickInfoBar from './ShopQuickInfoBar';

let ShopListItem = ({id, name, address, category, description, location,
		photos, popularity, postal_code, price_tier, ...props}) => (
		<View style={styles.container}>
			<Card elevation={1}>
				<Clickable {...props}>
					<View>
						{photos&&<Image style={styles.bannerImage} src={photos[0].url}/>}
						<SimpleListItem title={name} description={<ShopQuickInfoBar distance={'100m'} category={category} price_tier={price_tier}/>}
							rightNode={<SubText>{false ? 'Watching' : 'Watch'}</SubText>}/>
					</View>
				</Clickable>
			</Card>
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
	bannerImage: {
		height: 120
	}
});

export default ShopListItem;