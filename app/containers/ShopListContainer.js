import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { shopCollectionLoad, shopCollectionRefresh } from '../actions';
import ShopList from '../components/ShopList';

const tokenSelector = state => state.navigator.token;

const shopListSelector = state => state.shopList;

const mapStateToProps = createSelector(
	tokenSelector,
	shopListSelector,
	(token, shopList) => ({token, ...shopList})
);

const mapDispatchToProps = (dispatch) => ({
	onRefresh: ({token, size, distance, longitude, latitude}) => {
		dispatch(shopCollectionRefresh({
			token,
			longitude,
			latitude,
			size,
			distance
		}))
	},
	onLoadMore: ({token, size, distance, offset, longitude, latitude}) => {
		dispatch(shopCollectionLoad({
			token,
			longitude,
			latitude,
			size,
			distance,
			offset
		}));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopList);