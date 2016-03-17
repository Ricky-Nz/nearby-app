import React, { PropTypes, StyleSheet, Image } from 'react-native';
import RoundClickable from './RoundClickable';

let Avatar = ({size, src, style, onPress}) => onPress ?
	(
		<RoundClickable onPress={onPress} size={size} style={style}>
			<Image style={styles[size]} source={{uri: src}}/>
		</RoundClickable>
	) : (
		<Image style={[styles[size], style]} source={{uri: src}}/>
	);

Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['small', 'normal', 'large'])
};

Avatar.defaultProps = {
	size: 'small'
};

const styles = StyleSheet.create({
	small: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	normal: {
		width: 60,
		height: 60,
		borderRadius: 30
	},
	large: {
		width: 100,
		height: 100,
		borderRadius: 50
	}
});

export default Avatar;