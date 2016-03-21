import React, { Component, PropTypes, StyleSheet, View, Text, ViewPagerAndroid } from 'react-native';
import Image from './Image';

class ImageGallery extends Component {
	constructor(props) {
		super(props);
		this.state = { position: props.defaultPosition };
	}
	render() {
		const { style, images, height, defaultPosition } = this.props;
		const imageViews = images.map((image, index) => (
			<View key={index}>
				<Image src={image} height={height}/>
			</View>
		));

		return (
			<View style={[styles.container, style, {height}]}>
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
	defaultPosition: PropTypes.number,
	height: PropTypes.number
};

ImageGallery.defaultProps = {
	defaultPosition: 0,
	height: 200
};

const styles = StyleSheet.create({
	container: {
		position: 'relative'
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

