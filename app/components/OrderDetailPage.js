import React, { PropTypes, StyleSheet } from 'react-native';
import { Page, ActionBar, IconButton, Layout, Text, HorizontalLine } from '../widgets';

let OrderDetailPage = ({onBack}) => (
	<Page>
		<ActionBar primary leftNode={<IconButton src='chevron-left' onPress={onBack}/>}/>
		<Layout padding>
			<Text wSize='lg' wMode='primary'>Waiting for deliverer</Text>
			<HorizontalLine style={styles.diliver}/>
			<Text wSize='sm' wMode='sub'>Shop</Text>
			<Text paragraph>The Satayhood</Text>
			<Text wSize='sm' wMode='sub'>Items Ordered</Text>
			<Text paragraph>Vestibulum returm quam vitae</Text>
			<Text wSize='sm' wMode='sub'>Deliver To</Text>
			<Text paragraph>4 Changi Village Rd, Simgapore 500004, Front Dorr of Changi Cycling Service</Text>
			<Text wSize='sm' wMode='sub'>Delivery Fee</Text>
			<Text paragraph>1.00 SGD</Text>
		</Layout>
	</Page>
);

OrderDetailPage.propTypes = {
	onBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	diliver: {
		marginVertical: 18
	}
});

export default OrderDetailPage;