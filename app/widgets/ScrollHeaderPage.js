import React, { Component, PropTypes, StyleSheet, View, ScrollView } from 'react-native';
import Card from './Card';
import Page from './Page';
import { THEME_COLOR } from './theme';

class ScrollHeaderPage extends Component {
	constructor(props) {
		super(props);
		this.state = { showHeader: false };
	}
	render() {
		const { children, header, headerHeight } = this.props;
		const { showHeader } = this.state;

		return (
			<Page translucent={true}>
				<View style={styles.container}>
					<ScrollView style={styles.scrollContainer} scrollEventThrottle={8}
						onScroll={this.onScrollChange.bind(this)}>
						{children}
					</ScrollView>
					{showHeader&&<Card style={[styles.headerBar, {height: headerHeight}]}
						backgroundColor={THEME_COLOR}>{header}</Card>}
				</View>
			</Page>
		);
	}
	onScrollChange({nativeEvent}) {
		if (nativeEvent.contentOffset.y > this.props.headerHeight) {
			if (!this.state.showHeader) {
				this.setState({showHeader: true});
			}
		} else {
			if (this.state.showHeader) {
				this.setState({showHeader: false});
			}
		}
	}
}

ScrollHeaderPage.propTypes = {
	headerHeight: PropTypes.number,
	header: PropTypes.element.isRequired
};

ScrollHeaderPage.defaultProps = {
	headerHeight: 56
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1
	},
	scrollContainer: {
		flex: 1
	},
	headerBar: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0
	}
});

export default ScrollHeaderPage;


