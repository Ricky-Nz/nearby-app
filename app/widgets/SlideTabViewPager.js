import React, { PropTypes, Component, StyleSheet, ViewPagerAndroid, View } from 'react-native';
import SlideTabBar from './SlideTabBar';

class SlideTabViewPager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: props.defaultPosition,
			offset: 0,
			status: 'idle'
		};
	}
	componentDidMount() {
		this.setState({
			[this.props.defaultPosition]: this.props.onBindPager(this.props.defaultPosition)
		});
	}
	onPageScroll({nativeEvent}) {
		this.setState({offset: nativeEvent.offset, position: nativeEvent.position});
	}
	onPageScrollStateChanged(state) {
		this.setState({status: state});
	}
	onPageSelected({nativeEvent}) {
		this.onChangeSelectPage(nativeEvent.position);
	}
	onSelectTab(position) {
		this.refs.viewPager.setPage(position);
		this.onChangeSelectPage(position);
	}
	onChangeSelectPage(position) {
		if (this.state[position]) {
			this.setState({ position });
		} else {
			this.setState({
				position,
				[position]: this.props.onBindPager(position)
			});
		}
	}
	render() {
		const { defaultPosition, tabs, mode } = this.props;
		const slidePages = tabs.map((tab, index) => (
			<View key={index} style={styles.container}>
				{this.state[index]}
			</View>
		));

		return (
			<View style={styles.container}>
				<SlideTabBar mode={mode} tabs={tabs} {...this.state} onSelect={this.onSelectTab.bind(this)}/>
        <ViewPagerAndroid ref='viewPager' style={styles.container} initialPage={defaultPosition}
          onPageScroll={this.onPageScroll.bind(this)} onPageSelected={this.onPageSelected.bind(this)}
          onPageScrollStateChanged={this.onPageScrollStateChanged.bind(this)}>
          {slidePages}
        </ViewPagerAndroid>
			</View>
		);
	}
}

SlideTabViewPager.propTypes = {
	defaultPosition: PropTypes.number,
	onBindPager: PropTypes.func.isRequired
};

SlideTabViewPager.defaultProps = {
	defaultPosition: 0
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default SlideTabViewPager;

