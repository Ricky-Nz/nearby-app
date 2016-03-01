import React, { Component, PropTypes, StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import GalleryBanner from './GalleryBanner';
import PageBackButton from './PageBackButton';

class MerchantDetailView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<GalleryBanner style={styles.topBanner} images={this.props.banners}/>
				<View style={styles.scrollContainer}>
					<PageBackButton style={styles.backButton}/>
					<ScrollView style={styles.scrollBody}>
						<View style={styles.detailContainer}>
					 		
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative'
	},
	scrollContainer: {
		position: 'absolute',
		top: 0
	},
	scrollBody: {
		paddingTop: 180
	},
	backButton: {
		position: 'absolute',
		left: 10,
		top: 20
	},
	detailContainer: {
		backgroundColor: 'white',
		padding: 10
	}
});

export default MerchantDetailView;