import React, { PropTypes, StyleSheet, View } from 'react-native';
import { Icon, MainText, SubText } from '../widgets';
import moment from 'moment';

let NotificationListItem = ({type, message, time}) => (
	<View style={styles.container}>
		<Icon src='message' color='gray'/>
		<View style={styles.textConteinr}>
			<MainText>{message}</MainText>
		</View>
		<SubText>{moment(time).format('MMMM Do')}</SubText>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20
	},
	textConteinr: {
		flex: 1,
		paddingHorizontal: 20
	}
});

export default NotificationListItem;