import React, { Component, PropTypes, StyleSheet, View, ScrollView } from 'react-native';
import Card from './Card';
import Page from './Page';
import IconButton from './IconButton';
import TitleText from './TitleText';
import { THEME_COLOR } from './theme';

class ScrollHeaderPage extends Component {
	constructor(props) {
		super(props);
		this.state = { showHeader: false };
	}
	render() {
		const { children, title, headerHeight, onBack } = this.props;
		const { showHeader } = this.state;

		return (
			<Page translucent={true}>
				<View style={styles.container}>
					<ScrollView style={styles.scrollContainer} scrollEventThrottle={8}
						onScroll={this.onScrollChange.bind(this)}>
						{children}
					</ScrollView>
					{showHeader ?
						(<Card style={[styles.headerBar, {height: headerHeight}]}
							backgroundColor={THEME_COLOR} elevation={4}>
							<IconButton src='chevron-left' size='normal' onPress={onBack}/>
							<TitleText>{title}</TitleText>
						</Card>) : (<IconButton style={styles.backBtn} src='chevron-left' size='normal' onPress={onBack}/>)
					}
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
	title: PropTypes.string,
	onBack: PropTypes.func.isRequired
};

ScrollHeaderPage.defaultProps = {
	headerHeight: 80
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
		right: 0,
		paddingTop: 24,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16
	},
	backBtn: {
		position: 'absolute',
		top: 24,
		left: 16
	}
});

export default ScrollHeaderPage;


