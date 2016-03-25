import React, { PropTypes, StyleSheet, View, Text } from 'react-native';
import { SubText, MainText, Avatar, Clickable, Card, VerticalGap, ThemeText, Button } from '../widgets';
import moment from 'moment';

let OrderListItem = ({deliverer_user, shop_name, status, rated, update_time, delivery_fee, onPress}) => (
	<Card>
		<Clickable onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<SubText>{moment(update_time).format('MMMM Do')}</SubText>
					<SubText>{status}</SubText>
				</View>
				<View style={styles.bodyContainer}>
					<Avatar src={deliverer_user.photo.url}/>
					<View style={styles.textContainer}>
						<View style={styles.horizontalContainer}>
							<SubText>Deliverer</SubText>
							<MainText>{` ${deliverer_user.name}`}</MainText>
						</View>
						<View style={styles.horizontalContainer}>
							<SubText>Shop</SubText>
							<MainText>{` ${shop_name}`}</MainText>
						</View>
						{delivery_fee&&<VerticalGap/>}
						{delivery_fee&&
							<View style={styles.horizontalContainer}>
								<SubText>You Paid</SubText>
								<MainText>{` ${delivery_fee.amount} ${delivery_fee.currency}`}</MainText>
							</View>
						}
					</View>
					<View style={styles.stretchSelf}>
						{rated?<ThemeText>Rated</ThemeText>:<Button>RATE</Button>}
					</View>
				</View>
			</View>
		</Clickable>
	</Card>
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