import React, { Component, PropTypes, StyleSheet, View, ListView, ScrollView, RefreshControl } from 'react-native';
import ListLoadingItem from './ListLoadingItem';

class DragableList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onListDataChanged(props.datas);
	}
	componentDidMount() {
		if (!this.props.datas) {
			this.props.onRefresh();
		}
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.datas !== nextProps.datas) {
				this.setState(this.onListDataChanged(nextProps.datas));
			}
	}
	render() {
		const {datas, refreshing, loading, onLoadMore, onRefresh, ...props} = this.props;

		return (
			<RefreshControl style={styles.container} refreshing={refreshing}
				onRefresh={onRefresh} colors={['white', 'white', 'white']}
        progressBackgroundColor={'aquamarine'}>
				<ListView dataSource={this.state.dataSource}
					onEndReached={() => !loading&&onLoadMore()}
					onEndReachedThreshold={50}
					renderFooter={() => loading&&<ListLoadingItem/>}
					{...props}/>
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

DragableList.propTypes = {
	datas: PropTypes.arrayOf(PropTypes.object),
	refreshing: PropTypes.bool,
	loading: PropTypes.bool,
	onLoadMore: PropTypes.func,
	onRefresh: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	progressContainer: {
		justifyContent: 'flex-start',
		paddingTop: 50
	}
});

export default DragableList;
