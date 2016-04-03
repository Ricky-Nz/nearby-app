import React, { PropTypes, StyleSheet, View } from 'react-native';
import Star from './Star';

let StarMarkingBar = ({total, mark, wSize}) => (
	<View style={styles.container}>
	{
		Array(Math.floor(total/2)).fill().map((node, index) => {
			const realMark = mark / 2;
			const gradeMark = index + 1;
			return (<Star key={index} wSize={wSize} fill={realMark >= gradeMark ? 'full' : (gradeMark - realMark < 1 ? 'half' : 'empty')}/>);
		})
	}
	</View>
);

StarMarkingBar.propTypes = {
	total: PropTypes.number,
	mark: PropTypes.number
};

StarMarkingBar.defaultProps = {
	total: 10,
	mark: 0
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	}
});

export default StarMarkingBar;