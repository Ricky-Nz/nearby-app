import React, { Component, PropTypes, StyleSheet, View } from 'react-native';
import { THEME_COLOR, THEME_COLOR_LITE } from './theme';
import ThemeText from './ThemeText';
import SubText from './SubText';

class StepsIndicator extends Component {
	render() {
		const {steps, currentStep} = this.props;
		let indicatorRight = 0;
		if (this.state) {
			const stepWidth = this.state.width / steps.length;
			indicatorRight = stepWidth * (currentStep + 1);
		}

		return (
			<View onLayout={({nativeEvent}) => this.setState({width: nativeEvent.layout.width})}>
				<View style={styles.textContainer}>
					<ThemeText>{steps[currentStep]}</ThemeText>
					<SubText>{`  (Step ${currentStep + 1})`}</SubText>
				</View>
				<View style={styles.indicatorBar}>
					<View style={[styles.indicatorItem, {width: indicatorRight}]}/>
				</View>
			</View>
		);
	}
}

StepsIndicator.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	currentStep: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10
	},
	indicatorBar: {
		position: 'relative',
		backgroundColor: THEME_COLOR_LITE,
		height: 1
	},
	indicatorItem: {
		position: 'absolute',
		backgroundColor: THEME_COLOR,
		left: 0,
		top: 0,
		height: 1
	}
});

export default StepsIndicator;