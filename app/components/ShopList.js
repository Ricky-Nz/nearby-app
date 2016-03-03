import React, { Component, PropTypes, StyleSheet, View, ListView, ProgressBarAndroid } from 'react-native';
import ShopListItem from './ShopListItem';

class ShopList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onShopDataChanges(props.shopList);
	}
	componentDidMount() {
		const {offset, size, distance} = this.props.shopList;
		this.props.loadShops(offset, size, distance);
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.shopList !== nextProps.shopList) {
				this.setState(this.onShopDataChanges(nextProps.shopList));
			}
	}
	render() {
		const {loading} = this.props.shopList;
		return (
			<View style={styles.container}>
				{loading&&<ProgressBarAndroid style={styles.progressbar} indeterminate={true}/>}
				{!loading&&<ListView dataSource={this.state.dataSource}
					renderRow={shop => <ShopListItem {...shop}/>}/>}
			</View>
		);
	}
	onShopDataChanges({data, offset, size, distance, loading, error}) {
		console.log(data);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(data)
		};
	}
}

ShopList.propTypes = {
	shopList: PropTypes.object.isRequired,
	loadShops: PropTypes.func.isRequired,
	onShopClicked: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	progressbar: {
		alignSelf: 'center'
	}
});

export default ShopList;

