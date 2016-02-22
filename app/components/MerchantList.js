import React, { Component, PropTypes, ListView } from 'react-native';
import MerchantListItem from './MerchantListItem';

class MerchantList extends Component {
	constructor(props) {
		super(props);
		this.state = this.onMerchantsChanges(props.merchants);
	}
	componentWillReceiveProps(nextProps) {
			if (this.props.merchants !== nextProps.merchants) {
				this.setState(this.onMerchantsChanges(nextProps.merchants));
			}
	}
	onMerchantsChanges(newMerchants) {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(newMerchants)
		};
	}
	render() {
		return (
			<ListView dataSource={this.state.dataSource}
				renderRow={(data) => <MerchantListItem onPress={() => this.props.onItemClicked(data)} {...data}/>}/>
		);
	}
}

MerchantList.propTypes = {
	merchants: PropTypes.arrayOf(MerchantListItem.propTypes).isRequired,
	onItemClicked: PropTypes.func.isRequired
};

export default MerchantList;