import React, { PropTypes, StyleSheet, View } from 'react-native';
import { Text, TimeText, Avatar, Clickable, Card, VerticalGap, Button } from '../widgets';
import OrderStatusPrompt from './OrderStatusPrompt';

let OrderListItem = ({deliverer_user, shop_name, status, rated,
	update_time, delivery_fee, onPress, onRateOrder}) => (
	<Card>
		<Clickable onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<TimeText wSize='sm' wMode='sub'>{update_time}</TimeText>
					<OrderStatusPrompt status={status} short/>
				</View>
				<View style={styles.bodyContainer}>
					<Avatar src={deliverer_user.photo.url}/>
					<View style={styles.textContainer}>
						<View style={styles.horizontalContainer}>
							<Text wSize='sm' wMode='sub'>Deliverer</Text>
							<Text wSize='sm'>{` ${deliverer_user.name}`}</Text>
						</View>
						<View style={styles.horizontalContainer}>
							<Text wSize='sm' wMode='sub'>Shop</Text>
							<Text wSize='sm'>{` ${shop_name}`}</Text>
						</View>
						{delivery_fee&&<VerticalGap/>}
						{delivery_fee&&
							<View style={styles.horizontalContainer}>
								<Text wSize='sm' wMode='sub'>You Paid</Text>
								<Text wSize='sm'>{` ${delivery_fee.amount} ${delivery_fee.currency}`}</Text>
							</View>
						}
					</View>
					<View style={styles.stretchSelf}>
						{!rated&&<Button wSize='sm' wMode='primary' onPress={onRateOrder}>RATE</Button>}
					</View>
				</View>
			</View>
		</Clickable>
	</Card>
);

OrderListItem.propTypes = {
	deliverer_user: PropTypes.object.isRequired,
	shop_name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	rated: PropTypes.bool.isRequired,
	update_time: PropTypes.string.isRequired,
	delivery_fee: PropTypes.object.isRequired,
	onRateOrder: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: 'white'
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 10
	},
	bodyContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	textContainer: {
		flex: 1,
		paddingHorizontal: 20
	},
	horizontalContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	stretchSelf: {
		alignSelf: 'stretch',
		justifyContent: 'flex-end'
	}
});

export default OrderListItem;