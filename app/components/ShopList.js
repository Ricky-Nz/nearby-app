import React, { PropTypes} from 'react-native';
import { RefreshMoreList } from '../widgets';
import ShopListItem from './ShopListItem';

let ShopList = ({datas, loading, refreshing, token, size, offset, distance, longitude, latitude,
		onRefresh, onLoadMore, onItemClicked}) => (
	<RefreshMoreList
		datas={datas}
		loading={loading}
		refreshing={refreshing}
		renderRow={shop => <ShopListItem {...shop} onPress={() => onItemClicked(shop)}/>}
		onRefreshData={() => onRefresh({token, size, distance, longitude, latitude})}
		onLoadMoreData={() => onLoadMore({token, size, offset, distance, longitude, latitude})}/>
);

ShopList.propTypes = {
	token: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	offset: PropTypes.number.isRequired,
	distance: PropTypes.number.isRequired,
	longitude: PropTypes.string.isRequired,
	latitude: PropTypes.string.isRequired,
	datas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	loading: PropTypes.bool,
	refreshing: PropTypes.bool,
	onRefresh: PropTypes.func.isRequired,
	onLoadMore: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func.isRequired
};

export default ShopList;

