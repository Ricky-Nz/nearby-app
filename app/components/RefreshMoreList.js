import React, { Component, PropTypes, StyleSheet, View, ListView, ScrollView, RefreshControl } from 'react-native';
import ListLoadingItem from './ListLoadingItem';

class RefreshMoreList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onListDataChanged(props.datas);
	}
	componentDidMount() {
		this.props.onRefreshData();
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.datas !== nextProps.datas) {
				this.setState(this.onListDataChanged(nextProps.datas));
			}
	}
	render() {
		const {refreshing, loading, renderRow, onLoadMoreData, onRefreshData} = this.props;
		return (
			<RefreshControl style={styles.container} refreshing={refreshing}
				onRefresh={onRefreshData} colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor={'#ffff00'}>
				<ListView dataSource={this.state.dataSource}
					onEndReached={() => !loading&&onLoadMoreData()}
					onEndReachedThreshold={50}
					renderFooter={() => loading&&<ListLoadingItem/>}
					renderRow={renderRow}/>
			</RefreshControl>
		);
	}
	onListDataChanged(datas = []) {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(datas)
		};
	}
}

RefreshMoreList.propTypes = {
	renderRow: PropTypes.func.isRequired,
	onLoadMoreData: PropTypes.func,
	onRefreshData: PropTypes.func,
	datas: PropTypes.arrayOf(PropTypes.object),
	refreshing: PropTypes.bool,
	loading: PropTypes.bool
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listView: {
		flex: 1
	}
});

export default RefreshMoreList;