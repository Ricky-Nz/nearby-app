import React, { Component, PropTypes, StyleSheet, View, Image, Text, ViewPagerAndroid } from 'react-native';

class ImageGallery extends Component {
	constructor(props) {
		super(props);
		this.state = { position: props.defaultPosition };
	}
	render() {
		const { style, images, defaultPosition } = this.props;
		const imageViews = images.map((image, index) => (
			<View key={index}>
				<Image source={{uri: image}}/>
			</View>
		));

		return (
			<View style={[styles.container, style]}>
				<ViewPagerAndroid style={styles.gallery} initialPage={defaultPosition}
					onPageSelected={this.onSelectedPage.bind(this)}>
					{imageViews}
				</ViewPagerAndroid>
				<Text style={styles.footer}>{`${this.state.position+1} / ${this.props.images.length}`}</Text>
			</View>
		);
	}
	onSelectedPage({nativeEvent}) {
		this.setState({position: nativeEvent.position});
	}
}

ImageGallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	defaultPosition: PropTypes.number
};

ImageGallery.defaultProps = {
	defaultPosition: 0
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		height: 220
	},
	gallery: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0	
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

export default ImageGallery;

