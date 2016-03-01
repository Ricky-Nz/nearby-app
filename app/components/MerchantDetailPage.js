import React, { Component, PropTypes, StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Clickable from './Clickable';

class MerchantDetailPage extends Component {
	render() {
		return (
			<ScrollView>
				<View style={styles.bannerContainer}>
			 		<Image style={styles.bannerImage}/>
			 		<Clickable style={backButtonClickable}>
			 			<Image style={styles.backImage}/>
			 		</Clickable>
				</View>
				<View>
					
				</View>
			</ScrollView>
		);
	}
}

MerchantDetailPage.propTypes = {

};

const styles = StyleSheet.create({
	bannerContainer: {
		position: 'relative'
	},
	backButtonClickable: {
		position: 'absolute',
		margin: 20
	},
	bannerImage: {
		height: 240
	},
	backImage: {
		margin: 5,
		height: 40,
		width: 40
	}
});

export default MerchantDetailPage;