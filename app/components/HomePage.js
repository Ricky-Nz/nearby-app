import React, { Component, StyleSheet, PropTypes, Navigator, View } from 'react-native';
import { Page, ActionBar, IconButton, SlideTabViewPager,
	VerticalGap, DragableList, IconSelectBar } from '../widgets';
import { ShopListContainer, OrderListContainer, SettingContainer } from '../containers';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { selectIndex: 1 };
	}
	onMenuSelect(selectIndex) {
		this.setState({selectIndex});
		this.refs.navigator.jumpTo(this.refs.navigator.getCurrentRoutes()[selectIndex]);
	}
	render() {
		const initialRouteStack = [
			{key: 'orders', icon: 'assignment'},
			{key: 'shops', icon: 'shopping-basket'},
			{key: 'account', icon: 'account-circle'}
		];

		return (
			<Page>
				<ActionBar primary
					leftNode={<IconSelectBar items={initialRouteStack} selectIndex={this.state.selectIndex}
						onSelect={this.onMenuSelect.bind(this)}/>}
					rightNode={<IconButton src='power-settings-new'/>}/>
				<Navigator style={styles.container} ref='navigator' initialRouteStack={initialRouteStack}
					initialRoute={initialRouteStack[1]} renderScene={this.renderScene.bind(this)}/>
			</Page>
		);
	}
	renderScene(route, navigator) {
		switch(route.key) {
			case 'orders':
				return (
					<SlideTabViewPager mode='text' tabs={['ORDERED', 'DELIVERED']}
						onBindPager={index =>
							<OrderListContainer stateKey={index === 0 ? 'ordered' : 'delivered'}
								onItemClicked={this.props.openOrderPage}
								onRateOrder={this.props.openReivewCreatePage}/>}/>
				);
			case 'shops':
				return <ShopListContainer onItemClicked={this.props.openShopPage}/>;
			case 'account':
				return (
					<SettingContainer openRatingPage={this.props.openRatingPage}
						openNotificationPage={this.props.openNotificationPage}/>
				);
		}
	}
}

HomePage.propTypes = {
	openShopPage: PropTypes.func.isRequired,
	openOrderPage: PropTypes.func.isRequired,
	openRatingPage: PropTypes.func.isRequired,
	openNotificationPage: PropTypes.func.isRequired,
	openReivewCreatePage: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default HomePage;

