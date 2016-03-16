import React, { Component, PropTypes, StyleSheet, View, StatusBar } from 'react-native';
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
				<StatusBar translucent={true} backgroundColor='transparent'/>
				<View style={styles.statusBar}/>
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
					this.props.navigator.push({name: 'shop_page', data})}/>;
				default:
					return null;
			}
		}
	}
}

HomePage.propTypes = {
	navigator: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
  statusBar: {
    height: 20,
    backgroundColor: 'darkturquoise'
  }
});

export default HomePage;