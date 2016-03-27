import React, { PropTypes, StyleSheet, View, ScrollView, Switch } from 'react-native';
import { SimpleListItem, ListSeparator, Icon } from '../widgets';

let AccountSetting = ({notification, location, toggleNotification, toggleLocation,
		onOpenRating, onOpenNotification}) => (
	<View style={styles.container}>
		<ScrollView style={styles.settingContainer}>
			<SimpleListItem title='Notifications' rightNode={<Switch value={notification} onValueChange={toggleNotification}/>}
				description='Enable notification to get informed when someone is delivering to the shops you watched'
				onPress={onOpenNotification}/>
			<SimpleListItem title='Location' rightNode={<Switch value={location} onValueChange={toggleLocation}/>}
				description='Enable location to discover shops nearby wherever you go'/>
			<ListSeparator/>
			<SimpleListItem leftNode={<Icon src='feedback' color='gray'/>} title='Feedback'/>
			<SimpleListItem leftNode={<Icon src='star' color='gray'/>} title='Rate Us'/>
			<SimpleListItem leftNode={<Icon src='public' color='gray'/>} title='About'/>
		</ScrollView>
	</View>
);

AccountSetting.propTypes = {
	notification: PropTypes.bool.isRequired,
	location: PropTypes.bool.isRequired,
	toggleNotification: PropTypes.func.isRequired,
	toggleLocation: PropTypes.func.isRequired,
	onOpenRating: PropTypes.func.isRequired,
	onOpenNotification: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default AccountSetting;