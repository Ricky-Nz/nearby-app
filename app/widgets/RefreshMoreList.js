import React, { Component, PropTypes, StyleSheet, View, ListView, ScrollView, RefreshControl } from 'react-native';
import ListLoadingItem from './ListLoadingItem';

class RefreshMoreList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onListDataChanged(props.datas);
	}
	componentDidMount() {
		if (this.props.datas.length === 0) {
			this.props.onRefreshData();
		}
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.datas !== nextProps.datas) {
				this.setState(this.onListDataChanged(nextProps.datas));
			}
	}
	render() {
		const {refreshing, loading, renderRow, onLoadMoreData, onRefreshData, ...otherProps} = this.props;
		return (
			<RefreshControl style={styles.container} refreshing={refreshing}
				onRefresh={onRefreshData} colors={['white', 'white', 'white']}
        progressBackgroundColor={'aquamarine'}>
				<ListView dataSource={this.state.dataSource}
					onEndReached={() => !loading&&onLoadMoreData()}
					onEndReachedThreshold={50}
					renderFooter={() => loading&&<ListLoadingItem/>}
					renderRow={renderRow} {...otherProps}/>
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
	datas: PropTypes.arrayOf(PropTypes.object).isRequired,
	renderRow: PropTypes.func.isRequired,
	onLoadMoreData: PropTypes.func,
	onRefreshData: PropTypes.func,
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