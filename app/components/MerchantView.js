import React, { Component, PropTypes, StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import GalleryBanner from './GalleryBanner';
import PageBackButton from './PageBackButton';
import ToggleTextButton from './ToggleTextButton';

class MerchantView extends Component {
	constructor(props) {
		super(props);
		this.state = {showBanner: false};
	}
	render() {
		const { merchant } = this.props;
		const { showBanner } = this.state;

		return (
			<View style={styles.container}>
				{showBanner&&<View style={styles.banner}/>}
				<ScrollView style={styles.scrollView} scrollEventThrottle={8}
					onScroll={this.onScrollChange.bind(this)}>
					{!showBanner&&<GalleryBanner images={merchant.banners}/>}
					<View style={styles.scrollBody}>
				 		<View style={styles.watchRow}>
				 			<View>
				 			</View>
				 		</View>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
				 		<Text>CCC</Text>
			 		</View>
				</ScrollView>
				<View style={styles.centerContainer}>
					<ToggleTextButton onText='Stop Deliver' offText='I am Delivering' active={true}/>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	banner: {
		height: 50,
		backgroundColor: 'red'
	},
	scrollView: {
		flex: 1
	},
	scrollBody: {
		padding: 10
	},
	watchRow: {
		flexDirection: 'row'
	},
	centerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	}
});

export default MerchantView;


