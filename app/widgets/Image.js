import React, { PropTypes, Image } from 'react-native';

let ImageWrapper = ({src, style, ...props}) => (
	<Image source={{uri: src}} style={style} {...props}/>
);

ImageWrapper.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number
};

export default ImageWrapper;