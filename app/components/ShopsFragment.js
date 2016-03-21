import React, { PropTypes } from 'react-native';
import { ListDataContainer } from '../containers';
import { Fragment } from '../widgets';
import ShopListItem from './ShopListItem';
import { SHOPS } from '../actions';

let ShopsFragment = ({loading, ...props}) => (
	<Fragment loading={loading}>
		<ListDataContainer arrayName={SHOPS} {...props}
			renderRow={shop => <ShopListItem {...shop} onPress={() => onItemClicked(shop)}/>}/>
	</Fragment>
);

export default ShopsFragment;