import React, { Component, PropTypes, ListView } from 'react-native';
import OrderListItem from './OrderListItem';

class OrderList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onOrderChanges(props.orders);
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.orders !== nextProps.orders) {
				this.setState(this.onOrderChanges(nextProps.orders));
			}
	}
	onOrderChanges(newOrders) {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(newOrders)
		};
	}
	render() {
		return (
			<ListView dataSource={this.state.dataSource}
				renderRow={(data) => <OrderListItem {...data}/>}/>
		);
	}
}

OrderList.propTypes = {
	orders: PropTypes.arrayOf(OrderListItem.propTypes).isRequired
};

export default OrderList;