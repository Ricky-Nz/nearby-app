import React, { Component, PropTypes, StyleSheet, View, ListView, ScrollView, PullToRefreshViewAndroid } from 'react-native';
import ListLoadingItem from './ListLoadingItem';

class RefreshMoreList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onListDataChanged(props.datas);
	}
	componentDidMount() {
		this.props.onLoadListData(true);
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.datas !== nextProps.datas) {
				this.setState(this.onListDataChanged(nextProps.datas));
			}
	}
	render() {
		const {hasMore, refreshing, loading, onLoadListData, renderRow} = this.props;
		return (
			<PullToRefreshViewAndroid style={styles.container} refreshing={loading}>
				<ListView dataSource={this.state.dataSource}
					onEndReached={() => hasMore&&onLoadListData()}
					renderFooter={() => <ListLoadingItem/>}
					renderRow={renderRow}/>
			</PullToRefreshViewAndroid>
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
	onLoadListData: PropTypes.func.isRequired,
	datas: PropTypes.arrayOf(PropTypes.object),
	hasMore: PropTypes.bool,
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