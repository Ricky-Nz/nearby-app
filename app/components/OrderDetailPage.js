import React, { PropTypes, StyleSheet, ScrollView } from 'react-native';
import { Page, ActionBar, IconButton, Layout, Text, HorizontalLine } from '../widgets';
import AccountPanel from './AccountPanel';
import OrderStatusPrompt from './OrderStatusPrompt';

let OrderDetailPage = ({deliverer_user, user,
	status, items_ordered, shop_name, deliver_to, delivery_fee, rated, onBack}) => (
	<Page>
		<ActionBar primary title='Order Detail'
			leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<ScrollView style={styles.container}>
			<Layout style={styles.scrollBody} flex>
				<AccountPanel avatarUrl={deliverer_user.photo.url}
					name={deliverer_user.name} marking={deliverer_user.rating}/>
				<OrderStatusPrompt style={styles.statusPrompt} status={status}/>
				<HorizontalLine style={styles.diliver}/>
				<Text wSize='sm' wMode='sub'>Shop</Text>
				<Text paragraph>{shop_name}</Text>
				<Text wSize='sm' wMode='sub'>Items Ordered</Text>
				<Text paragraph>{items_ordered}</Text>
				<Text wSize='sm' wMode='sub'>Deliver To</Text>
				<Text paragraph>{deliver_to}</Text>
				<Text wSize='sm' wMode='sub'>Delivery Fee</Text>
				<Text paragraph>{`${delivery_fee.amount} ${delivery_fee.currency}`}</Text>
			</Layout>
		</ScrollView>
	</Page>
);

OrderDetailPage.propTypes = {
	onBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	statusPrompt: {
		textAlign: 'center'
	},
	scrollBody: {
		padding: 40
	},
	diliver: {
		marginVertical: 18
	}
});

export default OrderDetailPage;