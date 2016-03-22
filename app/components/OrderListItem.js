import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { SubText, MainText, Avatar } from '../widgets';

let OrderListItem = ({time, status, shopName, avatar, delivererName}) => (
	<View style={styles.container}>
		<View style={styles.headerContainer}>
			<SubText>{time}</SubText>
			<SubText>{status}</SubText>
		</View>
		<View style={styles.bodyContainer}>
			<Avatar src={avatar}/>
			<View style={styles.textContainer}>
				<SubText>{status === 'Pending' ? 'Waiting for deliverer to accept'
					: `Deliverer ${delivererName}`}</SubText>
				<View style={styles.bodyContainer}>
					<SubText>'Shop '</SubText>
					<SubText style={styles.blackText}>{shopName}</SubText>
				</View>
			</View>
		</View>
	</View>
);

OrderListItem.propTypes = {
	time: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	shopName: PropTypes.string.isRequired,
	delivererName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bodyContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	textContainer: {
		flex: 1,
		paddingHorizontal: 20
	},
	blackText: {
		color: 'black'
	}
});

export default OrderListItem;