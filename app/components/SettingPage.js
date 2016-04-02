import React, { PropTypes, StyleSheet, ScrollView, Switch } from 'react-native';
import { SimpleListItem, ListSeparator, Icon } from '../widgets';
import { AccountContainer } from '../containers';
import AccountBanner from './AccountBanner';

let SettingPage = ({notification, location, toggleNotification, toggleLocation,
		openRatingPage, openNotificationPage}) => (
	<ScrollView style={styles.container}>
		<AccountContainer style={styles.accountBanner}>
			<AccountBanner onRatingClicked={openRatingPage}/>
		</AccountContainer>
		<SimpleListItem title='Notifications' rightNode={<Switch value={notification} onValueChange={toggleNotification}/>}
			description='Enable notification to get informed when someone is delivering to the shops you watched'
			onPress={openNotificationPage}/>
		<SimpleListItem title='Location' rightNode={<Switch value={location} onValueChange={toggleLocation}/>}
			description='Enable location to discover shops nearby wherever you go'/>
		<ListSeparator/>
		<SimpleListItem leftNode={<Icon src='feedback' color='gray'/>} title='Feedback'/>
		<SimpleListItem leftNode={<Icon src='star' color='gray'/>} title='Rate Us'/>
		<SimpleListItem leftNode={<Icon src='public' color='gray'/>} title='About'/>
	</ScrollView>
);

SettingPage.propTypes = {
	notification: PropTypes.bool.isRequired,
	location: PropTypes.bool.isRequired,
	toggleNotification: PropTypes.func.isRequired,
	toggleLocation: PropTypes.func.isRequired,
	openRatingPage: PropTypes.func.isRequired,
	openNotificationPage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	accountBanner: {
		height: 120
	}
});

export default SettingPage;