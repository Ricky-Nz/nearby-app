import React, { PropTypes, StyleSheet, MapView, View } from 'react-native';
import { ScrollHeaderPage, ImageGallery, Card, Icon, VerticalGap, SimpleListItem,
	SubText, Layout, Text, Button, AvatarSelectBar } from '../widgets';
import ShopQuickInfoBar from './ShopQuickInfoBar';

let ShopPage = ({shop, deliverer_users, watching, onBack, onMakeOrder}) => (
	<View style={styles.relativeRoot}>
		<ScrollHeaderPage style={styles.scrollContiner} title={shop.name} onBack={onBack}>
			{shop.photos&&<ImageGallery images={shop.photos.map(photo => photo.url)}/>}
			<Card>
				<SimpleListItem title={shop.name}
					description={<ShopQuickInfoBar distance={shop.distance} category={shop.category} price_tier={shop.price_tier}/>}
					rightNode={<SubText>{watching?'Watching':'Watch'}</SubText>}/>
				<SimpleListItem leftNode={<Icon src='place' color='gray'/>} title={shop.address}/>
				<SimpleListItem leftNode={<Icon src='info-outline' color='gray'/>} title={shop.description}/>
				<SimpleListItem leftNode={<Icon src='label' color='gray'/>} title={shop.tags&&shop.tags.join(', ')}/>
				<MapView style={styles.map} region={shop.location}/>
			</Card>
		</ScrollHeaderPage>
		<Card elevation={6} style={styles.bottomBar}>
			<Layout style={styles.container}>
				<Layout style={styles.container} padding cneter alignCenter>
					<Text wMode='sub' wSize='sm'>
						{(deliverer_users&&deliverer_users.length)?`${deliverer_users[0].name} ${deliverer_users.length===1?'is':(' and '+deliverer_users.length+' others are')} now delivering`:'Nobody delivering right now :('}
					</Text>
					{(deliverer_users&&deliverer_users.length>0)&&<AvatarSelectBar
						avatars={deliverer_users.map(user => (id: user.id, name: user.name, src: user.photo.url))}/>}
				</Layout>
		    <Layout row alignCenter paddingBottom>
		      <Button wMode='primary' block onPress={onMakeOrder}>ORDER NOW</Button>
		      <Button block>IM ORDERING</Button>
		    </Layout>
			</Layout>
		</Card>
	</View>
);

ShopPage.propTypes = {
	shop: PropTypes.object.isRequired,
	deliverer_users: PropTypes.arrayOf(PropTypes.object).isRequired,
	watching: PropTypes.bool.isRequired,
	onBack: PropTypes.func.isRequired,
	onMakeOrder: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	relativeRoot: {
		flex: 1,
		position: 'relative'
	},
	container: {
		flex: 1
	},
	scrollContiner: {
		paddingBottom: 150
	},
	bottomBar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 180
	},
	map: {
		height: 200
	}
});

export default ShopPage;

