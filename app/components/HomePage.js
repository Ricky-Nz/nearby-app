import React, { Component, PropTypes, StyleSheet, View, Image } from 'react-native';
import ActionBar from './ActionBar';
import SlideViewPager from './SlideViewPager';
import ShopListContainer from '../containers/ShopListContainer';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {offset: 0};
	}
	render() {
		return (
			<View style={styles.container}>
				<ActionBar title={this.state&&this.state.title}/>
				<SlideViewPager pages={this.props.pages} onSelectPage={this.onSelectPage.bind(this)}
					offset={this.state.offset}/>
			</View>
		);
	}
	onSelectPage(position, view, title) {
		this.setState({title});

		if (!view) {
			switch(position) {
				case 1: return <ShopListContainer onItemClicked={data =>
					this.props.navigator.push({name: 'shop_page', data})} onScroll={this.onPageScroll.bind(this)}/>;
				default:
					return null;
			}
		}
	}
	onPageScroll({nativeEvent}) {
		// const offset = Math.floor(nativeEvent.contentOffset.y);
		// const newOffset = Math.max(0, Math.min(60, offset));
		// this.setState({offset: newOffset});
		
		// 	this.setState({offset: newOffset});
		
		// if ((nativeEvent.contentOffset.y > this.state.offset && this.state.offset === 60)) {
		// 	return;
		// }

		// this.setState({
		// 	offset: nativeEvent.contentOffset.y > this.state.offset ?
		// 		Math.max(60, this.state.offset + 1) : Math.min(0, this.state.offset - 1)
		// });
	}
}

HomePage.propTypes = {
	navigator: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default HomePage;