import React, { Component, StyleSheet, View, Text } from 'react-native';
import TitleBar from './TitleBar';
import UnderlineTabs from './UnderlineTabs';
import OrderListContainer from '../containers/OrderListContainer';
import BottomTab from './BottomTab';

class OrderPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TitleBar title='Orders'/>
				<UnderlineTabs tabs={['Orders', 'My Calls']} selectIndex={0}/>
				<View style={styles.content}>
					<OrderListContainer/>
				</View>
				<BottomTab/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  content: {
  	flex: 1
  }
});

export default OrderPage;