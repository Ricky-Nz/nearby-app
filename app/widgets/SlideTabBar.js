import React, { Component, PropTypes, StyleSheet, Dimensions, View } from 'react-native';
import Clickable from './Clickable';
import Icon from './Icon';
import TitleText from './TitleText';
import Card from './Card';
import { THEME_COLOR } from './theme';

class SlideTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliderWidth: Dimensions.get('window').width / props.tabs.length
		};
	}
	render() {
		const { mode, tabs, position, offset, status, onSelect } = this.props;
		const { sliderWidth } = this.state;

		const tabItems = tabs.map((tab, index) => (
			<Clickable key={index} style={styles.tabItem} onPress={() => onSelect(index)}>
				{mode === 'icon' ? <Icon src={tab} color={index === position ? 'white' : 'whitesmoke'}/>
					: <TitleText style={index === position ? styles.active : styles.inactive}>{tab}</TitleText>}
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
			<Card style={styles.container} backgroundColor={THEME_COLOR} elevation={4}>
				<View style={styles.tabsContainer}>
					{tabItems}
				</View>
				<View style={[styles.slider, sliderOffset]}/>
			</Card>
		);
	}
}

SlideTabBar.propTypes = {
	mode: PropTypes.oneOf(['icon', 'text']),
	tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
	position: PropTypes.number,
	offset: PropTypes.number,
	status: PropTypes.string,
	onSelect: PropTypes.func.isRequired
};

SlideTabBar.defaultProps = {
	mode: 'icon',
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
		height: 56,
		flexDirection: 'row'
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	slider: {
		top: 53,
		height: 3,
		position: 'absolute',
		backgroundColor: 'white'
	},
	active: {
		color: 'white'
	},
	inactive: {
		color: 'whitesmoke'
	}
});

export default SlideTabBar;