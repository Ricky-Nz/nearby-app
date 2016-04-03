import React, { Component, PropTypes, StyleSheet, View, ListView, ScrollView, RefreshControl } from 'react-native';
import ListLoadingItem from './ListLoadingItem';
import { THEME_COLOR } from './theme';

class DragableList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onListDataChanged(props.datas);
	}
	componentDidMount() {
		if (!this.props.datas) {
			this.props.onLoad();
		}
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.datas !== nextProps.datas) {
				this.setState(this.onListDataChanged(nextProps.datas));
			}
	}
	onListDataChanged(datas = []) {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(datas)
		};
	}
	onLoadMore() {
		if (!this.props.complete&&!this.props.loading) {
			this.props.onLoad(true);
		}
	}
	onRefresh() {
		this.props.onLoad();
	}
	render() {
		const {datas, refreshing, loading, complete, onLoad, ...props} = this.props;

		return (
			<RefreshControl style={styles.container} refreshing={refreshing}
				onRefresh={this.onRefresh.bind(this)} progressBackgroundColor={THEME_COLOR}>
				<ListView dataSource={this.state.dataSource}
					onEndReached={this.onLoadMore.bind(this)}
					renderFooter={this.renderFooter.bind(this)}
					onEndReachedThreshold={30} {...props}/>
			</RefreshControl>
		);
	}
	renderFooter() {
		return this.props.loading&&<ListLoadingItem/>;
	}
}

DragableList.propTypes = {
	datas: PropTypes.arrayOf(PropTypes.object),
	refreshing: PropTypes.bool,
	loading: PropTypes.bool,
	complete: PropTypes.bool,
	onLoad: PropTypes.func
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
