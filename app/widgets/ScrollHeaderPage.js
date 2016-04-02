import React, { Component, PropTypes, StyleSheet, View, ScrollView, LayoutAnimation } from 'react-native';
import Card from './Card';
import Page from './Page';
import IconButton from './IconButton';
import TitleText from './TitleText';
import { THEME_COLOR } from './theme';

class ScrollHeaderPage extends Component {
	constructor(props) {
		super(props);
		this.state = { headerPos: -props.headerHeight };
	}
	componentWillMount() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
	}
	render() {
		const { style, children, title, headerHeight, onBack } = this.props;
		const { headerPos } = this.state;

		return (
			<Page style={style}>
				<View style={styles.container}>
					<ScrollView style={styles.scrollContainer} scrollEventThrottle={8}
						onScroll={this.onScrollChange.bind(this)}>
						{children}
					</ScrollView>
					<Card style={[styles.headerBar, {height: headerHeight, top: headerPos}]} elevation={6}>
						<IconButton src='chevron-left' size='normal' onPress={onBack}/>
						<TitleText>{title}</TitleText>
					</Card>
					<IconButton style={styles.backBtn} src='chevron-left' size='normal' onPress={onBack}/>
				</View>
			</Page>
		);
	}
	onScrollChange({nativeEvent}) {
		if (nativeEvent.contentOffset.y > this.props.headerHeight) {
			if (this.state.headerPos === -this.props.headerHeight) {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    		this.setState({headerPos: 0});
			}
		} else {
			if (this.state.headerPos === 0) {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    		this.setState({headerPos: -this.props.headerHeight});
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
	headerHeight: 76
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
		left: 0,
		right: 0,
		paddingTop: 24,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		backgroundColor: THEME_COLOR
	},
	backBtn: {
		position: 'absolute',
		top: 24,
		left: 16
	}
});

export default ScrollHeaderPage;
// <IconButton style={styles.backBtn} src='chevron-left' size='normal' onPress={onBack}/>

