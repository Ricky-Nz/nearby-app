import React, { PropTypes, StyleSheet, View } from 'react-native';
import { MainText, Image } from '../widgets';
import ShopQuickInfoBar from './ShopQuickInfoBar';

let WatchingListItem = ({name, distance, category, price_tier, imageUrl}) => (
	<View style={styles.container}>
		<View style={styles.verticalConteinr}>
			<MainText>{name}</MainText>
			<ShopQuickInfoBar distance={distance} category={category} price_tier={price_tier}/>
		</View>
		<Image src={imageUrl} style={styles.image}/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	verticalConteinr: {
		flex: 1,
		paddingHorizontal: 20
	},
	image: {
		width: 110,
		height: 80
	}
});

export default WatchingListItem;