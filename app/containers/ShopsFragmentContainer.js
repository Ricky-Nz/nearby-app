import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ShopsFragment from '../components/ShopsFragment';

const shopListLengthSelector = state => state.shopList.datas.length;

const shopListLoadingSelector = state => state.shopList.refreshing;

const mapStateToProps = createSelector(
	shopListLengthSelector,
	shopListLoadingSelector,
	(size, refreshing) => ({loading: size === 0 && refreshing})
);

export default connect(
	mapStateToProps	
)(ShopsFragment);