import React, { Component, PropTypes, StyleSheet, View, StatusBar, ScrollView, Image, Text } from 'react-native';
import GalleryBanner from './GalleryBanner';
import PageBackButton from './PageBackButton';
import ToggleTextButton from './ToggleTextButton';
import IconButton from './IconButton';
import Icon from './Icon';
import DelimiterLine from './DelimiterLine';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {showBanner: false};
	}
	render() {
		const { shop, onBackPressed } = this.props;
		const { showBanner } = this.state;

		return (
			<View style={styles.pageContainer}>
				<StatusBar translucent={true} backgroundColor='transparent'/>
				{showBanner&&<View style={styles.banner}/>}
				<ScrollView style={styles.container} scrollEventThrottle={8}
					onScroll={this.onScrollChange.bind(this)}>
					<View style={styles.relativeContainer}>
						{!showBanner&&<GalleryBanner images={shop.photos.map(photo => photo.url)}/>}
						<View style={styles.backButtonContainer}>
							<IconButton name='navigate-before' onPress={onBackPressed}/>
						</View>
					</View>
					<View style={styles.infoRootContainer}>
						<View style={styles.infoContainer}>
							<View style={styles.container}>
								<Text>{shop.name}</Text>
								<Text>{`${shop.distance}-${shop.category}-${'$'.repeat(shop.price_tier)}`}</Text>
							</View>
							<ToggleTextButton onText='Watching' offText='Watch'
								active={true} onPress={this.props.onPress}/>
						</View>
						<DelimiterLine/>
						<View style={styles.infoContainer}>
							<Icon name='place' color='lightgrey' size={30}/>
							<Text>{shop.address}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Icon name='info-outline' color='lightgrey' size={30}/>
							<Text>{shop.description}</Text>
						</View>
						<View style={styles.infoContainer}>
							<Icon name='label' color='lightgrey' size={30}/>
							<Text>{shop.tags.join(', ')}</Text>
						</View>
					</View>
				</ScrollView>
				<View style={styles.centerContainer}>
					<ToggleTextButton onText='Stop Deliver' offText='I am Delivering'
						active={true} onPress={this.props.onPress} mode='block'/>
				</View>
			</View>
		);
	}
	onScrollChange({nativeEvent}) {
		if (nativeEvent.contentOffset.y > 160) {
			if (!this.state.showBanner) {
				this.setState({showBanner: true});
			}
		} else {
			if (this.state.showBanner) {
				this.setState({showBanner: false});
			}
		}
	}
}

ShopPage.propTypes = {
	shop: PropTypes.object.isRequired,
	onBackPressed: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	container: {
		flex: 1,
	},
	relativeContainer: {
		position: 'relative'
	},
	backButtonContainer: {
		position: 'absolute',
		top: 30,
		left: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	banner: {
		height: 50,
		backgroundColor: 'red'
	},
	infoRootContainer: {
		paddingHorizontal: 20
	},
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	centerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	infoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 15
	}
});

export default ShopPage;


