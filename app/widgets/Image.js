import React, { PropTypes, Image } from 'react-native';

let ImageWrapper = ({src, height, width, ...props}) => (
	<Image source={{uri: src}} style={{height, width}} {...props}/>
);

ImageWrapper.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number
};

export default ImageWrapper;