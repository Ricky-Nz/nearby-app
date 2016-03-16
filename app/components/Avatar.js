import React, { PropTypes, StyleSheet, Image } from 'react-native';

let Avatar = ({size, src, style}) => (
	<Image style={[styles[size], style]} source={{uri: src}}/>
);

Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'normal', 'large'])
};

Avatar.defaultProps = {
	size: 'normal'
};

const styles = StyleSheet.create({
	small: {
		width: 30,
		height: 30,
		borderRadius: 15
	},
	normal: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	large: {
		width: 60,
		height: 60,
		borderRadius: 30
	}
});

export default Avatar;