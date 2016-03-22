import React, { Component, View } from 'react-native';
import { DragableListContainer } from '../containers';
import ShopListItem from './ShopListItem';

class ShopList extends Component {
	render() {
		return (
			<DragableListContainer stateKey='shops' renderRow={this.renderRow}
				onRefresh={this.onRefresh.bind(this)} onLoadMore={this.onLoadMore.bind(this)}/>
		);
	}
	renderRow(shop) {
		return (
			<ShopListItem {...shop} onPress={() => console.log(shop)}/>
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

export default ShopList;