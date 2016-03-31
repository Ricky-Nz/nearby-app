import React, { PropTypes, StyleSheet, MapView, View } from 'react-native';
import { ScrollHeaderPage, ImageGallery, Card, Icon, VerticalGap, SimpleListItem,
	SubText, AvatarSelectBar, Layout, Button } from '../widgets';
import { CollectionDataContainer } from '../containers';
import ShopQuickInfoBar from './ShopQuickInfoBar';

let ShopPage = ({id, name, address, location, photos, postal_code, price_tier,
		category, tags, popularity, description, onBack}) => (
	<View style={styles.container}>
		<ScrollHeaderPage style={styles.scrollContiner} title={name} onBack={onBack}>
			<ImageGallery images={photos.map(photo => photo.url)}/>
			<Card>
				<SimpleListItem title={name} description={<ShopQuickInfoBar distance={'100m'} category={category} price_tier={price_tier}/>}
					rightNode={<SubText>{'Watching'}</SubText>}/>
				<SimpleListItem leftNode={<Icon src='place' color='gray'/>} title={address}/>
				<SimpleListItem leftNode={<Icon src='info-outline' color='gray'/>} title={description}/>
				<SimpleListItem leftNode={<Icon src='label' color='gray'/>} title={tags&&tags.join(', ')}/>
				<MapView style={styles.map} region={location}/>
			</Card>
		</ScrollHeaderPage>
		<Card elevation={4} style={styles.bottomBar}>
      <CollectionDataContainer stateKey='deliverers' initFuncName='onRefresh' size={5}
        converter={datas => {
          const avatars = datas.map(data => {
            return { id: data.id, src: data.avatarUrl };
          });
          return { avatars };
        }}>
        <AvatarSelectBar onSelect={userId => console.log(userId)}/>
      </CollectionDataContainer>
      <Layout row>
      	<Button style={styles.button}>ORDER NOW</Button>
      	<Button style={styles.button}>I AM DELIVERING</Button>
      </Layout>
		</Card>
	</View>
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
	container: {
		flex: 1,
		position: 'relative'
	},
	scrollContiner: {
		paddingBottom: 150
	},
	bottomBar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 150
	},
	map: {
		height: 200
	},
	button: {
		flex: 1
	}
});

export default ShopPage;

