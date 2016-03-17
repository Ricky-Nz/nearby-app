import React, { Component, PropTypes, StyleSheet, Dimensions, View } from 'react-native';
import Clickable from './Clickable';
import Icon from './Icon';

class SlideTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliderWidth: Dimensions.get('window').width / props.tabs.length
		};
	}
	render() {
		const { tabs, position, offset, status, onSelect } = this.props;
		const { sliderWidth } = this.state;

		const tabItems = tabs.map((tab, index) => (
			<Clickable key={index} style={styles.tabItem} onPress={() => onSelect(index)}>
				<Icon src={tab} color={index === position ? 'white' : 'dimgray'}/>
			</Clickable>
		));

		const sliderOffset = (status === 'idle') ? {
			width: sliderWidth,
			left: position * sliderWidth
		} : {
			width: sliderWidth,
			left: sliderWidth * (offset + position)
		};

		return (
			<View style={styles.container}>
				<View style={styles.tabsContainer}>
					{tabItems}
				</View>
				<View style={[styles.slider, sliderOffset]}/>
			</View>
		);
	}
}

SlideTabBar.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
	position: PropTypes.number,
	offset: PropTypes.number,
	status: PropTypes.string,
	onSelect: PropTypes.func.isRequired
};

SlideTabBar.defaultProps = {
	status: 'idle',
	position: 0,
	offset: 0
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'darkturquoise',
		position: 'relative'
	},
	tabsContainer: {
		height: 60,
		flexDirection: 'row'
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	slider: {
		top: 57,
		height: 3,
		position: 'absolute',
		backgroundColor: 'white'
	}
});

export default SlideTabBar;