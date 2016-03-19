import React, { PropTypes, StyleSheet, View } from 'react-native';
import { AccountCardContainer } from '../containers';

let SettingFragment = () => (
	<View style={styles.container}>
		<AccountCardContainer/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default SettingFragment;