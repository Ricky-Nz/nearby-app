import React, { Component, StyleSheet, PropTypes, Navigator } from 'react-native';
import { Page, ActionBar, IconSelectBar, Icon, IconButton, SlideTabViewPager } from '../widgets';
import { AccountSettingContainer } from '../containers';
import OrderList from './OrderList';
import DeliverList from './DeliverList';
import ShopList from './ShopList';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentRoute: props.initialRoute
		};
	}
	onMenuSelect(index) {
		this.refs.navigator.jumpTo(this.props.initialRouteStack[index]);
		this.setState({
			currentRoute: this.props.initialRouteStack[index]
		});
	}
	render() {
		const { tabIcons, initialRouteStack, initialRoute } = this.props;
		const selectPosition = initialRouteStack.indexOf(this.state.currentRoute);

		return (
			<Page>
				<ActionBar
					leftNode={<IconSelectBar icons={tabIcons} select={selectPosition}
						onSelect={this.onMenuSelect.bind(this)}/>}
					rightNode={<IconButton src='power-settings-new'/>}/>
				<Navigator style={styles.container} ref='navigator'
					initialRouteStack={initialRouteStack} initialRoute={initialRoute}
        	renderScene={this.renderScene.bind(this)}/>
			</Page>
		);
	}
	renderScene(route, navigator) {
		switch(route.name) {
			case 'orders':
				return (
					<SlideTabViewPager mode='text' tabs={['ORDERED', 'DELIVERED']}
						onBindPager={(index) => {
							if (index === 0) {
								return <OrderList/>;
							} else {
								return <DeliverList/>;
							}
						}}/>
				);
			case 'shops':
				return <ShopList/>;
			case 'account':
				return (
					<AccountSettingContainer onOpenRating={() => this.props.navigator.push({name: 'rating'})}
						onOpenNotification={() => this.props.navigator.push({name: 'notification'})}/>
				);
		}
	}
}

HomePage.propTypes = {
	navigator: PropTypes.object.isRequired,
	navigate: PropTypes.func.isRequired,
	initialRouteStack: PropTypes.array.isRequired,
	initialRoute: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	settingContainer: {
		backgroundColor: 'white'
	}
});

export default HomePage;