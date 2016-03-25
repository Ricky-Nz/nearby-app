import React, { Component, PropTypes, View } from 'react-native';
import { DragableListContainer } from '../containers';
import ShopListItem from './ShopListItem';

class ShopList extends Component {
	render() {
		return (
			<DragableListContainer stateKey='shops'
				renderRow={shop => <ShopListItem {...shop} onPress={() => this.props.onItemClicked(shop)}/>}
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

ShopList.propTypes = {
	onItemClicked: PropTypes.func.isRequired
};

export default ShopList;