import React, { Component, StyleSheet, View, Text } from 'react-native';
import UnderlineTabs from './UnderlineTabs';
import OrderListContainer from '../containers/OrderListContainer';

class OrderListPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<UnderlineTabs tabs={['Orders', 'My Calls']} selectIndex={0}/>
				<OrderListContainer/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  }
});

export default OrderListPage;