import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { ScrollHeaderPage, ImageGallery, Card, VerticalGap, SimpleListItem, SubText, IconContent } from '../widgets';
import ShopQuickInfoBar from './ShopQuickInfoBar';

let ShopPage = ({id, name, address, location, photos, postal_code, price_tier,
		category, tags, popularity, description, onBack}) => (
	<ScrollHeaderPage title={name} onBack={onBack}>
		<Card>
			<ImageGallery images={photos.map(photo => photo.url)}/>
		</Card>
		<VerticalGap/>
		<Card>
			<SimpleListItem title={name} description={<ShopQuickInfoBar distance={'100m'} category={category} price_tier={price_tier}/>}
				rightNode={<SubText>{'Watching'}</SubText>}/>
			<IconContent icon='place' iconColor='gray'>{address}</IconContent>
			<IconContent icon='info-outline' iconColor='gray'>{description}</IconContent>
			<IconContent icon='label' iconColor='gray'>{tags&&tags.join(', ')}</IconContent>
			<IconContent icon='place' iconColor='gray'>{address}</IconContent>
			<IconContent icon='info-outline' iconColor='gray'>{description}</IconContent>
			<IconContent icon='label' iconColor='gray'>{tags&&tags.join(', ')}</IconContent>
			<IconContent icon='place' iconColor='gray'>{address}</IconContent>
			<IconContent icon='info-outline' iconColor='gray'>{description}</IconContent>
			<IconContent icon='label' iconColor='gray'>{tags&&tags.join(', ')}</IconContent>
		</Card>
		<VerticalGap/>
	</ScrollHeaderPage>
);

ShopPage.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	location: PropTypes.shape({
		longtitude: PropTypes.number.isRequired,
		latitude: PropTypes.number.isRequired,
	}).isRequired,
	photos: PropTypes.arrayOf(PropTypes.shape({
		url: PropTypes.string.isRequired
	})),
	postal_code: PropTypes.string.isRequired,
	price_tier: PropTypes.number.isRequired,
	category: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string.isRequired),
	popularity: PropTypes.number,
	description: PropTypes.string,
	onBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create({

});

export default ShopPage;

