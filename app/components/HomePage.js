import React, { Component, StyleSheet, PropTypes, Navigator, View } from 'react-native';
import { Page, ActionBar, IconSelectBar, Icon, IconButton, SlideTabViewPager } from '../widgets';
import { MainPageSelectMenu, AccountSettingContainer } from '../containers';
import OrderList from './OrderList';
import DeliverList from './DeliverList';
import ShopList from './ShopList';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = { selectKey: 'shops' };
	}
	onMenuSelect(selectKey) {
		this.refs.navigator.jumpTo(selectKey);
		this.setState({selectKey});
	}
	render() {
		return (
			<Page>
				<ActionBar
					leftNode={<MainPageSelectMenu selectKey={this.state.selectKey}
						onSelect={this.onMenuSelect.bind(this)}/>}
					rightNode={<IconButton src='power-settings-new'/>}/>
				<Navigator style={styles.container} ref='navigator' initialRouteStack={['orders', 'shops', 'account']}
					initialRoute='shops' renderScene={this.renderScene.bind(this)}/>
			</Page>
		);
	}
	renderScene(route, navigator) {
		switch(route) {
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
	navigator: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default HomePage;