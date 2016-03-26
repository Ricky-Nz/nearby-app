import React, { Component, StyleSheet, PropTypes, Navigator } from 'react-native';
import { Page, ActionBar, IconSelectBar, Icon, IconButton, SlideTabViewPager } from '../widgets';
import { LoadingViewContainer, ShopListContainer, OrderListContainer, AccountSettingContainer } from '../containers';

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
								return (
									<LoadingViewContainer stateKey='orders' loadingKey='refreshing'>
										<OrderListContainer stateKey='orders'/>
									</LoadingViewContainer>
								);
							} else {
								return (
									<LoadingViewContainer stateKey='delivers' loadingKey='refreshing'>
										<OrderListContainer stateKey='delivers'/>
									</LoadingViewContainer>
								);
							}
						}}/>
				);
			case 'shops':
				return (
					<LoadingViewContainer stateKey='shops' loadingKey='refreshing'>
						<ShopListContainer/>
					</LoadingViewContainer>
				);
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