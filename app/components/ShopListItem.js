import React, { PropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Clickable, Card, SimpleListItem, Image, SubText, MainText, VerticalGap } from '../widgets';
import ShopQuickInfoBar from './ShopQuickInfoBar';

let ShopListItem = ({id, name, address, category, description, location,
		photos, popularity, postal_code, price_tier, ...props}) => (
	<Card>
		<Clickable {...props}>
			{photos&&<Image style={styles.bannerImage} src={photos[0].url}/>}
			<SimpleListItem title={name} description={<ShopQuickInfoBar distance={'100m'} category={category} price_tier={price_tier}/>}
				rightNode={<SubText>{false ? 'Watching' : 'Watch'}</SubText>}/>
		</Clickable>
	</Card>
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
	bannerImage: {
		height: 140
	}
});

export default ShopListItem;