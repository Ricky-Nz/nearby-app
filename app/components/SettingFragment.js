import React, { PropTypes, StyleSheet, View, ScrollView } from 'react-native';
import { AccountCardContainer } from '../containers';
import { SimpleListItem } from '../widgets';

let SettingFragment = () => (
	<View style={styles.container}>
		<AccountCardContainer/>
		<ScrollView>
			<SimpleListItem title='Notifications' description='Enable notification to get informed when someone is delivering to the shops you watched'/>
			<SimpleListItem title='Location' description='Enable location to discover shops nearby wherever you go'/>
			<SimpleListItem title='Feedback'/>
			<SimpleListItem title='Rate Us'/>
			<SimpleListItem title='About'/>
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default SettingFragment;