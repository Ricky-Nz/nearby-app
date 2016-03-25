import React, { Component, StyleSheet, PropTypes } from 'react-native';
import { Page, ActionBar, IconSelectBar, Icon, IconButton, SlideTabViewPager } from '../widgets';
import { LoadingViewContainer, ShopListContainer, OrderListContainer, AccountSettingContainer } from '../containers';

class HomePage extends Component {
	onSelectMenu(index) {
		this.props.navigate(index);
	}
	render() {
		return (
			<Page>
				<ActionBar leftNode={
					<IconSelectBar icons={['assignment', 'shopping-basket', 'account-circle']}
						select={this.props.select} onSelect={this.onSelectMenu.bind(this)}/>
				} rightNode={<IconButton src='power-settings-new'/>}/>
				{this.renderSection()}
			</Page>
		);
	}
	renderSection() {
		switch(this.props.select) {
			case 0:
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
			case 1:
				return (
					<LoadingViewContainer stateKey='shops' loadingKey='refreshing'>
						<ShopListContainer/>
					</LoadingViewContainer>
				);
			case 2:
				return <AccountSettingContainer/>;
		}
	}
}

HomePage.propTypes = {
	navigator: PropTypes.object.isRequired,
	navigate: PropTypes.func.isRequired,
	select: PropTypes.number.isRequired
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