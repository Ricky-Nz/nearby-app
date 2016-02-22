import React, { PropTypes, StyleSheet, View, Image, Text } from 'react-native';
import Clickable from './Clickable';

let MerchantListItem = (props) => (
	<Clickable onPress={props.onPress}>
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.bannerImage} source={{uri: props.merchantImage}}/>
			</View>
			<View style={styles.textBar}>
				<View style={styles.merchantInfoContainer}>
					<Text style={styles.nameText}>{props.merchantName}</Text>
					<View style={styles.merchantDetailContainer}>
						<Text style={styles.detailText}>{props.distance}</Text>
						<Text style={styles.middlePoint}>·</Text>
						<Text style={styles.detailText}>{props.merchantType}</Text>
						<Text style={styles.middlePoint}>·</Text>
						<Text style={styles.detailText}>{props.everagePrice}</Text>
					</View>
				</View>
				<Text>{props.watching ? 'Watching' : 'Watch'}</Text>
			</View>
		</View>
	</Clickable>
);

MerchantListItem.propTypes = {
	merchantImage: PropTypes.string.isRequired,
	merchantName: PropTypes.string.isRequired,
	distance: PropTypes.string.isRequired,
	merchantType: PropTypes.string.isRequired,
	everagePrice: PropTypes.string.isRequired,
	watching: PropTypes.bool.isRequired,
	delivering: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginTop: 10
	},
	imageContainer: {
		
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

export default MerchantListItem;