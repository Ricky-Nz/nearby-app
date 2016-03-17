import React, { Component, PropTypes, StyleSheet, View, Image, Text, ViewPagerAndroid } from 'react-native';

class GalleryBanner extends Component {
	constructor(props) {
		super(props);
		this.state = this.updateState(props);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.images !== this.props.images) {
			this.setState(this.updateState(nextProps));
		}
	}
	updateState(props) {
		return {
			position: 0
		};
	}
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<ViewPagerAndroid style={styles.banner} initialPage={this.state.position}
					onPageSelected={this.onSelectedPage.bind(this)}>
					{
						this.props.images.map((image, index) => (
							<View key={index}>
								<Image style={styles.banner} source={{uri: image}}/>
							</View>
						))
					}
				</ViewPagerAndroid>
				<Text style={styles.footer}>{`${this.state.position+1} / ${this.props.images.length}`}</Text>
			</View>
		);
	}
	onSelectedPage({nativeEvent}) {
		this.setState({position: nativeEvent.position});
	}
}

GalleryBanner.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired
};

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},
	banner: {
		height: 220
	},
	footer: {
		textAlign: 'center',
		color: 'white',
		fontSize: 12,
		padding: 2,
		height: 20,
		width: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		right: 10,
		bottom: 10
	}
});

export default GalleryBanner;

