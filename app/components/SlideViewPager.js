import React, { PropTypes, Component, StyleSheet, Dimensions, ViewPagerAndroid, View } from 'react-native';
import Icon from './Icon';
import Clickable from './Clickable';

class SlideViewPager extends Component {
	componentDidMount() {
		const { defaultPosition, pages, onSelectPage } = this.props;
		this.setState({
			sliderWidth: Dimensions.get('window').width / pages.length,
			progress: { offset: 0, position: defaultPosition},
			pagerState: 'idle',
			[defaultPosition]: onSelectPage(defaultPosition, null, pages[defaultPosition].title)
		});
	}
	onPageScroll({nativeEvent}) {
		this.setState({progress: nativeEvent});
	}
	onPageScrollStateChanged(state) {
		this.setState({pagerState: state});
	}
	onPageSelected({nativeEvent}) {
		const position = nativeEvent.position;
		const selectPage = this.props.pages[position];
		const newView = this.props.onSelectPage(position, this.state[position], selectPage.title);
		
		if (!this.state[position]) {
			this.setState({[position]: newView});	
		}
	}
	onTabClicked(position) {
		this.refs.viewPager.setPage(position);
		this.onPageSelected({nativeEvent: {position}})
	}
	render() {
		if (!this.state) return null;

		const { sliderWidth, pagerState, progress } = this.state;
		const tabViews = this.props.pages.map((page, index) => (
			<Clickable key={index} style={styles.tabItem} onPress={this.onTabClicked.bind(this, index)}>
				<Icon size={30} color={index === progress.position ? 'white' : 'dimgray'} name={page.icon}/>
			</Clickable>
		));
		const slidePages = this.props.pages.map((page, index) => (
			<View key={index} style={styles.container}>
				{this.state[index]}
			</View>
		));

		const sliderPosition = (pagerState === 'idle') ? {
			width: sliderWidth,
			left: progress.position * sliderWidth
		} : {
			width: sliderWidth,
			left: sliderWidth * (progress.offset + progress.position)
		};

		return (
			<View style={styles.container}>
				<View style={styles.sideBar}>
					<View style={styles.tabContainer}>
						{tabViews}
					</View>
					<View style={styles.slideBar}>
						<View style={[styles.slideItem, sliderPosition]}/>
					</View>
				</View>
        <ViewPagerAndroid ref='viewPager' style={styles.container} initialPage={0}
          onPageScroll={this.onPageScroll.bind(this)} onPageSelected={this.onPageSelected.bind(this)}
          onPageScrollStateChanged={this.onPageScrollStateChanged.bind(this)}>
          {slidePages}
        </ViewPagerAndroid>
			</View>
		);
	}
}

SlideViewPager.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.shape({
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	})).isRequired,
	defaultPosition: PropTypes.number,
	onSelectPage: PropTypes.func.isRequired
};

SlideViewPager.defaultProps = {
	defaultPosition: 0
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	sideBar: {
		backgroundColor: 'darkturquoise'
	},
	tabContainer: {
		height: 58,
		flexDirection: 'row'
	},
	slideBar: {
		height: 2,
		flexDirection: 'row',
		position: 'relative'
	},
	slideItem: {
		height: 2,
		position: 'absolute',
		backgroundColor: 'white'
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
});

export default SlideViewPager;

