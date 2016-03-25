import React, { Component, View } from 'react-native';
import { DragableListContainer } from '../containers';
import OrderListItem from './OrderListItem';

class OrderList extends Component {
	render() {
		return (
			<DragableListContainer stateKey={this.props.stateKey}
				renderRow={(order) => <OrderListItem {...order} onPress={() => console.log(order)}/>}
				onRefresh={this.onRefresh.bind(this)} onLoadMore={this.onLoadMore.bind(this)}/>
		);
	}
	onRefresh() {
		const { onRefresh, token, params } = this.props;
		onRefresh(token, params);
	}
	onLoadMore() {
		const { onLoadMore, token, params } = this.props;
		onLoadMore(token, params);
	}
}

export default OrderList;